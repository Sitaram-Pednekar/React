import { createContext , useContext } from "react";


export const ToDoContext = createContext({
    todos:{
        id: 0,
        todo: "",
        
    },
    addMethod:()=>{},
    removeMethod:()=>{},
    editMethod:()=>{}

});

export const ToDoContextProvider = ToDoContext.Provider;


export const useTodoContext=()=>{
    return useContext(ToDoContext);
}