var mongoose = require("mongoose");

//DEFINING MODEL
module.exports = mongoose.model("Todo", {
  text: {
    type: String, 
    default: ""
  }
});