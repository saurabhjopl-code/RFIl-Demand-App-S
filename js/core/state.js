/* =========================================================
   GLOBAL APPLICATION STATE
   ========================================================= */

export const AppState = {
  rawData: {
    sales: [],
    stock: [],
    production: [],
    saleDays: [],
    totalSaleDays: 0,
    styleStatus: {}
  },

  filteredData: {
    sales: [],
    stock: [],
    production: []
  },

  calculations: {
    drrBySku: {},
    sellerStockBySku: {},
    scBySku: {},
    directDemandBySku: {},
    pendancyBySku: {},
    bucketBySku: {},
    priorityByStyle: {}
  },

  filters: {
    category: ["ALL"],
    companyRemark: ["ALL"],
    search: ""
  }
};

console.log("✅ AppState initialized");
