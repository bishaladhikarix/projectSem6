import React from "react"
import { Task } from "./Types"
type Props ={
    tasks:Task[],
    handleDone:(para:boolean,key:number|string)=>void,
    handleDelete:(id:number|string)=>void
}

const TodoItem:React.FC<Props>= ({tasks,handleDone,handleDelete}) =>{

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>,id:number|string):void =>{
        handleDone(e.target.checked,id);
    }

    


    return(

        <div className="todo-items">
            {tasks.map((task)=>
                <div className="todo-item">
                    <h3 className="title">{task.title}</h3>
                    <p className="description">{task.description}</p>
                    <input type="checkbox" className="done" checked={task.done}  onChange={(e)=>handleChange(e,task.id)} />
                    <button className="delete" onClick={()=>handleDelete(task.id)}>Delete</button>
                </div>
            )}
        </div>

    )
}

export default TodoItem;