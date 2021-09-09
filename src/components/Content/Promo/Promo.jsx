import React from 'react';
import promo from '../../../img/matheus 1.png';

const Promo = () => {
  return (
    <section className="promo">
      <div className="container promo-wrapper">
        <div className="promo-text-column">
          <h2 className="promo-title">The quality you deserve</h2>
          <p className="promo-text">Denim</p>
          <a className="button" href="#">Check new collection</a>
          <a href="#">Go to next block</a>
        </div>
        <div className="promo-img-column">
          <img src={promo}
              style={{ width: 430, height: 517 }}
              alt="New collection">
          </img>
        </div>
      </div>
    </section>
  )
}

export default Promo;