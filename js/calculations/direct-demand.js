/* =========================================================
   DIRECT DEMAND
   45 Days coverage
   ========================================================= */

export function calculateDirectDemand() {
  Object.keys(AppState.calculations.drrBySku).forEach(sku => {
    const drr = AppState.calculations.drrBySku[sku];
    const sellerStock =
      AppState.calculations.sellerStockBySku[sku] || 0;

    AppState.calculations.directDemandBySku[sku] =
      Math.max(0, drr * 45 - sellerStock);
  });

  console.log("🎯 Direct Demand Calculated",
    AppState.calculations.directDemandBySku);
}
