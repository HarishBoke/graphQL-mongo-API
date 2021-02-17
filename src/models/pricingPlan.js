const mongoose = require("mongoose");
const { Schema } = mongoose;

const pricingPlanSchema = new Schema({
  pricingPlanValues :{
    slug: {
    type: String,
    trim: true
  },
  value: {
    type: String,
    trim: true
  }
  }
});

const PricingPlan = mongoose.model("pricingPlan", pricingPlanSchema);

module.exports = { PricingPlan };
