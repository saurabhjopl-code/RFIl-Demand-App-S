/* =========================================================
   GLOBAL APPLICATION STATE
   ========================================================= */

const AppState = {
  rawData: {
    sales: [],
    stock: [],
    production: [],
    saleDays: [],
    totalSaleDays: 0,

    /* ADDITIVE */
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

window.AppState = AppState;

console.log("✅ AppState initialized", AppState);
