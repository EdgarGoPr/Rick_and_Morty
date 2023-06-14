import React from "react";
import './NavBar.css';
import SearchBar from './SearchBar';

export default function NavBar({onSearch}) {
  return (
  <div className = 'nav'>
    <SearchBar onSearch = {onSearch}/>
  </div>
  );
}
