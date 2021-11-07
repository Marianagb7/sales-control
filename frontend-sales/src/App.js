import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PublictLayout from './layout/PublictLayout';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Index from './pages/Index'
import Usuarios from './pages/admin/Usuarios';
import Productos from './pages/admin/Productos';
<<<<<<< HEAD
import GesProductos from './pages/admin/GesProductos'
import Ventas from './pages/admin/Ventas';
import GesVentas from './pages/admin/GesVentas'
import Sidebar from './layout/Sidebar'
import NavbarNav from './layout/NavbarNav'

=======
import { Auth0Provider } from '@auth0/auth0-react';
>>>>>>> 688717cffcbbab68e482c8f860d179e1923b7b22
import './styles/App.scss';


function App() {
  return (    
<<<<<<< HEAD
    <Router>
      <Switch>
        <Route path={['/admin', '/admin/usuarios', '/admin/productos',
         '/admin/gestionproductos', '/admin/ventas', '/admin/gestionventas']}>
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
        </Route>        
        <Route path={['/login']}> 
        <Switch>
          <Route path='/login'>
            <Login/> 
          </Route>  
        </Switch> 
        </Route>                       
        <Route path={['/']}>
          <PublictLayout>
            <Route path='/'>
            <Index/>
            </Route>
         </PublictLayout>
        </Route>      
               
      </Switch>
    </Router>     
=======
    <Auth0Provider
      domain="misiontic-appventas.us.auth0.com"
      clientId="hD6ENm2krarGEQqipTyNHig7qEfm3m4x"
      redirectUri={window.location.origin}
      audience= 'api-autenticacion-appventas-mintic'
    > 
      <Router>
        <Switch>
          <Route path={['/admin', '/admin/productos']}>
            <PrivateLayout>
              <Switch>
                <Route path='/admin/productos'>
                  <Productos/>
                </Route>
                <Route path='/admin'>
                  <Admin/>
                </Route>
              </Switch>
            </PrivateLayout>
          </Route>
          <Route path={['/login']}> 
          <Switch>
            <Route path='/login'>
              <Login/> 
            </Route>  
          </Switch> 
          </Route>                       
          <Route path={['/']}>
            <PublictLayout>
              <Route path='/'>
              <Index/>
              </Route>
            </PublictLayout>
          </Route>        
        
        </Switch>
      </Router>
    </Auth0Provider>     
>>>>>>> 688717cffcbbab68e482c8f860d179e1923b7b22
        
        
  );
}

export default App;