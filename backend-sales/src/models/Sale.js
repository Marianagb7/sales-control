import {Schema, model} from 'mongoose';

const saleSchema = new Schema ({
        salecode: {
          type: String,
          unique: true,
          uppercase: true
        },
        customer: {
          type: String,
          trim: true
        },
        cardnumber: {
          type: Number,
          trim: true
        },
        product:{
          type: String,
          trim: true
        },
        price: {
          type: Number,
          trim: true
        },
        amount: {
          type: Number,
          trim: true
        },
        seller: {
          type: String,
          trim: true
        },
        state: {
          type: String,
          trim: true
        },   

    },
    {
      timestamps: true,
      versionKey: false
    }

);

export default model('sale', saleSchema)