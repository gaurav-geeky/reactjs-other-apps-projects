import React from 'react'

const ProgressTracker = ({ tasks }) => {

    const completedTask = tasks.filter((t) => t.completed).length
    const totalTasks = tasks.length;

    const percentage = totalTasks == 0 ? 0 : (completedTask / totalTasks) * 100;
    return (
        <>
            <div className="progress-tracker">
                <p>
                    {completedTask} out of {totalTasks} tasks Completed
                </p>

                <div className="progress-bar">
                    <div className="progress"
                        style={{ width: `${percentage}%`}}
                    >
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProgressTracker;


