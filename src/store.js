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
    pageArticle: '',
    answerQuestion: ''
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
    },
    setAnswerQuestion (state, payload) {
      state.answerQuestion = payload
    },
    addAnswer (state, payload) {
      state.pageArticle.answers.push(payload)
    },
    addUpvote (state, payload) {
      state.pageArticle.upvote.push(payload)
    },
    addDownvote (state, payload) {
      state.pageArticle.downvote.push(payload)
    },
    addUpvoteAnswer (state, payload) {

    },
    addDownvoteAnswer (state, payload) {

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
    getOneQuestion (context,value) {
      // console.log(value, ' ini dari store')
      let id = value
      axios.get('http://localhost:3000/articles/'+id)
      .then(({data})=> {
          let result = data.article
          console.log(result)
          context.commit('setPageArticle', result)
      })
    },
    postYourAnswer (context, id) {
      let token = localStorage.getItem('token')
      let articleId = id
      axios.post('http://localhost:3000/answers',{
          content: this.state.answerQuestion,
          article : articleId
      },{
          headers: {
              token
          }
      })
      .then(({data})=> {
          console.log(data)
          context.commit('addAnswer', data.answer)
          context.commit('setAnswerQuestion', null)
          swal('Berhasil Menjawab')
      })
      .catch(err=> {
          console.log(err)
          swal(err.message)
      })
    },
    upvoteQuestion (context, id) {
      let token = localStorage.getItem('token')
      let userId = localStorage.getItem('userId')
      console.log(token)
      console.log('upvoteQeustion')
      axios.post('http://localhost:3000/articles/upvote/'+id, {}, {
        headers: {
          token
        }
      })
        .then(({data})=> {
          if (data.articleUpdated) {
            context.commit('addUpvote', userId)
          }
          else {
            console.log('udah vote')
          }
        })
        .catch(err=> {
          console.log(err)
        })
    },
    downvoteQuestion (context, id) {
      let token = localStorage.getItem('token')
      let userId = localStorage.getItem('userId')
      console.log(token)
      console.log(userId)
      axios.post('http://localhost:3000/articles/downvote/'+id, {}, {
        headers: {
          token
        }
      })
      .then(({data})=> {
        console.log(data)
        if (data.articleUpdated) {
          context.commit('addDownvote', userId)
        }
        else {
          console.log('udah vote')
        }
      })
      .catch(err=> {
        console.log(err)
      })
    },
    upvoteAnswer (context, id) {
      console.log('upvote answer')
      let token = localStorage.getItem('token')
      let userId = localStorage.getItem('userId')
      console.log(this.state.pageArticle.answers[id]._id)
      let query = this.state.pageArticle.answers[id]._id
      axios.post('http://localhost:3000/answers/upvote/'+query, {}, {
        headers: {
          token
        }
      })
      .then(({data})=> {
        console.log(data)
        // if (data.articleUpdated) {
        //   context.commit('addDownvote', userId)
        // }
        // else {
        //   console.log('udah vote')
        // }
      })
      .catch(err=> {
        console.log(err)
      })
    },
    downvoteAnswer (context, id) {
      console.log('downvote answer')
    }
  }
})