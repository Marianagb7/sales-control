import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateLayout from './layout/AuthLayout';
import PublictLayout from './layout/PublictLayout';
import AuthLayout from './layout/AuthLayout';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Registro from './pages/Registro'
import Index from './pages/Index'
import './styles/App.scss';

function App() {
  return (  
    <Router>
      <Switch>
        <Route path={['/admin']}>
          <PrivateLayout>
            <Switch>
              <Route path='/admin'>
                <Admin/>
              </Route>
            </Switch>
          </PrivateLayout>
        </Route>
        <Route path={['/login', '/registro']}>
          <AuthLayout>
            <Switch>
              <Route path='/login'>
                <Login/>
              </Route>
              <Route path='/registro'>
                <Registro/>
              </Route>
            </Switch>
          </AuthLayout>
        </Route>
        <Route path={['/']}>
          <PublictLayout>
            <Switch>
              <Route path='/'>
                <Index/>
              </Route>
            </Switch>
          </PublictLayout>
        </Route>
      </Switch>
    </Router>  
    
    
    
  );
}

export default App;