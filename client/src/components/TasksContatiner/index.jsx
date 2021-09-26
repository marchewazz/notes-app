import React from "react";

function TasksContainer(){

    fetch('tasks/63')
    .then(res => res.json())
    .then(res => console.log(res.tasks))

    return (
        <div className="bg-red-900">
            <h1>fds</h1>
        </div>
    )
}

export default TasksContainer