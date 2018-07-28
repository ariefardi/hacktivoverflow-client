<template>
<div>
    <v-container grid-list-md text-xs-center>
        <v-layout row wrap justify-center>
            <v-flex xs12 sm8 md8 style="padding:0">

                <v-container v-for="(answer,index) in pageAnswers" :key="index">
                    <v-layout>
                        <v-flex xs1 >
                            <v-card>
                                <v-btn icon @click="getIdAnswerUpvote(index)" > <v-icon> fa fa-thumbs-up </v-icon> </v-btn>
                                <v-card-text> {{answer | totalVoteAnswer}}  </v-card-text>
                                <v-btn icon @click="getIdAnswerDownvote(index)" > <v-icon> fa fa-thumbs-down </v-icon> </v-btn>
                            </v-card>
                        </v-flex>
                        <v-flex xs9 >
                            <v-card style="padding:20px">
                                <section>
                                    <p v-html="answer.content"></p>
                                </section>
                                <v-flex  sm12 md12 style="float:right" >
                                    <v-card>
                                        <v-card-text>
                                            profile foes here
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                                <!-- commet goes here -->
                                <CommentQuestion/>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
                

            </v-flex>
        </v-layout>
    </v-container>
</div>
</template>
<script>
import CommentQuestion from '@/components/CommentQuestion.vue'
import axios from 'axios'
import {mapState, mapActions} from 'vuex'
export default {
     created () {
    },
    props: ['pageAnswers'],
    data() {
        return {
            
        }
    },
    components: {
        CommentQuestion
    },
    filters : {
        totalVoteAnswer (value) {
            let total = value.upvote.length - value.downvote.length
            return total
        }
    },
    methods: {
        ...mapActions([
            'upvoteAnswer', 'downvoteAnswer'
        ]),
        getIdAnswerUpvote (query) {
            let id = query
            console.log(query, 'upvote')
            this.upvoteAnswer(id)
        },
        getIdAnswerDownvote (query) {
            let id = query
            console.log(id, 'downvote')
            this.downvoteAnswer(id)
        }
    }
}
</script>

<style scoped>
h2 {
    text-align: left
}
</style>
