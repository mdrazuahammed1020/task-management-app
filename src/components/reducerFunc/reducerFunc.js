export const initState = [];
export function reducer(state, action){
  switch(action.type){
    case "add":
      return [...state, action.task]
    case "toggleComplete":
      return state.map(task =>
        task.id === action.id ? { ...task, isComplete: !task.isComplete } : task
      )
    case "delete":
      return state.filter(task => task.id !== action.id)
    case "edit":
        return state.map((task) =>
          task.id === action.id ? { ...task, task: action.updatedTask } : task
      )
      default:
        return state; 
  }
}            


// case "edit":
//       return state.map(task=> (
//         task.id === action.id ? {...task, task: action.editTask} : task
//       ))   