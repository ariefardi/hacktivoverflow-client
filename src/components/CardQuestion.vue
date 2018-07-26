<template>
<div>
    <v-container grid-list-md text-xs-center style="margin-top:50px">
        <v-layout row wrap justify-center>
            <v-flex xs12 sm7 md7 style="padding:0">
                <v-card >
                    <v-card-text>
                        <h2> {{article.title}} </h2>  
                    </v-card-text>
                </v-card>
                <v-container>
                    <v-layout>
                        <v-flex xs1 >
                            <v-card>
                                <v-btn icon > <v-icon> fa fa-thumbs-up </v-icon> </v-btn>
                                <v-card-text> {{voteLength}} </v-card-text>
                                <v-btn icon> <v-icon> fa fa-thumbs-down </v-icon> </v-btn>
                            </v-card>
                        </v-flex>
                        <v-flex xs11 >
                            <v-card>
                                <section>
                                    <p v-html="article.content" ></p>
                                </section>
                                <v-flex  sm12 md12 style="float:right" >
                                    <v-card>
                                        <v-card-text>
                                            profile foes here
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                                <!-- commet goes here-->
                                <CommentQuestion v-bind:commentsArticle="commentsArticle"> </CommentQuestion>
                                <v-card-actions >
                                    {{answerLength}} answers
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
            <v-flex xs2 sm1 md1>
                    <h4 class="textt" > <v-btn color="blue"> Ask Question </v-btn>  </h4>
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
        this.getQuestion()
    },
    data() {
        return {
            article: '',
            answerLength: 0,
            voteLength: 0,
            commentsArticle: ['tetew'],
            answersArticle: []
        }
    },
    components: {
        CommentQuestion
    },
    methods: {
        ...mapActions([
            'getOneQuestion'
        ]),
        getQuestion () {
            console.log(this.$route.params.id)
            let id = this.$route.params.id
            this.getOneQuestion(id)
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
