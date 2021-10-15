import {Schema, model} from 'mongoose';

const productSchema =  new Schema ({

    name: String,
    description: String,
    price: Number,
    state:{type: String, enum: ['Disponible', 'No disponible']},

},{
    timestamps: true,
    versionKey: false

})

export default model('product', productSchema);