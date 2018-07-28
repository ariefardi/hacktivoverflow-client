import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import swal from 'sweetalert'
import swal2 from 'sweetalert2'
import router from './router'
import alertify from 'alertifyjs'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles : [],
    title: '',
    content: '',
    tags: [],
    pageArticle: '',
    answerQuestion: '',
    loginStatus : false,
    username: '',
    password: '',
    userArticles: [],
    articleUpdate: ''
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
      console.log(' ini dari state mutation', state.pageArticle.answers[payload.id])
      state.pageArticle.answers[payload.id].upvote.push(payload.userId)
    },
    addDownvoteAnswer (state, payload) {
      console.log(' ini dari state mutation', state.pageArticle.answers[payload.id])
      state.pageArticle.answers[payload.id].downvote.push(payload.userId)
    },
    changeLoginStatus (state, payload) {
      state.loginStatus = payload
    },
    setUsername (state, payload) {
      state.username = payload
    },
    setPassword (state, payload) {
      state.password = payload
    },
    setUserArticles (state, payload) {
      state.userArticles = payload
    },
    deleteUserArticle (state, payload) {
      state.userArticles.splice(payload,1)
    },
    setArticleUpdate (state, payload) {
      state.articleUpdate = payload
    },
    setContentforUpdate (state, payload) {
      state.title = payload.title
      state.content = payload.content
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
          // swal('Berhasil Menjawab')
          alertify.set('notifier','position', 'top-center');
          alertify.success('Current position : ' + alertify.get('notifier','position'));
  
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
            alertify.success('Your Answer Succesfully Posted')
          }
          else {
            console.log('udah vote')
            swal({
              title: data.message,
              icon: 'warning'
            })
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
          swal({
            title: data.message,
            icon: 'warning'
          })
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
        if (data.answerUpdated) {
          let obj = {
            userId,
            id
          }
          context.commit('addUpvoteAnswer', obj )
        }
        else {
          console.log('udah vote')
          swal({
            title: data.message,
            icon: 'warning'
          })
        }
      })
      .catch(err=> {
        console.log(err)
      })
    },
    downvoteAnswer (context, id) {
      console.log('downvote answer')
      let token = localStorage.getItem('token')
      let userId = localStorage.getItem('userId')
      console.log(this.state.pageArticle.answers[id]._id)
      let query = this.state.pageArticle.answers[id]._id
      axios.post('http://localhost:3000/answers/downvote/'+query, {}, {
        headers: {
          token
        }
      })
      .then(({data})=> {
        console.log(data)
        if (data.answerUpdated) {
          let obj = {
            userId,
            id
          }
          context.commit('addDownvoteAnswer', obj )
        }
        else {
          console.log('udah vote')
          swal({
            title: data.message,
            icon: 'warning'
          })
        }
      })
      .catch(err=> {
        console.log(err)
      })
    },
    login (context) {
      console.log('login')
      axios.post('http://localhost:3000/users/login', {
          username: this.state.username,
          password: this.state.password
      })
      .then(({data})=> {
          swal('Succesfully Login')
          // console.log(data.token)
          let token = data.token
          localStorage.setItem('token', token)
          localStorage.setItem('userId', data.found._id)
          context.commit('changeLoginStatus', true)
          router.push('/')
      })
      .catch(err=> {
          swal('Username/Password salah')
          console.log(err)
      })
    },
    logout (context) {
      swal('Berhasil Logout')
      context.commit('changeLoginStatus', false)
      localStorage.clear()
    },
    getQuestionByUser ({commit},id) {
      console.log(id, ' ini masuk gak get question by user')
      axios.get('http://localhost:3000/articles/users/'+id)
      .then(({data})=> {
        console.log(data.articles)
        let result = data.articles
        commit('setUserArticles', result)
      })
      .catch(err=> {
        console.log(err)
      })
    },
    deleteQuestion ({commit}, index) {
      console.log('dete qestion', index)
      console.log(this.state.userArticles[index]._id)
      let id = this.state.userArticles[index]._id
      swal2({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          axios.delete('http://localhost:3000/articles/delete/'+id)
          .then((response)=> {
            console.log(response)
            swal2(
              'Deleted!',
              response.data.message,
              'success'
            )
            commit('deleteUserArticle', index)
          })
          .catch(err=> {
            swal2('Waduh error nih patrick!')
          })
        }
      })
    },
    updateQuestion ({commit}, obj) {
      console.log(' ini update question',obj)
      let token = localStorage.getItem('token')
      let userId = localStorage.getItem('userId')
      // axios.put('http://localhost:3000/articles/update/'+obj.query)
      // console.log(this.state.articles)
      axios.put('http://localhost:3000/articles/update/'+obj.query,{
        title: this.state.title,
        content: this.state.content
      },{
        headers: {
          token
        }
      })
      .then(({data})=> {
        console.log(data, ' berhasil di update')
        swal('Berhasil update')
        router.push('/dashboard/'+userId)
      })
      .catch(err=> {
        console.log(err)
      })
      
    },
    getOneForQuestionUpdate ({commit}, value) {
      let id = value
      axios.get('http://localhost:3000/articles/'+id)
      .then(({data})=> {
          let result = data.article
          console.log(result, ' result dari getOne for question update')
          commit('setContentforUpdate', result)
      })
    }
  }
})