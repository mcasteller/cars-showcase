export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        uid: action.uid,
        userEmail: action.userEmail
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};
