const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    image: String,
});

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        required: true,
    },
    subCategories: {
        type: Array,
        required: true,
    },
    inStock: {
        type: Number,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    images: [imageSchema],
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
