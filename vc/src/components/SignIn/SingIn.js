import React, { useState } from "react";
import s from "./signin.module.css";

function SingIn(props) {
    let [login, setLogin] = useState(null);
    let [password, setPassword] = useState(null);
    console.log({login, password});
    return <div className={s.signin}>
        <form className={s.form}>
            <div>
                <label>Login</label><br />
                <input name="login" onChange={(e) => setLogin(e.target.value)} type="text" />
            </div>
            <div>
                <label>Password</label><br />
                <input name="login" onChange={(e) => setPassword(e.target.value)} type="password" />
            </div>
            <button type="submit" className="mt-1 btn   btn-primary">confirm</button>
        </form>
    </div>
}

export default SingIn;