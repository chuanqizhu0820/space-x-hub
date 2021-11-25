import React from "react";
import { Provider } from "react-redux";
import './App.css';
import store from './Redux/configureStore';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
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
          <NavLink to="/" activeClassName="active" className="links">Rockets</NavLink>
          </div>
          <div>
          <NavLink to="/missions" activeClassName="active" className="links">Missions</NavLink>
          </div>
          <span className="line"></span>
          <div>
          <NavLink to="/profile" activeClassName="active"
          className="links">My Profile</NavLink>
          </div>
        </div>

      </div>

      <hr />

      <Switch>
        <Route exact path="/">
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
