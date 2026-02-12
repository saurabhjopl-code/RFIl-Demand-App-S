import { AppState } from "../core/state.js";

/* =========================================================
   PENDANCY
   Direct Demand - Production
   ========================================================= */

export function calculatePendancy() {
  const prodMap = {};

  AppState.filteredData.production.forEach(p => {
    prodMap[p.sku] = (prodMap[p.sku] || 0) + p.qty;
  });

  Object.keys(AppState.calculations.directDemandBySku).forEach(sku => {
    const demand =
      AppState.calculations.directDemandBySku[sku];
    const prod = prodMap[sku] || 0;

    AppState.calculations.pendancyBySku[sku] =
      demand - prod;
  });

  console.log("⏳ Pendancy Calculated");
}
