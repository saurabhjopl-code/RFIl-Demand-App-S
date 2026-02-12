import { AppState } from "../core/state.js";

/* =========================================================
   PRIORITY
   Only styles with sale > 300 units
   ========================================================= */

export function calculatePriority() {
  const styleSales = {};

  AppState.filteredData.sales.forEach(r => {
    styleSales[r.style] =
      (styleSales[r.style] || 0) + r.units;
  });

  Object.keys(styleSales).forEach(style => {
    if (styleSales[style] > 300) {
      AppState.calculations.priorityByStyle[style] =
        "HIGH";
    }
  });

  console.log("🔥 Priority Styles Calculated");
}
