<template>
    <v-flex xs12>
        <hr>
        <v-card flat v-for="i in 4" :key="i" style="padding:0" >
            <v-container style="padding:0" >
                <v-layout >
                    <v-flex xs4>
                        <v-card flat >
                            <v-container>
                                <v-layout>
                                    <v-flex xs12 style="padding:0" >
                                        <v-card flat >
                                            <v-card-text style="padding:0" ><strong> 5 </strong></v-card-text>
                                            <v-card-text style="padding:0" >upvote</v-card-text>
                                        </v-card>
                                    </v-flex>
                                    <v-flex xs12 style="padding:0" >
                                        <v-card flat >
                                            <v-card-text style="padding:0;" > <strong> 1 </strong> </v-card-text>
                                            <v-card-text style="padding:0" >downvote</v-card-text>
                                        </v-card>
                                    </v-flex>
                                    <v-flex xs12 style="padding:0" >
                                        <v-card flat >
                                            <v-card-text style="padding:0"><strong> 12 </strong></v-card-text>
                                            <v-card-text style="padding:0" >answer</v-card-text>
                                        </v-card>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card>
                    </v-flex>
                    <v-flex xs8>
                        <v-card flat style="margin-top:1%" >
                             <h3> <router-link class="router" to="/about" > mongoose not working </router-link> </h3>
                            <v-card-actions style="padding:0" >
                                <p> <router-link class="tagSpan" to="/about"> javascript </router-link> </p>
                                <p> <router-link class="tagSpan" to="/about"> nodejs </router-link> </p>
                                <p> <router-link class="tagSpan" to="/about"> mongoose </router-link> </p>
                                <v-spacer></v-spacer>
                                <p>asked 50 secs ago arief</p>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
            <hr>
        </v-card>
    </v-flex>
</template>
<script>
export default {
    
}
</script>
<style scoped>
h3 {
  text-align: left;
  text-decoration-color: #333 !important;
  font-weight: 700;
}
.router:link {
    color: red;
    text-decoration: none;
}

/* visited link */
.router:visited {
    color: #64B5F6;
    text-decoration: none;
}

/* mouse over link */
.router:hover {
    color: #42A5F5;
    text-decoration: none;
}

/* selected link */
.router:active {
    color: blue;
}

.tagSpan {
    margin-top: 7% !important;
    margin: 10px 10px 10px 0
}
.tagSpan:link, a:visited {
    background-color: #E1ECF4;
    color: #39739d;
    padding: .4em .5em;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px
}


.tagSpan:hover, a:active {
    background-color: rgb(215, 231, 243);
}
</style>
