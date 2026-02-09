/* =========================================================
   BUCKET CLASSIFICATION
   ========================================================= */

export function calculateBucket() {
  Object.keys(AppState.calculations.pendancyBySku).forEach(sku => {
    const p = AppState.calculations.pendancyBySku[sku];

    let bucket = "LOW";
    if (p > 500) bucket = "URGENT";
    else if (p >= 100) bucket = "MEDIUM";
    else if (p < 0) bucket = "OVER_PRODUCTION";

    AppState.calculations.bucketBySku[sku] = bucket;
  });

  console.log("🪣 Buckets Assigned",
    AppState.calculations.bucketBySku);
}
