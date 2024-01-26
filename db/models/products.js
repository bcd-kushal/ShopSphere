import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    ids: {
        type: new mongoose.Schema({
            sellerId: {
                type: String,
                required: true,
            },
            productId: {
                type: String,
                required: true,
            }
        }, { _id: false }, { versionKey: false}),
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    createdAt: {
        type: String,
        required: true,
    },
    productCategory: {
        type: String,
        required: true,
    },
    ratings: {
        type: Number,
        required: true,
    },
    reviews: {
        type: Array,
        required: true,
    },
    price: {
        type: new mongoose.Schema({
            MRP: {
                type: Number,
                required: true,
            },
            slashedPrice: {
                type: Number,
                required: true,
            },
            currency: {
                type: String,
                required: true,
            }
        }, { _id: false }, { versionKey: false}),
        required: true,
    },
    specifications: {
        type: new mongoose.Schema({
            details: {
                type: String,
                required: true,
            },
            highlights: {
                type: String,
                required: true,
            },
            images: {
                type: Array,
                required: true,
            }
        }, { _id: false }, { versionKey: false}),
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    QNA: {
        type: new mongoose.Schema({
            question: {
                type: String,
                required: true,
            },
            answer: {
                type: String,
                required: true,
            },
            datetime: {
                type: String,
                required: true,
            }
        }, { _id: false }, { versionKey: false}),
        required: true,
    },
    inStock: {
        type: Number,
        default: 0,
    },
}, { versionKey: false})

const Products = mongoose.model('products', productsSchema)
export default Products