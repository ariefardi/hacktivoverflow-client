<template>
    <div class="topnav" id="myTopnav" >
        <img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/2000px-Stack_Overflow_logo.svg.png" alt="">
        <a href="#news" style="color:black   
        ">News</a>
        <div class="left" >
          <router-link v-if="!loginStatus" to="/login" class="active" > Login </router-link>
            <a @click="logout" v-if="loginStatus" href="#" class="active" > Logout</a>
        </div>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i style="color:black" class="fa fa-bars"></i>
        </a>    
    </div>    
</template>
<script>
import swal from 'sweetalert'

export default {
  data () {
    return {
      loginStatus: false
    }
  },
  created () {
    if (localStorage.hasOwnProperty('token')) {
      this.loginStatus = true
    }
  },
  methods: {
    logout () {
      swal('Berhasil Logout')
      this.loginStatus = false
      localStorage.clear()
    }
  }
}
</script>
<style scoped>
.logo {
    width: 10%;
    height: 10%;
    float: left;
    padding-top: 1%;
    padding-left: 1%;
}
.left {
    float: right;
}
.topnav {
  overflow: hidden;
  background-color:white;
  padding: 0;
  position: fixed;
  top: 0;
  z-index: 9;
}

.topnav a {
  float: left;
  display: block;
  color:white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.active {
  background-color: #5e80bf;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
  img {
    display: none;
  }
}
</style>
