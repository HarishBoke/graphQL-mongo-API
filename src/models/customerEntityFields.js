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
  value: {
    type: String,
    trim: true
  },
  type: {
    type: String,
    trim: true
  },
  is_required: {
    type: Boolean,
  },
  customerSettingKeyType: {
    index:{
      type: Number,
    },
    name:{
      type: String,
      trim: true
    }
  },
  dependentFields: {
    type:Object
  }
});

const CustomerEntityFields = mongoose.model("CustomerEntityFields", customerEntityFieldsSchema);

module.exports = { CustomerEntityFields };
