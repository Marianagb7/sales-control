import Product from '../models/Product';


//Crear producto
export const createProduct = async (req, res) => {
    const product = new Product(req.body);
    try {
        await product.save();
        res.json({ message: '!Se almacenó correctamente' });
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({
                message: `Ya existe un producto con este identificador: ${req.body.sku}`,
            });
        } else {
            res.status(400).json({
                message:'Error al procesar petición'
            });
        }
    }    

};

// listar productos

export const getProducts = async (req, res) => {
    
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message:'Error procesar la petición'
        });
        next();
    } 
    
};
//Producto Id
export const getProductById = async (req, res) => {
    const { productId } = req.params;
  
    const product = await Product.findById(productId);
    res.status(200).json(product);
};
// Actualizar producto
export const updateProductById = async (req, res) => {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.productId,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json({ message:'producto actualizado'});
  };

//Eliminar producto
export const deleteProductById = async (req, res) => {
    const { productId } = req.params;
  
    await Product.findByIdAndDelete(productId);
      
    res.status(200).json({ message:'Producto eliminado'});
};

// Buscar producto Sku

export const searchSku = async (req, res) => {

    try {
        const products = await Product.find({

          sku : new RegExp(req.params.query, 'i'),
        });
        res.json(products);
    } catch (error) {
        res.status(400).json( {
            message: 'Error procesar petición'
        });

    }
};
// Buscar producto por descripción

export const searchDescription = async (req, res) => {

    try {
        const products = await Product.find({

            description : new RegExp(req.params.query, 'i'),
        });
        res.json(products);
    } catch (error) {
        res.status(400).json( {
            message: 'Error procesar petición'
        });

    }
};

