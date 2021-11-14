import express from "express";
import cors from "cors";
import morgan from "morgan";
import pkg from '../package.json';
import productsRoutes from './routes/products.routes';
import salesRoutes from './routes/sales.routes';
import usersRoutes from './routes/users.routes';
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
<<<<<<< HEAD
app.use(jwtCheck);


=======
//app.use(jwtCheck);
>>>>>>> e992176186799498250e9924e6507a23e99ad272

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
app.use(usersRoutes);

export default app;