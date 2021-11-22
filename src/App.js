import React from "react";
import { Provider } from "react-redux";
import { Missions } from "./components/Missions";
import store from "./Redux/configureStore";
import './App.css';

function App() {
  return (
    <>
      <Provider store={store}>
        <Missions />
      </Provider>
    </>
  );
}

export default App;
