import Product from '../models/Product';


//add Product
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

// list product

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
// Product id
export const getProductById = async (req, res, next) => {
    const { productId } = req.params;
  
    const product = await Product.findById(productId);
    res.status(200).json(product);
};


export const updateProductById = async (req, res, next) => {

    try {
        const product = await Product.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            {new:true}
        );
        res.json({
            message: 'Producto actualizado correctamente'
        });
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

export const deleteProductById = async(req,res) => {
    try {
        await Product.findOneAndDelete({_id: req.params.id});
        res.json({ message: 'El producto ha sido eliminado'});
    } catch (error) {
        res.status(400).json({
            message: 'error al procesar petición'
        });
    }

}

