import Vuex from 'vuex';
import Vue from 'vue'

Vue.use(Vuex)

import { getters, actions, mutations } from './initializeState.js'

const store = new Vuex.Store({
    state() {
        return {
            producers: [],
            movies: [],
            actors: [],
            genres: [],
            errors: [],
        }
    },
    mutations,
    actions,
    getters
})

export default store