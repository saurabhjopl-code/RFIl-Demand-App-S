/* =========================================================
   APP INITIALIZATION
   Purpose: Wire data loading → calculations → console output
   Status: CORE – DO NOT BREAK
   ========================================================= */

import { loadSaleDays } from "../data/load-sale-days.js";
import { loadSales } from "../data/load-sales.js";
import { loadStock } from "../data/load-stock.js";
import { loadProduction } from "../data/load-production.js";

import { calculateDRR } from "../calculations/drr.js";
import { calculateSC } from "../calculations/sc.js";
import { calculateDirectDemand } from "../calculations/direct-demand.js";
import { calculatePendancy } from "../calculations/pendancy.js";
import { calculateBucket } from "../calculations/bucket.js";
import { calculatePriority } from "../calculations/priority.js";

/* ================= CSV URLs ================= */

const URLS = {
  sales:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vS9UMGb9GMFpOrcTTV1yeN4VLudTFeVy97_09T7-SIyvXDsMFypBgqyZWVQitbJi0I5IenBb0skv9UQ/pub?gid=928000883&single=true&output=csv",

  stock:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vS9UMGb9GMFpOrcTTV1yeN4VLudTFeVy97_09T7-SIyvXDsMFypBgqyZWVQitbJi0I5IenBb0skv9UQ/pub?gid=1380535833&single=true&output=csv",

  saleDays:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vS9UMGb9GMFpOrcTTV1yeN4VLudTFeVy97_09T7-SIyvXDsMFypBgqyZWVQitbJi0I5IenBb0skv9UQ/pub?gid=46718869&single=true&output=csv",

  production:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vS9UMGb9GMFpOrcTTV1yeN4VLudTFeVy97_09T7-SIyvXDsMFypBgqyZWVQitbJi0I5IenBb0skv9UQ/pub?gid=1281323624&single=true&output=csv"
};

/* ================= BOOT ================= */

async function bootApp() {
  console.log("🚀 App boot started");

  try {
    await loadSaleDays(URLS.saleDays);
    await loadSales(URLS.sales);
    await loadStock(URLS.stock);
    await loadProduction(URLS.production);

    console.log("✅ All data loaded", AppState.rawData);

    calculateDRR();
    calculateSC();
    calculateDirectDemand();
    calculatePendancy();
    calculateBucket();
    calculatePriority();

    console.log("🎉 All calculations complete", AppState.calculations);

  } catch (err) {
    console.error("❌ App boot failed", err);
  }
}

/* ================= START ================= */

document.addEventListener("DOMContentLoaded", bootApp);
