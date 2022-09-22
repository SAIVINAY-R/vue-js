<template>
    <add-movie v-if="movie" :movie="movie"></add-movie>
</template>

<script>
    import AddMovie from './AddMovie.vue';
    export default {
        props: ['id'],
        components: {
            AddMovie,
        },
        computed: {
            movie() {
                var movies = this.$store.getters['movies/get']
                return movies.find(m => m.id === parseInt(this.id))
            }
        }
    }
</script>