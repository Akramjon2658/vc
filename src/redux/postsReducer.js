import { PostAPI } from "../api/api";
const GET_POSTS = "postReducer/GET_POSTS";

const inittalState = {
    userId: 0
}

const PostsReducer = (state = inittalState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                messagePost: action.messagePost,
                avatarPost: action.avatarPost,
                imagePost: action.imagePost,
            }
    
        default: 
        return state
    }
};
export default PostsReducer;

const getPostsAC = (posts) => {
    return {type: GET_POSTS, posts}
}

function getPosts = () => async (dispatch) => {
    try{
        let response = await PostAPI.getPosts();
        dispatch(getPostsAC(response.data))
    }
    catch(err){
        alert(err)
    }
}