export default {
    get(state) {
        var genreList = []
        for(let i = 0; i < state.genres.length; i++) {
            genreList.push(state.genres[i].Name);
        }
        return genreList;
    },
}