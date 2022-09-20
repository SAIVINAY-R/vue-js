<template>
  <v-card class="elevation-5 ma-auto mt-5" max-width="600">
    <v-card-title class="justify-center">
      <h1>Producer Details</h1>
    </v-card-title>
    <v-form v-model="valid">
        <v-container>
            <v-text-field
                v-model="producername"
                :rules="nameRules"
                label="Producer Full Name"
                placeholder="Enter Producer full name"
                :counter="50"
                required
            ></v-text-field>
        </v-container>
        <v-container>
            <v-menu
                v-model="menu"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
            >
                <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    v-model="dob"
                    label="Producer Date of birth"
                    prepend-icon="mdi-calendar"
                    readonly
                    :rules="dobRules"
                    v-bind="attrs"
                    v-on="on"
                ></v-text-field>
                </template>
                <v-date-picker
                v-model="dob"
                @input="menu = false"
                ></v-date-picker>
            </v-menu>
        </v-container>
        <v-container>
            <v-textarea
                v-model="producerbio"
                :rules="bioRules"
                label="Producer's Bio"
                placeholder="Enter the producer bio"
                :counter="1000"
                required
            ></v-textarea>
        </v-container>
        <v-container>
            <v-radio-group
                v-model="row"
                label="Producer Gender"
                row
            >
                <v-radio
                    label="Male"
                    value="Male"
                ></v-radio>
                <v-radio
                    label="Female"
                    value="Female"
                ></v-radio>
            </v-radio-group>
        </v-container>
        <v-footer>
            <v-btn @click.stop="">Submit</v-btn>
        </v-footer>
    </v-form>
  </v-card>
</template>

<script>
export default {
    data: () => ({
        valid: false,
        menu:false,
        producername: '',
        nameRules: [
            v => !!v || 'Producer name is required',
            v => v.length <= 50 || 'Producer name must be less than 50 characters'
        ],
        dob: "",
        dobRules: [
            v => !!v || 'Producer date of birth is required'
        ],
        producerbio: '',
        bioRules: [
            v => !!v || 'Producer bio is required',
            v => v.length <= 1000 || 'Producer bio must be less than 1000 characters'
        ],
    })
}
</script>

<style>

</style>