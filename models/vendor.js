const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  description: String,
  cost: Number,
  quantity: Number
});

const registerSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  item: String,
  paid: Number,
  date: {type: Date, default: Date.now}
});

const Vendor = mongoose.model('Vendor', vendorSchema);
const Register = mongoose.model('Register', registerSchema);

module.exports = {Vendor, Register};
