const LOAD_MISSIONS = 'space-rockets-hub/missions/LOAD_MISSIONS';
const RESERVED_MISSIONS = 'space-rockets-hub/missions/RESERVED_MISSIONS';
const baseUrl = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missions: [],
};

function reservedMission(state, action) {
  const { missions } = state;
  const index = missions.findIndex((mission) => mission.mission_id === action.id);
  if (index !== -1) {
    if (missions[index].reserved) {
      missions[index].reserved = false;
    } else missions[index].reserved = true;
    return { ...state, missions };
  }
  return state;
}

export const missions = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MISSIONS:
      return { ...state, missions: action.missions };
    case RESERVED_MISSIONS:
      return reservedMission(state, action);
    default:
      return state;
  }
};

export function reserved(id) {
  return { type: RESERVED_MISSIONS, id };
}

export const loadMissions = (result) => ({ type: LOAD_MISSIONS, missions: result });

export const fetchApiData = () => async (dispatch) => {
  try {
    const response = await fetch(baseUrl);
    const result = await response.json();
    dispatch(loadMissions(result));
  } catch (error) {
    dispatch(loadMissions({ missions: [] }));
  }
};
