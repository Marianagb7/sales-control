import ProductContextProvider from '../../contexts/ProdutContext';
import ProductList from '../../components/products/ProductList';



const Gesproductos = () => {
    return (
        <div>
            <p>Gestión de producto</p>
            <ProductContextProvider>
                <ProductList/>
            </ProductContextProvider>

        </div>        
    )
}

export default Gesproductos;