import React from 'react';
import { Outlet } from 'react-router';
import NavBer from '../NavBer/NavBer';
import Footer from '../Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <NavBer></NavBer>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;