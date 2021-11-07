import React from 'react';
import Sidebar from './Sidebar'

const PrivateLayout = ({Children})=> {
    return (
        <div>
            <Sidebar/>
            {Children}
        </div>
    )
};


export default PrivateLayout;
