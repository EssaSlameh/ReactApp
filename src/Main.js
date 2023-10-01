import React from 'react';
import data from './data.json';
import CardComp from './Cards';
import SearchBarProducts from './SearchBar-Products';
import './Search-Bar-Products.css';
import { useState } from 'react';
import './Cards.css';


function Main() {
  const [items, setItems] = useState(data);

  return (
    <div>
      <SearchBarProducts items={items} setItems={setItems} />
      <div className="card-container">
        {items.map(function (Carditmes) {
          return (
            <CardComp image_url={Carditmes.image_url} title={Carditmes.title} description={Carditmes.description} category={Carditmes.category} />
          );
        })}
      </div>
    </div>
  );
}


export default Main;
