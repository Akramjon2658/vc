import { stopSubmit } from "redux-form";
import { AuthAPI } from "../api/api";

const GET_AUTH_USER = "authReducer/GET_AUTH_USER";
const SET_IS_LOADING = "authREducer/SET_IS_LOADING";

let initialState = {
    data: {},
    isLoading: false
};

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_AUTH_USER: 
        return {
            ...state,
            data: {...action.data}
        }
        case SET_IS_LOADING: 
        return {
            ...state,
            isLoading: action.isLoading
        }
        default:
        return state
    }
};
export default authReducer;

let getAuthUserAC = (data) => ({type: GET_AUTH_USER, data});
let setIsLoading = (isLoading) => ({type: SET_IS_LOADING, isLoading});

export const getAuthUserThunk = (formdata) =>  async (dispatch) => {
    try{
        dispatch(setIsLoading(true));
        let response = AuthAPI.getAuthUser(formdata);
        dispatch(getAuthUserAC(response.data));
        dispatch(setIsLoading(false));
    }
    catch(err){
        stopSubmit("sign_in", err.response.data);
    }
}