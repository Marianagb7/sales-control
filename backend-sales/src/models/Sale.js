import { Schema, model } from "mongoose";

const saleSchema = new Schema (
    {
        salecode: {
            type: String,
            trim: true,
            unique: true,
            uppercase:true,
        },
        product: {
            type: String,
            trim: true,
            unique: true,
            uppercase: true,
        },
        amount: {
            type: Number,
            trim: true,
            unique: true,
            uppercase: true,
        },
        unitprice: {
            type: Number,
            trim: true,
            unique: true,
            uppercase: true,
        },
        date: {
            type: String,
            trim: true,
            unique: true,
            uppercase: true,
        },
        customer: {
            type: String,
            trim: true,
            unique: true,
            uppercase: true,
        },
        identification: {
            type: Number,
            trim: true,
            unique: true,
            uppercase: true,
        },
        seller: {
            type: String,
            trim: true,
            unique: true,
            uppercase: true,
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
);


export default model('sale', saleSchema);