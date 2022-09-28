<template>
  <v-card class="elevation-5 ma-auto mt-5" max-width="800">
    <v-card-title class="justify-center">
      <h1>Movie Details</h1>
    </v-card-title>
    <v-form v-model="valid">
      <v-container>
        <v-text-field
          v-model="moviename"
          :rules="nameRules"
          :counter="200"
          label="Movie Name"
          required
        ></v-text-field>
      </v-container>
      <v-container>
        <v-text-field
          v-model.number="releaseyear"
          :rules="yearRules"
          :counter="4"
          label="Movie Release Year"
          placeholder="YYYY"
          type="numeric"
          required
        ></v-text-field>
      </v-container>
      <v-container>
        <v-row>
          <v-col
            md="9"
            sm="9"
            xs="7"
          >
            <v-select
              :items="getProducers"
              label="Movie Producer"
              dense
              required 
              v-model="producer"
              :rules="producerRules"
            ></v-select>
          </v-col>
          <v-col
            md="3"
            sm="3"
            xs="5"  
          >
            <v-btn @click.stop="addProducer=true">Add Producer</v-btn>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-row>
          <v-col
            md="9"
            sm="9"
            xs="7"
          >
            <v-select
              :items="getActors"
              label="Movie Actors"
              dense
              required 
              multiple
              v-model="actors"
              :rules="actorsRules"
            ></v-select>
          </v-col>
          <v-col
            md="3"
            sm="3"
            xs="5"  
          >
            <v-btn @click.stop="addActor=true">Add Actor</v-btn>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-select
              :items="getGenres"
              label="Movie Genres"
              dense
              required 
              multiple
              v-model="genres"
              :rules="genresRules"
        ></v-select>
      </v-container>
      <v-container>
        <v-file-input
          v-model="movieposter"
          label="Movie Poster"
          filled
          show-size
          :rules="posterRules"
          placeholder="Upload the Movie Poster"
          accept="image/png, image/jpeg, image/bmp"
          prepend-icon="mdi-camera"
          required
        ></v-file-input>
      </v-container>
      <v-container>
        <v-textarea
          v-model="movieplot"
          :rules="plotRules"
          :counter="1000"
          label="Movie Plot"
          required
        ></v-textarea>
      </v-container>
    </v-form>
    <v-footer>
      <v-btn :disabled="!valid" @click="add()" color="primary">SUBMIT</v-btn>
    </v-footer>
    <add-actor :visible="addActor" @close="addActor=false"></add-actor>
    <add-producer :visible="addProducer" @close="addProducer=false"></add-producer>
  </v-card>
</template>

<script>
  import AddActor from '../actors/AddActor.vue';
  import AddProducer from '../producers/AddProducer.vue'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    components: {
      AddActor,
      AddProducer,
    },
    props: ['movie'],
    data: () => ({
      addActor: false,
      addProducer: false,
      valid: false,
      moviename: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 200 || 'Name must be less than 200 characters',
      ],
      movieplot: '',
      plotRules: [
        v => !!v || 'Plot is required',
        v => v.length <= 1000 || 'Plot must be less than 1000 characters'
      ],
      movieposter: null,
      posterRules: [
        v=> !!v || 'Poster is required',
      ],
      releaseyear: null,
      yearRules: [
        v => !!v || 'Release year is required',
        v => Number.isInteger(v) || 'The value must be an integer number',
        v => v > 1880 || 'Relase year should be greater thean 1880',
        v => v <= 9999 || 'Release year should be less than 9999'
      ],
      producer: '',
      producerRules: [
        v => !!v || 'Movie should have a producer'
      ],
      actors: null,
      actorsRules: [
        v => !!v || 'Movie should have atleast one actor'
      ],
      genres: null,
      genresRules: [
        v => !!v || 'Movie should have a genre' 
      ]
    }),
    methods: {
      ...mapActions(['addMovie', 'editMovie']),
      async add() {
        if(this.movie != null) {
          await this.editMovie({
            id: this.movie.id,
            name: this.moviename,
            plot: this.movieplot,
            actorIds: this.actors,
            genres: this.genres,
            producerId: this.producer,
            coverImage: this.movieposter,
            yearOfRelease: this.releaseyear,
            router: this.$router
          })
        } else {
          await this.addMovie({
            name: this.moviename,
            plot: this.movieplot,
            actorIds: this.actors,
            genres: this.genres,
            producerId: this.producer,
            coverImage: this.movieposter,
            yearOfRelease: this.releaseyear,
            router: this.$router
          })
        }
      }
    },
    computed: {
      ...mapGetters(['getProducers', 'getActors', 'getGenres']),
    },
    beforeMount() {
      if(this.movie != null) {
        this.moviename = this.movie.name;
        this.movieplot = this.movie.plot;
        this.releaseyear = this.movie.yearOfRelease;
        this.producer = this.movie.producerId;
        this.actors = this.movie.actorIds.split(',').map(Number)
        this.genres = this.movie.genres.split(',').map(Number)
      }
    }
  }
</script>

<style>

</style>