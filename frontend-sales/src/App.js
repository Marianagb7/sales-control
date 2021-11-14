import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Index from './pages/Index'
import Usuarios from './pages/admin/Usuarios';
import Productos from './pages/admin/Productos';
import GesProductos from './pages/admin/GesProductos'
import Ventas from './pages/admin/Ventas';
import GesVentas from './pages/admin/GesVentas';
import NavbarNav from './layout/NavbarNav';
import Sidebar from './layout/Sidebar'
import { Auth0Provider } from '@auth0/auth0-react';
import './styles/App.scss';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return ( 
    <Auth0Provider
      domain="misiontic-appventas.us.auth0.com"
      clientId="hD6ENm2krarGEQqipTyNHig7qEfm3m4x"
      redirectUri="http://localhost:3000/admin"
      audience= 'api-autenticacion-appventas-mintic'
    >
      <Router>
        <Switch>
          <Route path={['/admin', '/admin/usuarios', '/admin/productos',
          '/admin/gestionproductos', '/admin/ventas', '/admin/gestionventas']}>
            <PrivateRoute>
              <Switch>
                <div className="flex">
                  <Sidebar/>
                  <div className= "content w-100">
                    <NavbarNav/>         
                    <Route path="/admin" exact={true} component={Admin} />
                    <Route path="/admin/usuarios" exact={true} component={Usuarios} />
                    <Route path="/admin/productos" exact={true} component={Productos} />
                    <Route path="/admin/gestionproductos" exact={true} component={GesProductos} />
                    <Route path="/admin/ventas" exact={true} component={Ventas} />
                    <Route path="/admin/gestionventas" exact={true} component={GesVentas} />
                  </div>
                </div>
              </Switch> 
            </PrivateRoute>   
<<<<<<< HEAD
          </Route>   

=======
          </Route>        
>>>>>>> e992176186799498250e9924e6507a23e99ad272
          <Route path={['/']}> 
          <Switch>
            <Route path='/'>
              <Login/> 
            </Route>  
          </Switch> 
<<<<<<< HEAD
          </Route>       
=======
          </Route>             
>>>>>>> e992176186799498250e9924e6507a23e99ad272
                
        </Switch>
      </Router>     
    </Auth0Provider>     
        
  );
}

export default App;