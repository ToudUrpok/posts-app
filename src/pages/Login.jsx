import React, { useContext } from "react";
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import { AuthContext } from "../context";

const Login = () => {
    const { setIsAuth } = useContext(AuthContext);

    const login = (event) => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }

    return (
        <div className="login">
            <div className="login__content">
                <h1>Login page</h1>
                <form onSubmit={login}>
                    <MyInput type='email' placeholder='Email' />
                    <MyInput type='password' placeholder='Password' />
                    <MyButton>Sign In</MyButton>
                </form>
            </div>
        </div>
    )
}

export default Login;