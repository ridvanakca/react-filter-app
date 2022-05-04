import React, { useState, useEffect } from "react";
import FilterPanel from "../../components/Home/FilterPanel";
import SearchBar from "../../components/Home/SearchBar";
import List from "../../components/Home/List";
import "./styles.css";
import { dataList } from "../../data";
import EmptyView from "../../components/common/EmptyView";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);
  const [list, setList] = useState(dataList);
  const [inputSearch, setInputSearch] = useState("");
  const [resultFound, setResultFound] = useState(false);
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
      label: "Italian",
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

  function applyFilter() {
    let updatedList = dataList;

    // rating filter
    if (selectedRating) {
      updatedList = updatedList.filter((item) => parseInt(item.rating) === parseInt(selectedRating));
    }

    // category filter
    if (selectedCategory) {
      updatedList = updatedList.filter((item) => item.category === selectedCategory);
    }

    // cuisine filter
    // ['american', 'chinese']
    const checkedCuisine = cuisines.filter((item) => item.checked).map((item) => item.label.toLowerCase());
    if (checkedCuisine.length) {
      updatedList = updatedList.filter((item) => checkedCuisine.includes(item.cuisine));
    }

    // price filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter((item) => item.price >= minPrice && item.price <= maxPrice);

    // inputSearch filter
    if (inputSearch) {
      updatedList = updatedList.filter((item) => item.title.toLowerCase().search(inputSearch.toLowerCase().trim()) !== -1);
    }

    setList(updatedList);

    !updatedList.length ? setResultFound(false) : setResultFound(true);
  }

  useEffect(() => {
    applyFilter();
  }, [selectedRating, selectedCategory, cuisines, selectedPrice, inputSearch]);

  return (
    <div className='home'>
      <SearchBar value={inputSearch} changeInput={(e) => setInputSearch(e.target.value)} />

      <div className='home_panelList-wrap'>
        <div className='home_panel-wrap'>
          <FilterPanel selectToggle={handleSelectCategory} selectedCategory={selectedCategory} selectRating={handleSelectRating} selectedRating={selectedRating} cuisines={cuisines} changeChecked={handleChangeChecked} selectedPrice={selectedPrice} changedPrice={handleChangedPrice} />
        </div>
        <div className='home_list-wrap'>{resultFound ? <List list={list} /> : <EmptyView />}</div>
      </div>
    </div>
  );
};

export default Home;
