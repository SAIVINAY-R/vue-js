export default {
    removeMovie(state, payload) {
        const movieIndex = state.movies.findIndex(movie => movie.Name === payload.name)
        state.movies.splice(movieIndex,1)
    }
}