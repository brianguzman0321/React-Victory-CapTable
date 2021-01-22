const initialState = {
  loadingStatus: false,
};
// Home Page's Reducer
export default function commonReducer(state = initialState, action) {
  switch (action.type) {
    case 'SETPAGELOADING':
      return {
        ...state,
        loadingStatus: action.payload,
      };

    default:
      return { ...state };
  }
}
