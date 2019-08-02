const userReducerDefaultState = [];

// Reducers modify current state based on a given action
// Reducers are PURE functions
// They should return an object that represents the new state
export default (state = userReducerDefaultState, action) => {
  switch (action.type) {
    case 'UPDATE_MELI_SYNC':
      return state.length > 0 
        ?
          (state.map((user) => {
            if (user.uid === action.uid) {
              return {
                ...action.user
              };
            } else {
              return user;
            };
          }))    
        : 
          state.concat(action.user)
    case 'SET_USERS':
      return action.users;
    default:
      return state;
  }
};
