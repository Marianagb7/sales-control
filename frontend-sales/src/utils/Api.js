import axios from 'axios';

const baseURL = "http://localhost:4000"

const getToken = () => {
  return `Bearer ${localStorage.getItem('token')}`;
};

// CRUD PARA USUARIOS

export const obtenerUsuarios = async (successCallback, errorCallback) => {
<<<<<<< HEAD
    const options = {
      method: 'GET',
      url: 'http://localhost:3000/api/users/self',
      headers: {
        Authorization: getToken(),
      },
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
=======
  const options = {
    method: 'GET',
    url: `${baseURL}/users/`,
    headers: {
      Authorization: getToken(),
    },
>>>>>>> e992176186799498250e9924e6507a23e99ad272
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtenerDatosUsuario = async (successCallback, errorCallback) => {
  const options = {
    method: 'GET',
    url: `${baseURL}/users/self/`,
    headers: {
      Authorization: getToken(), 
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarUsuario = async (id, data, successCallback, errorCallback) => {
  const options = {
    method: 'PATCH',
    url: `${baseURL}/users/${id}/`,
    headers: { 'Content-Type': 'application/json', Authorization: getToken() },
    data,
  };
<<<<<<< HEAD
  
  export const editarUsuario = async (id, data, successCallback, errorCallback) => {
    const options = {
      method: 'PATCH',
      url: `${baseURL}/users/${id}/`,
      headers: { 'Content-Type': 'application/json', Authorization: getToken() },
      data,
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };
=======
  await axios.request(options).then(successCallback).catch(errorCallback);
};
>>>>>>> e992176186799498250e9924e6507a23e99ad272
