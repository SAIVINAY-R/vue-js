import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            actors: [
                {
                    Name: "Actor1"
                },
                {
                    Name: "Actor2"
                },
                {
                    Name: "Actor3"
                },
                {
                    Name: "Actor4"
                },
                {
                    Name: "Actor5"
                }
            ]
        }
    },
    mutations,
    actions,
    getters

}