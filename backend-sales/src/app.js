import express from "express";
import cors from "cors";
import morgan from "morgan";
import pkg from '../package.json';
import productsRoutes from './routes/products.routes';
import salesRoutes from './routes/sales.routes';
import userRoutes from './routes/users.routes'
//import jwt from 'express-jwt';
//import jwks from 'jwks-rsa';

/*var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://misiontic-appventas.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'api-autenticacion-appventas-mintic',
  issuer: 'https://misiontic-appventas.us.auth0.com/',
  algorithms: ['RS256']
});*/


const app = express()
app.set('pkg', pkg);


app.use(morgan('dev'));
app.use(express. json());
app.use(cors());
//app.use(jwtCheck);






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
app.use(userRoutes);

export default app;
