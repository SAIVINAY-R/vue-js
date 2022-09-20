import Vuex from 'vuex';
import Vue from 'vue'

Vue.use(Vuex)

import moviesModule from './modules/movies/index.js';
import producersModule from './modules/producers/index.js';
import actorsModule from './modules/actors/index.js';
import genresModule from './modules/genres/index.js';

const store = new Vuex.Store({
    modules : {
        movies: moviesModule,
        producers: producersModule,
        actors: actorsModule,
        genres: genresModule,
    }

})

export default store