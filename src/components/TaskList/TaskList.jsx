import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({tasks, handleCheckboxToggle, handleDelete,  handleEditTask}) {
  return (
    <ul >
      {
        tasks.length === 0 ? <h2>No task add yet!!!</h2> : tasks.map((task)=> (
             <TaskItem key={task.id} task={task} handleCheckboxToggle={handleCheckboxToggle} 
           handleDelete={handleDelete}
           handleEditTask={handleEditTask}
           />
            ))
      }
    </ul>
  )
}


