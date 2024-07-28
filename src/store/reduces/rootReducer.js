const initState = {
    users: [
        { id: 1, name: 'dungcon' },
        { id: 2, name: 'dungcon1' },
        { id: 3, name: 'dungcon2' },
    ],
    psots: []
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':

            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id)
            return { ...state, users };

        case 'ADD_USER':
            let id = Math.floor(Math.random() * 1000)
            let user = { id: id, name: `name ${id}` }
            return { ...state, users: [...state.users, user] }
        default:
        // code block
    }

    return state;
}
export default rootReducer;