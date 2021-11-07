import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateLayout from './layout/PrivateLayout';
import PublictLayout from './layout/PublictLayout';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Index from './pages/Index'
import Productos from './pages/admin/Productos';
import { Auth0Provider } from '@auth0/auth0-react';
import './styles/App.scss';

function App() {
  return (    
    <Auth0Provider
      domain="misiontic-appventas.us.auth0.com"
      clientId="hD6ENm2krarGEQqipTyNHig7qEfm3m4x"
      redirectUri={window.location.origin}
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
        
        
  );
}

export default App;