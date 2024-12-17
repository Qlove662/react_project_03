import React, {useState} from 'react';
import Tasklist from './Tasklist.css';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Tasklist01() {
  
    const [tasks, setTasks] = useState([]);
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
      <div className='Task-List'>
        <h1>Hunny-Do List</h1>
        <h4>Task Management Application</h4>
        <div>
          <input type="text" value={newTask} onChange={handleInputChange} placeholder="Enter a task..."/>
          <button className="add-button" onClick={addTask}>Add</button>
        
        </div>

          <ol>
            {tasks.map((task, index)=>
            <li key={index}>
              <InputGroup.Checkbox aria-label="Checkbox for following text input" />
              <span className='text'>{task}</span>
              <button className="delete-button" onClick={()=>deleteTask(index)}>Delete</button>
              <button className="move-button" onClick={()=>moveTaskUp(index)}>⬆️</button>
              <button className="move-button" onClick={()=>moveTaskDown(index)}>⬇️</button>
              
        
      
            </li>
          
          )}
          </ol>
      </div>
    )
}
