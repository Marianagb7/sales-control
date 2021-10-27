import React,  { useContext, useState } from "react";
import { Panel } from "primereact/panel";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProductContext } from "../../contexts/ProdutContext";


const ProductList = () => {
    

  

    
    return (
        <div>
            <Panel header = "LISTA DE PRODUCTOS" style={{ textAlign: "center" }}>
                <DataTable>
                    
                    <Column field="_id" header="Id"/>
                    <Column field="sku" header="Sku"/>
                    <Column field="name" header="Nombre"/>
                    <Column field="description" header="Descripción"/>
                    <Column field="price" header="Precio"/>
                    <Column field="avaible" header="Estado"/>
                </DataTable>

            </Panel>

        </div>
    );
}

export default ProductList;