function comments(state = [], action) {
  // console.log(state, action);
  switch (action.type) {
    case 'ADD_COMMENT':
      return {
        ...state,
        [action.postId]: [
          ...state[action.postId],
          {
            user: action.author,
            text: action.comment
          }
        ]
      }
    case 'REMOVE_COMMENT':
      console.log('bregwrej', action, state)
      return {
        ...state,
        [action.postId]: [
          ...state[action.postId].slice(0, action.index),
          ...state[action.postId].slice(action.index + 1)
        ]
      }
    default:
      state;
  }
  return state;

}

export default comments;