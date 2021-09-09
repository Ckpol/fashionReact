import React from 'react';
import newsImg from '../../../img/67 1.png';

const News = () => {
  return (
    <section className="news container">
      <header className="section-header">
        <h2 className="section-title">News</h2>
        <a className="show-more" href="catalog.html">View all</a>
      </header>
      <div className="news-wrapper">
        <div className="news-text-column">
          <h2 className="news-title">G- Star Updates Its Sustainable Collection</h2>
          <time className="news-time" datetime="2020-02-12 11:00">Feb 12, 2020</time>
          <p className="news-text">
              G-Star Raw is pushing the sustainability movement forward with a collection of stretch denim items for spring 2020 which is particularly designed for reuse. G-Star seeks to contribute to positive change in the denim industry, by using each sustainable innovation as a building block for a future. The brand has been working to recycle its jeans into new since 2012 when it released the first-ever Cradle to Cradle (C2C) Gold level-certified denim in late 2017.
          </p>
          <a className="button" href="#">Read more…</a>
        </div>
        <div className="news-img-column">
          <img src={newsImg}
              style={{width: 700, height: 462}}
              alt="Collection stretch denim items for spring 2020"></img>
        </div>
      </div>
    </section>
  );
}

export default News;