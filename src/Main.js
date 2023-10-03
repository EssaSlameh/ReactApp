import React, { useEffect, useState } from 'react';
import CardComp from './Cards';
import SearchBarProducts from './SearchBar-Products';
import './Search-Bar-Products.css';
import './Cards.css';

function Main() {
  const [items, setItems] = useState([]);
  const [searchedValue, setSearchedValue] = useState("");

  async function getData(searchQuery) {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`;
    try {
      const response = await fetch(url);
      const result = await response.json();
      setItems(result.meals || []); 
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData(searchedValue);
  }, [searchedValue]);

  return (
    <div>
      <SearchBarProducts onChange={setSearchedValue} />
      <div className="card-container">
        {items && items.map((meal) => (
          <CardComp
            strMealThumb={meal.strMealThumb}
            title={meal.strMeal}
            description={meal.strInstructions}
            strCategory={meal.strCategory}
            key={meal.idMeal}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;
