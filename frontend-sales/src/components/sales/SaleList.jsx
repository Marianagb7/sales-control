import React, { useState, useEffect} from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Table } from "reactstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";


function SaleList(){

    const url ="http://localhost:4000/api/sales";

    const [sales, setSales]=useState([]);
    const [tablesales, setTablesales]=useState([]);
    const [search, setSearch]=useState("");
    const [modalEdit, setModalEdit]=useState(false);
    const [saleSelected, setSaleSelected]=useState({
        _id: "",
        salecode: "",
        customer: "",
        cardnumber:"",
        product:"",
        amount:"",
        unitprice:"",
        seller: "",
        state:""
    })    

    const peticionesGet=async()=>{
        await axios.get(url).then(response=>{
            setSales(response.data);
            setTablesales(response.data);
        }).catch(error=>{
            console.log(error);
        })
    }

    const peticionPut=async()=>{
        await axios.put(url+"/"+saleSelected._id, saleSelected)
        .then(response=>{
          var dataNueva= tablesales;
          dataNueva.map(sales=>{
            if(sales._id===saleSelected._id){
              sales.salecode=saleSelected.salecode;
              sales.customer=saleSelected.customer;
              sales.cardnumber=saleSelected.cardnumber;
              sales.product=saleSelected.product;
              sales.amount=saleSelected.amount;
              sales.unitprice=saleSelected.unitprice;
              sales.seller=saleSelected.seller;
              sales.state=saleSelected.state
              
            }
          });
          setTablesales(dataNueva);
          openClosedModalEdit();
        }).catch(error=>{
          console.log(error);
        })
      }

      

    const filtrar=(terSearch)=>{
      var resSearch=tablesales.filter((element)=>{
        if(element.salecode.toLowerCase().includes(terSearch.toLowerCase())
        || element.customer.toLowerCase().includes(terSearch.toLowerCase())
        ){
            return element;
          }
        });
        setSales(resSearch);
    }

    const onChange=e=>{
        setSearch(e.target.value);
        filtrar(e.target.value);
    }

    const selectSale=(sales, caso)=>{
        setSaleSelected(sales);
        (caso === "editar")&&setModalEdit(true)
    }
    const openClosedModalEdit=()=>{
        setModalEdit(!modalEdit);
    }

    const handleChange=e=>{
        const {name, value}=e.target;
        setSaleSelected(prevState=>({
          ...prevState,
          [name]: value
        }));
    }

    useEffect(()=>{
        peticionesGet();
    },[])

    return(
        <div className="App">
            <div className="containerInput">
                <input
                className="form-control inputBuscar"
                value={search}
                placeholder="Búsqueda por Código o Cliente "
                onChange={onChange}
                />
                <button className="btn btn-success">
                <FontAwesomeIcon icon={faSearch}/>
                </button>
            </div>
            <div className="tabla">
                <Table striped bordered hover size="sm">
                    <thead className="text-center">
                        <tr>             
                            <th className="col-sm-1">Código</th>
                            <th className="col-sm-1">Fecha</th>
                            <th className="col-sm-1">Cliente</th>
                            <th className="col-sm-1">Identificación</th>
                            <th className="col-sm-1">Producto</th>
                            <th className="col-sm-1">Cantidad</th> 
                            <th className="col-sm-1">Precio Unitario</th> 
                            <th className="col-sm-1">Vendedor</th>
                            <th className="col-sm-1">Estado</th> 
                            <th className="col-sm-1">Acciones</th>               
                        </tr> 
                    </thead>

                    <tbody>
                        {sales && sales.map((sales)=>(
                            <tr key={sales.salecode}>
                                <td>{sales.salecode}</td>
                                <td>{sales.createdAt}</td>
                                <td>{sales.customer}</td>
                                <td>{sales.cardnumber}</td>
                                <td>{sales.product}</td>
                                <td>{sales.amount}</td>
                                <td>{sales.unitprice}</td>
                                <td>{sales.seller}</td>
                                <td>{sales.state}</td>
                                <td> 

                                 <button className="btn btn-warning" onClick={()=>{selectSale(sales, 'editar');openClosedModalEdit()}}>Editar</button>
                                 {"   "}                                  
                                 <button className="btn btn-dark">Eliminar</button>                    
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Modal 
                isOpen={modalEdit}>
                <ModalHeader style={{display: 'block'}}>
                    <span style={{float: 'right'}}>!!Puedes actualizar</span>
                </ModalHeader>
                <ModalBody>
                    <div className="form-group">                               
                                  
                        <label htmlFor="salecode">Código</label>
                        <input className="form-control" type="text" name="salecode"id="salecode" readOnly
                        value={saleSelected.salecode}    />
                        <label htmlFor="cliente">Cliente</label>
                        <input className="form-control" type="text" name="customer" id="customer"
                        value={saleSelected && saleSelected.customer} 
                        onChange={handleChange}
                         />
                        <br/>
                        <label htmlFor="identificación">Identificación</label>
                        <input className="form-control" 
                        type="number" name="cardnumber" id="cardnumber"
                        value={saleSelected && saleSelected.cardnumber}
                        onChange={handleChange} 
                        />
                        <br/>
                        <label htmlFor="producto">Producto</label>
                        <input className="form-control" type="text" name="product" id="product"
                        value={saleSelected && saleSelected.product} 
                        onChange={handleChange}
                         />
                        <br/>
                        <label htmlFor="cantidad">Cantidad</label>
                        <input className="form-control" type="number"
                        name="amount" id="amount" 
                        value={saleSelected && saleSelected.amount}
                        onChange={handleChange} />
                        <br/>
                        <label htmlFor="preciounitario">Precio Unitario</label>
                        <input className="form-control" type="number"
                        name="unitprice" id="unitprice" 
                        value={saleSelected && saleSelected.unitprice}
                        onChange={handleChange}/>
                        <br/>
                        <label htmlFor="Vendedor">Vendedor</label>
                        <input className="form-control" type="text" name="seller" id="seller"
                        value={saleSelected && saleSelected.seller} 
                        onChange={handleChange}
                         />
                        <br/>
                        <label htmlFor="estado">Estado</label>
                        <select name="state" 
                        value={saleSelected && saleSelected.state}
                        onChange={handleChange} >
                            <option value="En proceso">En proceso</option>                            
                            <option value="Entregada">Entregada</option>
                            <option value="Cancelada">Cancelada</option>
                        </select>      
                    </div>
                </ModalBody>
                <ModalFooter>
                  <button className="btn btn-primary" onClick={()=>peticionPut()} >
                    Actualizar
                    </button>                 
                  <button className="btn btn-danger"onClick={()=>setModalEdit(false)} >Cancelar</button>
                </ModalFooter>
            </Modal>
            </div>
        </div>
    )

}

export default SaleList;