<template>
<div>
    <v-container grid-list-md text-xs-center style="margin-top:50px">
        <v-layout row wrap justify-center>
            <v-flex xs12 sm7 md7 style="padding:0">
                <v-card >
                    <v-card-text>
                        <h2> {{pageArticle.title}} </h2>  
                    </v-card-text>
                </v-card>
                <v-container>
                    <v-layout>
                        <v-flex xs1 >
                            <v-card>
                                <v-btn icon @click="getIdQuestion" > <v-icon> fa fa-thumbs-up </v-icon> </v-btn>
                                <v-card-text> {{voteLength}} </v-card-text>
                                <v-btn icon @click="getIdQuestionDown" > <v-icon> fa fa-thumbs-down </v-icon> </v-btn>
                            </v-card>
                        </v-flex>
                        <v-flex xs11 >
                            <v-card style="padding:20px" >
                                <section>
                                    <p v-html="pageArticle.content" ></p>
                                </section>
                                <v-flex  sm12 md12 style="float:right" >
                                    <v-card flat>
                                        <v-card-text>
                                            asked at {{pageArticle.date}}
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                                <!-- commet goes here-->
                                <!-- <CommentQuestion v-bind:commentsArticle="commentsArticle"> </CommentQuestion> -->
                                <v-card-actions >
                                   {{pageArticle.answers.length}} answers
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
            <v-flex xs2 sm1 md1>
                    <h4 class="textt" > <v-btn color="blue" to="/askquestion" > Ask Question </v-btn>  </h4>
            </v-flex>
        </v-layout>
    </v-container>
</div>
</template>
<script>
import axios from 'axios'
import CommentQuestion from '@/components/CommentQuestion.vue'
import {mapState, mapActions} from 'vuex'
export default {
    created () {
    },
    props: ['pageArticle'],
    components: {
        CommentQuestion
    },
    computed: {
        voteLength () {
            let vote = this.pageArticle.upvote.length-this.pageArticle.downvote.length
            
            if(vote) {
                return vote
            }
            else{
                return 0
            }
            return 0
        }
    },
    methods: {
        ...mapActions([
            'upvoteQuestion', 'downvoteQuestion'
        ]),
        getIdQuestion () {
            let query = this.$route.params.id
            console.log(query)
            this.upvoteQuestion(query)
        },
        getIdQuestionDown () {
            let query = this.$route.params.id
            this.downvoteQuestion(query)
        }
    }
}
</script>

<style scoped>
h2 {
    text-align: left
}
.textt {
    text-decoration-color: white !important
}
</style>
