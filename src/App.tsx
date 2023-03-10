import './App.css'
import {Auth} from "./Authorization/auth";
import {Login} from "./Loginization/login";
import {Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import axios from "axios";
import {ChangeEvent} from "react";
import {registerAC} from "./state/registration-reducer";


function App() {
    const dispatch = useDispatch()
    const userData = useSelector<AppRootStateType, any>(state => state.registration)

    const register = () => {
        axios.post('https://cards-nya-back-production.up.railway.app/2.0/auth/registration', {email: })
            .then((res) => {
                dispatch(registerAC())
            })
    }

    return (
        <div className="App">
            <Routes>
                <Route path='/auth' element={<Auth
                    register={register}
                />}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </div>
    )
}

export default App
