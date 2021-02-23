const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
  },
  is_bundle: {
    type: Boolean,
  },
  check_min_max_range_custom_price: {
    type: Boolean,
  },
  is_a_la_carte: {
    type: Boolean,
  },
  is_specific_to_address_type: {
    type: Boolean,
  },
  is_upscalable: {
    type: Boolean,
  },
  order_limit: {
    type: Number,
  },
  prices: {
    type: [Number],
  },
  bundles: {
    type: [Number],
  },
  price: {
    product_id:{
      type:Number
    },
    year:{
      type:Number
    },
    base_price:{
      type:Number
    },
    unit_price:{
      type:Number
    },
    included_quantity:{
      type:Number
    },
    min_pct:{
      type:Number
    },
    mid_pct:{
      type:Number
    },
    max_pct:{
      type:Number
    }
  },
});

const Product = mongoose.model("product", productSchema);

module.exports = { Product };
