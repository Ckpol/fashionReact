import React from 'react';
import Promo from './Promo/Promo.jsx';
import Bestsellers from './Bestsellers/Bestsellers.jsx';
import News from './News/News.jsx';
import CatalogList from './CatalogList/CatalogList.jsx';


const Content = () => {
    return (
        <main>
            <h1 className="visually-hidden">Denim Clothing & Outfits</h1>
            <Promo/>
            <Bestsellers/>
            <News/>
            <CatalogList/>
        </main>

    );
}

export default Content;