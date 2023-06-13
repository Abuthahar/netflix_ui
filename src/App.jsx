import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/RegisterAndLogin/Login";
import Netflix from "./pages/Netflix";
import Signup from "./pages/RegisterAndLogin/Signup";
import Player from "./pages/player/Player";

function App() {
  return ( 
    <BrowserRouter>
    <Routes>
      <Route excat path="/login" element={<Login />} />
      <Route excat path="/signup" element={<Signup />} />
      <Route excat path="/" element={<Netflix />} />
      <Route excat path="/player" element={<Player />} />
    </Routes>
    </BrowserRouter>
   );
}

export default App;