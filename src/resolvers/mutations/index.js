const createCustomerEntity = require("./customerEntity/createCustomerEntity");

// CustomerEntityFields
const createCustomerEntityFields = require("./customerEntityFields/createCustomerEntityFields");
const updateCustomerEntityFields = require("./customerEntityFields/updateCustomerEntityFields");
const deleteCustomerEntityFields = require("./customerEntityFields/deleteCustomerEntityFields");
const findCustomerEntityFields = require("./customerEntityFields/findCustomerEntityFields");

// setting
const createSetting = require("./setting/createSetting");
const updateSetting = require("./setting/updateSetting")
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
}