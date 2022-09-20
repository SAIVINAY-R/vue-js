export default {
    get(state) {
        var actorNameList = []
        for(let i = 0; i < state.actors.length; i++) {
            actorNameList.push(state.actors[i].Name);
        }
        return actorNameList;
    },
}