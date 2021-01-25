import * as axios from "axios";

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
        return axios.get("http://localhost:3000/db.json").then(db => {
            // console.log("[alife]", db.data.post)
            return db.data.post
        });
    }
}