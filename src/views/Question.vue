<template>
    <div class="question">
        <CardQuestion/>
        <AnswerQuestion/>
    </div>
</template>

<script>
import CardQuestion from '@/components/CardQuestion.vue'
import AnswerQuestion from '@/components/AnswerQuestion.vue'
export default {
    components: {
        CardQuestion,
        AnswerQuestion
    }
}
</script>

