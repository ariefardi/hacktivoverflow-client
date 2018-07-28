<template>
    <div class="question">
        <Navbar/>
        <CardQuestion v-bind:pageArticle="pageArticle" ></CardQuestion>
        <AnswerQuestion v-bind:pageAnswers="pageArticle.answers" ></AnswerQuestion>
        <TextEditor/>
    </div>
</template>

<script>
import CardQuestion from '@/components/CardQuestion.vue'
import AnswerQuestion from '@/components/AnswerQuestion.vue'
import TextEditor from '@/components/TextEditor.vue'
import Navbar from '@/components/Navbar.vue'
import { mapActions, mapState } from 'vuex';
export default {
    created () {
        this.getQuestion()
    },
    components: {
        CardQuestion,
        AnswerQuestion,
        TextEditor,
        Navbar
    },
    computed: {
        ...mapState([
            'pageArticle'
        ])
    },
    methods: {
        ...mapActions([
            'getOneQuestion'
        ]),
        getQuestion () {
            let id = this.$route.params.id
            this.getOneQuestion(id)
            
        }
    }
}
</script>

