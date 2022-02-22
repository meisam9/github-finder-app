import { CLEAR_USERS, GET_USERS, GET_USER_AND_REPOS, SET_LOADING } from "./GithubConstants"

const githubReducer = (state, action) => {
    const update = (newState) => Object.assign({},state,newState)
    switch (action.type) {
        case GET_USERS: 
            return update({
                users:action.payload,
                loading:false,
            })
        
        case GET_USER_AND_REPOS: 
            return update({
                user:action.payload.user,
                repos:action.payload.repos,
                loading:false,
            })


        case SET_LOADING: 
            return update({
                loading:true,
            })

        case CLEAR_USERS: 
            return update({
                users:[],
            })
        default:
            return state;
    }
}

export default githubReducer;