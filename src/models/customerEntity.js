const mongoose = require("mongoose");
const { Schema } = mongoose;

const customerEntitySchema = new Schema({
  customerEntityValues :{
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

const CustomerEntity = mongoose.model("customerEntity", customerEntitySchema);

module.exports = { CustomerEntity };
