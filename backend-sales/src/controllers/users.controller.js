import { ObjectId } from 'mongodb';
import jwt_decode from 'jwt-decode';

const conectarDB = (callback) => {
    client.connect((err,db) => {
        if(err) {
            console.error('Error conectando a la bases de datos');
            return 'error';
        }
        baseDeDatos = db.db('sales-control')
        console.log('baseDeDatos exitosa');
            return callback(); 
    });
};

const getDB = () => {
    return baseDeDatos;
  };


const createUser = async (datosUsuario, callback) => {
  const baseDeDatos = getDB();
  await baseDeDatos.collection('users').insertOne(datosUsuario, callback);
};

const getUser = async (id, callback) => {
  const baseDeDatos = getDB();
  await baseDeDatos.collection('users').findOne({ _id: new ObjectId(id) }, callback);
};

const updateUserById = async (id, edicion, callback) => {
  const filtroUsuario = { _id: new ObjectId(id) };
  const operacion = {
    $set: edicion,
  };
  const baseDeDatos = getDB();
  await baseDeDatos
    .collection('users')
    .findOneAndUpdate(filtroUsuario, operacion, { upsert: true, returnOriginal: true }, callback);
};

const deleteUserById = async (id, callback) => {
  const filtroUsuario = { _id: new ObjectId(id) };
  const baseDeDatos = getDB();
  await baseDeDatos.collection('users').deleteOne(filtroUsuario, callback);
};

export {
  getUser,
  createUser,
  updateUserById,
  deleteUserById,
};


/*import User from '../models/User';

export const createUser = async (req, res) => {
    const { username, name, lastname, phone,email, roles, state } = req.body;
  
    try {
      const newUser = new User({
        username,
        name,
        lastname,
        phone,
        email,
        roles,
        state
      });
  
      const userSaved = await newUser.save();
  
      res.status(201).json(userSaved);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
};

//Listar usuarios
export const getUser = async (req, res) => {

    try {
        const user = await User.find({});
        res.json(user);
    } catch (error) {
        res.status(400).json({
            message:'Error procesar la petición'
        });
        next();
    }
};

// Actualizar usuario
export const updateUserById = async (req, res) => {
    const updateUserById = await User.findByIdAndUpdate(
        req.params.userId,
        req.body,
        {
            new: true,
        }
    );
    res.status(200).json({ message: 'Usuario actualizada'});
};

// Eliminar usuario
export const deleteUserById = async (req, res) => {
    const { userId } = req.params;

    await User.findByIdAndDelete(userId);

    res.status(200).json({ message: 'Usuario eliminada'});
};*/





