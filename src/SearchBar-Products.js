import React, { useState, useEffect } from "react";
import './select.css';

function SearchBarProducts({ onChange }) {
    const [searchedValue, setSearchedValue] = useState("");
    const [categories, setCategories] = useState([]);
    const [selectedOption, setSelectedOption] = useState("All");

    useEffect(() => {

        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then((response) => response.json())
            .then((data) => {
                const allCategories = [{ strCategory: "All" }, ...data.categories];
                setCategories(allCategories);
            })
            .catch((error) => {
                console.error("Error fetching categories:", error);
            });
    }, []);

    function handleSearch(event) {
        const inputValue = event.target.value.toLowerCase();
        setSearchedValue(inputValue);
        onChange(inputValue);
    }

    function handleSelectChange(category) {
        setSelectedOption(category);
        onChange(category === "All" ? "" : category);
    }

    return (
        <div className="SearchBar-Products">
            <div className="placing">
                <form>
                    <div className="input-select">
                        <input type="search" placeholder="Search..." name="search" value={searchedValue} onChange={handleSearch} />
                    </div>
                </form>
            </div>
            {categories.length > 0 && (
                <div className="select">
                    <div className="container">
                        <button type="button" className="btn-select" value={selectedOption}>
                            <div>{selectedOption}</div>
                            <i className="material-icons">Food</i>
                            <ul className="dropdown">
                                {categories.map((category) => (
                                    <li key={category.strCategory} category={category.strCategory} value={category.strCategory}>
                                        <a onClick={() => handleSelectChange(category.strCategory)}>{category.strCategory}</a>
                                    </li>
                                ))}
                            </ul>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SearchBarProducts;
