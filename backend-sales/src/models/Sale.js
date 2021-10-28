import { Schema, model } from "mongoose";

const saleSchema =  new Schema ({
        code: {
          type: String,
          unique: true,
          uppercase: true
        },    
       customer: {
           type: String,
           trim: true,
        
        },
        saller: {
          type: String,
          trim: true,        
        },
        price: {
           type: Number,
          trim: true,
        },   
        
          
  },

    {
        timestamps: true,
        versionKey: false
    }    

);




export default model('sale', saleSchema);