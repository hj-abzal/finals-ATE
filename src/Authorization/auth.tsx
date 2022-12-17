import React, {ChangeEvent, useState} from 'react';
import s from './auth.module.css'


export const Auth = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    function onChangeHandlerEmail(e: ChangeEvent<HTMLInputElement>) {
        const inputValue = e.currentTarget.value
        setEmail(inputValue)
    }

    function onChangeHandlerPassword(e: ChangeEvent<HTMLInputElement>) {
        const inputValue = e.currentTarget.value
        setPassword(inputValue)
    }

    function onChangeHandlerConfPassword(e: ChangeEvent<HTMLInputElement>) {
        const inputValue = e.currentTarget.value
        setConfirmPassword(inputValue)
    }

    return (
        <div>
            <h1>It-incubator</h1>
            <h2>Sign up</h2>
            <div className={s.inputs}>
                <div>
                    <input type="text"
                           onChange={onChangeHandlerEmail}
                           value={email}/>Email
                </div>
                <div>
                    <input type="text"
                           onChange={onChangeHandlerPassword}
                           value={password}/>Password
                </div>
                <div>
                    <input type="text"
                           onChange={onChangeHandlerConfPassword}
                           value={confirmPassword}/>Confirm password
                </div>
            </div>
            <div className={s.buttons}>
                <button>Cancel</button>
                <button>Register</button>
            </div>
        </div>
    );
};

