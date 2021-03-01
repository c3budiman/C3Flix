//reducers process the promise, based on the result, 
//if it is rejected then u can also set a state to it.
const defaultState = {
	IsSearching: false,
  keyword: "",
  SearchingLoaded: false,
	searchMovieData: [],
  count: 0,
  error: ""
};

export default function searchOmdb (state = defaultState, action) {
    switch (action.type) {
      case 'CLEAR_SEARCH': return defaultState;

      case 'GET_SEARCH_MOVIE_PENDING': 
        return {
          IsSearching: true,
          SearchingLoaded: false,
          searchMovieData: [],
          count: 0,
          error: "",
          keyword: action.meta,
        };
  
      case 'GET_SEARCH_MOVIE_FULFILLED':
        if(action.payload.data.Response === "True") {
          return {
            IsSearching: true,
            SearchingLoaded: true,
            searchMovieData: action.payload.data.Search,
            count: action.payload.data.totalResults,
            error: "",
            keyword: action.meta,
          };
        } else {
          return {
            IsSearching: true,
            SearchingLoaded: true,
            searchMovieData: [],
            count: 0,
            error: action.payload.data.Error,
            keyword: action.meta,
          };
        };

      default: return state;
    }
};
