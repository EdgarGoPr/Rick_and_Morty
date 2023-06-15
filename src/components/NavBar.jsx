import React from "react";
import './NavBar.css';
import SearchBar from './SearchBar';
import {Link} from 'react-router-dom'

export default function NavBar({onSearch}) {
  return (
  <div className = 'nav'>
    <SearchBar onSearch = {onSearch}/>
    <Link to = '/about'>
      <button >About</button>
    </Link>
    <Link to = '/home'>
      <button >Home</button>
    </Link>

  </div>
  );
}
