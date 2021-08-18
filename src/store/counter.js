const initialState = { count: 0 };

export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "START_COUNT":
      return { ...state, count: state.count + 1 };
    case "STOP_COUNT":
      return { ...state, count: 0 };
    default:
      return state;
  }
}
