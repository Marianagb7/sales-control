<<<<<<< HEAD
import express from 'express';
import { queryAllUsers, crearUsuario, editarUsuario, eliminarUsuario, consultarUsuario, consultarOCrearUsuario,} from '../../controllers/usuarios/controller.js';
=======
import Express from 'express';
import { createUser, getUser, updateUserById, deleteUserById } from '../controllers/users.controller.js';
>>>>>>> e992176186799498250e9924e6507a23e99ad272

const rutasUsuario = express.Router();

const genercCallback = (res) => (err, result) => {
  if (err) {
    res.status(500).send('Error consultando los usuarios');
  } else {
    res.json(result);
  }
};

rutasUsuario.route('/api/users').get((req, res) => {
  console.log('alguien hizo get en la ruta /api/users');
<<<<<<< HEAD
  queryAllUsers(genercCallback(res));
});

rutasUsuario.route('/api/users').post((req, res) => {
  crearUsuario(req.body, genercCallback(res));
});

rutasUsuario.route('/usuarios/self').get((req, res) => {
  console.log('alguien hizo get en la ruta /self');
  consultarOCrearUsuario(req, genercCallback(res));
  // consultarUsuario(, genercCallback(res));
});
=======
  createUser(genercCallback(res));
});

rutasUsuario.route('/api/users').get((req, res) => {
    console.log('alguien hizo get en la ruta /api/users');
    getUser(genercCallback(res));
  });
>>>>>>> e992176186799498250e9924e6507a23e99ad272

rutasUsuario.route('/api/users/:Id').get((req, res) => {
    console.log('alguien hizo get en la ruta /api/users');
    updateUserById(genercCallback(res));
  });

rutasUsuario.route('/api/users/:Id').get((req, res) => {
    console.log('alguien hizo get en la ruta /api/users');
    deleteUserById(genercCallback(res));
  });

export default rutasUsuario;