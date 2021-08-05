import React from 'react';
import './Header.css';
import Logo from '../../../logos/Logo';

function Header() {
    return (
        <div className="header-wraper">
            <span className="svg-nfLogo nfLogo">
                <Logo/>
            </span>
        </div>
    )
}

export default Header
