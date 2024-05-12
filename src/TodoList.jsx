import { useState } from "react"
function Todolist(){
    const [tasks,settasks] = useState(["take a shower","eat breakfast","walk the dog"])
    const [newtask,setnewtask] = useState("")
    function handleinputchange(event){
        setnewtask(event.target.value)
    }
    function addTask(){
       if(newtask.trim() !==""){
        settasks([...tasks,newtask])
        setnewtask("")
       }
    }
    function deleteTask(index){
        const updatedTask= tasks.filter((_,i)=> i!==index)
        settasks(updatedTask)

    }
    function taskup(index){
        if(index>0){
            const updatedTask = [...tasks]
            [updatedTask[index],updatedTask[index-1]]=[updatedTask[index-1],updatedTask[index]]
        setnewtask(updatedTask)
        }
    }
    function taskdown(index){
        if(index<tasks.length-1){
            const updatedTask = [...tasks]
            [updatedTask[index],updatedTask[index+1]]=[updatedTask[index+1],updatedTask[index]]
        setnewtask(updatedTask)
        }
    }
    return(
        <div className="to-do-list">
        <h1>TO DO LIST</h1>
        <div>
            <input type="text"
            placeholder="enter a new task"  
            value={newtask}
            onClick={handleinputchange}/>
            <button className="buttons" onClick={addTask}>add</button>
        </div>
        <ol>
            {tasks.map((task,index)=>{
                return(
                    <li key={index}>
                        <span>{task}</span>
                        <button className="buttons" onClick={()=>taskup(index)}>up</button>
                        <button className="buttons" onClick={()=>taskdown(index)}>down</button>
                        <button className="delete-button" onClick={()=>deleteTask(index)}>delete</button>
                    </li>
                )
            })}
        </ol>
        </div>
    )
}
export default Todolist