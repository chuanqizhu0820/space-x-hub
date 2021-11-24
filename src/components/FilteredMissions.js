import React from "react";
import { useSelector } from "react-redux";

const filteredMissions = (missionTab = []) => {
  const { missions } = missionTab;
  const filterMissions = missions.filter((mission) => mission.reserved === true);
  const tab = [];
  for (let i = 0; i < filterMissions.length; i +=1) {
    tab.push(
      <tr key={i}>
        <td>{filterMissions[i].mission_name}</td>
      </tr>,
    );
  }
  return (tab);
};

export const ReservedMissions = () => {
  const missions = useSelector((state) => state.missions);
  return (
    <div className="table">
      <h1>My Missions</h1>
      <table id="missions">
        <tbody>
          { filteredMissions(missions) }
        </tbody>
      </table>
    </div>
  );
}