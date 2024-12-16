import React, {useState} from 'react'
import './App.css';

export default function Tasklist01() {
  
    const [tasks, setTasks] = useState(["Eat","Sleep","Study","Clean",]);
    const [newTask, setNewTask] = useState("");
  
    function handleInputChange(event) {
      setNewTask(event.target.value);
    }
  
    function addTask(){

            if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }
  
    function deleteTask(index) {
        const updatetasks = tasks.filter((_, i) => i !== index);
        setTasks(updatetasks);

    }
  
    function moveTaskUp(index) {
        if(index > 0){
            const updateTasks = [...tasks];
            [updateTasks[index], updateTasks[index - 1]] =
            [updateTasks[index - 1], updateTasks[index]];
            setTasks(updateTasks);
        }
  
    }
  
    function moveTaskDown(index) {
        if(index < tasks.length - 1){
            const updateTasks = [...tasks];
            [updateTasks[index], updateTasks[index + 1]] =
            [updateTasks[index + 1], updateTasks[index]];
            setTasks(updateTasks);
        }
    
    }
  
    return (
      <>
        <h1>To-do List</h1>
        <div>
          <input type="text" value={newTask} onChange={handleInputChange} placeholder="Add a task"/>
          <button onClick={addTask}>Add Task</button>
          < Tasklist01 tasks={tasks} deleteTask={deleteTask} moveTaskUp={moveTaskUp} moveTaskDown={moveTaskDown}/>
        </div>
        <ol>
          {tasks.map((task, index)=>
          <li key={index}>
            <span className='text'>{task}</span>
            <button className="delete-button" onClick={()=>deleteTask(index)}>Delete</button>
            <button className="move-button" onClick={()=>moveTaskUp(index)}>⬆️</button>
            <button className="move-button" onClick={()=>moveTaskDown(index)}>⬇️</button>
          </li>
        
        )}
        </ol>
      </>
    )
}
