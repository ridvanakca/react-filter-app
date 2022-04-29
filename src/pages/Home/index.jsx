import React from "react";
import FilterPanel from "../../components/Home/FilterPanel";
import SearchBar from "../../components/Home/SearchBar";
import List from "../../components/Home/List";
import "./styles.css";

const Home = () => {
  return (
    <div className='home'>
      <SearchBar />

      <div className='home_panelList-wrap'>
        <div className='home_panel-wrap'>
          <FilterPanel />
        </div>
        <div className='home_list-wrap'>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
