import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    ids: {
        type: new mongoose.Schema({
            orderId: {
                type: String,
                required: true,
            },
            payementId: {
                type: String,
                required: true,
            },
            buyerId: {
                type: String,
                required: true,
            },
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
    address: {
        type: new mongoose.Schema({
            billingAddress: {
                type: String,
                required: true,
            },
            shipmentAddress: {
                type: String,
                required: true,
            },
            payementAddress: {
                type: String,
                required: true,
            }
        }, { _id: false }, { versionKey: false}),
        required: true,
    },
    amount: {
        type: new mongoose.Schema({
            totalAmount: {
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
    date: {
        type: new mongoose.Schema({
            deliveryDate: {
                type: String,
                required: true,
            },
            billingDate: {
                type: String,
                required: true,
            },
            orderDate: {
                type: String,
                required: true,
            }
        }, { _id: false }, { versionKey: false}),
        required: true,
    },
    status: {
        type: new mongoose.Schema({
            orderConfirmed: {
                type: String,
                required: true,
            },
            shipped: {
                type: String,
                required: true,
            },
            outForDelivery: {
                type: String,
                required: true,
            },
            delivered: {
                type: String,
                required: true,
            }
        }, { _id: false }, { versionKey: false}),
        required: true,
    },
    isDelivered: {
        type: Boolean,
        default: false,
    },
    quantity: {
        type: Number,
        required: true,
    },

}, { versionKey: false});

const Orders = mongoose.model('orders', orderSchema);
export default Orders;