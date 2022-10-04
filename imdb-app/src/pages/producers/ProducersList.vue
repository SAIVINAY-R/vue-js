<template>
  <v-container class="justify">
    <v-layout row wrap v-if="hasProducers">
      <v-flex xs12 sm6 md4 lg3 v-for="producer in getProducersWithDetails" :key="producer.id">
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
    <h3 v-else>Producers List is Empty</h3>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getProducersWithDetails', 'hasProducers']),
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