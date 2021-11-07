import React from 'react';
import NavbarNav from './NavbarNav';
import Sidebar from './Sidebar'
import PrivateRoute from '../components/PrivateRoute';

const PrivateLayout = ({Children})=> {
    return (
        <PrivateRoute>
            <div className="flex">
                <Sidebar/>
                <div className="content w-100">
                    <NavbarNav/>
                    <main >
                        {Children}
                    </main>
                </div>
            </div>
        </PrivateRoute>
    )
};


export default PrivateLayout;
