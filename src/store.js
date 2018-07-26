import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import swal from 'sweetalert'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles : [],
    title: '',
    content: '',
    tags: [],
    pageArticle: ''
  },
  mutations: {
    setTitle(state, payload) {
      state.title = payload
    },
    setContent(state, payload) {
      state.content = payload
    },
    setTags(state, payload) {
      state.tags = payload
    },
    addArticle(state, payload) {
      state.articles.push(payload)
    },
    setArticles (state, payload) {
      state.articles = payload
    },
    setPageArticle (state, payload) {
      state.pageArticle = payload
    }
  },
  actions: {
    getQuestion (context) {
      console.log('get axios here')
      axios.get('http://localhost:3000/articles')
      .then(({data})=> {
        console.log(data.articles)
        context.commit('setArticles', data.articles)
      })
    },
    postQuestion (context) {
      // console.log(this.state.title, this.state.content, this.state.tags)
      console.log('post question')
      let token = localStorage.getItem('token')
      console.log(token)
      axios.post('http://localhost:3000/articles', {
        title: this.state.title,
        content: this.state.content,
        tags: this.state.tags
      }, {
        headers: {
          token
        }
      })
      .then(({data})=> {
        console.log(data.articles)
        let result = data.articles
        swal('Succesfully Posted in Your Lovely APP')
        context.commit('addArticle', result)
        router.push('/')
      })
      .catch(err=> {
        console.log(err.message)
      })
    },
    getOneQuestion (contex,value) {
      console.log(value, ' ini dari store')
      // let id = this.$router.params.id
      // axios.get('http://localhost:3000/articles/'+id)
      // .then(({data})=> {
      //     let result = data.article
      //     console.log(result)
      // })
    }
  }
})