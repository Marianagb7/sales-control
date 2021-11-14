import {Schema, model} from 'mongoose';

const saleSchema = new Schema ({
        salecode: {
          type: String,          
        },
       date:{
        type:String,
       },
       customer: {
          type: String,          
       },
        cardnumber: {
          type: Number,          
        },
        product:{
          type: String,          
        },
        amount: {
          type: Number,          
        },
        unitprice: {
          type: Number,          
        },
        seller: {
          type: String,          
        },
        state: {
          type: String,
          
        },   

    },
    {
      timestamps: true,
      versionKey: false
    }

);

export default model('sale', saleSchema)
