import Express from 'express';
import { createUser, getUser, updateUserById, deleteUserById } from '../controllers/users.controller.js';

const rutasUsuario = Express.Router();

const genercCallback = (res) => (err, result) => {
  if (err) {
    res.status(500).send('Error consultando los usuarios');
  } else {
    res.json(result);
  }
};

rutasUsuario.route('/api/users').get((req, res) => {
  console.log('alguien hizo get en la ruta /api/users');
  createUser(genercCallback(res));
});

rutasUsuario.route('/api/users').get((req, res) => {
    console.log('alguien hizo get en la ruta /api/users');
    getUser(genercCallback(res));
  });

rutasUsuario.route('/api/users/:Id').get((req, res) => {
    console.log('alguien hizo get en la ruta /api/users');
    updateUserById(genercCallback(res));
  });

rutasUsuario.route('/api/users/:Id').get((req, res) => {
    console.log('alguien hizo get en la ruta /api/users');
    deleteUserById(genercCallback(res));
  });

export default rutasUsuario;