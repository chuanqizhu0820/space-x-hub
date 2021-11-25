export const reserveRocket = (payload) => ({
  type: 'RESERVE_ROCKET', payload,
});

export const cancelRocket = (payload) => ({
  type: 'CANCEL_ROCKET', payload,
});

export const loadRockets = (payload) => ({
  type: 'LOAD_ROCKETS', payload,
});

const rocketReducer = (state = [], action) => {
  let data = [];
  switch (action.type) {
    case 'RESERVE_ROCKET':
      data = [...state];
      return [...data.map((item) => {
        // eslint-disable-next-line
        if (item.id === action.payload.id) { item.reserved = true; }
        return item;
      })];

    case 'CANCEL_ROCKET':
      data = [...state];
      return [...data.map((item) => {
        // eslint-disable-next-line
        if (item.id === action.payload.id) { item.reserved = false; }
        return item;
      })];

    case 'LOAD_ROCKETS':
      return [...action.payload.info];
    default:
      return state;
  }
};

export default rocketReducer;
