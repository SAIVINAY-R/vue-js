<template>
  <v-card class="elevation-5 mx-auto mt-5" max-width="800">
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
            sm="8"
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
            sm="4"
            xs="5"  
          >
            <v-btn @click="addProducerDialog=true" block>Add Producer</v-btn>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-row>
          <v-col
            md="9"
            sm="8"
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
            sm="4"
            xs="5"  
          >
            <v-btn @click="addActorDialog=true" block>Add Actor</v-btn>
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
    <!-- <add-actor :visible="addActor" @close="addActor=false"></add-actor> -->
    <!-- <add-producer :visible="addProducer" @close="addProducer=false"></add-producer> -->
    <add-person :visible="addActorDialog" @close="addActorDialog=false" @add="addNewActor"> <h1>Actor Details</h1></add-person>
    <add-person :visible="addProducerDialog" @close="addProducerDialog=false" @add="addNewProducer"> <h1>Producer Details</h1></add-person>
  </v-card>
</template>

<script>
  // import AddActor from '../../components/AddActor.vue'
  import AddPerson from '../../components/AddPerson.vue'
  // import AddProducer from '../../components/AddProducer.vue'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    components: {
      AddPerson,
    },
    props: ['movie'],
    data: () => ({
      addActorDialog: false,
      addProducerDialog: false,
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
      genres: null,
      genresRules: [
        v => !!v || 'Movie should have a genre' 
      ]
    }),
    methods: {
      ...mapActions(['addMovie', 'editMovie', 'addActor', 'addProducer']),
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
        if(this.getErrors.length === 0) {
          this.$router.push('/movies')
        }
      },
      async addNewActor(value) {
        this.addActorDialog = false
        await this.addActor({
            name: value.name,
            dob: value.dob,
            bio: value.bio,
            gender: value.gender
        })
      },
      async addNewProducer(value) {
        this.addProducerDialog = false
        this.addProducer({
            name: value.name,
            dob: value.dob,
            bio: value.bio,
            gender: value.gender
        })
      }
    },
    computed: {
      ...mapGetters(['getProducers', 'getActors', 'getGenres', 'getErrors'])
    },
    created() {
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