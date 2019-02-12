import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      news: []
    },
    mutations: {
      setNews(state, stories) {
        state.news = stories
      }
    },
    actions: {
      async nuxtServerInit(ctx, { $axios }) {
        const response = await $axios.get('https://chroniclingamerica.loc.gov/newspapers.json')
        ctx.commit('setNews', response.data.newspapers)
      }
    },
    getters: {
      uniqueNews: (state) => {
        console.log(state, 'getters') // eslint-disable-line
        const uniqueNews = []
        state.news.forEach((item) => {
          const i = uniqueNews.findIndex(news => news.lccn === item.lccn)
          if (i <= -1) {
            uniqueNews.push(item)
          }
        })
        return uniqueNews
      }
    }
  })
}

export default createStore
