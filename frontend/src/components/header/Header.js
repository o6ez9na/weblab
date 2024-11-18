import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate(); // Хук для навигации

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchQuery); // Передача результата поиска
    } else {
      console.log("Search query:", searchQuery);
    }
  };

  return (
    <header className="header">
      {/* <div className="header-logo">TOPGUN</div> */}
      <img
        src={process.env.PUBLIC_URL + "/img/logo.png"}
        className="header-logo"
        alt="logo"
      ></img>
      <div>
        <input
          type="text"
          className="header-input"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button className="header-find-button" onClick={handleSearch}>
          Find
        </button>
      </div>
      <div>
        <button className="button-on-header" onClick={() => navigate("/auth")}>
          Sign In
        </button>
        <button
          className="button-on-header"
          onClick={() => navigate("/register")}
        >
          Sign Up
        </button>
      </div>
    </header>
  );
}
