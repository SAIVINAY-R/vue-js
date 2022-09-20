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
              :items="producers"
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
              :items="actorsList"
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
              :items="genresList"
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
      <v-btn @click.stop="" color="primary">SUBMIT</v-btn>
    </v-footer>
    <v-dialog v-model="addActor" max-width="600">
      <add-actor></add-actor>
    </v-dialog>
    
    <v-dialog v-model="addProducer" max-width="600">
      <add-producer></add-producer>
    </v-dialog>
  </v-card>
</template>

<script>
  import AddActor from '../actors/AddActor.vue';
  import AddProducer from '../producers/AddProducer.vue'

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
      actors: [],
      actorsRules: [
        v => !!v || 'Movie should have atleast one actor'
      ],
      genres: [],
      genresRules: [
        v => !!v || 'Movie should have a genre' 
      ]
    }),
    computed: {
      producers() {
        return this.$store.getters['producers/get'];
      },
      actorsList() {
        return this.$store.getters['actors/get'];
      },
      genresList() {
        return this.$store.getters['genres/get'];
      }
    },
    beforeMount() {
      if(this.movie != null) {
        this.moviename = this.movie.Name;
        this.movieplot = this.movie.Plot;
        this.releaseyear = this.movie.ReleaseYear;
      }
    }
  }
</script>

<style>

</style>