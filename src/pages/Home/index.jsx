import React, { useState } from "react";
import FilterPanel from "../../components/Home/FilterPanel";
import SearchBar from "../../components/Home/SearchBar";
import List from "../../components/Home/List";
import "./styles.css";
import { dataList } from "../../data";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);
  const [list, setList] = useState(dataList);
  const [cuisines, setCuisines] = useState([
    {
      id: 1,
      checked: false,
      label: "American",
    },
    {
      id: 2,
      checked: false,
      label: "Chinese",
    },
    {
      id: 3,
      checked: false,
      label: "Italien",
    },
  ]);

  function handleSelectCategory(event, value) {
    return !value ? null : setSelectedCategory(value);
  }

  function handleSelectRating(event, value) {
    return !value ? null : setSelectedRating(value);
  }

  function handleChangeChecked(id) {
    const cuisinesStateList = cuisines;
    const changeCheckedCuisines = cuisinesStateList.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item));

    setCuisines(changeCheckedCuisines);
  }

  function handleChangedPrice(event, value) {
    setSelectedPrice(value);
  }

  return (
    <div className='home'>
      <SearchBar />

      <div className='home_panelList-wrap'>
        <div className='home_panel-wrap'>
          <FilterPanel selectToggle={handleSelectCategory} selectedCategory={selectedCategory} selectRating={handleSelectRating} selectedRating={selectedRating} cuisines={cuisines} changeChecked={handleChangeChecked} selectedPrice={selectedPrice} changedPrice={handleChangedPrice} />
        </div>
        <div className='home_list-wrap'>
          <List list={list} />
        </div>
      </div>
    </div>
  );
};

export default Home;
