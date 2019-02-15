export const state = () => ({})

export const actions = {
  async nuxtServerInit(ctx, { $axios }) {
    const response = await $axios.get('https://chroniclingamerica.loc.gov/newspapers.json')
    ctx.dispatch('newspapers/setNewsData', response.data.newspapers)
  }
}
