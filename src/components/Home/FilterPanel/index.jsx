import React from "react";
import FilterListToggle from "../../common/FilterListToggle";
import "./styles.css";
import { categoryList, ratingList } from "../../../data";
import CheckboxProton from "../../common/CheckboxProton";
import SliderProton from "../../common/SliderProton";

const FilterPanel = ({ selectedCategory, selectToggle, selectedRating, selectRating, cuisines, changeChecked, selectedPrice, changedPrice }) => {
  return (
    <div>
      {/* Category */}
      <div className='input-group'>
        <p className='label'>Category</p>
        <FilterListToggle options={categoryList} value={selectedCategory} selectToggle={selectToggle} />
      </div>
      {/* Cuisine */}
      <div className='input-group'>
        <p className='label'>Cuisine</p>
        {cuisines.map((cuisine) => (
          <CheckboxProton key={cuisine.id} cuisine={cuisine} changeChecked={changeChecked} />
        ))}
      </div>
      {/* Price Range */}
      <div className='input-group'>
        <p className='label-range'>Price Range</p>
        <SliderProton value={selectedPrice} changedPrice={changedPrice} />
      </div>
      {/* Star Rating */}
      <div className='input-group'>
        <p className='label'>Star Rating</p>
        <FilterListToggle options={ratingList} value={selectedRating} selectToggle={selectRating} />
      </div>
    </div>
  );
};

export default FilterPanel;
