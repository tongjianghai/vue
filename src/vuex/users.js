let users = {
    state: {
        users: [
            { id: 1, 'name': 'user' },
        ]
    },
    getters: {
        getAllUsers(state) {
            return state.users
        }
    }
}

export default users;