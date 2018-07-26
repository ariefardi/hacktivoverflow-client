<template>
    <v-container>
        <v-layout justify-center="">
            <v-flex xs12>
                <v-card>
                    <v-card-text>
                        comment goes here
                    </v-card-text>
                </v-card>
                <v-card>
                    <v-card-text>
                        comment goes here
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    props : ['commentsQuestions'],
    created () {
        console.log(this.commentsArticle,'commen question')
    }
}
</script>

<style scoped>

</style>
