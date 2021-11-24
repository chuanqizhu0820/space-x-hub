import React from "react";
import { Provider } from "react-redux";
import './App.css';
import store from './Redux/configureStore';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Missions } from "./components/Missions";
import Rockets from "./components/Rockets";
import { Profile } from "./components/Profile";
import planet from './images/planet.png'


function App() {
  return (
    <>
      <Provider store={store}>
    <Router>
      <div className="header row align-items-center">
        <div className="col-1 offset-1">
          <img src={planet} alt="Planet"></img>
        </div>
        <div className="col-3">
        <h1>Space Traveler's Hub</h1>
        </div>
        <div className="col-6 d-flex flex-row justify-content-end align-items-center">
          <div>
          <Link to="/rockets" className="links">Rockets</Link>
          </div>
          <div>
          <Link to="/missions" className="links">Missions</Link>
          </div>
          <div>
          <Link to="/profile" className="links">My Profile</Link>
          </div>
        </div>

      </div>

      <hr />

      <Switch>
        <Route exact path="/rockets">
          <Rockets />
        </Route>
        <Route path="/missions">
          <Missions />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
      </Provider>
    </>
  );
}

export default App;
