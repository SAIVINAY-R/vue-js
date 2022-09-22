export default {
    removeMovie(state, payload) {
        const movieIndex = state.movies.findIndex(movie => movie.id === payload.id)
        state.movies.splice(movieIndex,1)
    },
    setMovies(state, payload) {
        state.movies = payload;
    },
    addMovie(state, payload) {
        state.movies.push(payload)
    },
    editMovie(state, payload) {
        const index = state.movies.findIndex(movie => movie.id == payload.id)
        state.movies[index] = payload
    },
    setMovie(state, payload) {
        state.movie = payload;
    }
}