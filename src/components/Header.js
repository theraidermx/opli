import React from 'react';
import Logo from '../assets/images/logo.svg'
import '../assets/css/Header.css'
 
class Header extends React.Component{
    render () {
        return (
            <div className = 'Header'>
                <div className = 'Header-title'>
                    OPLI
                </div>
                
                <div className = 'Header-menu'>
                    <img src = {Logo} className = 'Header-menu-logo'></img>
                </div>
            </div>

        );
    }
}

export default Header;