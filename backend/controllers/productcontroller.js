const productmodel = require('../models/productmodel')


// Get products api -- > /api/v1/products
exports.getproducts = async (req, res, next) => {


    const products = await productmodel.find({});



    res.json({
        success: true,
        products
    })

}


// Get  single products api -- > /api/v1/products/:id
exports.getsingleproduct = async (req, res, next) => {
    
    try {
        const product = await productmodel.findById(req.params.id);
    res.json({
        success: true,
        product
    })
    } catch (error) {
        res.status(404).json({
        success: false,
        message : "Product not found with this id"
    })
    }

   
    

}