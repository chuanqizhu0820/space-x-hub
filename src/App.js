import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import './App.css';
import {
  BrowserRouter as Router, Switch, Route, NavLink,
} from 'react-router-dom';
import store from './Redux/configureStore';

import { loadRockets } from './Redux/rockets/Rockets';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import Profile from './components/Profile';
import planet from './images/planet.png';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('https://api.spacexdata.com/v3/rockets')
      .then((response) => response.json())
      .then((data) => {
        const data2 = data.map((item) => ({ ...item, reserved: false }));
        dispatch(loadRockets({ info: data2 }));
      });
  }, []);

  return (
    <>
      <Provider store={store}>
        <Router>
          <div className="header row align-items-center">
            <div className="col-1 offset-1">
              <img src={planet} alt="Planet" />
            </div>
            <div className="col-3">
              <h1>Space Traveler&apos;s Hub</h1>
            </div>
            <div className="col-6 d-flex flex-row justify-content-end align-items-center">
              <div>
                <NavLink to="/rockets" activeClassName="active" className="links">Rockets</NavLink>
              </div>
              <div>
                <NavLink to="/missions" activeClassName="active" className="links">Missions</NavLink>
              </div>
              <span className="line" />
              <div>
                <NavLink to="/profile" activeClassName="active" className="links">My Profile</NavLink>
              </div>
            </div>

          </div>

          <hr />

          <Switch>
            <Route exact path="/">
              <Rockets />
            </Route>
            <Route path="/rockets">
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
