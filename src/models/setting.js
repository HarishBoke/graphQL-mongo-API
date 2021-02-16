const mongoose = require("mongoose");
const { Schema } = mongoose;

const settingSchema = new Schema({
  header :{
    headerBgColor: {
    type: String,
  },
  headerIconsColor: {
    type: String,
  },
  logoURL: {
    type: String,
  },
  primaryColor: {
    type: String,
  },
  }
});

const Setting = mongoose.model("setting", settingSchema);

module.exports = { Setting };
