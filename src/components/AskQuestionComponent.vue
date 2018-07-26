<template>
    <div>
        <v-container>
            <v-layout>
                <v-flex xs8 >
                    <v-container>
                        <v-layout>
                            <v-flex>
                                <v-card flat>
                                    <v-card-text>
                                        <h1 style="text-align:left">Ask a Question</h1>
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-container>
                    <v-container>
                        <v-layout>
                            <v-flex>
                                <v-card flat>
                                    <div class="area">
                                        <label for="title">Title</label>
                                        <input v-model="title" type="text" id="title" placeholder="Title..">
                                   </div>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-container>
                    <v-container>
                        <v-layout>
                            <v-flex>
                                <v-card>
                                    <div class="area">
                                        <label for="textarea"> Body </label>
                                        <wysiwyg v-model="content" />
                                    </div>
                                </v-card>  
                            </v-flex>
                        </v-layout>
                    </v-container>
                    <v-card flat >
                        <addTagsComponent/>
                    </v-card>
                </v-flex>
                <v-flex xs4>
                    <v-container>
                        <v-layout>
                            <v-flex >
                                <v-card color="amber lighten-4">
                                    <v-card-text>
                                        <h2>How to Ask</h2>
                                    </v-card-text>
                                </v-card>
                                <v-card color="yellow lighten-4">
                                    <v-card-text>
                                        <v-card-text>
                                            <p> <strong>Is your question about programming?</strong> </p>
                                            <p>We prefer questions that can be answered, not just discussed.</p>
                                            <p>Provide details. Share your research.</p>
                                            <p>If your question is about this website, ask it on email <strong> forzaariefpyon@gmail.com .</strong>  </p>
                                        </v-card-text>
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-flex>
            </v-layout>
        </v-container>
         <v-btn color="blue" class="buttonClass" @click="postQuestion">Post Your Question</v-btn>
    </div>
</template>

<script>
import addTagsComponent from '@/components/AddTagsComponent.vue'
import {mapActions} from 'vuex'
// import axios from 'axios'
export default {
    components : {
        addTagsComponent
    },
    methods: {
        ...mapActions([
            'postQuestion'
        ])
    },
    computed: {
        title: {
            get () {
                return this.$store.state.title
            },
            set (value) {
                this.$store.commit('setTitle', value)
            }
        },
        content: {
            get () {
                return this.$store.state.content
            },
            set (value) {
                this.$store.commit('setContent', value)
            }
        }
    }

}
</script>

<style scoped>
input[type=text], select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}
.area {
    text-align: left;
    font-weight: 800;
    font-family: Arial, Helvetica, sans-serif !important;
}
.buttonClass {
    margin-bottom: 9.2%
}
</style>
