import React from 'react';
import jeansImg from '../../../img/5 1.png';
import shirtsImg from '../../../img/52 1.png';
import jacket3Img from '../../../img/53 1.png';
import overalls3Img from '../../../img/54 1.png';

const CatalogList = () => {
  return (
    <section className="categories container">
      <header className="section-header">
        <h2 className="section-title">Shop by category</h2>
        <a className="show-more" href="catalog.html">View all</a>
      </header>
      <ul className="catalog-list">
        <li className="catalog-item">
          <a className="catalog-item-link" href="#">
            <h3>Jeans</h3>
            <img src={jeansImg}
                style={{width: 270, height: 349}}
                alt="Jeans"></img>
          </a>
        </li>
        <li className="catalog-item">
          <a className="catalog-item-link" href="#">
            <h3>Shirts</h3>
            <img src={shirtsImg}
                style={{width: 270, height: 349}}
                alt="Shirts"></img>
          </a>
        </li>
        <li className="catalog-item">
          <a className="catalog-item-link" href="#">
            <h3>Jacket</h3>
            <img src={jacket3Img}
                style={{width: 270, height: 349}}
                alt="Jacket"></img>
          </a>
        </li>
        <li className="catalog-item">
          <a className="catalog-item-link" href="#">
            <h3>Overalls</h3>
            <img src={overalls3Img}
                style={{width: 270, height: 349}}
                alt="Overalls"></img>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default CatalogList;