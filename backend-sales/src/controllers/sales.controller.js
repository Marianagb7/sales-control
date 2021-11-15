import Sale from '../models/Sale';

export const createSale = async (req, res) => {
    const { salecode, customer, cardnumber, product, amount, unitprice, seller, state } = req.body;
  
    try {
      const newSale = new Sale({
        salecode,
        customer,
        cardnumber,
        product,
        amount,
        unitprice,
        seller,
        state
      });
  
      const saleSaved = await newSale.save();
  
      res.status(201).json(saleSaved);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
};


//Listar ventas
export const getSales = async (req, res) => {

    try {
        const sales = await Sale.find({});
        res.json(sales);
    } catch (error) {
        res.status(400).json({
            message:'Error procesar la petición'
        });
        next();
    }
};

//Venta id
export const getSaleById = async (req, res) => {
    const {saleId} = req.params;

    const sale = await Sale.findById(saleId);
    res.status(200).json(sale);
};

// Actualizar venta
export const updateSaleById = async (req, res) =>{
    const updatedSale = await Sale.findByIdAndUpdate(
        req.params.saleId,
        req.body,
        {
            new: true,
        }
    );
    res.status(200).json({ message: 'Venta actualizada'});
};

// Eliminar venta
export const deleteSaleById = async (req, res) => {
    const {saleId} = req.params;

    await Sale.findByIdAndDelete(saleId);
    res.status(200).json({ message: 'Venta eliminada'});
};

// Buscar venta por identificador de venta
export const searchSalecode = async (req, res) => {

    try {
        const sales = await Sale.find({

            salecode : new RegExp(req.params.query, 'i'),
        });
        res.json(sales);
    } catch (error) {
        res.status(400).json( {
            message: 'Error procesar petición'
        });
    }
};

// Buscar venta por nombre del cliente
export const searchCustomer = async (req, res) => {

    try {
        const sales = await Sale.find({

            customer: new RegExp(req.params.query, 'i') 
            
        });
        res.json(sales);
    } catch (error) {
        res.status(400).json({
            message: 'Error procesar petición'
        });
    }
};


