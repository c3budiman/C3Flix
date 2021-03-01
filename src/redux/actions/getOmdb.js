import axios from 'axios'

export const getFeatureMovie = (title,year) => ({
    type: 'GET_FEATURE_MOVIE',
    payload: axios.get(
        process.env.REACT_APP_OMDBHOST 
        + "?apikey=" + process.env.REACT_APP_API_KEY 
        + "&s=" + title
        + "&y=" + year )
    .then(response => response),
});

export const getFeatureMovieWithPage = (title,page, meta) => ({
    type: 'GET_FEATURE_MOVIE_ADD',
    payload: axios.get(
        process.env.REACT_APP_OMDBHOST 
        + "?apikey=" + process.env.REACT_APP_API_KEY 
        + "&s=" + title
        + "&page=" + page )
    .then(response => response),
    meta: meta
});

export const getSearchMovie = (title, page) => ({
    type: 'GET_SEARCH_MOVIE',
    payload: axios.get(
        process.env.REACT_APP_OMDBHOST 
        + "?apikey=" + process.env.REACT_APP_API_KEY 
        + "&s=" + title 
        + "&page=" + page)
    .then(response => response),
    meta: title
});

export const getSearchMovieWithYear = (title, page, year) => ({
    type: 'GET_SEARCH_MOVIE',
    payload: axios.get(
        process.env.REACT_APP_OMDBHOST 
        + "?apikey=" + process.env.REACT_APP_API_KEY 
        + "&s=" + title 
        + "&y=" + year 
        + "&page=" + page)
    .then(response => response),
    meta: title
});

export const clearSearchMovie = () => ({
    type: 'CLEAR_SEARCH',
    payload: {defaultState: true},
});

export const getDetailOmdb = (id) => ({
    type: 'GET_DETAIL',
    payload: axios.get(
        process.env.REACT_APP_OMDBHOST 
        + "?apikey=" + process.env.REACT_APP_API_KEY 
        + "&plot=full"
        + "&i=" + id).then(response => response),
});

//go to reducers for next process, i use redux-promise-middleware, for cleaner code.