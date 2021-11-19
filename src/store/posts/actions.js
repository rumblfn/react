export const SET_LOADING = 'SET_LOADING'
export const SET_ERROR = 'SET_ERROR'
export const SET_POSTS = 'SET_POSTS'

export const setLoading = (loadingStatus) => ({
    type: SET_LOADING,
    payload: loadingStatus,
})

export const setError = (errorStatus) => ({
    type: SET_ERROR,
    payload: errorStatus,
})

export const setPosts = (posts) => ({
    type: SET_POSTS,
    payload: posts,
})