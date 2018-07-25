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
                                        <input type="text" id="title" name="title" placeholder="Title..">
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
                                        <wysiwyg/>
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
         <v-btn color="blue" class="buttonClass">Post Your Question</v-btn>
    </div>
</template>

<script>
import addTagsComponent from '@/components/AddTagsComponent.vue'
export default {
    components : {
        addTagsComponent
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
