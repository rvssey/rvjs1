import mongoose from "mongoose";
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;

const productCartSchema = new Schema({
    product:{
        type:ObjectId,
        def:"Product",
    },
    name: String,
    count: Number,
    price: Number
});

module.exports = mongoose.model("ProductCart", productCartSchema)

const OrderSchema =new Schema({
    products : [ProductCart],
    transactionId: {},
    amount:{
        type: Number,
    },
    address: String,
    user:{
        type:ObjectId,
        ref: "User"
    },
});

module.exports = mongoose.model("Order", OrderSchema)
