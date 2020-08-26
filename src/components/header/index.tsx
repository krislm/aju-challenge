import React from 'react';
import logo from '../../assets/logo.svg';
import "./header.scss";

function Header() {
    return (
        <header className="header">
            <img src={logo} className="header__logo" alt="spark" />
            <div className="header__menu">
                <a href="#" className="link margin">Help</a>
                <a href="#" className="link margin">FAQ</a>
                <a href="#" className="link margin">About</a>
                <a href="#" className="link margin--left red bold underline">Preorder</a>
            </div>
        </header>
    );
}

export default Header;