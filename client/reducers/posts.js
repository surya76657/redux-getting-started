// a reducer can takes two things
// 1. the actions
// 2. copy of current State


function posts(state = [], action) {
  // console.log(state, action);
  switch (action.type) {
    case 'INCREMENT_LIKES':
      // return updated state
      console.log('incrementing likes')
      const i = action.index;
      console.log(i, action)
      return [
        ...state.slice(0, i),
        { ...state[i], likes: state[i].likes + 1 },
        ...state.slice(i + 1)
      ]

    default:
      return state;
  }
  return state;

}

export default posts;