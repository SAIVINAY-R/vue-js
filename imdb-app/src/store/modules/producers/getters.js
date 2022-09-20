export default {
    get(state) {
        var producerNameList = []
        for(let i = 0; i < state.producers.length; i++) {
            producerNameList.push(state.producers[i].Name);
        }
        return producerNameList;
    },
}