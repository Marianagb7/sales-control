<<<<<<< HEAD
import PrivateComponent from '../../components/PrivateComponent.js';
import { nanoid } from 'nanoid';
import React, { useState, useEffect } from 'react';
import { editarUsuario } from '../../utils/Api';
import { obtenerUsuarios } from '../../utils/Api';
import { Table } from "reactstrap";

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      await obtenerUsuarios(
        (respuesta) => {
          console.log('usuarios', respuesta.data);
          setUsuarios(respuesta.data);
        },
        (err) => {
          console.log(err);
        }
      );
    };
    fetchUsuarios();
  }, []);

  return (
    <div>
      <div className="fw-bold text-secondary text-center">admin usuarios</div>
      <PrivateComponent roleList={['admin']}>
        <button className='bg-red-400'>Hola RBAC</button>
      </PrivateComponent>
      <Table striped bordered hover size="sm">
        <thead className="text-center">
          <tr>
            <th className="col-sm-1">Nombre</th>
            <th className="col-sm-1">Email</th>
            <th className="col-sm-1">Estado</th>
            <th className="col-sm-1">Rol</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((user) => {
            return (
              <tr key={nanoid()}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <EstadoUsuario user={user} />
                </td>
                <td>
                  <RolesUsuario user={user} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

const RolesUsuario = ({ user }) => {
  const [rol, setRol] = useState(user.rol);

  useEffect(() => {
    const editUsuario = async () => {
      await editarUsuario(
        user._id,
        { rol },
        (res) => {
          console.log(res);
        },
        (err) => {
          console.error(err);
        }
      );
    };
    if (user.rol !== rol) {
      editUsuario();
    }
  }, [rol, user]);

  return (
    <select value={rol} onChange={(e) => setRol(e.target.value)}>
      <option value='' disabled>
        Seleccione un rol
      </option>
      <option value='admin'>Admin</option>
      <option value='vendedor'>Vendedor</option>
      <option value='sin rol'>Usuario</option>
    </select>
  );
};

const EstadoUsuario = ({ user }) => {
  const [estado, setEstado] = useState(user.estado ?? '');

  useEffect(() => {
    const editUsuario = async () => {
      await editarUsuario(
        user._id,
        { estado },
        (res) => {
          console.log(res);
        },
        (err) => {
          console.error(err);
        }
      );
    };
    if (user.estado !== estado) {
      editUsuario();
    }
  }, [estado, user]);

  return (
    <select value={estado} onChange={(e) => setEstado(e.target.value)}>
      <option value='' disabled>
        Seleccione un estado
      </option>
      <option value='autorizado' className='alert alert-success'>
        Autorizado
      </option>
      <option value='pendiente' className='alert alert-warning'>
        Pendiente
      </option>
      <option value='rechazado' className='alert alert-danger'>
        Rechazado
      </option>
    </select>
  );
};
=======
import React from "react";
import GestionUsuarios from '../../components/users/GestionUsuarios';

const Usuarios = () => {
    return (
        <div className="tablelist">
           <h2 className=
           " fw-bold text-secondary text-center ">
            Gestiona de Usuarios!!</h2> 
            <GestionUsuarios/>
       </div>        
    )
}
>>>>>>> e992176186799498250e9924e6507a23e99ad272

export default Usuarios;