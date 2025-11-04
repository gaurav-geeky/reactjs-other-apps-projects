import React from 'react' 
import '../style.css'

const TaskList = ({ tasks, updatetask, deletetask }) => {

    const toggelComplete = (index) => {
        const updatedTask = { ...tasks[index], completed: !tasks[index].completed }; 
        updatetask(updatedTask, index)
    } 


    return (
        <>
            <ul className='task-list'>
                {tasks.map((task, index) => (
                    <li key={index} className={task.completed? "completed": "" }>
                        <div>
                            <span> {task.text} </span>
                            <small> ({task.priority}, {task.category}) </small>
                        </div>

                        <div>
                            <button onClick={() => toggelComplete(index)}> {task.completed ? "Undo" : "Completed"} </button>

                            <button onClick={() => deletetask(index)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default TaskList; 
