import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default function HomePage() {


let defaultTodos = [
    {todo_date:"2024/12/12", todo_text:"Study React", isCompleted: false},
    {todo_date:"2024/10/12", todo_text:"Study HTML", isCompleted: true}, 
    {todo_date:"2024/01/01", todo_text:"Data Structure", isCompleted: true}, 
    ]

    const [todos, setTodos] = useState (defaultTodos)
    const [initalTodos, setInitalTodos] = useState (defaultTodos)


    let HandleAllTodos = () => {
        setTodos (initalTodos)
    }

    let handleDelete = (event, rowindex) => {
        console.log(event)
        console.log(rowindex)
        let newTodos = todos.filter ((todo, TodoIndex)=> {
            if (rowindex!==TodoIndex)
            return todo
        })
        setTodos (newTodos)
    }

  return (
        <>
            <h1>Home Page</h1> 
            <Button variant="success" onClick={()=>HandleAllTodos()}>All Todos</Button>
            <Button variant="success">Completed Todos</Button>
            <Button variant="success">Incomplete Todos</Button>

            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>No.</th>  
                    <th>Todo Task</th>
                    <th>Task Date</th>
                    <th>IsCompleted</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    todos.map ((todo, index)=>(

                <tr>
                    <td>{index+1}</td>  
                    <td>{todo.todo_text}</td>
                    <td>{todo.todo_date}</td>
                    <td>{todo.isCompleted ? "YES" : "NO"}</td>
                    <td><Button variant="warning" onClick={(event)=>handleDelete(event, index)}>Delete</Button></td>
                </tr>
                ))
                }
                
            </tbody>
            </Table>
        </>
  )
}
