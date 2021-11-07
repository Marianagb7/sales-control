import { useAuth0 } from '@auth0/auth0-react'
import React from 'react';
import {Link} from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

    if (isLoading) return <div>Loading...</div>;

    if (!isAuthenticated){
        return loginWithRedirect();
    }

    return <>{children}</>;
    };

    /*
        <div>
            <div>
                No estas autorizado para ver este sitio
            </div>
            <Link to='/'>
                <span className="text-blue-500 font">
                    Llévame al Home
                </span>
            </Link>
            
        </div>
    
    )
}*/

export default PrivateRoute
