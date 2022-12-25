import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';
import {NavLink} from "react-router-dom"
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
               
                <NavLink to="/shop" >Shop</NavLink>
                <NavLink to="/orders">Orders</NavLink>
                <NavLink to="/inventory">Inventory</NavLink>
                <NavLink to="/about">About</NavLink>

            </div>
        </nav>
    );
};

export default Header;