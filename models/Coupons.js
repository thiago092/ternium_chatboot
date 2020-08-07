
const mongoose = require('mongoose');
const { Schema } = mongoose;

const couponsSchema = new Schema({
   courses: String,
   
});

coupon = mongoose.model('coupon', couponsSchema);

module.exports = coupon;