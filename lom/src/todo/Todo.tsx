

import { useState } from "react"
import { Task } from "./Types";
import TodoList from "./TodoList"
import TodoForm from "./TodoForm";

const Todo:React.FC =() =>{

    const [Tasks,setTasks] = useState<Task[]>([]);
    
    const addTask = (title:string,description:string) =>{
        const newTask:Task = {
            title,
            description,
            id:Number(new Date()),
            done:false
        }
        setTasks((prevTasks) => [...prevTasks,newTask]);
    }

    const handleDone = (value:boolean,id:number|string):void =>{
        setTasks(Tasks.map((Task)=> Task.id === id?{...Task,done:value} : Task))
    }

    const handleDelete = (id:number|string):void =>{
        setTasks(Tasks.filter((Task)=> Task.id !== id ));
    }

    
    if(Tasks){
        return(
            <>
                <TodoForm addTask={addTask}></TodoForm>
                <TodoList 
                    tasks={Tasks}
                    handleDone={handleDone}
                    handleDelete={handleDelete}
                    >

                </TodoList>
            </>
            
            
        )
    }

}

export default Todo;