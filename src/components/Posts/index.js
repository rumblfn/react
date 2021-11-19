import { PostsView } from "./presentationComponent";
import { postsConnect } from "../../connect/posts";
import {useEffect} from "react";

export const PostsRender = ({posts, getData}) => {
    console.log(posts)
    useEffect(() => {
        getData();
    }, [])
    return (
        <PostsView
            loading={posts.loading}
            error={posts.error}
            posts={posts.posts}
            getData={getData}
        />
    )
}

export const Posts = postsConnect(PostsRender)