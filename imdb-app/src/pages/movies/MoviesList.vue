<template>
  <v-main>
    <v-container>
      <router-link to="/movies/add">
        <v-btn>Add Movie</v-btn>
      </router-link>
    </v-container>
    <v-container class="justify" v-if="hasMovies">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="movie in movies" :key="movie.id">
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
                <a @click.stop="showMovie(movie)"> read more...</a>
              </v-card-text>
            </div>
            <v-footer class="d-flex flex-row">
              <v-btn class="pa-0 ma-0" @click.stop="showMovie(movie)" text
                >Explore <span class="mdi mdi-arrow-right"></span
              ></v-btn>
              <v-spacer></v-spacer>
              <v-btn
                class="pa-0 ma-0"
                text
                @click.stop="deleteMovieDialog(movie)"
                ><v-icon color="red">mdi-delete</v-icon>
              </v-btn>
              <router-link :to="'movies/'+movie.id+'/edit'">
                <v-btn class="pa-0 ma-0" text @click.stop="">
                  <v-icon color="green">mdi-file-document-edit</v-icon>
                </v-btn>
              </router-link>
            </v-footer>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container v-else>
      <h3>Movies List is Empty</h3>
    </v-container>
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
    <edit-movie
      :visible="editMovieDetails"
      :movie="movieDetails"
      @close="editMovieDetails = false"
    ></edit-movie>
  </v-main>
</template>

<script>
import MovieDetails from "./MovieDetails.vue";
import EditMovie from "./EditMovie.vue";
import DeleteMovie from "./DeleteMovie.vue";

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
    EditMovie,
    DeleteMovie,
  },
  computed: {
    movies() {
      return this.$store.getters["movies/get"];
    },
    hasMovies() {
      return this.$store.getters["movies/hasMovies"];
    },
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