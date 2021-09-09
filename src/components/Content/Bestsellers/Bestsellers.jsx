import React from 'react';
import jacketImg from '../../../img/63 1.png';
import overallsImg from '../../../img/64 1.png';
import jacket2Img from '../../../img/62 1.png';
import overalls2Img from '../../../img/65 1.png';

const Bestsellers = () => {
  return (
    <section className="bestsellers container">
      <header className="section-header">
        <h2 className="section-title">Bestsellers</h2>
        <a className="show-more" href="catalog.html">View all</a>
      </header>

      <ul className="catalog-list">
        <li className="catalog-item">
          <a className="catalog-item-link" href="card.html">
            <h3>Jacket</h3>
            <img src={jacketImg}
                style={{width: 270, height: 349}}
                alt="Jacket"></img>
            <p className="catalog-item-price">$120</p>
          </a>
        </li>

        <li className="catalog-item">
          <a className="catalog-item-link" href="card.html">
            <h3>Overalls</h3>
            <img src={overallsImg}
                style={{width: 270, height: 349}}
                alt="Overalls"></img>
            <p className="catalog-item-price">$140</p>
          </a>
        </li>

        <li className="catalog-item">
          <a className="catalog-item-link" href="card.html">
            <h3>Jacket</h3>
            <img src={jacket2Img}
                style={{width: 270, height: 349}} 
                alt="Jacket"></img>
            <p className="catalog-item-price">$90</p>
          </a>
        </li>

        <li className="catalog-item">
          <a className="catalog-item-link" href="card.html">
            <h3>Overalls</h3>
            <img src={overalls2Img}
                style={{width: 270, height: 349}} 
                alt="Overalls"></img>
            <p className="catalog-item-price">$160</p>
            </a>
        </li>
      </ul>
    </section>
  );
}

export default Bestsellers;