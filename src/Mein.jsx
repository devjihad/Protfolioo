import React from 'react';
import Navbar from './Component/Navbar';
import { Outlet } from 'react-router';

const Mein = () => {
    return (
        <div>
            <Navbar/>
            <Outlet></Outlet>
        </div>
    );
};

export default Mein;