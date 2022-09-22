<template>
    <v-dialog v-model="show" max-width="500">
      <v-card>
        <v-card-title class="justify-center">
          <h3>Delete {{ movie.name }}</h3>
        </v-card-title>
        <v-card-text class="justify-center text-h3">
          Are you sure?
        </v-card-text>
        <v-footer>
            <v-btn @click.stop="show=false">Cancel</v-btn>
            <v-spacer></v-spacer>
            <v-btn @click.stop="deleteMovie()" color="red lighten-1">Yes, Delete it</v-btn>
        </v-footer>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
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
    },
    methods: {
        deleteMovie() {
            this.show = false
            this.$store.dispatch('movies/deleteMovie', {id: this.movie.id})
        }
    }
}
</script>

<style>

</style>