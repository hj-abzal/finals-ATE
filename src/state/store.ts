import {combineReducers, createStore} from "redux";
import {registrationReducer} from "./registration-reducer";

export const rootReducer = combineReducers({
    registration: registrationReducer
})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>