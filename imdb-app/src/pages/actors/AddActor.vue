<template>
    <v-dialog v-model="show" max-width="600">
        <v-card>
            <v-card-title class="justify-center">
            <h1>Actor Details</h1>
            </v-card-title>
            <v-form v-model="valid">
                <v-container>
                    <v-text-field
                        v-model="actorname"
                        :rules="nameRules"
                        label="Actor Full Name"
                        placeholder="Enter Actor full name"
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
                            label="Acotr Date of birth"
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
                        v-model="actorbio"
                        :rules="bioRules"
                        label="Actor's Bio"
                        placeholder="Enter the actor bio"
                        :counter="1000"
                        required
                    ></v-textarea>
                </v-container>
                <v-container>
                    <v-radio-group
                        v-model="gender"
                        label="Actor Gender"
                        :rules="genderRules"
                        required
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
                    <v-btn @click.stop="addActor()" color="primary">Submit</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn @click.stop="show=false">Close</v-btn>
                </v-footer>
            </v-form>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: ['visible'],
    computed: {
      show: {
        get () {
          return this.visible
        },
        set (value) {
          if (!value) {
            this.$emit('close')
          }
        }
      }
    },
    data: () => ({
        valid: false,
        menu:false,
        actorname: '',
        nameRules: [
            v => !!v || 'Actor name is required',
            v => v.length <= 50 || 'Actor name must be less than 50 characters'
        ],
        dob: "",
        dobRules: [
            v => !!v || 'Actor date of birth is required'
        ],
        actorbio: '',
        bioRules: [
            v => !!v || 'Actor bio is required',
            v => v.length <= 1000 || 'Actor bio must be less than 1000 characters'
        ],
        gender: '',
        genderRules: [
            v => !!v || 'Actor gender is required',
        ]
    }),
    methods: {
        addActor() {
            this.show = false
            this.$store.dispatch('actors/addActor', {
                name: this.actorname,
                dob: this.dob,
                bio: this.actorbio,
                gender: this.gender
            })
            this.actorname = null
            this.dob = null
            this.actorbio = null
            this.gender = null
        }
    }
}
</script>

<style>

</style>