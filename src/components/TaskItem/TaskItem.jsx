import { useState } from "react"

export default function  TaskItem({task, handleCheckboxToggle, handleDelete, handleEditTask}) {

  const [editable, setEditable] = useState(false);
  const [editedTask, setEditedTask] = useState(task.task);

  const toggleEdit = () => {
    setEditable(!editable);
    setEditedTask(task.task); 
  };

  const handleEdit = () => {
    handleEditTask(task.id, editedTask);
    setEditable(false);
  };
  
  return (
    <li>
       <input
        type='checkbox'
        checked={task.isComplete}
        onChange={() => handleCheckboxToggle(task.id)}
      />
      {editable ? (
        <input className="editTask"
          type="text"
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
        />
      ) : (
        <span style={{ textDecoration: task.isComplete ? "line-through" : "none" }}>
          {task.task}
        </span>
      )}
      {editable ? (
        <>
          <button onClick={handleEdit}>Save</button>
          <button onClick={toggleEdit}>Cancel</button>
        </>
      ) : (
        <>
          <button onClick={toggleEdit}>Edit</button>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </>
      )}
    </li>
  )
}



