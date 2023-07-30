import React from 'react';

import {Main} from "../../components";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <Main/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};