import { PostAPI } from "../api/api";

const GET_POSTS = "postReducer/GET_POSTS";

const inittalState = [];

const PostsReducer = (state = inittalState, action) => {
    switch (action.item) {
        case GET_POSTS:
            return [
                ...action.posts
        ]
        default: 
        return state
    }
};
export default PostsReducer;

const getPostsAC = (posts) => {
    return {
        item: GET_POSTS, posts
    }
}

export const getPosts = () => async dispatch => {
    try{
        let response = await PostAPI.getPosts();
        dispatch(getPostsAC(response))
        console.log("[alife]",response);
    }
    catch(err){
        console.log(err)
    }
}