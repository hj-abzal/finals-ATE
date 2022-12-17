import React, {ChangeEvent, useState} from 'react';
import s from './auth.module.css'
import axios from 'axios'

export type AuthPropsType = {
    register: () => void
    setEmail: (value: any) => void
    setPassword: (value: any) => void
    setConfPassword: (value: any) => void
}

export const Auth = (props: AuthPropsType) => {

    const onChangeHandlerEmail = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.currentTarget.value
        setEmail(inputValue)
    }
    const onChangeHandlerPassword = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.currentTarget.value
        setPassword(inputValue)
    }
    const onChangeHandlerConfPassword = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.currentTarget.value
        setConfPassword(inputValue)
    }

    const register = () => {
        props.register()
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
                <button onClick={cancel}>Cancel</button>
                <button onClick={register}>Register</button>
            </div>
        </div>
    );
};

