import './Login.css';
import Log from '../assets/log.png';
import {Button} from "reactstrap";
import { useAuth0 } from '@auth0/auth0-react';

function Login(){
   const { loginWithRedirect } = useAuth0();
    return (
     <div>
        <div class="bg-img">
           <div class="contenido">
            <div className="brand" >
              <img src= {Log} alt="Logo"/>
            </div>
            <header>Ebro vinos</header>
            <Button 
               color="warning"
               onClick={() => loginWithRedirect()}
            >
               Iniciar Sesión
            </Button>
              
        
        </div>
        </div>
     </div>
  );
}
export default Login;