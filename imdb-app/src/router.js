import VueRouter from 'vue-router';
import Vue from 'vue';

import ActorsList from './pages/actors/ActorsList.vue';
import ActorDetails from './pages/actors/ActorDetails.vue';
import AddActor from './pages/actors/AddActor.vue';
import EditActor from './pages/actors/EditActor.vue';

import GenresList from './pages/genres/GenresList.vue';
import GenreDetails from './pages/genres/GenreDetails.vue';
import AddGenre from './pages/genres/AddGenre.vue';
import EditGenre from './pages/genres/EditGenre.vue';

import MoviesList from './pages/movies/MoviesList.vue';
// import MovieDetails from './pages/movies/MovieDetails.vue';
import AddMovie from './pages/movies/AddMovie.vue';
// import EditMovie from './pages/movies/EditMovie.vue';

import ProducersList from './pages/producers/ProducersList.vue';
import ProducerDetails from './pages/producers/ProducerDetails.vue';
import AddProducer from './pages/producers/AddProducer.vue';
import EditProducer from './pages/producers/EditProducer.vue';

import NotFound from './pages/NotFound.vue';

Vue.use(VueRouter)

const routes = [
    { path: '/movies/add', component: AddMovie },
    { path: '/', redirect: '/movies' },
    { path: '/movies', component: MoviesList},
    
    { path: '/actors/add', component: AddActor },
    { path: '/actors', component: ActorsList, children: [
        { path: ':id', component: ActorDetails, children: [
            { path: 'edit', component: EditActor }
        ] } 
    ] },
    
    { path: '/producers/add', component: AddProducer },
    { path: '/producers', component: ProducersList, children: [
        { path: ':id', component: ProducerDetails, children: [
            { path: 'edit', component: EditProducer }
        ] }
    ] },
    
    { path: '/genres/add', component: AddGenre },
    { path: '/genres', component: GenresList, children: [
        { path: ':id', component: GenreDetails, children: [
            { path: 'edit', component: EditGenre }
        ] }
    ] },

    { path: '/:notFound(.*)', component: NotFound }
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;