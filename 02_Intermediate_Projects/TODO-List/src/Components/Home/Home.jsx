import { useEffect, useState } from "react";
import { ToDoContextProvider } from "../../Context/TODOContext";
import AddListItem from "../AddListItem/AddListItem";
import ShowListItem from "../ShowListItem/ShowListItem"
function Home(){

    

    const [todos,setTodos]= useState([]);

    const addMethod=(newTodo)=>{
        const getItem = JSON.parse(localStorage.getItem('Todos'));
        setTodos([...todos, newTodo]);
        localStorage.setItem('Todos',JSON.stringify(todos));
        


    }
    const removeMethod=(id)=>{

        setTodos(todos.filter(todos =>todos.id !== id));
        localStorage.setItem('Todos',JSON.stringify(todos));
        const getItem = JSON.parse(localStorage.getItem('Todos'));
        
        

    }
    

    const value = { todos, addMethod, removeMethod };



   return(
        <ToDoContextProvider value={value}>
            <AddListItem/>
            <br/>
            <br/>
            <div><ShowListItem/></div>
            
        </ToDoContextProvider>
    )
}

export default Home;