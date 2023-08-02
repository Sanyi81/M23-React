import React, {Component} from 'react';
import css from './Header.module.css'
import {NavLink} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div className={css.Header}>
                <NavLink to={'cars'}>Cars</NavLink> |
                <NavLink to={'users'}>Users</NavLink> |
                <NavLink to={'comments'}>Comments</NavLink>
            </div>
        );
    }
}

export {Header};