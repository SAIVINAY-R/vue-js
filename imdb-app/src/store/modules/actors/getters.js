export default {
    get(state) {
        var actors = []
        for(let i = 0; i < state.actors.length; i++) {
            actors.push({
                text: state.actors[i].name,
                value: state.actors[i].id
            });

        }
        return actors;
    },
    getActors(state) {
        return state.actors;
    },
    hasActors(state) {
        return state.actors && state.actors.length > 0;
    }
}