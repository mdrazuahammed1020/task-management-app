import { useState } from "react"

export default function AddTaskForm({handleAddTask}) {
  const [task, setTask] = useState('')
  function handleSubmit(e){
    e.preventDefault()
    if(!task.trim()) return;
    handleAddTask(task)
    setTask('')
  }
  console.log(task)
  return (
    <div className="form-section">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e)=> setTask(e.target.value)} value={task} />
        <button type="submit">Add Task</button>
      </form>
    </div>
  )
}
