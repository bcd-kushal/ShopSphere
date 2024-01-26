import mongoose from "mongoose";

const historySchema = new mongoose.Schema({
    buyerId: {
        type: String,
        required: true,
    },
    data: {
        type: Array,
        required: true,
    }
}, { versionKey: false});

const History = mongoose.model('history', historySchema);
export default History;