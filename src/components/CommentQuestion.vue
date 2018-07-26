<template>
    <v-container>
        <v-layout justify-center="">
            <v-flex xs12>
                <v-card  >
                    <v-card-text >
                        {{newBaru}}
                    </v-card-text>
                </v-card>
                <v-card>
                    <v-card-text>
                        test
                    </v-card-text>
                    
                </v-card>
                <v-card v-if="newBaru==undefined" >
                    <v-card-text>
                        teteasf
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    props : ['commentsArticle'],
    created () {
        console.log(this.commentsArticle,'commen question')
    },
    computed: {
        newBaru () {
            return this.commentsArticle
        }
    }
}
</script>

<style scoped>

</style>
