import {createContext, useContext } from "react";

export const ModeContext = createContext({
    theme: 'light',
    darkMode:()=>{},
    lightMode:()=>{}
})//create a contextAPI 

export const ModeContextProvider = ModeContext.Provider;


export const UseModeContext=()=>{
    return useContext(ModeContext);
}

