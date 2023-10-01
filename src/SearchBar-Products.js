import React, { useState } from "react";
import data from './data.json';

function SearchBarProducts({ items, setItems }) {
    let [searchedValue, setSearchedValue] = useState("");

    function handleSearch(event) {
        let inputValue = event.target.value.toLowerCase();
        setSearchedValue(inputValue);

        let filteredItems = data.filter(item =>
            item.title.toLowerCase().includes(inputValue)
        );

        setItems(filteredItems);
    }

    return (
        <div className="SearchBar-Products">
            <div className="placing">
                <form>
                    <input type="search" placeholder="Search..." name="search" value={searchedValue} onChange={handleSearch} />
                </form>
            </div>
            {items.length === 0 && searchedValue.length > 0 && (
                <div className="no-results-message">No search results found.</div>
            )}
        </div>
    );
}

export default SearchBarProducts;
