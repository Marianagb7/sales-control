import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect} from 'react';
import { Spinner } from 'reactstrap';

const PrivateRoute = ({children}) => {
    const { isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently } = useAuth0();

    useEffect(() => {

        const fetchAuth0Token = async ()=>{
            const accesToken = await getAccessTokenSilently({
            audience: 'api-autenticacion-appventas-mintic',
        });
        localStorage.setItem("token", accesToken);
        }
        if (isAuthenticated){
            fetchAuth0Token();
        }
    }, [isAuthenticated, getAccessTokenSilently]);

    if (isLoading) 
        return (
            <Spinner
                color="secondary"
                size="sm"
            >
            ...
            </Spinner>
        );

    if (!isAuthenticated){
        return loginWithRedirect();
    }

    return <>{children}</>;
    };

export default PrivateRoute;
