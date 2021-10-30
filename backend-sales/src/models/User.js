import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true
        },
        name: {
            type: String,
            unique: true
        },
        lastname: {
            type: String,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        identification: {
            type:Number,
            unique: true
        },
        phone: {
            type: Number,
            unique: true
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
            unique: true
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
    

 

