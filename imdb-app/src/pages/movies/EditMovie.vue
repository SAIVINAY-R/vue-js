<template>
  <v-dialog v-model="show" max-width="900px" wrap>
    <add-movie :movie="movie" @submit="show=false"></add-movie>
  </v-dialog>
</template>

<script>
    import AddMovie from './AddMovie.vue';
    export default {
        components: {
            AddMovie,
        },
        props: ['visible', 'movie'],
        computed: {
            show: {
                get () {
                    return this.visible
                },
                set (value) {
                    if (!value) {
                    this.$emit('close')
                    }
                }
            }
        }
    }
</script>