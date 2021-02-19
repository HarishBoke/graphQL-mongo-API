const mongoose = require("mongoose");
const { Schema } = mongoose;

const ServicesSchema = new Schema({
    slug: {
    type: String,
    trim: true
  },
  value: {
    type: String,
    trim: true
  },
  plan1: {
    type: Boolean,
    trim: true
  },
  plan2: {
    type: Boolean,
    trim: true
  },
  plan3: {
    type: Boolean,
    trim: true
  }
});

const Services = mongoose.model("services", ServicesSchema);

module.exports = { Services };
