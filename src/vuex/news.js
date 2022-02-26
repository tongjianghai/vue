let news = {
    state: {
        news: [
            { id: 1, 'title': 'hphp' },
            { id: 2, 'title': 'hcms' },
            { id: 3, 'title': 'hjava' },
        ]
    },
    getters: {
        getAllNews(state) {
            return state.news
        }
    }
}

export default news;