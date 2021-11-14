import React from "react";
import GestionUsuarios from '../../components/users/GestionUsuarios';

const Usuarios = () => {
    return (
        <div className="tablelist">
           <h2 className=
           " fw-bold text-secondary text-center ">
            Gestiona de Usuarios!!</h2> 
            <GestionUsuarios/>
       </div>        
    )
}

export default Usuarios;