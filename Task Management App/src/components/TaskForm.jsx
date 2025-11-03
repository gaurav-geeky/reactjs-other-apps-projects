import React, { useState } from 'react'

const TaskForm = ({addTask}) => {
    const [task, settask] = useState('');
    const [priority, setpriority] = useState('Medium');
    const [category, setcategory] = useState('General');

    const handleSubmit = (e) => {
        e.preventDefault(); 
        addTask({ text: task, priority, category, completed: false }); 

        // reset state: 
        settask(''); 
        setcategory('General'); 
        setpriority('Medium'); 
    }

    return (
        <>
            <form onSubmit={handleSubmit} className=''>

                <div className="inp">
                    <input type="text"
                        placeholder='Enter Your Task'
                        value={task}
                        onChange={(e) => { settask(e.target.value) }} />
                    <span > <button type='submit'>Add Task</button> </span>

                </div>

                <div id='btns'>
                    <select value={priority} id="" onChange={(e) => { setpriority(e.target.value) }}>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>

                    <select value={category} id="" onChange={(e) => { setcategory(e.target.value) }}>
                        <option value="General">General</option>
                        <option value="Work">Work</option>
                        <option value="Personal">Personal</option>
                    </select>
                </div>

            </form>
        </>
    )
}

export default TaskForm
