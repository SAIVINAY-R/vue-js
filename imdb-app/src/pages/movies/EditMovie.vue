<template>
    <add-movie v-if="movie" :movie="movie"></add-movie>
</template>

<script>
    import AddMovie from './AddMovie.vue';
    import { mapGetters } from 'vuex'
    export default {
        props: ['id'],
        components: {
            AddMovie,
        },
        computed: {
            ...mapGetters(['getMovies']),
            movie() {
                var movies = this.getMovies
                return movies.find(m => m.id === parseInt(this.id))
            }
        }
    }
</script>