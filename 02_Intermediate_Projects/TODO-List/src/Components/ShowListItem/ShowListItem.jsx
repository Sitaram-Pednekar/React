import { useTodoContext } from "../../Context/TODOContext";

function ShowListItem(){
    const {todos}=useTodoContext();
    console.log("ShowListItemID: ",todos.id);
   return(
        <>
            <div>
                <li>
                    
                </li>
            </div>
        </>
    )
}

export default ShowListItem;