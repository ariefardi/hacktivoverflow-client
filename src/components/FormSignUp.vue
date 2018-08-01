<template>
<v-container>
    <v-layout justify-center>
        <v-flex xs12 sm6 md6 style="padding:5%" >
        <a href="#" @click="fbLogin" class="fb btn">
          <i class="fa fa-facebook fa-fw"></i> Login with Facebook
         </a>
        <a href="#" class="google btn"><i class="fa fa-google fa-fw">
          </i> Login with Google+
        </a>
        <div class="hide-md-lg">
          <p>Or sign in manually:</p>
        </div>
        </v-flex>
        <v-flex xs12 sm6 md6>
        <input type="text" name="email" placeholder="Email" v-model="email" required>
        <input type="text" name="username" placeholder="Username" v-model="username" required>
        <input type="password" name="password" placeholder="Password" v-model="password" required>
        <input type="submit" @click="register" value="Register">
        </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'
import {fbLogin, provider} from '@/firebase/firebase.js'
export default {
  data () {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods : {
    fbLogin () {
      console.log('fb login')
      let self = this
      console.log('fbligon')
      fbLogin.signInWithPopup(provider)
      .then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      // console.log(result.user.displayName,'ini result display Name')
      // console.log(result.user.email, ' ini email')
      // console.log(result.user.uid, ' ini id')
      // var token = result.credential.accessToken;
      // The signed-in user info.
      // ...

        const user = result.user
        axios.post('https://api-overflow.ariefardi.xyz/users/fb/login',{
          username: user.displayName,
          email: user.email,
          password: user.uid
        })
        .then(({data})=> {
          console.log(data.found._id)
          localStorage.setItem('token',data.token)
          localStorage.setItem('username',data.found.username)
          localStorage.setItem('idUser',data.found._id)
          swal('Kamu berhasil login')
          self.$router.push('/')
        })
      })
      .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      console.log(errorCode, errorMessage, email, credential)
      swal(error.message)
      // ...
    });
    },
    register () {
      console.log('register')
      let obj = {
        username: this.username,
        email: this.email,
        password: this.password
      }
      axios.post('http https://api-overflow.ariefardi.xyz/users/register',obj)
      .then(({data})=> {
        console.log(data)
        this.$router.push('/login')
      })
      .catch(err=> {
        console.log(err.message)
      })
    }
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
