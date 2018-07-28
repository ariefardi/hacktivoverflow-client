<template>
    <v-container>
        <v-layout justify-center="">
            <v-flex xs12>
                <v-card>
                    <v-card-text>
                        test
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
