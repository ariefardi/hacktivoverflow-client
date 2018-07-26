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
    <v-btn style="margin-top:1%;right:20%" color="blue" @click="postYourAnswer"  > Post Your Answer </v-btn>
</div>
</template>
<script>
import axios from 'axios'
import swal from 'sweetalert'
export default {
    data () {
        return {
            answerQuestion: ''
        }
    },
    methods: {
         postYourAnswer () {
            let token = localStorage.getItem('token')
            let articleId = this.$route.params.id
            // console.log(token)
            // console.log(this.answerQuestion)
            // console.log(articleId)
            axios.post('http://localhost:3000/answers',{
                content: this.answerQuestion,
                article : articleId
            },{
                headers: {
                    token
                }
            })
            .then(({data})=> {
                console.log(data)
                swal('Berhasil Menjawab')
            })
            .catch(err=> {
                console.log(err)
                swal(err.message)
            })
        }
    }
}
</script>

<style scoped>

</style>
