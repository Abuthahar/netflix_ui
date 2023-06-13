import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CONSTANT } from "../utils/constant";
import { FaPowerOff, FaSearch } from "react-icons/fa";
import { firebaseAuth } from "../utils/firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";

export const NavBar = ({ isScrolled }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setSInputHover] = useState(false);

  const navigate = useNavigate();

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/login");
  });

  return (
    <div className="navbarContainer">
      <nav className={`flex ${isScrolled ? "scroll" : ""}`}>
        <div className="left flex a-center">
          <div className="brand flex a-center">
            <img src={require("../assets/logo.png")} alt="logo"></img>
          </div>
          <ul className="links flex">
            {CONSTANT.NAV_LINK.map(({ name, link }) => {
              return (
                <li key={name}>
                  <Link key={name} to={link}>
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex right a-center">
          <div className={`search ${showSearch ? "showSearch" : ""}`}>
            <button
              onFocus={() => setShowSearch(true)}
              onBlur={() => {
                if (!inputHover) setShowSearch(false);
              }}
            >
              <FaSearch />
            </button>
            <input
              type="text"
              placeholder="Search"
              onMouseEnter={() => setSInputHover(true)}
              onMouseLeave={() => setSInputHover(false)}
              onBlur={() => {
                setSInputHover(false);
                setShowSearch(false);
              }}
            />
            <button onClick={() => signOut(firebaseAuth)}>
              <FaPowerOff />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};
