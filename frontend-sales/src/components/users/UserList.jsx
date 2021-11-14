import React, {Component, useState} from "react";
import axios from "axios";
import swal from "sweetalert";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Table } from "reactstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";



const url = "http://localhost:4000/api/users";

class UsersList extends Component  {  
  state = {
    data: [],
    modalInsertar: false,
    modalEliminar: false, 
    tipoModal: false, 
                                 
  }
  
// Listar
  peticionGet = () => {
    axios.get(url).then(response => {
      this.setState({data: response.data});
      }).catch(error=>{
        console.log(error.message);
     })
  }

  
// Actualizar
  peticionPut=()=>{
    axios.put(url+"/"+this.state.form._id, this.state.form).then(reponse=>{
      this.modalInsertar();
      this.peticionGet();
   })
  }
// Eliminar producto
  peticionDelete=()=>{
    axios.delete(url+"/"+this.state.form._id).then(response=>{
      this.setState({modalEliminar:false});
      this.peticionGet();
    })
  }  
   

  modalInsertar = () => {
    this.setState({modalInsertar: !this.state.modalInsertar});
  }
  
   seleccionarProduct=(user)=>{
    this.setState({ 
            
      form: {
        _id: user._id,
        username: user.username,
        name: user.name,
        lastname: user.lastname,
        phone: user.phone,
        email: user.email, 
        roles: user.roles,
        state: user.state               
      },    
             
    })
  }   
  
  handleChange =async e=> {
    e.persist();
    await this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
      }
      
    });
     console.log(this.state.form);         
        
  }   
  

  alertUpGrade=()=>{
    swal({
      title:"Proceso exitoso",
      text: "Se actualizó correctamente",
      icon: "info",
      button: "Aceptar",
      timer: "3000"
    })
  } 


  componentDidMount () {
    this.peticionGet();      
       
  } 
  

  render () {
    const {form}=this.state;   
    return (
            
      <div>
        
        <br/>
        <Table  striped bordered hover size="sm">
          <thead className="text-center">
            <tr>             
              <th className="col-sm-1">Username</th>
              <th className="col-sm-1">Nombre</th>
              <th className="col-sm-1">Apellido</th>
              <th className="col-sm-1">Teléfono</th>
              <th className="col-sm-1">Email</th>
              <th className="col-sm-1">Rol</th>
              <th className="col-sm-1">Estado</th>                   
            </tr>              
          </thead>
          <tbody>
            
            {this.state.data.map(user => {
              return (
                <tr className="lead text-center  fs-5 h4 ">
              <td className="fw-bold">{user.username}</td>
              <td className="fw-bolder">{user.name}</td>
              <td className="fw-bolder">{user.lastname}</td>
              <td className="fw-bolder">{new Intl.NumberFormat("en-En").format(user.phone)}</td>
              <td className="fw-bolder">{user.email}</td> 
              <td className="fw-bolder">{user.roles}</td>
              <td className="fw-bolder">{user.state}</td>
              <td> 
                  <button className="btn btn-dark" onClick={()=>{this.seleccionarProduct(user);
                  this.modalInsertar()}}>< FontAwesomeIcon icon={faEdit}/></button>
                  {"   "} 
                  <button className="btn btn-warning" onClick={()=>{this.seleccionarProduct(user);
                   this.setState({modalEliminar: true})}}><FontAwesomeIcon icon={faTrashAlt}/></button>                    
               </td>     
               
                </tr>
              )
            })}            

          </tbody>
        </Table>
        
        <Modal isOpen={this.state.modalInsertar}>
                <ModalHeader style={{display: 'block'}}>
                    <span style={{float: 'right'}}>Actualizar Usuario</span>
                </ModalHeader>
                <ModalBody>
                    <div className="form-group">                               
                                  
                        <label htmlFor="sku">Usernama</label>
                        <input className="form-control" type="text" name="username"id="username" readOnly
                        onChange={this.handleChange} value={form?form.username:''} />
                        <label htmlFor="nombre">Nombre</label>
                        <input className="form-control" type="text" name="name" id="name" onChange={this.handleChange}
                        value={form?form.name:''} />
                        <br/>
                        <label htmlFor="lastname">Apellido</label>
                        <input className="form-control" 
                        type="text" name="lastname" id="lastname" onChange={this.handleChange}
                        value={form?form.lastname:''}/>
                        <br/>
                        <label htmlFor="precio">Teléfono</label>
                        <input className="form-control" type="number"
                        name="phone" id="phone" onChange={this.handleChange} value={form?form.phone:''}></input>
                        <br/>
                        <label htmlFor="roles">Rol</label>
                        <select name="roles" onChange={this.handleChange} value={form?form.roles:''}>
                            <option value="administrador">Administrador</option>                            
                            <option value="vendedor">Vendedor</option>

                            <option value="usuario">Usuario</option>
                        </select>
                        <br/>
                        <label htmlFor="state">Estado</label> 
                        <select name="state" onChange={this.handleChange} value={form?form.state:''}>
                            <option value="autorizado">Autorizado</option>                            
                            <option value="no autorizado">No autorizado</option>

                            <option value="pendiente">Pendiente</option>
                        </select>

                    </div>
                </ModalBody>
                <ModalFooter>
                  <button className="btn btn-primary" onClick={()=>{this.peticionPut(); this.alertUpGrade()}}>
                    Actualizar
                    </button>                 
                  <button className="btn btn-danger" onClick={()=>this.modalInsertar()}>Cancelar</button>
                </ModalFooter>
            </Modal>
            <Modal isOpen={this.state.modalEliminar}>
              <ModalBody>
                 Estás seguro que deseas eliminar este pusuario {form && form.sku}
              </ModalBody>
              <ModalFooter>
                <button className="btn btn-danger" onClick={()=>this.peticionDelete()}>Sí</button>
                <button className="btn btn-secundary" onClick={()=>this.setState({modalEliminar: false})}>No</button>
              </ModalFooter>            
              
            </Modal>    
                
      </div>


    );

  }
}
export default UsersList;