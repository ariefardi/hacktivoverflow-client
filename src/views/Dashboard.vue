<template>
<div class="dashboard">
    <Navbar></Navbar>
    <img src="http://cssanimation.io/readmore/wp-content/uploads/2016/12/029-How-To-Edit-Any-Genesis-Framework-Theme-With-CSS-Hero.png" alt="">
    <h1 style="align:center;margin-top:100px" > YOUR DASHBOARD</h1>
    <UserDashboard style="margin-top:100px;margin-bottom:100px" ></UserDashboard>
</div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import UserDashboard from '@/components/UserDashboard.vue'
import Navbar from '@/components/Navbar.vue'
export default {
    components: {
        UserDashboard,
        Navbar
    },
    data () {
        return {
        dialog: true
        }
    },

    watch: {
        dialog (val) {
        if (!val) return

        setTimeout(() => (this.dialog = false), 1000)
        }
    },
    created () {
        this.getUserParams()
        let token = localStorage.hasOwnProperty('token')
            if (token) {
                this.$store.commit('changeLoginStatus',true)
            }
    },
    computed: {
        ...mapState([
            'userArticles'
        ])
    },
    methods: {
        getUserParams () {
            let query = this.$route.params.id
            this.getQuestionByUser(query)
        },
        ...mapActions([
            'getQuestionByUser'
        ])
    }
}
</script>

<style scoped>
img {
    width: 100%;
    height: 600px;
}
h3 {
  text-align: left;
  text-decoration-color: #333 !important;
  font-weight: 700;
}
.router:link {
    color: red;
    text-decoration: none;
}

/* visited link */
.router:visited {
    color: #64B5F6;
    text-decoration: none;
}

/* mouse over link */
.router:hover {
    color: #42A5F5;
    text-decoration: none;
}

/* selected link */
.router:active {
    color: blue;
}

.tagSpan {
    margin-top: 7% !important;
    margin: 10px 10px 10px 0
}
.tagSpan:link, a:visited {
    background-color: #E1ECF4;
    color: #39739d;
    padding: .4em .5em;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px
}


.tagSpan:hover, a:active {
    background-color: rgb(215, 231, 243);
}
</style>

