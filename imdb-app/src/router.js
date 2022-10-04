import VueRouter from 'vue-router';
import Vue from 'vue';

import ActorsList from './pages/actors/ActorsList.vue';
import GenresList from './pages/genres/GenresList.vue';
import MoviesList from './pages/movies/MoviesList.vue';
import AddMovie from './pages/movies/AddMovie.vue';
import EditMovie from './pages/movies/EditMovie.vue';

import ProducersList from './pages/producers/ProducersList.vue';

import NotFound from './pages/NotFound.vue';

Vue.use(VueRouter)

const routes = [
    { name:'edit-movie', path: '/movies/add', component: AddMovie },
    { path: '/movies/:id/edit', component: EditMovie, props: true },
    { path: '/', redirect: '/movies' },
    { path: '/movies', component: MoviesList},
    
    { path: '/actors', component: ActorsList},
    
    { path: '/producers', component: ProducersList},
    
    { path: '/genres', component: GenresList},

    { path: '/:notFound(.*)', component: NotFound }
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;