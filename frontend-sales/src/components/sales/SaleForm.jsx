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

function SaleForm () {
    const url = "https://ebrovinos-misiontic.herokuapp.com/api/sales"
    const [data, setData]=useState({
        salecode:"",
        customer:"",
        cardnumber:"",
        product:"",
        amount:"",
        unitprice:"",
        seller:"",
        state:""
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
            salecode: data.salecode,
            customer: data.customer,
            cardnumber: data.cardnumber,
            product: data.product,
            amount:   data.amount,
            unitprice:data.unitprice,
            seller: data.seller,
            state: data.state
        })
        .then(res=>{
            console.log(res.data)
        })

    }

    function alertUpGrade(){
        swal({
          title:"Proceso exitoso",
          text: "Venta creada correctamente",
          icon: "info",
          button: "Aceptar",
          timer: "10000"
        })
      }
    return (
        <div className="form1">
            <h2 className="text-info bg-dark text-center">Registra tus ventas!!</h2>
            <br/>
            <Form onSubmit={(e)=>submit(e)}  className="form">
                <FormGroup>
                    <Label className="fs-5 fw-bolder" htmlFor="salecode">Código</Label>
                    <Input className="form-control border border-primary"
                      type="text"
                      name="salecode"
                      id="salecode"
                      placeholder="V-###"
                      onChange={(e)=>handle(e)}
                      value={data.salecode}                                        
                    />
                </FormGroup>
                <FormGroup>
                    <Label className="fs-5 fw-bolder" htmlFor="customer">Cliente</Label>
                    <Input className="form-control border-primary"
                      type="text"
                      name="customer"
                      id="customer"
                      placeholder="Nombre y apellido"
                      onChange={(e)=>handle(e)}
                      value={data.customer}                           
                    />
                </FormGroup>
                <FormGroup>
                    <Label className="fs-5 fw-bolder" htmlFor="cardnumber">Identificación</Label>
                    <Input className="form-control border-primary"
                      type="number"
                      name="cardnumber"
                      id="cardnumber"
                      placeholder="Identificación del cliente"
                      onChange={(e)=>handle(e)}
                      value={data.cardnumber}                   
                    />
                </FormGroup>
                <FormGroup>
                    <Label className="fs-5 fw-bolder" htmlFor="product">Producto</Label>
                    <Input className="form-control border-primary"
                      type="text"
                      name="product"
                      id="product"
                      onChange={(e)=>handle(e)}
                      value={data.product}                   
                    />
                </FormGroup>
                <FormGroup>
                    <Label className="fs-5 fw-bolder" htmlFor="amount">Cantidad</Label>
                    <Input className="form-control border-primary"
                      type="number"
                      name="amount"
                      id="amount"
                      onChange={(e)=>handle(e)}
                      value={data.amount}                   
                    />                     
                </FormGroup>
                <FormGroup>
                    <Label className="fs-5 fw-bolder" htmlFor="unitprice">Precio</Label>
                    <Input className="form-control border-primary"
                      type="number"
                      name="unitprice"
                      id="unitprice"
                      onChange={(e)=>handle(e)}
                      value={data.unitprice}                   
                    />                     
                </FormGroup>
                <FormGroup>
                    <Label className="fs-5 fw-bolder" htmlFor="seller">Vendedor</Label>
                    <Input className="form-control border-primary"
                      type="text"
                      name="seller"
                      id="seller"
                      onChange={(e)=>handle(e)}
                      value={data.seller}                   
                    />                     
                </FormGroup>
                <FormGroup>
                    <Label className="fs-5 fw-bolder" htmlFor="state">Estado</Label>
                    <Input className="form-control border-primary"
                      type="text"
                      name="state"
                      id="state"
                      placeholder="En proceso"
                      onChange={(e)=>handle(e)}
                      value={data.state}                   
                    />                     
                </FormGroup>
                <br/>
                <div className="col text-center">
                <Button type="submit" onClick={()=>alertUpGrade()}   className="btn btn-dark text-center" >Reagistra venta</Button>
                  </div>          
            </Form>
        </div>
    );

    
}

export default SaleForm;