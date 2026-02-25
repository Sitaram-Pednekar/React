import { useRef ,useState} from "react";
import { useTodoContext } from "../../Context/TODOContext";

function AddListItem(){
    const {todos,addMethod,removeMethod} = useTodoContext();
    const Item=useRef(null);

    const add=(e)=>{
        const text= Item.current.value;
        console.log(text);
        const tempTodo ={
            id : Date.now(),
            todo : text
        }
        addMethod(tempTodo);
        

    }
    

   return(
        <>
            <div>
                <input ref={Item} type="text" placeholder="Enter Item Name" />
                <button onClick={add}>Add</button>  
            </div>
            <div>
                <ul>
                    {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.todo}
                        <button onClick={() => removeMethod(todo.id)}>Delete</button>
                    </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default AddListItem;