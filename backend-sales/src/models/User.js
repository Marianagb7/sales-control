import { Schema, model } from "mongoose";

const userSchema = new Schema(
    {
        username: {
            type: String,

        },
        name: {
            type: String
        },
        lastname: {
            type: String
        },
        phone: {
            type: Number
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
            type: String
        }
    }, {
        timestamps: true,
        versionKey: false,
    }
);


export default model('user', userSchema);
    

 

