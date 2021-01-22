const initialState = {
  ownerLists: [],
};
// Home Page's Reducer
export default function ownersReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCHOWNERLISTS':
      return {
        ...state,
        ownerLists: action.payload,
      };

    default:
      return { ...state };
  }
}
