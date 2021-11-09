import React, { useState } from 'react';
import axios from "axios";
import swal from 'sweetalert';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
        
  } from 'reactstrap';

function ProductForm () {
    const url = "http://localhost:4000/api/products"
    const [data, setData]=useState({
        id:"",
        sku:"",
        name:"",
        description:"",
        price:"",
        available:"",
    })
    
    function handle(e){
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)
        console.log(newdata)

    }
    function submit(e) {
        e.preventDefault();
        axios.post(url,{
            id:data.id,
            sku: data.sku,
            name: data.name,
            description: data.description,
            price: data.price,
            available:   data.available
        })
        .then(res=>{
            console.log(res.data)
        })

    }

    function alertUpGrade(){
        swal({
          title:"Proceso exitoso",
          text: "Se almacenó correctamente",
          icon: "info",
          button: "Aceptar",
          timer: "10000"
        })
      }
    return (
        <div className="form1">
            <h2 className="fw-bold text-secondary text-center">Bienvenido!!</h2>
            <h4 className="text-start text-primary">Registra Productos</h4>
            <br/>
            <Form onSubmit={(e)=>submit(e)}  className="form">
                <FormGroup>
                    <Label className="fs-4 fw-bolder" htmlFor="sku">SKU</Label>
                    <Input className="form-control border-warning"
                      type="text"
                      name="sku"
                      id="sku"
                      placeholder="C-###"
                      onChange={(e)=>handle(e)}
                      value={data.sku}                                        
                    />
                </FormGroup>
                <FormGroup>
                    <Label className="fs-4 fw-bolder" htmlFor="nombre">Nombre</Label>
                    <Input className="form-control border-warning"
                      type="text"
                      name="name"
                      id="name"
                      onChange={(e)=>handle(e)}
                      value={data.name}                  
                       
                    />
                </FormGroup>
                <FormGroup>
                    <Label className="fs-4 fw-bolder" htmlFor="description">Descripción</Label>
                    <Input className="form-control border-warning"
                      type="text"
                      name="description"
                      id="description"
                      placeholder="Vino Blanco, Vino Rosado, Vino tinto, Vino claret"
                      onChange={(e)=>handle(e)}
                      value={data.description}                   
                    />
                </FormGroup>
                <FormGroup>
                    <Label className="fs-4 fw-bolder" htmlFor="price">Precio</Label>
                    <Input className="form-control border-warning"
                      type="number"
                      name="price"
                      id="price"
                      placeholder="$$$$$"
                      onChange={(e)=>handle(e)}
                      value={data.price}                   
                    />
                </FormGroup>
                <FormGroup>
                    <Label className="fs-4 fw-bolder" htmlFor="nombre">Estado</Label>
                    <select className="form-control border-warning"
                        type={"select"}
                        name="available"
                        id="available"
                        onChange={(e)=>handle(e)}
                        value={data.available}>                            
                        <option value={"Disponible"}>Disponible</option>
                        <option value={"No Disponible"}>No Disponible</option>
                    </select>              
                </FormGroup>
                <br/>
                <div className="col text-center">
                <Button type="submit" onClick={()=>alertUpGrade()}   className="btn btn-secondary text-center" >Crear Producto</Button>
                  </div>          
            </Form>
        </div>
    );

    
}

export default ProductForm;