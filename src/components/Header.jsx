import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ login }) => {
  const navigate = useNavigate();
  return (
    <div className="headerContainer flex a-center j-between">
      <div className="logo">
        <img src={require("../assets/logo.png")} alt="logo" />
      </div>
      <button onClick={() => navigate(!login ? "/login" : "/signup")}>
        {!login ? "Log In" : "Sign Up"}
      </button>
    </div>
  );
};

export default Header;
