export default {
    get(state) {
        var genres = []
        for(let i = 0; i < state.genres.length; i++) {
            genres.push({
                text: state.genres[i].name,
                value: state.genres[i].id
            })

        }
        return genres;
    },
    hasGenres(state) {
        return state.genres && state.genres.length > 0;
    }
}