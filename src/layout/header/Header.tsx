import React, { useState } from 'react';
import logo from './spaceXlogo.png';
import './Header.css';
import menuIcon from '../../assets/icons/menuIcon.svg'

const options = ['Главная', 'Технология', 'График полетов', 'Гарантии', 'О компании', 'Контакты'];

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="header-wrapper">
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                    <button className="menu-button" onClick={toggleMenu}>
                        <img src={menuIcon} />
                    </button>
                </div>
                <div className={`nav ${isMenuOpen ? 'open' : ''}`}>
                    {options.map((el, index) => (
                        <div className="nav-item" key={index}>
                            {el}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
