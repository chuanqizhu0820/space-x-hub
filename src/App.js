import React from "react";
import { Provider } from "react-redux";
import './App.css';
import Rockets from "./components/Rockets";
import { Missions } from './components/Missions';
import store from './Redux/configureStore';


function App() {
  return (
    <>
      <Provider store={store}>
        <Rockets />
        <Missions />
      </Provider>
    </>
  );
}

export default App;
