import { createContext, useReducer } from "react";
import { REMOVE_ALERT, SET_ALERT } from "./ALertConstants";
import { alertReducer } from "./AlertReducer";


export const AlertContext = createContext();

export const AlertProvier = ({children}) =>{
    const initialState = null;
    const [state, dispatch] = useReducer(alertReducer,initialState);

    // set an alert 
    const setAlert = (msg, type) =>{
        dispatch({
            type:SET_ALERT,
            payload:{msg, type}
        })

        setTimeout(()=>dispatch({type:REMOVE_ALERT}),3000)
    }
    return(
        <AlertContext.Provider value={{alert:state, setAlert}}>
            {children}
        </AlertContext.Provider>
    )
}

export default AlertContext;