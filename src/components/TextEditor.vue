<template>
<div>
    <v-container>
        <v-layout justify-center>
            <v-flex xs6>
                <fieldset>
                    <wysiwyg v-model="answerQuestion" />
                </fieldset>
            </v-flex>
        </v-layout>
    </v-container>
    <hr>
    <br>
    <hr>
    <v-btn style="margin-top:1%;right:20%" color="blue" @click="getArticleId" > Post Your Answer </v-btn>
</div>
</template>
<script>
import axios from 'axios'
import swal from 'sweetalert'
import {mapState, mapActions} from 'vuex'
export default {
    created () {
        
    },
    computed: {
        answerQuestion: {
            get () {
                return this.$store.state.answerQuestion
            },
            set (value) {
                this.$store.commit('setAnswerQuestion', value)
            }
        }
    },
    methods: {
        ...mapActions([
            'postYourAnswer'
        ]),
         getArticleId () {
             let id = this.$route.params.id
             console.log(id, ' ini id cuy')
            this.postYourAnswer(id)
         }
    }
}
</script>

<style scoped>

</style>
