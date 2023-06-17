import React from "react";
import './NavBar.css';
import SearchBar from './SearchBar';
import {Link} from 'react-router-dom'

export default function NavBar({onSearch, logout}) {
  return (
    <div className="nav">
      <div className="nav-left">
        <SearchBar onSearch={onSearch}/>
        <button onClick={logout}>LogOut</button>
      </div>
      <div className="nav-right">
        <Link to='/about'>
          <button>About</button>
        </Link>
        <Link to='/home'>
          <button>Home</button>
        </Link>
      </div>
    </div>
  );
}
