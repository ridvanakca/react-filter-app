import React from "react";
import FilterListToggle from "../../common/FilterListToggle";
import "./styles.css";
import { categoryList, ratingList } from "../../../data";

const FilterPanel = ({ selectedCategory, selectToggle, selectedRating, selectRating }) => {
  return (
    <div>
      {/* Category */}
      <div className='input-group'>
        <p className='label'>Category</p>
        <FilterListToggle options={categoryList} value={selectedCategory} selectToggle={selectToggle} />
      </div>
      {/* Cuisine */}
      {/* Price Range */}
      {/* Star Rating */}
      <div className='input-group'>
        <p className='label'>Star Rating</p>
        <FilterListToggle options={ratingList} value={selectedRating} selectToggle={selectRating} />
      </div>
    </div>
  );
};

export default FilterPanel;
