export default {
    setActors(state, payload) {
        state.actors = payload;
    },
    addActor(state, payload) {
        state.actors.push(payload);
    }
}