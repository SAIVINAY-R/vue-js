export default {
    setProducers(state, payload) {
        state.producers = payload;
    },
    addProducer(state, payload) {
        state.producers.push(payload);
    }
}