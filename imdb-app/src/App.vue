<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list-item>
        <span class="mdi mdi-window-close" @click="drawer = !drawer"></span>
        <v-list-item-icon>
          <v-img
            class="mx-2"
            :src="require('E:\\DeltaX\\vue-js\\imdb-app\\src\\assets\\deltaX-icon.png')"
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
        nav
      >
        <v-list-item
          link
        >
          <v-list-item-content>
            <v-list-item-title class="text-h6"><router-link to="/movies">Movies</router-link></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
        >
          <v-list-item-content>
            <v-list-item-title class="text-h6"><router-link to="/actors">Actors</router-link></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
        >
          <v-list-item-content>
            <v-list-item-title class="text-h6"><router-link to="/producers">Producers</router-link></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
        >
          <v-list-item-content>
            <v-list-item-title class="text-h6"><router-link to="/genres">Genres</router-link></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-img
        class="mx-2"
        :src="require('E:\\DeltaX\\vue-js\\imdb-app\\src\\assets\\deltaX-icon.png')"
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
export default {
  name: 'App',

  components: {
  },

  data: () => ({
    drawer: null,
  }),
};
</script>
