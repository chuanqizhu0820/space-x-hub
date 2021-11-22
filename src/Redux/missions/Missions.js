const LOAD_MISSIONS = 'space-rockets-hub/missions/LOAD_MISSIONS';
const baseUrl = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missions: [],
};

export const missions = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MISSIONS:
      return { ...state, missions: action.missions };
    default:
      return state;
  }
};

export const loadMissions = (result) => {
  return { type: LOAD_MISSIONS, missions: result };
}

export const fetchApiData = () => async (dispatch) => {
  try {
    const response = await fetch(baseUrl);
    const result = await response.json();
    console.log('data', result);
    dispatch(loadMissions(result))
  } catch (error) {
    dispatch(loadMissions({ missions: [] }));
  }
}