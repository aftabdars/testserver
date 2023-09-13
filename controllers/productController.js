const { Product, Image } = require("../models/productSchema");
const asyncHandler = require("express-async-handler");
const multer = require('multer');

module.exports.getProducts = asyncHandler(async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(201).json(products);
    } catch (err) {
        throw new Error(err);
    }
});

module.exports.getProductsById = asyncHandler(async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(201).json(product);
    } catch (err) {
        throw new Error(err);
    }
});

module.exports.addProduct = asyncHandler(async (req, res) => {
    try {
        const { title, category, subCategories, inStock, thumbnail } = req.body;
        const product = await Product.create({
            title,
            category,
            subCategories,
            inStock,
            thumbnail,
        })
        res.status(201).json({ msg: "successful" });

    } catch (err) {
        throw new Error(err);
    }
});


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
        // err, destination
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + file.originalname);
    },
});

module.exports.upload = multer({ storage: storage });

module.exports.placeOrderImg = async (req, res) => {
    console.log(req.body);
    const imgName = req.file.filename;
    try {
        await Image.create({
            image: imgName,
        });
        res.status(200).json({ status: "ok" })
    }

    catch (err) {
        res.status(400).json({ status: err });
    }

}