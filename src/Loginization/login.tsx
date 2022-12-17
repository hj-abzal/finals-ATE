import React, {ChangeEvent, useState} from 'react';

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onChangeHandlerEmail = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.currentTarget.value
        setEmail(inputValue)
    }

    const onChangeHandlerPassword = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.currentTarget.value
        setEmail(inputValue)
    }

    const onChangeSignUp = () => {

    }

    return (
        <div className="login">
            <h1 className="itIncubator">It-incubator</h1>
            <h2 className="signUp">Sign In</h2>


            <div><input type="email" value={email} onChange={onChangeHandlerEmail}/>Email</div>

            <div><input type="password" value={password} onChange={onChangeHandlerPassword}/>Password</div>



            <div><button>Forgot Password</button></div>
            <div><button>Login</button></div>
            <h3>Do you have an account?</h3>
            <a href="http://127.0.0.1:5173/auth">Sign up</a>
        </div>
    );
};

