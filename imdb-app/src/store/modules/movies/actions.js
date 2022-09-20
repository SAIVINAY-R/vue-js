export default {
    removeFromMovies(context, payload) {
        context.commit('removeMovie', payload)
    }
}