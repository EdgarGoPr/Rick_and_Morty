import React from "react";
import "./NavBar.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

export default function NavBar({ onSearch, logout }) {
  return (
    <div className="nav">
      <button onClick={logout} className="LogOut"></button>
      <div className = 'MeeseekAsomandose'></div>
      <SearchBar onSearch={onSearch} />
      <div className="links_container">
        <Link to="/home">
          <button className="Home"></button>
        </Link>
        <Link to="/about">
          <button className="About"></button>
        </Link>
      </div>
    </div>
  );
}
