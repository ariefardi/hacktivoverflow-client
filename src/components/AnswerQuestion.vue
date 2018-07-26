<template>
<div>
    <v-container grid-list-md text-xs-center>
        <v-layout row wrap justify-center>
            <v-flex xs12 sm8 md8 style="padding:0">

                <v-container v-for="(answer, index) in answers" :key="index" >
                    <v-layout>
                        <v-flex xs1 >
                            <v-card>
                                <v-btn icon > <v-icon> fa fa-thumbs-up </v-icon> </v-btn>
                                <v-card-text>121</v-card-text>
                                <v-btn icon> <v-icon> fa fa-thumbs-down </v-icon> </v-btn>
                            </v-card>
                        </v-flex>
                        <v-flex xs9 >
                            <v-card>
                                <section>
                                    <p>Answer goes here</p>
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
export default {
     created () {
    },
    data() {
        return {
            answers: [],
            answerLength: 0,
            voteLength: 0,
            commentsAnswer: ['tetew'],
            answersAnswer: []
        }
    },
    components: {
        CommentQuestion
    },
    methods: {
        getAnswer () {
            // let id = this.$route.params.id
            // axios.get('http://localhost:3000/articles/'+id)
            // .then(({data})=> {
            //     let result = data.article.answers
            //     this.answers = result
            //     // this.answerLength = this.article.answers.length
            //     // this.voteLength = this.article.upvote.length - this.article.downvote.length
            //     // this.commentsArticle = this.article.comments
            //     // this.answersArticle = this
            //     // console.log(this.commentArticle)
            //     console.log(this,answers, ' ini data dari answer')
            // })
        }
    }
}
</script>

<style scoped>
h2 {
    text-align: left
}
</style>
