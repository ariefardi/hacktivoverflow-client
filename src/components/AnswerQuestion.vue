<template>
<div>
    <v-container grid-list-md text-xs-center>
        <v-layout row wrap justify-center>
            <v-flex xs12 sm7 md7 style="padding:0">
                <v-container>
                    <v-layout>
                        <v-flex xs1 >
                            <v-card>
                                <v-btn icon > <v-icon> fa fa-thumbs-up </v-icon> </v-btn>
                                <v-card-text>121</v-card-text>
                                <v-btn icon> <v-icon> fa fa-thumbs-down </v-icon> </v-btn>
                            </v-card>
                        </v-flex>
                        <v-flex xs11 >
                            <v-card>
                                <section>
                                    <p>Answer goes here</p>
                                    <p>Answer goes here</p>

                                </section>
                                <v-flex  sm12 md12 style="float:right" >
                                    <v-card>
                                        <v-card-text>
                                            profile foes here
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                                <CommentQuestion/>
                                <v-card-actions>
                                    2 answer
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
            <v-flex xs2 sm1 md1>
                    <v-btn> Ask Question </v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</div>
</template>
<script>
import CommentQuestion from '@/components/CommentQuestion.vue'
export default {
    components: {
        CommentQuestion
    }
}
</script>

<style scoped>
h2 {
    text-align: left
}
</style>
