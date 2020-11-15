import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { getAuthUserThunk } from "../../redux/authReducer";
import s from "./signin.module.css";

function SingIn(props) {
    return <div className={s.signin}>
        <form className={s.form} onSubmit={props.handleSubmit}>
            <div>
                <label>Login</label><br />
                <Field name="login" component="input" type="text" />
            </div>
            <div>
                <label>Password</label><br />
                <Field name="password" component="input" type="password" />
            </div>
            <button type="submit" className="mt-1 btn   btn-primary">confirm</button>
        </form>
    </div>
}
const SignInReduxForm = reduxForm({form: "sign_in"})(SingIn)

const SignInContainer = (props) => {
    console.log({props})
    if(props.name)
        return <Redirect to="/" />
    function onSubmit(formdata){
        console.log({formdata})
        props.getAuthUserThunk()
    }
    return <SignInReduxForm  onSubmit={onSubmit}/>
}
const mapStateToProps = (state) => {
    return {
        name: state.auth.data.name
    }
}
export default connect(mapStateToProps, {getAuthUserThunk})(SignInContainer);