import { useEffect, useState } from "react"
import ProgressTracker from "./components/ProgressTracker"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"


function App() {

  const [tasks, settasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });
  
  const addTask = (task) => {
    settasks([...tasks, task])
  }

  return (
    <>
      <header>
        <h1> TaskBuddy</h1>
        <p> <i>  Your friendly task manager </i> </p>
      </header>

      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} />
      <ProgressTracker />

    </>
  )
}

export default App
