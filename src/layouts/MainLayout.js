import {Outlet} from "react-router-dom";

import {Header} from "../components";
import css from './MainLayout.module.css'
import {useSelector} from "react-redux";

const MainLayout = () => {
    const {themeCheck} = useSelector(state => state.theme)

    return (
        <div className={themeCheck ? css.black : css.white}>
            <Header />
            <Outlet/>
        </div>
    );
};

export {MainLayout};