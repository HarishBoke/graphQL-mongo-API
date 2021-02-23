const createCustomerEntity = require("./customerEntity/createCustomerEntity");

// CustomerEntityFields
const createCustomerEntityFields = require("./customerEntityFields/createCustomerEntityFields");
const updateCustomerEntityFields = require("./customerEntityFields/updateCustomerEntityFields");
const deleteCustomerEntityFields = require("./customerEntityFields/deleteCustomerEntityFields");
const findCustomerEntityFields = require("./customerEntityFields/findCustomerEntityFields");

// setting
const createSetting = require("./setting/createSetting");
const updateSetting = require("./setting/updateSetting")

// services
const createServices = require("./services/createServices")
const updateService = require("./services/updateService")
const deleteService = require("./services/deleteService")

// Product
const createProduct = require("./product/createProduct")
const updateProduct = require("./product/updateProduct")
const deleteProduct = require("./product/deleteProduct")
module.exports = {
  createCustomerEntity,

  // CustomerEntityFields
  createCustomerEntityFields,
  updateCustomerEntityFields,
  deleteCustomerEntityFields,
  findCustomerEntityFields,

  // setting
  createSetting,
  updateSetting,

  // Services
  createServices,
  updateService,
  deleteService,

  // Product
  createProduct,
  deleteProduct,
  updateProduct

}