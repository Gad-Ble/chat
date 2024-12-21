import React from 'react';
import Classes from './Header.module.css';
import logo from '../img/colorlogo_new.png';
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <div>
            <header>
                <div className={Classes.container}>
                    <div className={Classes.header_info}>
                        <NavLink>
                            <img src={logo} alt="logo"/>
                        </NavLink>
                        <NavLink>Борислав Комендант</NavLink>
                    </div>
                </div>
            </header>
        </div>
    )
};

export default Header;