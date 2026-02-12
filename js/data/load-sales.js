import { AppState } from "../core/state.js";

export async function loadSales(url) {
  const res = await fetch(url);
  const text = await res.text();

  const rows = text.trim().split("\n");
  rows.shift();

  AppState.rawData.sales = rows.map(r => {
    const cols = r.split(",");
    return {
      month: cols[0],
      fc: cols[3],
      mpSku: cols[4],
      sku: cols[5],
      style: cols[6],
      size: cols[7],
      units: Number(cols[8]) || 0
    };
  });

  AppState.filteredData.sales = [...AppState.rawData.sales];

  console.log("📦 Sales Loaded:", AppState.rawData.sales.length);
}
