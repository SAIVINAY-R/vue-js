<template>
  <v-main>
    <v-container class="justify" v-if="hasProducers">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="producer in producers" :key="producer.id">
          <v-card flat class="text-xs-center ma-3 elevation-4 overflow-auto card-height">
            <div>
              <v-card-title>
                {{ producer.name }}
              </v-card-title>
              <v-card-text>
                {{ producer.bio }}
              </v-card-text>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container v-else>
      <h3>Producers List is Empty</h3>
    </v-container>
  </v-main>
</template>

<script>
export default {
  computed: {
    producers() {
      return this.$store.getters["producers/getProducers"];
    },
    hasProducers() {
      return this.$store.getters["producers/hasProducers"];
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