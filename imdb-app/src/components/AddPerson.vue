<template>
    <v-dialog v-model="show" max-width="600">
        <v-card>
            <v-card-title class="justify-center">
            <slot></slot>
            </v-card-title>
            <v-form v-model="valid" ref="form">
                <v-container>
                    <v-text-field
                        v-model="name"
                        :rules="nameRules"
                        label="Full Name"
                        placeholder="Enter full name"
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
                            label="Date of birth"
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
                        v-model="bio"
                        :rules="bioRules"
                        label="Bio"
                        placeholder="Enter the bio"
                        :counter="1000"
                        required
                    ></v-textarea>
                </v-container>
                <v-container>
                    <v-radio-group
                        v-model="gender"
                        label="Gender"
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
                    <v-btn :disabled="!valid" @click="add()" color="primary">Submit</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn @click="closeDialog()">Close</v-btn>
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
        name: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => v.length <= 50 || 'Name must be less than 50 characters'
        ],
        dob: "",
        dobRules: [
            v => !!v || 'Date of birth is required'
        ],
        bio: '',
        bioRules: [
            v => !!v || 'Bio is required',
            v => v.length <= 1000 || 'Bio must be less than 1000 characters'
        ],
        gender: '',
        genderRules: [
            v => !!v || 'Actor gender is required',
        ]
    }),
    methods: {
        add() {
            this.show = false
            this.$emit("add", {
                name: this.name,
                gender: this.gender,
                dob: this.dob,
                bio: this.bio
            })
            this.$refs.form.reset();
        },
        closeDialog() {
            this.show = false
            this.$refs.form.reset();
        }
    }
}
</script>
