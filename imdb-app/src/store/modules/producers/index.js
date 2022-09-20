import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            producers: [
                {
                    Name: "Producer1"
                },
                {
                    Name: "Producer2"
                },
                {
                    Name: "Producer3"
                },
                {
                    Name: "Producer4"
                },
                {
                    Name: "Producer5"
                }
            ]
        }
    },
    mutations,
    actions,
    getters

}