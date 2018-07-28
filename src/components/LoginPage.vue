<template>
<v-container>
    <v-layout>
        <v-container>
            <v-layout justify-center>
                <v-flex xs4>
                        <a href="#" class="fb btn">
                        <i class="fa fa-facebook fa-fw"></i> Login with Facebook
                        </a>
                        <a href="#" class="google btn"><i class="fa fa-google fa-fw">
                        </i> Login with Google+
                        </a>
                </v-flex>
            </v-layout>
            <v-card flat="">
                <v-card-text>
                    OR
                </v-card-text>
            </v-card>
            <v-layout justify-center>
                <v-flex xs4>
                        <label for=""> <strong>Username</strong>  </label>
                        <input type="text" v-model="username" >
                        <label for=""> <strong>Password</strong>  </label>
                        <input type="password" v-model="password" >
                </v-flex>
            </v-layout>
            <v-btn style="left:13.7%" color="blue" @click="login"> Log in </v-btn>
        </v-container>
    </v-layout>
    <v-container>
        <v-layout justify-center>
            <v-flex xs4>
                <v-card flat>
                    <v-card-text>
                       <strong> Don't have an account? </strong> <router-link to="/">Sign up</router-link> 
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</v-container>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import axios from 'axios'
import swal from 'sweetalert'
import {mapState, mapActions} from 'vuex'
export default {
    components : {
        Navbar
    },
    created () {
        if (localStorage.hasOwnProperty('token')) {
            this.$router.push('/')
        }
    },
    computed: {
       username: {
           get () {
               return this.$store.state.username
           },
           set (value) {
               this.$store.commit('setUsername', value)
           }
       },
       password: {
           get () {
               return this.$store.state.password
           },
           set (value) {
               this.$store.commit('setPassword', value)
           }
       }
    },
    methods: {
        ...mapActions([
            'login'
        ])
    }
}
</script>

<style scoped>
input,
.btn {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 1px;
  margin: 5px 0;
  opacity: 0.85;
  display: block;
  font-size: 17px;
  line-height: 20px;
  text-decoration: none; /* remove underline from anchors */
  background: #f1f1f1;
}

input:hover,
.btn:hover {
  opacity: 1;
}

/* add appropriate colors to fb, twitter and google buttons */
.fb {
  background-color: #3B5998;
  color: white;
  display: block;
}

.twitter {
  background-color: #55ACEE;
  color: white;
}

.google {
  background-color: #dd4b39;
  color: white;
}

/* style the submit button */
input[type=submit] {
  background-color: #4CAF50;
  color: white;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}





/* hide some text on medium and large screens */
.hide-md-lg {
  display: none;
}

/* bottom container */
.bottom-container {
  text-align: center;
  background-color: #666;
  border-radius: 0px 0px 4px 4px;
}

/* Responsive layout - when the screen is less than 650px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 650px) {
  .col {
    width: 100%;
    margin-top: 0;
  }
  /* hide the vertical line */
  .vl {
    display: none;
  }
  /* show the hidden text on small screens */
  .hide-md-lg {
    display: block;
    text-align: center;
  }
}
</style>
