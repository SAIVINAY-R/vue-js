<template>
  <v-container>
    <router-link to="/movies/add">
      <v-btn>Add Movie</v-btn>
    </router-link>
    <v-layout class="mt-2" row wrap v-if="hasMovies">
      <v-flex xs12 sm6 md4 lg3 v-for="movie in getMovies" :key="movie.id">
        <v-card flat class="text-xs-center ma-3 elevation-4" min-height="350">
          <v-responsive class="pt-4">
            <div>
              <v-img contain max-height="350" :src="movie.coverImage"></v-img>
            </div>
          </v-responsive>
          <div class="overflow-auto card-details-height">
            <v-card-title>
              {{ movie.name }}
            </v-card-title>
            <v-card-text>
              {{ movie.plot.slice(0, 150) }}
              <a @click="showMovie(movie)"> read more...</a>
            </v-card-text>
          </div>
          <v-footer class="d-flex flex-row">
            <v-btn class="pa-0 ma-0" @click="showMovie(movie)" text
              >Explore <span class="mdi mdi-arrow-right"></span
            ></v-btn>
            <v-spacer></v-spacer>
            <v-btn
              class="pa-0 ma-0"
              text
              @click="deleteMovieDialog(movie)"
              ><v-icon color="red">mdi-delete</v-icon>
            </v-btn>
            <router-link :to="'movies/'+movie.id+'/edit'">
              <v-btn class="pa-0 ma-0" text>
                <v-icon color="green">mdi-file-document-edit</v-icon>
              </v-btn>
            </router-link>
          </v-footer>
        </v-card>
      </v-flex>
    </v-layout>
    <h3 class="mt-2" v-else>Movies List is Empty</h3>
    <delete-movie
      :visible="showDeleteAlert"
      :movie="movieDetails"
      @close="showDeleteAlert = false"
    ></delete-movie>
    <movie-details
      :visible="showMovieDetails"
      :movie="movieDetails"
      @close="showMovieDetails = false"
    ></movie-details>
  </v-container>
</template>

<script>
import MovieDetails from "../../components/MovieDetails.vue";
import DeleteMovie from "../../components/DeleteMovie.vue";
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      deleteMovieName: "",
      showDeleteAlert: false,
      showMovieDetails: false,
      editMovieDetails: false,
      movieDetails: {},
    };
  },
  components: {
    MovieDetails,
    DeleteMovie,
  },
  computed: {
    ...mapGetters(['getMovies', 'hasMovies']),
    editMovieLink(value) {
      return {
        name: 'edit-movie',
        params: {
          id: value.id
        },
        query: value,
      }
    }
  },
  methods: {
    showMovie(movie) {
      this.showMovieDetails = true;
      this.movieDetails = movie;
    },
    editMovie(movie) {
      this.editMovieDetails = true;
      this.movieDetails = movie;
    },
    deleteMovieDialog(movie) {
      this.showDeleteAlert = true;
      this.movieDetails = movie;
    },
  },
};
</script>

<style scoped>
.card-details-height {
  height: 220px;
}
a {
  text-decoration: none;
}
</style>