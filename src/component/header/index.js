import React from 'react';
import './styles.scss';
import logo from '../../logo.svg';
const Header = (props) => {
    return (
        <header>
            <div className="wrap">
                <div className="logo">
                    <img src={ logo } />
                </div>
            </div>

        </header>
    );
}

export default Header;