import './App.css'
import {Auth} from "./Authorization/auth";
import {Login} from "./Loginization/login";
import {Route, Routes} from "react-router-dom";


function App() {


    return (
        <div className="App">
            <Routes>
                <Route path='/auth' element={<Auth/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </div>
    )
}

export default App
