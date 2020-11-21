const GET_POSTS = "postReducer/GET_POSTS";

const inittalState = {
    messagePost: [],
    avatarPost: [],
    imagePost: []
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
    let {messagePost, avatarPost, imagePost} = posts
    return {
        type: GET_POSTS, messagePost, avatarPost, imagePost,
    }
}

function getPosts(){
    try{
        // let response = 
    }
    catch(err){
        alert(err)
    }
}