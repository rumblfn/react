import {SET_LOADING, SET_ERROR, SET_POSTS} from "./actions";

const initialState = {
    posts: [],
    loading: false,
    error: false,
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING: {
            return {
                ...state,
                loading: action.payload,
            }
        }
        case SET_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }
        case SET_POSTS: {
            return  {
                ...state,
                posts: action.payload,
            }
        }
        default: {
            return state
        }
    }
}