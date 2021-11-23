
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
        console.log("reserved!")
        for (const item of data){
            if (item.id === action.payload.id){
                item.reserved = true
            }
        }
      return [...data];
    case 'CANCEL_ROCKET':
        let data2 = [...state];
        console.log("reserved!")
        for (const item of data2){
            if (item.id === action.payload.id){
                item.reserved = false;
            }
        }
      return [...data2];
      return [...state ];
    case 'LOAD_ROCKETS':
        console.log("data is loaded")
      return [ ...state, ...action.payload.info];
    default:
      return state;
  }
};

export default rocketReducer;