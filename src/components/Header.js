import React from 'react';
import Menu from '../assets/images/menu-white.svg'
import '../assets/css/Header.css'
 
class Header extends React.Component{
    render () {
        return (
            <div className = 'Header'>
                <div className = 'Header-title'>
                    OPLI
                </div>

                <div className = 'Header-menu'>
                    <img className = 'Header-menu-logo' src = {Menu}></img>
                </div>
            </div>

        );
    }
}

export default Header;