<template>
  <v-dialog v-model="show" max-width="500px">
    <v-card>
      <v-responsive class="pt-4">
        <v-img
          contain
          max-height="350"
          :src="movie.coverImage"></v-img>
      </v-responsive>
      <div  class="overflow-auto">
      <v-card-title class="justify-center">
        {{ movie.name }}
      </v-card-title>
      <v-card-text>
        <p>{{ movie.plot }}</p>
        <p><span class="font-weight-bold">Released Year:  </span> {{ movie.yearOfRelease }}</p>
        <p><span class="font-weight-bold">Producer Name:  </span> {{ movieProducerName }}</p>
        <p><span class="font-weight-bold">Actors:  </span> {{ movieActors }}</p>
        <p><span class="font-weight-bold">Genres:  </span> {{ movieGenres }}</p>
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
      },
      producers() {
        return this.$store.getters['producers/get'];
      },
      actorsList() {
        return this.$store.getters['actors/get'];
      },
      genresList() {
        return this.$store.getters['genres/get'];
      },
      movieProducerName() {
        var producer = (this.producers.find(p => p.value == this.movie.producerId))
        if(producer) {
          return producer.text
        }
        return ""
      },
      movieActors() {
        var actors = ""
        if(this.movie.actorIds) {
          console.log
          for(let i = 0; i < this.movie.actorIds.split(',').map(Number).length; i++) {
            let actor = ((this.actorsList.find(a => a.value == this.movie.actorIds.split(',').map(Number)[i])))
            if(actor) {
              actors += (actor.text + ", ")
            }
          }
        }
        return actors.slice(0, -2)
      },
      movieGenres() {
        var genres = ""
        if(this.movie.genres) {
          console.log
          for(let i = 0; i < this.movie.genres.split(',').map(Number).length; i++) {
            let genre = ((this.genresList.find(g => g.value == this.movie.genres.split(',').map(Number)[i])))
            if(genre) {
              genres += (genre.text + ", ")
            }
          }
        }
        return genres.slice(0, -2)
      }
    }
  }
</script>