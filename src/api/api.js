export const AuthAPI = {
    getAuthUser(){
        return {
            name: "John Doe",
            age: 18,
            role: 2
        }
    }
}
export const PostAPI = {
    getPosts(){
        return axios.get("https://jsonplaceholder.typicode.com/posts");
    }
}