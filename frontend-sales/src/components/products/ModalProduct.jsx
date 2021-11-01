import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";

const ModalProduct = () => {
 
    return (
        <div>
            <Modal>
                <ModalHeader style={{display: 'block'}}>
                    <span style={{float: 'right'}}>x</span>
                </ModalHeader>
                <ModalBody>
                    <div className="form-group">
                        <label htmlFor="sku">Sku</label>
                        <input className="form-control" type="text" name="sku"id="sku" readOnly
                        onChange={this.handleChange} />
                        <label htmlFor="nombre">Nombre</label>
                        <input className="form-control" type="text" name="name" id="name" onChange={this.handleChange}
                         />
                        <br/>
                        <label htmlFor="descripcion">Descripción</label>
                        <input className="form-control" 
                        type="text" name="descripcion" id="description" onChange={this.handleChange}
                        />
                        <br/>
                        <label htmlFor="precio">Precio</label>
                        <input className="form-control" type="number"
                        name="price" id="price" onChange={this.handleChange}></input>
                        <br/>
                        <label htmlFor="estado">Estado</label>
                        <select name="available">
                            <option value="disponible">Disponible</option>                            
                            <option value="nodisponible">No Disponible</option>
                        </select>      
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-success">Actualizar</button>
                    <button className="btn btn-danger">Cancelar</button>
                </ModalFooter>
            </Modal>
            
            

        </div>        
    )
}

export default ModalProduct;

