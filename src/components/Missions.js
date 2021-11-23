import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchApiData } from "../Redux/missions/Missions";

const displayMissions = (missionTab) => {
  const { missions }  = missionTab;
  const tab = [];
  for (let i = 0; i < missions.length; i += 1) {
    tab.push(
      <tr key={i}>
        <td>
          {missions[i].mission_name}
        </td>
        <td>
          { missions[i].description }
        </td>
        <td>
          <p>NOT A MEMBER</p>
        </td>
        <td>
          <button id={missions[i].mission_id} className="join" type="button">Join Mission</button>
        </td>
      </tr>,
    );
  }
  return (tab);
};

export const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApiData());
  }, [dispatch]);
  const missions = useSelector((state) => state.missions);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="mission">Missions</th>
            <th className="description">Description</th>
            <th className="status">Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {displayMissions(missions)}
        </tbody>
      </table>
    </div>
  )
}