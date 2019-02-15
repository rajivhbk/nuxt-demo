
export const state = () => ({
  news: []
})

export const mutations = {
  setNews(state, news) {
    state.news = news
  }
}

export const getters = {
  uniqueNews: (state) => {
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

export const actions = {
  setNewsData({ commit }, data) {
    commit('setNews', data)
  }
}
