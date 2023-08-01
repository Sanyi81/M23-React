import React from 'react';
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
    MAIN
            <Outlet/>
        </div>
    );
};

export {MainLayout};