import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            genres: [
                {
                    Name: "Genre1"
                },
                {
                    Name: "Genre2"
                },
                {
                    Name: "Genre3"
                },
                {
                    Name: "Genre4"
                },
                {
                    Name: "Genre5"
                }
            ]
        }
    },
    mutations,
    actions,
    getters

}