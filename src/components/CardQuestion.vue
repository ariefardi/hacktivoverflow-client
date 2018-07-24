<template>
<div>
    <v-container grid-list-md text-xs-center style="margin-top:50px">
        <v-layout row wrap justify-center>
            <v-flex xs12 sm7 md7 style="padding:0">
                <v-card >
                    <v-card-text>
                        <h2>EINVRES Request to https://bower.herokuapp.com/packages/ failed with 502</h2>
                    </v-card-text>
                </v-card>
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
                                    <p>Question goes here</p>
                                    <p>Question goes here</p>

                                </section>
                                <v-flex  sm12 md12 style="float:right" >
                                    <v-card>
                                        <v-card-text>
                                            profile foes here
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                                <!-- commet goes -->
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
                    <h4 class="textt" > <v-btn color="blue"> Ask Question </v-btn>  </h4>
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
.textt {
    text-decoration-color: white !important
}
</style>
