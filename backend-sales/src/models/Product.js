import {Schema, model} from 'mongoose';

const productSchema =  new Schema ({
        sku: {
            type: String,
            unique: true,
            uppercase: true
        },
        name: {
            type: String,
            
        },
        description: {
            type: String,
            
        },
        price: {
            type: Number
        },
        available: {
            type: Boolean,
            default: true,
        },

    },
    {
        timestamps: true,
        versionKey: false
    }    

);

    
export default model('product', productSchema);