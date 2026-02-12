import { AppState } from "../core/state.js";

/* =========================================================
   DRR CALCULATION
   DRR = Total Sale / Total Sale Days
   ========================================================= */

export function calculateDRR() {
  const totalDays = AppState.rawData.totalSaleDays;

  const salesBySku = {};

  AppState.filteredData.sales.forEach(r => {
    salesBySku[r.sku] = (salesBySku[r.sku] || 0) + r.units;
  });

  Object.keys(salesBySku).forEach(sku => {
    AppState.calculations.drrBySku[sku] =
      totalDays === 0 ? 0 : salesBySku[sku] / totalDays;
  });

  console.log("📈 DRR Calculated");
}
