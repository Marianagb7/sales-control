import React from 'react';
import ProductList from '../../components/products/ProductList';




const Gesproductos = () => {
    return (
        <div>
            <div> 
                <h5>Busqueda de producto por SKU</h5>
            </div>
            <br/> 
            <ProductList></ProductList>
            
        </div>        
    )
}

export default Gesproductos;