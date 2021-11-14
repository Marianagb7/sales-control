import axios from 'axios';

const baseURL = "https://localhost:3000/"

const getToken = () => {
  return `Bearer ${localStorage.getItem('token')}`;
};

// CRUD PARA USUARIOS

export const obtenerUsuarios = async (successCallback, errorCallback) => {
  const options = {
    method: 'GET',
    url: `${baseURL}/users/`,
    headers: {
      Authorization: getToken(),
    },
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

}
