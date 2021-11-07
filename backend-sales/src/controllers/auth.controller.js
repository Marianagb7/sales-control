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
    
    
        
    
}


