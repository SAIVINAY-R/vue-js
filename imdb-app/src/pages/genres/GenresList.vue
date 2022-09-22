<template>
  <v-main>
    <v-container class="justify" v-if="hasGenres">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="genre in genres" :key="genre.value">
          <v-card flat class="text-xs-center ma-3 elevation-4 overflow-auto card-height">
            <div>
              <v-card-title>
                {{ genre.text }}
              </v-card-title>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container v-else>
      <h3>Genres List is Empty</h3>
    </v-container>
  </v-main>
</template>

<script>
export default {
  computed: {
    genres() {
      return this.$store.getters["genres/get"];
    },
    hasGenres() {
      return this.$store.getters["genres/hasGenres"];
    },
  }
}
</script>

<style scoped>
.card-height {
    height: 70px !important;
}
a {
  text-decoration: none;
}
</style>