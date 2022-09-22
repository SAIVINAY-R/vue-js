<template>
  <v-main>
    <v-container class="justify" v-if="hasActors">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="actor in actors" :key="actor.id">
          <v-card flat class="text-xs-center ma-3 elevation-4 overflow-auto card-height">
            <div>
              <v-card-title>
                {{ actor.name }}
              </v-card-title>
              <v-card-text>
                {{ actor.bio }}
              </v-card-text>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container v-else>
      <h3>Actors List is Empty</h3>
    </v-container>
  </v-main>
</template>

<script>
export default {
  computed: {
    actors() {
      return this.$store.getters["actors/getActors"];
    },
    hasActors() {
      return this.$store.getters["actors/hasActors"];
    },
  }
}
</script>

<style scoped>
.card-height {
    height: 300px !important;
}
a {
  text-decoration: none;
}
</style>