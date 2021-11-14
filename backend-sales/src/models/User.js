import { Schema, model } from "mongoose";

const userSchema = new Schema(
    {
        username: {
            type: String,
<<<<<<< HEAD
        },
        name: {
            type: String,
        },
        lastname: {
            type: String,
        },
        password: {
            type: String,
        },
        identification: {
            type:Number,
        },
        phone: {
            type: Number,
=======

        },
        name: {
            type: String
        },
        lastname: {
            type: String
        },
        phone: {
            type: Number
>>>>>>> e992176186799498250e9924e6507a23e99ad272
        },
        email: {
            type: String
        },
        roles: [
            {
                type: Schema.Types.ObjectId,
                ref: "Role",
           
            },
        ],
        state: {
<<<<<<< HEAD
            type: String,
=======
            type: String
>>>>>>> e992176186799498250e9924e6507a23e99ad272
        }
    }, {
        timestamps: true,
        versionKey: false,
    }
);


export default model('user', userSchema);
    

 

