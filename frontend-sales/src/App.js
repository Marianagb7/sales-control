import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import NavbarNav from './layout/NavbarNav';
import Sidebar from './layout/Sidebar';
import Home from './pages/Home';
import Usuarios from './pages/admin/Usuarios';
import Regproducto from './pages/admin/Regproducto';
import Gesproductos from './pages/admin/Gesproductos'
import Regventas from './pages/admin/Regventas';
import Gesventas from './pages/admin/Gesventas'
import './styles/App.scss';



function App() {
  return (    
    <Router>
      <div className="flex">
        <Sidebar/>
        <div className="content w-100">
          <NavbarNav/>
          <Route path="/" exact={true} component={Home} />
          <Route path="/usuarios" exact={true} component={Usuarios} />
          <Route path="/regproducto" exact={true} component={Regproducto} />
          <Route path="/gesproductos" exact={true} component={Gesproductos} />
          <Route path="/regventas" exact={true} component={Regventas} />
          <Route path="/gesventas" exact={true} component={Gesventas} />


        </div>
      </div>
      
      

    </Router>
    
    
  );
}

export default App;
