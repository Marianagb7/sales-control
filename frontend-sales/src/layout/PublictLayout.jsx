import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

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