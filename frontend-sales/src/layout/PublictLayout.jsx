import React from 'react';
import Footer from '../layout/publictlayaut/Footer';
import Navbar from '../layout/publictlayaut/Navbar';

const PublictLayout = ({ children })=> {
    return (
        <div className="flex-column justify-content-between">
            <Navbar/>            
            <main>{children}</main>            
            <Footer/>

        </div>
    )
};


export default PublictLayout;