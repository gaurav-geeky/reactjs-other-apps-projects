import { useEffect, useState } from "react"
import ProgressTracker from "./components/ProgressTracker"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"
import './style.css'


function App() {

  const [tasks, settasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  const addTask = (task) => {
    settasks([...tasks, task])
  }

  const updatetask = (updatedTask, index) => {
    const newTask = [...tasks];
    newTask[index] = updatedTask;
    settasks(newTask);
  }

  const deletetask = (index) => {
    settasks(tasks.filter((_, i) => i != index))
  }

  const cleartasks = ()=> {
    settasks([]); 
  }

  return (
    <>

      <div className="App">
        <header className="title">
          <h1> TaskBuddy</h1>
          <p className="tagline">  Your friendly task manager  </p>
        </header>

        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks} updatetask={updatetask} deletetask={deletetask} />
        <ProgressTracker tasks={tasks} />

        {
          tasks.length > 0 && 
          (<button className="clear-btn"
            onClick={cleartasks}
          >Clear All Tasks</button>)
        }

      </div>

    </>
  )
}

export default App; 
