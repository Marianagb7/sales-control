import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
    {
        username: {
            type: String,
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
        },
        email: {
            type: String,
        },
        roles: [
            {
                type: Schema.Types.ObjectId,
                ref: "Role",
           
            },
        ],
        state: {
            type: String,
        }
    }, {
        timestamps: true,
        versionKey: false,
    }
);

userSchema.static.encryptPassword = async (password) => {

    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

userSchema.static.comparePassword = async (password, receivedPassword) => {

    return await bcrypt.compare(password, receivedPassword)
}

export default model('user', userSchema);
    

 

