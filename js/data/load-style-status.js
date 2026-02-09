/* =========================================================
   LOAD STYLE STATUS
   Purpose: Style → Category & Company Remark mapping
   ========================================================= */

export async function loadStyleStatus(url) {
  const res = await fetch(url);
  const text = await res.text();

  const rows = text.trim().split("\n");
  rows.shift(); // remove header

  const styleStatus = {};

  rows.forEach(row => {
    const cols = row.split(",");

    const styleId = cols[0]?.trim();
    const category = cols[1]?.trim() || "UNKNOWN";
    const remark = cols[2]?.trim() || "UNKNOWN";

    if (!styleId) return;

    styleStatus[styleId] = {
      category,
      companyRemark: remark
    };
  });

  AppState.rawData.styleStatus = styleStatus;

  console.log(
    "🏷️ Style Status Loaded",
    Object.keys(styleStatus).length,
    styleStatus
  );
}
