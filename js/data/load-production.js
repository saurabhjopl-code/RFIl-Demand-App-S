import { AppState } from "../core/state.js";

export async function loadProduction(url) {
  const res = await fetch(url);
  const text = await res.text();

  const rows = text.trim().split("\n");
  rows.shift();

  AppState.rawData.production = rows.map(r => {
    const c = r.split(",");
    return {
      sku: c[0],
      qty: Number(c[1]) || 0
    };
  });

  AppState.filteredData.production = [...AppState.rawData.production];

  console.log("🏭 Production Loaded:", AppState.rawData.production.length);
}
