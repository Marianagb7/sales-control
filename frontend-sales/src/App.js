import React from 'react';
import PublictLayout from './layout/PublictLayout.jsx';
import Login from './pages/Login.jsx';
import Registro from './pages/Registro';
import Admin from './pages/Admin.jsx';
import Index from './pages/Index'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/App.scss';

function App() {
  return (    
    <Router>
      <Switch>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/registro'>
          <Registro/>
        </Route>
        <Route path='/admin'>
          <Admin/>
        </Route>
        <Route path='/'>
          <PublictLayout>
          <Index/>
        </PublictLayout>
          
        </Route>
      </Switch>
    </Router>
    
    
  );
}

export default App;