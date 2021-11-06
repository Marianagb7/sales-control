import React, {Component} from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
        
  } from 'reactstrap';

  const url = "http://localhost:4000/api/products"
  // Endpoints conecxión cliente-servidor 
    class ProductForm extends Component {  
    state={
        data:[],
        form: {
            sku: "",
            name: "",
            description: "",
            price: "",
            available: "",
        }
    }

    submitHandler = e => {
        console.log(this.state)
        axios.post(url,this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }
// Función para capturar datos en el formulario
    handleChange=async e=> {
        e.persist();
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form);
    }
   
    
    
        
      
    
    render() {
        const {form}=this.state
        return (
            <div className="form1">
                <h2 className="fw-bold text-secondary text-center">Bienvenido!!</h2>
                <h4 className="text-start text-primary">Registra Productos</h4>
                <br/>
                <Form onSubmit={this.submitHandler} className="form">
                    <FormGroup>
                        <Label className="fs-4 fw-bolder" htmlFor="sku">SKU</Label>
                        <Input className="form-control border-warning"
                        type="text"
                        name="sku"
                        id="sku"
                        placeholder="C-###"
                        onChange={this.handleChange}
                        value={form.sku}
                        />
                  </FormGroup>
                  <FormGroup>
                      <Label className="fs-4 fw-bolder" htmlFor="nombre">Nombre</Label>
                      <Input className="form-control border-warning"
                       type="text"
                       name="name"
                       id="name"  
                       onChange={this.handleChange}
                       value={form.name}
                      />
                  </FormGroup>
                  <FormGroup>
                       <Label className="fs-4 fw-bolder" htmlFor="description">Descripción</Label>
                       <Input className="form-control border-warning"
                       type="text"
                       name="description"
                       id="description"
                       placeholder="Vino Blanco, Vino Rosado, Vino tinto, Vino claret"
                       onChange={this.handleChange}
                       value={form.description}
                      />
                 </FormGroup>
                 <FormGroup>
                       <Label className="fs-4 fw-bolder" htmlFor="price">Precio</Label>
                       <Input className="form-control border-warning"
                       type="number"
                       name="price"
                       id="price"
                       placeholder="78000"
                       onChange={this.handleChange}
                       value={form.price}
                      />
                  </FormGroup>
                  <FormGroup>
                       <Label className="fs-4 fw-bolder" htmlFor="nombre">Estado</Label>
                       <Input className="form-control border-warning"
                           type="select"
                           name="available"
                           id="available"
                           onChange={this.handleChange}
                           value={form.available}
                           >
                           <option value="Disponible">Disponible</option>
                           <option value="No Disponible">No Disponible</option>
                       </Input>              
                  </FormGroup>
                  <br/>
                  <div className="col text-center">
                      <Button type="submit" className="btn btn-secondary text-center" >Crear Producto</Button>
                  </div>          
               </Form>
          </div>
        );
    }

}

export default ProductForm;