/* =========================================================
   GLOBAL APPLICATION STATE
   Purpose: Single source of truth for data & calculations
   Status: LOCKED – Additive only
   ========================================================= */

const AppState = {
  /* ================= RAW DATA ================= */

  rawData: {
    sales: [],
    stock: [],
    production: [],
    saleDays: [],
    totalSaleDays: 0
  },

  /* ================= FILTERED DATA ================= */

  filteredData: {
    sales: [],
    stock: [],
    production: []
  },

  /* ================= CALCULATIONS ================= */

  calculations: {
    drrBySku: {},
    sellerStockBySku: {},
    scBySku: {},
    directDemandBySku: {},
    pendancyBySku: {},
    bucketBySku: {},
    priorityByStyle: {}
  },

  /* ================= FILTER STATE ================= */

  filters: {
    category: ["ALL"],
    companyRemark: ["ALL"],
    search: ""
  }
};

window.AppState = AppState;

console.log("✅ AppState initialized", AppState);
