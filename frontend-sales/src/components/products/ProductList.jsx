import React, {Component, useState} from "react";
import axios from "axios";
import swal from "sweetalert";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Table } from "reactstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";



const url = "https://localhost:3000";


// eslint-disable-next-line react-hooks/rules-of-hooks

// Endpoints conecxión cliente-servidor
class ProductLIst extends Component  {  
  state = {
    data: [],
    modalInsertar: false,
    modalEliminar: false, 
    tipoModal: false, 
                                 
  }
  
// Listar productos
  peticionGet = () => {
    axios.get(url).then(response => {
      this.setState({data: response.data});
      }).catch(error=>{
        console.log(error.message);
     })
  }

  
// Actualizar producto
  peticionPatch=()=>{
    axios.patch(url+"/${producto._id}"+this.state.form._id, this.state.form).then(reponse=>{
      this.modalInsertar();
      this.peticionGet();
   })
  }
// Eliminar producto
  peticionDelete=()=>{
    axios.delete(url+"/${producto._id}"+this.state.form._id).then(response=>{
      this.setState({modalEliminar:false});
      this.peticionGet();
    })
  }  
   

  modalInsertar = () => {
    this.setState({modalInsertar: !this.state.modalInsertar});
  }
  
   seleccionarProduct=(product)=>{
    this.setState({ 
            
      form: {
        _id: product._id,
        sku: product.sku,
        name: product.name,
        description: product.description,
        price: product.price,
        available: product.available,                
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
              <th className="col-sm-1">Sku</th>
              <th className="col-sm-1">Nombre</th>
              <th className="col-sm-1">Descripción</th>
              <th className="col-sm-1">Precio</th>
              <th className="col-sm-1">Estado</th>
              <th className="col-sm-1">Acciones</th>                  
            </tr>              
          </thead>
          <tbody>
            
            {this.state.data.map(product => {
              return (
                <tr className="lead text-center  fs-5 h4 ">
              <td className="fw-bold">{product.sku}</td>
              <td className="fw-bolder">{product.name}</td>
              <td className="fw-bolder">{product.description}</td>
              <td className="fw-bolder">{new Intl.NumberFormat("en-En").format(product.price)}</td>
              <td className="fw-bolder">{product.available}</td> 
              <td> 
                  <button className="btn btn-dark" onClick={()=>{this.seleccionarProduct(product);
                  this.modalInsertar()}}>< FontAwesomeIcon icon={faEdit}/></button>
                  {"   "} 
                  <button className="btn btn-warning" onClick={()=>{this.seleccionarProduct(product);
                   this.setState({modalEliminar: true})}}><FontAwesomeIcon icon={faTrashAlt}/></button>                    
               </td>     
               
                </tr>
              )
            })}            

          </tbody>
        </Table>
        
        <Modal isOpen={this.state.modalInsertar}>
                <ModalHeader style={{display: 'block'}}>
                    <span style={{float: 'right'}}>¡Actualizar Producto!</span>
                </ModalHeader>
                <ModalBody>
                    <div className="form-group">                               
                                  
                        <label htmlFor="sku">Sku</label>
                        <input className="form-control" type="text" name="sku"id="sku" readOnly
                        onChange={this.handleChange} value={form?form.sku:''} />
                        <label htmlFor="nombre">Nombre</label>
                        <input className="form-control" type="text" name="name" id="name" onChange={this.handleChange}
                        value={form?form.name:''} />
                        <br/>
                        <label htmlFor="descripcion">Descripción</label>
                        <input className="form-control" 
                        type="text" name="description" id="description" onChange={this.handleChange}
                        value={form?form.description:''}/>
                        <br/>
                        <label htmlFor="precio">Precio</label>
                        <input className="form-control" type="number"
                        name="price" id="price" onChange={this.handleChange} value={form?form.price:''}></input>
                        <br/>
                        <label htmlFor="estado">Estado</label>
                        <select name="available" onChange={this.handleChange} value={form?form.available:''}>
                            <option value="Disponible">Disponible</option>                            
                            <option value="No disponible">No Disponible</option>
                        </select>      
                    </div>
                </ModalBody>
                <ModalFooter>
                  <button className="btn btn-primary" onClick={()=>{this.peticionPatch(); this.alertUpGrade()}}>
                    Actualizar
                    </button>                 
                  <button className="btn btn-danger" onClick={()=>this.modalInsertar()}>Cancelar</button>
                </ModalFooter>
            </Modal>
            <Modal isOpen={this.state.modalEliminar}>
              <ModalBody>
                 Estás seguro que deseas eliminar este producto {form && form.sku}
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
export default ProductLIst;
