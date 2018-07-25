<template>
  <div class="home">
    <Navbar/>
    <v-container style="padding:0;margin-top:50px" fluid>
      <div class="bg-img">
        <v-layout row wrap>
          <v-flex xs12 sm6 md6>
            <FormSignUp v-if="!loginStatus" ></FormSignUp>
          </v-flex>
          <v-flex xs12 sm6 md6 >
            <v-card flat>
              <v-card-text> <h1 style="font-size:46px;text-align:left"> Learn, Share, Build </h1> </v-card-text>
              <v-card-text> 
                <strong>
                <p style="font-size:30px;text-align:left" > 
                Each month, over 50 million developers come 
                to Stack Overflow to learn, share their knowledge, and build their careers. 
                </p> 
                </strong>
                </v-card-text>
                <v-card-text>
                  <strong>
                  <p style="font-size:30px;text-align:left" >Join the world’s largest developer community.</p>
                  </strong>
                </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </div>
    </v-container>
    <v-container>
    <v-container fluid grid-list-md text-xs-center>
      <v-layout row wrap justify-space-between >
        <QuestionHeader></QuestionHeader>
        <QuestionCard/>
      </v-layout>
    </v-container>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'
import FormSignUp from '@/components/FormSignUp.vue'
import QuestionHeader from '@/components/QuestionHeader.vue'
import QuestionCard from '@/components/QuestionCard.vue'
export default {
  name: 'home',
  components: {
    HelloWorld,
    Navbar,
    FormSignUp,
    QuestionHeader,
    QuestionCard
  },
  created () {
    if (localStorage.hasOwnProperty('token')) {
      this.loginStatus = true
    }
  },
  data () {
    return {
      loginStatus: false
    }
  }
}
</script>

<style scoped>
h1, p {
  color: white;
}
.bg-img {
    /* The image used */
    background-color: #117bf3;

    min-height: 380px;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>

