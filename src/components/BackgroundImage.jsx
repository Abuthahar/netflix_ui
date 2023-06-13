import React from "react";
import './component.scss'

const BackgroundImage = () => {
  return <div className="bgImgContainer">
    <img src={require("../assets/login.jpg")} alt="background" />
  </div>;
};

export default BackgroundImage;
