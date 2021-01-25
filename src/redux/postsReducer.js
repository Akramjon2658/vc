import { PostAPI } from "../api/api";
const GET_POSTS = "postReducer/GET_POSTS";

const inittalState = [];

const PostsReducer = (state = inittalState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return [
                ...action.posts
        ]
        default: 
        return state
    }
};
export default PostsReducer;

const getPostsAC = (posts) => ({type: GET_POSTS, posts})

export const getPosts = () => async dispatch => {
    try{
        let response = await PostAPI.getPosts();
        dispatch(getPostsAC(response))
    }
    catch(err){
        console.log(err)
    }
}