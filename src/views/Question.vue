<template>
    <div class="question">
        <Navbar/>
        <CardQuestion/>
        <AnswerQuestion/>
        <TextEditor/>
    </div>
</template>

<script>
import CardQuestion from '@/components/CardQuestion.vue'
import AnswerQuestion from '@/components/AnswerQuestion.vue'
import TextEditor from '@/components/TextEditor.vue'
import Navbar from '@/components/Navbar.vue'
export default {
    components: {
        CardQuestion,
        AnswerQuestion,
        TextEditor,
        Navbar
    }
}
</script>

