import React from 'react';
import logo from '../../img/Nîmes.svg';
import facebookImg from '../../img/Vector-3.svg';
import instaImg from '../../img/Vector-4.svg';
import pinsetImg from '../../img/Vector-5.svg';
import twitImg from '../../img/Vector-6.svg';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container main-footer-wrapper">
        <a className="main-footer-logo" href="index.html">
          <img src={logo} 
              style={{width: 75, height: 17, color: 'black'}}
              alt="Logo"></img>
        </a>
        <ul className="footer-navigation">
          <li className="footer-navigation-item">
            <a className="footer-navigation-link" href="#">Shop</a>
          </li>
          <li className="footer-navigation-item">
            <a className="footer-navigation-link" href="#">Delivery</a>
          </li>
          <li className="footer-navigation-item">
            <a className="footer-navigation-link" href="#">Service</a>
          </li>
          <li className="footer-navigation-item">
            <a className="footer-navigation-link" href="#">Sitemap</a>
          </li>
          <li className="footer-navigation-item">
            <a className="footer-navigation-link" href="#">Contacts</a>
          </li>
        </ul>

        <ul className="social">
          <li className="social-item">
            <a href="#">
              <img src={facebookImg} 
                  style={{width: 12, height: 20, background: 'black'}}
                  alt="Facebook"></img>
            </a>
          </li>
          <li className="social-item">
            <a href="#">
              <img src={instaImg} 
                  style={{width: 20, height: 20, background: 'black'}}
                  alt="Instagram"></img>
            </a>
          </li>
          <li className="social-item">
            <a href="#">
              <img src={pinsetImg}
                  style={{width: 21, height: 21, background: 'black'}}
                  alt="Pinterest"></img>
            </a>
          </li>
          <li className="social-item">
            <a href="#">
              <img src={twitImg}
                  style={{width: 22, height: 18, background: 'black'}}  
                  alt="Twitter"></img>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;