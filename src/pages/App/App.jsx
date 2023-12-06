
import React, { useReducer } from 'react'
import AddTaskForm from '../../components/AddTaskForm/AddTaskForm'
import TaskList from '../../components/TaskList/TaskList';
import { initState, reducer } from '../../components/reducerFunc/reducerFunc';
import './App.css'

export default function App() {
  const [tasks, dispatch] = useReducer(reducer, initState)
  function handleAddTask(task) {
    const newTask = {
      id: Date.now(),
      task: task,
      isComplete: false
    }

    dispatch({type: 'add', task: newTask})
  }

  console.log(tasks)

function handleDelete(id){          
  dispatch({type: "delete", id: id})
}  

function handleEditTask(id, updatedTask) {
  dispatch({ type: "edit", id: id, updatedTask: updatedTask });
}

function handleCheckboxToggle(id) {
  dispatch({type: 'toggleComplete', id: id})
}
  return (
    <>
    <h2 className='title-top'>Task Management</h2>
    <div className='wrapper'>
      <AddTaskForm handleAddTask={handleAddTask} />
      <TaskList tasks={tasks} handleCheckboxToggle={handleCheckboxToggle} handleDelete={handleDelete}
      handleEditTask={handleEditTask}
      />
    </div>
    </>
  )
}



// function handleEdit(id, editedTask){
//   dispatch({type: 'edit', id:id, editedTask: editedTask})
// } handleEdit ={handleEdit}

