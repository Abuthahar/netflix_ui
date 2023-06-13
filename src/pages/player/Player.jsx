import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./player.scss"

const Player = () => {
  const navigate = useNavigate();

  return (
    <div className="playerContainer">
      <div className="player">
        <BsArrowLeft onClick={() => navigate(-1)} />
      </div>
      <video
        src={require("../../assets/videoSample.mp4")}
        autoPlay
        loop
        controls
        muted
      ></video>
    </div>
  );
};

export default Player;
