const mongoose = require("mongoose");
const { Schema } = mongoose;

const customerEntityFieldsSchema = new Schema({
  title: {
    type: String,
    trim: true
  },
  slug: {
    type: String,
    trim: true
  },
  type: {
    type: String,
    trim: true
  },
  value: {
    type: String,
    trim: true
  },
  data: {
    type: String,
    trim: true
  },
  customerEntity: {
    type: String,
    trim: true
  },
  dependentFields: {
    type:Object
  }
});

const CustomerEntityFields = mongoose.model("CustomerEntityFields", customerEntityFieldsSchema);

module.exports = { CustomerEntityFields };
