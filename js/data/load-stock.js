/* =========================================================
   LOAD STOCK DATA
   Purpose: Separate Seller stock later
   ========================================================= */

export async function loadStock(url) {
  const res = await fetch(url);
  const text = await res.text();

  const rows = text.trim().split("\n");
  rows.shift();

  AppState.rawData.stock = rows.map(r => {
    const c = r.split(",");
    return {
      fc: c[0],
      sku: c[2],
      style: c[3],
      size: c[4],
      units: Number(c[5]) || 0
    };
  });

  AppState.filteredData.stock = [...AppState.rawData.stock];

  console.log("🏬 Stock Loaded:", AppState.rawData.stock.length);
}
