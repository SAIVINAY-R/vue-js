export default {
    get(state) {
        var producers = []
        for(let i = 0; i < state.producers.length; i++) {
            producers.push({
                text: state.producers[i].name,
                value: state.producers[i].id
            })
        }
        return producers;
    },
    getProducers(state) {
        return state.producers;
    },
    hasProducers(state) {
        return state.producers && state.producers.length > 0;
    }
}