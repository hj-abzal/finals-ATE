import React from 'react';
import s from './auth.module.css'


export const Auth = () => {
    return (
        <div>
            <h1>It-incubator</h1>
            <h2>Sign up</h2>
            <div className={s.inputs}>
                <div><input type="text"/>Email</div>
                <div><input type="text"/>Password</div>
                <div><input type="text"/>Confirm password</div>
            </div>
            <div className={s.buttons}>
                <button>Cancel</button>
                <button>Register</button>
            </div>
        </div>
    );
};

