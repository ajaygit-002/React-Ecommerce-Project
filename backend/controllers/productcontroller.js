exports.getproducts = (req, res, next) => {
    res.json({
        success: true,
        message: 'get products working!'
    })

}

exports.getsingleproduct = (req, res, next) => {
    res.json({
        success: true,
        message: 'get single product working!'
    })

}