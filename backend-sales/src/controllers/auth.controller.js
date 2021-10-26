import User from '../models/User';
import jwt from 'jsonwebtoken';
import config from '../config';

export const signUp = async (req, res) => {

    const {username, name, lastname, password, identification,
        phone, email, roles, state} = req.body;

    const newUser = new User ({
        username,
        name,
        lastname,
        password: await User.encryptPassword(password),
        identification,
        phone,
        email,
        roles,
        state
    });
    
    const savedUser = await newUser.save();

    const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
        expiresIn: 86400, // 24 hours
    });

    res.json({token});
        
    
}

export const signin = async (req, res) => {

}
