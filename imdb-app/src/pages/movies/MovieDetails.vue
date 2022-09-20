<template>
  <v-dialog v-model="show" max-width="500px">
    <v-card>
      <v-responsive class="pt-4">
        <v-img
          contain
          max-height="350"
          :src="movie.Poster"></v-img>
      </v-responsive>
      <div  class="overflow-auto">
      <v-card-title class="justify-center">
        {{ movie.Name }}
      </v-card-title>
      <v-card-text>
        <p>{{ movie.Plot }}</p>
        <p><span class="font-weight-bold">Released Year:  </span> {{ movie.ReleaseYear }}</p>
        <p><span class="font-weight-bold">Producer Name:  </span> {{ movie.ProducerName }}</p>
        <p><span class="font-weight-bold">Actors:  </span> {{ movie.Actors }}</p>
        <p><span class="font-weight-bold">Genres:  </span> {{ movie.Genres }}</p>
      </v-card-text>
      </div>
      <v-footer>
        <v-card-actions>
          <v-btn color="primary" @click.stop="show=false">OK</v-btn>
        </v-card-actions>
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
    }
  }
</script>