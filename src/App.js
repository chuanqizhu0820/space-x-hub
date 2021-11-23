import React from "react";
import { Missions } from "./components/Missions";
import './App.css';
import Rockets from "./components/Rockets";
import { useDispatch } from 'react-redux';
import { loadRockets } from './Redux/rockets/Rockets';

function App() {
  return (
    <>
        <Rockets />
        <Missions />
    </>
  );
}

export default App;
