import React, { useState, useEffect } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Table } from "reactstrap";


function SearchProduct(){

    const [productos, setProductos]=useState([]);
    const [tablaProductos, setTablaProductos]=useState([]);
    const [busqueda, setBusqueda]=useState("");

    const peticionesGet=async()=>{
        await axios.get("https://ebrovinos.herokuapp.com/").then(response=>{
            setProductos(response.data);
            setTablaProductos(response.data);
        }).catch(error=>{
            console.log(error);
        })
    }

    const filtrar=(terminoBusqueda)=>{
        var resultadosBusqueda=tablaProductos.filter((elemento)=>{
          if(elemento.sku.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
          || elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
          ){
            return elemento;
          }
        });
        setProductos(resultadosBusqueda);
      }

    const handleChange=e=>{
        setBusqueda(e.target.value);
        filtrar(e.target.value);
      }

    useEffect(()=>{
        peticionesGet();
    },[])

    return(
        <div className="App">
            <div className="containerInput">
                <input
                className="form-control inputBuscar"
                value={busqueda}
                placeholder="Búsqueda por Código o Nombre "
                onChange={handleChange}
                />
                <button className="btn btn-success">
                <FontAwesomeIcon icon={faSearch}/>
                </button>
            </div>
            <div className="tabla">
                <Table striped bordered hover size="sm">
                    <thead className="text-center">
                        <tr>             
                            <th className="col-sm-1">Sku</th>
                            <th className="col-sm-1">Nombre</th>
                            <th className="col-sm-1">Descripción</th>
                            <th className="col-sm-1">Precio</th>
                            <th className="col-sm-1">Estado</th>
                                              
                        </tr> 
                    </thead>

                    <tbody>
                        {productos && productos.map((productos)=>(
                            <tr className="lead text-center  fs-5 h4" key={productos.sku}>
                                <td className=" fs-6 fw-bold">{productos.sku}</td>
                                <td>{productos.name}</td>
                                <td>{productos.description}</td>
                                <td>{productos.price}</td>
                                <td>{productos.available}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    )

}

export default SearchProduct;
