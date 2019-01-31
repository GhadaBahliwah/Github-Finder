const initialState = {
  value: '',
  users: [], 
  flag: false,
  isLoading: false,
  userRepos: [],
  isEmpty: true,

  // username:''
  user: {
    name:'',
    username:'',
    avatar: '',
    following: '',
    followers: ''
}


}
const reducer = (state = initialState, action) => { 
    switch (action.type) {
        case 'ON_SUBMIT_ACTION_SUCCESSFUL':{
            return {
                ...state,
                ...action.payload    
            }
        }
        case 'ON_SUBMIT_ACTION_SUCCESSFUL':{
            return {
                ...state,
                ...action.payload    
            }
        }
        case 'SET_USERS':{
            return{
                ...state,
                ...action.payload
            }
        }
        case 'SET_REPOS':{
            return {
                ...state,
                ...action.payload
            }
        }
        case 'SET_USERNAME':{
            return{
                ...state,
                ...action.payload
            }
        }
        case 'SET_USER_DETAILS':{
            return {
                ...state,
                ...action.payload
            }
        }
        case 'SET_REPOSITORIES':{
            return{
                ...state,
                ...action.payload
            }
        }
        case 'SET_IS_EMPTY':{
            return{
                ...state,
                ...action.payload
            }
        }
        default: 
        return state;
    }
}

export default reducer;