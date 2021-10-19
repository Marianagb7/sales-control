import {Schema, model} from 'mongoose';

const productSchema =  new Schema ({
        sku: {
            type: String,
            trim: true,
            unique: true,
            uppercase: true
        },
        name: {
            type: String,
            trim: true
        },
        description: {
            type: String,
            trim: true
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