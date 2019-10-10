import React from 'react';
import './styles.scss';
import logo from '../../logo.svg';
const Header = (props) => {
    return (
        <header className="headerComponent">
            <div className="wrap">
                <div className="logo">
                    <img className="logoIMG" src={ logo } />
                </div>
            </div>

        </header>
    );
}

export default Header;