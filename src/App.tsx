import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";

import logo from "./assets/img/logo2.png";

import { GiButterflyFlower } from "react-icons/gi";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="app-content">
        <div className="sidebar-offset"></div>
        <Home />
      </div>
    </div>
  );
}

export default App;
