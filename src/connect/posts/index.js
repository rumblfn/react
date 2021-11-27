import {connect} from "react-redux";
import { getPosts, setLoading, setError, setPosts } from "../../store/posts";
const POSTS_API = 'https://jsonplaceholder.typicode.com/posts';

const mapStateToProps = (state) => ({
    posts: getPosts(state),
})

const mapDispatchToProps = (dispatch) => ({
    // setLoading(bool) {
    //     return dispatch(setLoading(bool));
    // },
    // setError(bool) {
    //     return dispatch(setError(bool));
    // },
    async getData() {
        let result = []
        dispatch(setLoading(true))
        dispatch(setError(false));
        dispatch(setPosts([]))

        try {
            const response = await fetch(POSTS_API);
            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            } else {
                result = await response.json();
            }
        } catch(error) {
            dispatch(setError(true));
        } finally {
            dispatch(setLoading(false));
        }

        return dispatch(setPosts(result))
    }
})


export const postsConnect = connect(mapStateToProps, mapDispatchToProps);