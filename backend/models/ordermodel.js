const mongoose = require('mongoose');

const orderschema = new mongoose.Schema({
    cartitems : Array,
    amount : Number,
    status : String,
    createdat : Date
})

const ordermodel = mongoose.model('Order', orderschema);
module.exports = ordermodel;