import React from 'react';
import {NavLink} from "react-router-dom";

import css from './Main.module.css'

const Main = () => {
    return (
        <div className={css.Main}>
            <NavLink to={'todos'}>Todos</NavLink>
            <NavLink to={'albums'}>Albums</NavLink>
            <NavLink to={'comments'}>Comments</NavLink>
        </div>
    );
};

export {Main};