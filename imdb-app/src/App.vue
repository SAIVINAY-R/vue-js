<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
    >
      <v-list-item>
        <span class="mdi mdi-window-close" @click="drawer = !drawer"></span>
        <v-list-item-icon>
          <v-img
            class="mx-2"
            :src="require('./assets/deltaX-icon.png')"
            max-height="40"
            max-width="40"
            contain
          ></v-img>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="text-h4">
            IMDB
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
  
      <v-divider></v-divider>
  
      <v-list
        dense
      >
        <v-list-item
          link
        >
          <v-list-item-content>
            <router-link to="/movies"><v-list-item-title class="text-h6">Movies</v-list-item-title></router-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
        >
          <v-list-item-content>
            <router-link to="/actors"><v-list-item-title class="text-h6">Actors</v-list-item-title></router-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
        >
          <v-list-item-content>
            <router-link to="/producers"><v-list-item-title class="text-h6">Producers</v-list-item-title></router-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
        >
          <v-list-item-content>
            <router-link to="/genres"><v-list-item-title class="text-h6">Genres</v-list-item-title></router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-img
        class="mx-2"
        :src="require('./assets/deltaX-icon.png')"
        max-height="40"
        max-width="40"
        contain
      ></v-img>
      <v-toolbar-title>IMDB</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'App',

  data: () => ({
    drawer: false,
  }),
  methods: {
    ...mapActions(['loadMovies', 'loadActors', 'loadProducers', 'loadGenres'])
  },
  created() {
    this.loadMovies();
    this.loadActors();
    this.loadProducers();
    this.loadGenres();
  }
};
</script>
