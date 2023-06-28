import logo from '../../logo.jpg';
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>

            <nav>
                <img src={logo} alt="" />
                <div className='navigation'>

                    <a href="#home">Home</a>
                    <a href="#Shop">Shop</a>
                    <a href="#Oder">Oder</a>
                    <a href="#about">About</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;