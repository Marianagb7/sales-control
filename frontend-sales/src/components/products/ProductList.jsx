import React, {Component} from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { Table } from "reactstrap";


const url = "http://localhost:4000/api/products"

class ProductLIst extends Component  {
state = {
  data: []
}

peticionGet = () => {
axios.get(url).then(response => {
  this.setState({data: response.data});
})
}
  componentDidMount () {
    this.peticionGet();

  }
  render () {
    return (
      <div>
        <Table striped bordered hover size="sm">
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
                  <button className="btn btn-dark" onClick={()=>{this.seleccionarProduct(product); this.modalInsertar()}}>< FontAwesomeIcon icon={faEdit}/></button>
                  {"   "} 
                  <button className="btn btn-warning" onClick={()=>{this.seleccionarProduct(product); this.setState({modalEliminar: true})}}><FontAwesomeIcon icon={faTrashAlt}/></button>                    
               </td>     
               
                </tr>
              )
            })}            

          </tbody>
        </Table>
        
        
      </div>


    );

  }
}
export default ProductLIst;