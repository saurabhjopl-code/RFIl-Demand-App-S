import { AppState } from "../core/state.js";

/* =========================================================
   SC CALCULATION
   SC = Seller Stock / DRR
   ========================================================= */

export function calculateSC() {
  const sellerStock = {};

  AppState.filteredData.stock.forEach(r => {
    if (r.fc === "SELLER") {
      sellerStock[r.sku] =
        (sellerStock[r.sku] || 0) + r.units;
    }
  });

  AppState.calculations.sellerStockBySku = sellerStock;

  Object.keys(sellerStock).forEach(sku => {
    const drr = AppState.calculations.drrBySku[sku] || 0;

    AppState.calculations.scBySku[sku] =
      drr === 0 ? 0 : sellerStock[sku] / drr;
  });

  console.log("📊 SC Calculated");
}
