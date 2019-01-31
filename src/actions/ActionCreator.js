const onSubmitActionSuccessful=(data)=>({
    type:'ON_SUBMIT_ACTION_SUCCESSFUL',
    payload: data
});
const setUsersToState = (data) => ({
        type: 'SET_USERS',
        payload: data
    
});
const setUserToState = (data) => ({
    type: 'SET_USERNAME',
    payload: {username:data}

});
const setUserDetailsToState = (data) => ({
    type: 'SET_USER_DETAILS',
    payload: data

});
const setReposToState = (data) => ({
    type: 'SET_REPOSITORIES',
    payload: data

});
const setIsEmptyToState = (data) => ({
    type: 'SET_IS_EMPTY',
    payload: data

});
export const  onSubmitAction =(data)=>(dispatch)=>{
    dispatch(onSubmitActionSuccessful(data))
}
export const setUsers = (data) => (dispatch) => {
    dispatch(setUsersToState(data))
}
export const setRepos = (data) => (dispatch) => {
    dispatch(setReposToState(data))
}
export const handleUsername = (data) => (dispatch) => {
    dispatch(setUserToState(data))
}
export const setUser = (data) => (dispatch) => {
    dispatch(setUserDetailsToState(data))
}
export const addRepositories = (data) => (dispatch) => {
    dispatch(setReposToState(data))
}
export const setIsEmptyState = (data) => (dispatch) => {
    dispatch(setIsEmptyToState(data))
}