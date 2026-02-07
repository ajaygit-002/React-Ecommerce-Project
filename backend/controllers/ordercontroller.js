const ordermodel = require('../models/ordermodel');


// Create order api -- > /api/v1/order
exports.createorder = async (req, res, next) => {

    const cartitems = req.body;
    const amount = Number(cartitems.reduce((acc, item) => (acc + item.product.price * item.qty), 0)).toFixed(2);
    const status = "Processing";
    

    const order =  await ordermodel.create({cartitems, amount, status})

    res.json(
        {
            success: true,
            order
        }
    )
}