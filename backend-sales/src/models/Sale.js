import { Schema, model } from "mongoose";

const saleSchema = new Schema (
    {
        salecode: {
            type: String,
            unique: true,
            uppercase:true,
        },
        product: {
            type: String,
            
        },
        amount: {
            type: Number,
            
        },
        unitprice: {
            
        },
        date: {
            type: String,
            
        },
        customer: {
            type: String,
            
            
        },
        identification: {
            type: Number,
            
        },
        seller: {
            type: String,
            
        },
        state:{
            type: String,
            
        },       

    },
    {
        timestamps: true,
        versionKey: false
    }
);


export default model('sale', saleSchema);