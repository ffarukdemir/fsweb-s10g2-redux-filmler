import { ADD_MOVIE, DELETE_MOVIE } from "../actions/movieActions.js";
import movies from "../data.js";

const initialState = {
  stateMovies: movies,
  appTitle: "IMDB Movie Database",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_MOVIE:
      return {
        ...state,
        stateMovies: state.stateMovies.filter(
          (item) => action.payload !== item.id
        ),
      };
    case ADD_MOVIE:
      return {
        ...state,
        stateMovies: [...state.stateMovies, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
