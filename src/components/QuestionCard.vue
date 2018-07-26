<template>
    <v-flex xs12>
        <hr>
        <v-card flat v-for="(article, index) in articles" :key="index" style="padding:0" >
            <v-container style="padding:0" >
                <v-layout >
                    <v-flex xs4>
                        <v-card flat >
                            <v-container>
                                <v-layout>
                                    <v-flex xs12 style="padding:0" >
                                        <v-card flat >
                                            <v-card-text v-if="article.answers.length>0" style="padding:0" ><strong> {{article.answers.length}} </strong></v-card-text>
                                            <v-card-text v-else style="padding:0" > <strong> 0 </strong> </v-card-text>
                                            <v-card-text style="padding:0" >answers</v-card-text>
                                        </v-card>
                                    </v-flex>
                                    <v-flex xs12 style="padding:0" >
                                        <v-card flat >
                                            <v-card-text v-if="!article.upvote" style="padding:0" > <strong> {{article.upvote.length}} </strong> </v-card-text>
                                            <v-card-text v-else style="padding:0" > <strong> 0 </strong>  </v-card-text>
                                            <v-card-text style="padding:0" >up votes</v-card-text>
                                        </v-card>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card>
                    </v-flex>
                    <v-flex xs8>
                        <v-card flat style="margin-top:1%" >
                             <h3> <router-link class="router" :to="`/question/${article._id}`" > {{article.title}} </router-link> </h3>
                            <v-card-actions style="padding:0" >
                                <p v-for="(tag, index) in article.tags" :key="index" > <router-link class="tagSpan" to="/about"> {{tag}} </router-link> </p>
                                <v-spacer></v-spacer>
                                <p>asked {{article.date}} by {{article.user.username}} </p>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
            <hr>
        </v-card>
    </v-flex>
</template>
<script>
import {mapState} from 'vuex'
export default {
    created () {
        this.$store.dispatch('getQuestion')
    },
    computed: {
        ...mapState([
            'articles'
        ])
    }
}
</script>
<style scoped>
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
