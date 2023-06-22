import { ADD_FAV, REMOVE_FAV } from "./ActionType";

const initialState = {
  myFavorites: [],
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [payload, ...state.myFavorites],
      };
    case REMOVE_FAV:
      const newFavorites = state.myFavorites.filter((ch) => ch.id !== payload);
      return {
        ...state,
        myFavorites: newFavorites,
      };
    default:
      return state;
  }
}
