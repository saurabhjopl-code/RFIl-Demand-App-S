/* =========================================================
   LOAD SALE DAYS
   Purpose: Calculate TOTAL sale days from sheet
   Status: LOCKED – No alternative source allowed
   ========================================================= */

export async function loadSaleDays(url) {
  const res = await fetch(url);
  const text = await res.text();

  const rows = text.trim().split("\n").slice(1);

  let totalDays = 0;

  rows.forEach(row => {
    const cols = row.split(",");
    const days = Number(cols[1]);
    if (!isNaN(days)) totalDays += days;
  });

  AppState.rawData.totalSaleDays = totalDays;

  console.log("📅 Sale Days Loaded:", totalDays);
}
