import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
export const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
const API_KEY = 'e54293280fb6972fb1173c3454eb7b83';
const SINGLE_MOVIE = `${BASE_URL}movie/550?api_key=${API_KEY}`;

export const Api = {
	getMovies: (activePage) =>
		axios.get(`${BASE_URL}movie/popular?api_key=${API_KEY}`, {
			params: {
				page: activePage,
			},
		}),

	getTopRatedMovies: () =>
		axios.get(`${BASE_URL}movie/top_rated?api_key=${API_KEY}`),

	getUpcomingMovies: (activePage) =>
		axios.get(`${BASE_URL}movie/upcoming?api_key=${API_KEY}`, {
			params: {
				page: activePage,
			},
		}),

	getSingleMovies: (id) =>
		axios.get(`${BASE_URL}movie/${id}?api_key=${API_KEY}`),

	getSingleMoviesActors: (id) =>
		axios.get(`${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`),

	getPerson: (id) =>
		axios.get(`${BASE_URL}/person/${id}`, {
			params: {
				api_key: API_KEY,
			},
		}),
	getActorsMovies: (id) =>
		axios.get(`${BASE_URL}/person/${id}/movie_credits`, {
			params: {
				api_key: API_KEY,
			},
		}),
	getSimilarMovie: (id) =>
		axios.get(`${BASE_URL}/movie/${id}/similar`, {
			params: {
				api_key: API_KEY,
			},
		}),
	// getSearchedMovie: (id) =>
	// 	axios.get(`${BASE_URL}find/${id}`, {
	// 		params: {
	// 			api_key: API_KEY,
	// 		},
	// 	}),
};
