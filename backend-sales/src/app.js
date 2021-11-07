import express from "express";
import cors from "cors";
import morgan from "morgan";
import pkg from '../package.json';
import productsRoutes from './routes/products.routes';
import salesRoutes from './routes/sales.routes';




const app = express()
app.set('pkg', pkg);


app.use(morgan('dev'));
app.use(express. json());
app.use(cors());






app.get('/',(req,res)=>{
    res.json({
        name:app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })
})
app.use('/api/products', productsRoutes);
app.use('/api/sales', salesRoutes);


export default app;