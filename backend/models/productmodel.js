const mongoose = require('mongoose');

const productschema = new mongoose.Schema({
    name : String,
    price : Number,
    description : String,
    ratings : Number,
    images : [
        {
            image : String
        }
    ],
    category : String,
    seller : String,
    stock : Number,
    numofreviews : Number,
    createdat : Date
});

const productmodel = mongoose.model('Product', productschema);

module.exports = productmodel;