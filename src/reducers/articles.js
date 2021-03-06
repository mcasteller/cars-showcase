const articlesReducerDefaultState = [];

// Reducers modify current state based on a given action
// Reducers are PURE functions
// They should return an object that represents the new state
export default (state = articlesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_ARTICLE':
      return [
        ...state,
        action.article
      ];
    case 'REMOVE_ARTICLE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_ARTICLE':
      return state.map((article) => {
        if (article.id === action.id) {
          return {
            ...article,
            ...action
          };
        } else {
          return article;
        };
      });
    case 'SET_ARTICLES':
      return action.articles;
    default:
      return state;
  }
};
