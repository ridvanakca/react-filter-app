import React from "react";
import FilterPanel from "../../components/Home/FilterPanel";
import SearchBar from "../../components/Home/SearchBar";
import List from "../../components/Home/List";
import "./styles.css";

const Home = () => {
  return (
    <div>
      {/* Search Bar */}
      <SearchBar />
      {/* Side panels */}
      <FilterPanel />
      {/* List and Empty View */}
      <List />
    </div>
  );
};

export default Home;
