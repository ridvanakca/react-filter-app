import React, { useState } from "react";
import FilterPanel from "../../components/Home/FilterPanel";
import SearchBar from "../../components/Home/SearchBar";
import List from "../../components/Home/List";
import "./styles.css";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);

  function handleSelectCategory(event, value) {
    return !value ? null : setSelectedCategory(value);
  }

  function handleSelectRating(event, value) {
    return !value ? null : setSelectedRating(value);
  }

  return (
    <div className='home'>
      <SearchBar />

      <div className='home_panelList-wrap'>
        <div className='home_panel-wrap'>
          <FilterPanel selectToggle={handleSelectCategory} selectedCategory={selectedCategory} selectRating={handleSelectRating} selectedRating={selectedRating} />
        </div>
        <div className='home_list-wrap'>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
