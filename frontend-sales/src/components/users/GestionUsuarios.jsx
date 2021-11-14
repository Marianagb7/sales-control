import React, {useState} from 'react';
import { Table,Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import swal from "sweetalert";
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Users from './users.json'


function GestionUsuarios(){


const [data, setData] = useState(Users);
const [modalEditar, setModalEditar] = useState(false);
const [modalEliminar, setModalEliminar] = useState(false);
const [usuarioSeleccionado, setUsuarioSeleccionado] = useState({
        id: '',
        username: '',
        nombre:'',
        apellido: '',
        phone:'',
        email:'',
        rol: '',
        estado:'',
});
const seleccionarUsuario=(elemento,caso)=>{
    setUsuarioSeleccionado(elemento);
    (caso==='Editar')?setModalEditar(true):setModalEliminar(true)
}
const handleChange=e=>{
    const {name, value}=e.target;
    setUsuarioSeleccionado((prevState)=>({
      ...prevState,
      [name]: value
    }));
  }
  const editar=()=>{
    var dataNueva=data;
    dataNueva.map(usuario=>{
      if(usuario.id===usuarioSeleccionado.id){
        usuario.username=usuarioSeleccionado.username;
        usuario.nombre=usuarioSeleccionado.nombre;
        usuario.apellido=usuarioSeleccionado.apellido;
        usuario.phone=usuarioSeleccionado.phone;
        usuario.email=usuarioSeleccionado.email;
        usuario.rol=usuarioSeleccionado.rol;
        usuario.estado=usuarioSeleccionado.estado;
      }
    });
    setData(dataNueva);
    setModalEditar(false);
  }
  const eliminar =()=>{
    setData(data.filter(usuario=>usuario.id!==usuarioSeleccionado.id));
    setModalEliminar(false);
  }

  const alertUpGrade=()=>{
    swal({
      title:"Proceso exitoso",
      text: "Usuario actualizado correctamente",
      icon: "info",
      button: "Aceptar",
      timer: "10000"
    })
}

 
    return (
        <>
            <div >
                <Table striped bordered hover size="sm">
                    <thead className="text-center">
                        <tr>
                        <th className="col-sm-1, text-center">ID</th>
                        <th className="col-sm-1">Username</th>
                        <th className="col-sm-1">Nombre</th>
                        <th className="col-sm-1">Apellido</th>
                        <th className="col-sm-1">Teléfono</th>
                        <th className="col-sm-1">Email</th>
                        <th className="col-sm-1">Rol</th>
                        <th className="col-sm-1">Estado</th>
                        <th className="col-sm-1">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(elemento=>(
                            <tr>
                                <td className="fw-normal text-center">{elemento.id}</td>
                                <td className="fw-normal text-center">{elemento.username}</td>
                                <td className="fw-normal text-center">{elemento.nombre}</td>
                                <td className="fw-normal text-center">{elemento.apellido}</td>
                                <td className="fw-normal text-center">{elemento.phone}</td>
                                <td className="fw-normal text-center">{elemento.email}</td>
                                <td className="fw-normal text-center">{elemento.rol}</td>
                                <td className="fw-normal text-center">{elemento.estado}</td>
                                <td>
                                    <button className="btn btn-dark">
                                        < FontAwesomeIcon icon={faEdit} onClick={()=>seleccionarUsuario(elemento, 'Editar')}></FontAwesomeIcon>
                                    </button>
                                    <button className="btn btn-warning">
                                        <FontAwesomeIcon icon={faTrashAlt} onClick={()=>seleccionarUsuario(elemento, 'Eliminar')}></FontAwesomeIcon>  
                                    </button>
                                </td>
                            </tr>
                            ))
                            }
                    </tbody>
                </Table>
                <Modal isOpen={modalEditar}>
                    <ModalHeader>
                    <div>
                        <h3>Editar Usuario</h3>
                    </div>
                    </ModalHeader>
                    <ModalBody>
                    <div className="form-group">
                        <label>ID</label>
                        <input
                        className="form-control"
                        readOnly
                        type="text"
                        name="id"
                        value={usuarioSeleccionado && usuarioSeleccionado.id}
                        />
                        <label>Username</label>
                        <input
                        className="form-control"
                        readOnly
                        type="text"
                        name="username"
                        value={usuarioSeleccionado && usuarioSeleccionado.username}
                        onChange={handleChange}
                        />
                        <br />
                        <label>Nombre</label>
                        <input
                        className="form-control"
                        readOnly
                        type="text"
                        name="nombre"
                        value={usuarioSeleccionado && usuarioSeleccionado.nombre}
                        onChange={handleChange}
                        />
                        <label>Apellido</label>
                        <input
                        className="form-control"
                        readOnly
                        type="text"
                        name="apellido"
                        value={usuarioSeleccionado && usuarioSeleccionado.apellido}
                        onChange={handleChange}
                        />
                        <br />
                        <label>Teléfono</label>
                        <input
                        className="form-control"
                        readOnly
                        type="tel"
                        name="telefono"
                        value={usuarioSeleccionado && usuarioSeleccionado.phone}
                        onChange={handleChange}
                        />
                        <br />
                        <label>Email</label>
                        <input
                        className="form-control"
                        readOnly
                        type="email"
                        name="minutos"
                        value={usuarioSeleccionado && usuarioSeleccionado.email}
                        onChange={handleChange}
                        />
                        <br />
                        <label>Rol</label>
                        <input
                        className="form-control"
                        type="text"
                        name="rol"
                        value={usuarioSeleccionado && usuarioSeleccionado.rol}
                        onChange={handleChange}
                        />
                        <br />
                        <label>Estado</label>
                        <input
                        className="form-control"
                        type="text"
                        name="estado"
                        value={usuarioSeleccionado && usuarioSeleccionado.estado}
                        onChange={handleChange}
                        />
                        <br />
                    </div>
                    </ModalBody>
                    <ModalFooter>
                    <button className="btn btn-primary" onClick={()=>{editar(); alertUpGrade()}}>
                        Actualizar
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={()=>setModalEditar(false)}
                    >
                        Cancelar
                    </button>
                    </ModalFooter>
                </Modal>
                <Modal isOpen={modalEliminar}>
                    <ModalBody>
                    ¿Estás Seguro que deseas eliminar el usuario? {usuarioSeleccionado && usuarioSeleccionado.nombre}
                    </ModalBody>
                    <ModalFooter>
                    <button className="btn btn-danger" onClick={()=>eliminar()}>
                        Sí
                    </button>
                    <button
                        className="btn btn-secondary"
                        onClick={()=>setModalEliminar(false)}
                    >
                        No
                    </button>
                    </ModalFooter>
                </Modal>
                
            </div>   
        </>
    )

                                   
}
export default GestionUsuarios