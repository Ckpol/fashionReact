import React from 'react';
import logo from '../../img/Nîmes.svg';
import searchImg from '../../img/Vector.svg';
import cartImg from '../../img/Vector-2.svg';
const Header = () => {
    return (
        <header className="main-header">
            <nav className="main-header-nav container">
                <ul className="site-navigation">
                    <li className="site-navigation-item">
                        <a className="link-item" href="#">Woomen</a>
                    </li>
                    <li className="site-navigation-item">
                        <a className="link-item" href="#">Man</a>
                    </li>
                    <li className="site-navigation-item">
                        <a className="link-item" href="#">New</a>
                    </li>
                </ul>

                <a className="main-header-logo">
                    <img src={logo}
                         style={{width:75, height:17, color: 'black', background: 'black'}}
                         alt="Logo"
                    ></img>
                </a>

                <ul className="user-navigation">
                    <li className="user-navigation-item">
                        <a className="link-item" href="#">
                            <img src={searchImg}
                                 style={{width: 20, height: 17}}
                                 alt="Search"></img>
                        </a>
                    </li>
                    <li className="user-navigation-item">
                        <a className="link-item" href="#">
                            <img src={cartImg}
                                 style={{width: 22, height: 20}}
                                 alt="cart"></img>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;