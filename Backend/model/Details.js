const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  checkin:{
    type:Date,
    required:true
  },
  checkout:{
    type:Date,
    required:true
  },
  adult: {
    type: String,
    required: true
  },
  child:{
    type:String,
    required:true

  }
}, { timestamps: true });

const model = mongoose.model("details", schema);

module.exports = model;
