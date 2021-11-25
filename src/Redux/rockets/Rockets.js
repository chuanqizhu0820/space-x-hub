
export const reserveRocket = (payload) => ({
    type: 'RESERVE_ROCKET', payload
})

export const cancelRocket = (payload) => ({
    type: 'CANCEL_ROCKET', payload
})

export const loadRockets = (payload) => ({
    type: 'LOAD_ROCKETS', payload
})

const rocketReducer = (state=[], action) => {
    switch (action.type) {
    case 'RESERVE_ROCKET':
        let data = [...state];
        for (const item of data){
            if (item.id === action.payload.id){
                item.reserved = true
            }
        }
      return [...data];
    case 'CANCEL_ROCKET':
        let data2 = [...state];
        for (const item of data2){
            if (item.id === action.payload.id){
                item.reserved = false;
            }
        }
      return [...data2];
    case 'LOAD_ROCKETS':
      return [...action.payload.info];
    default:
      return state;
  }
};

export default rocketReducer;