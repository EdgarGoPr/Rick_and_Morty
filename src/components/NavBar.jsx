import React from "react";
import './NavBar.css';
import SearchBar from './SearchBar';
import About from './About'
import {Link} from 'react-router-dom'

export default function NavBar({onSearch}) {
  return (
  <div className = 'nav'>
    <SearchBar onSearch = {onSearch}/>
    <Link>
      <button path = '/about' element = {About}>About</button>
      <button path = '/home'>Home</button>
    </Link>
  </div>
  );
}
