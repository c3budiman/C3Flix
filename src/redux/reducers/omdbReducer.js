//reducers process the promise, based on the result, 
//if it is rejected then u can also set a state to it.
const defaultState = {
	getFeaturePending: true,
	featureMovie: [],
  count: 0,
  error: ""
};

export default function omdbReducer (state = defaultState, action) {
    switch (action.type) {
      case 'GET_FEATURE_MOVIE_PENDING': return defaultState;
  
      case 'GET_FEATURE_MOVIE_FULFILLED':
        if(action.payload.data.Response === "True") {
          return {
            getFeaturePending: false,
            featureMovie: action.payload.data.Search,
            count: action.payload.data.totalResults,
            error: ""
          };
        } 
        else {
          return {
            getFeaturePending: false,
            featureMovie: [],
            count: 0,
            error: action.payload.data.Error
          };
        }

        case 'GET_FEATURE_MOVIE_ADD_PENDING': return action.meta;

        case 'GET_FEATURE_MOVIE_ADD_FULFILLED':
        if(action.payload.data.Response === "True") {
          return {
            getFeaturePending: false,
            featureMovie: action.meta.featureMovie.concat(action.payload.data.Search),
            count: action.meta.count + action.payload.data.totalResults,
            error: ""
          };
        } 
        else {
          return {
            getFeaturePending: false,
            featureMovie: [],
            count: 0,
            error: action.payload.data.Error
          };
        }
        
  
      default: return state;
    }
};
