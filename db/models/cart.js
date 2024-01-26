import mongoose from "mongoose";


const cartSchema = new mongoose.Schema({
    buyerId: {
        type: String,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    data: {
        type: [
            new mongoose.Schema({
                productId: {
                    type: String,
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true,
                }
            }, { _id: false }, { versionKey: false })
        ],
        required: true,
    }
}, { versionKey: false });


const Cart = mongoose.model('cart', cartSchema);
export default Cart;