import React from "react";

function TaskComponent(props){

    function deleteTask(taskID){
        const requestOptions = {
            method: 'DELETE'
        };

        fetch(`/tasks/delete/${taskID}`, requestOptions)
        .then(res => console.log(res.text()))
    }

    return(
        <div className={`bg-${props.taskColor}`}>
            <p>{ props.taskTitle }</p>
            <p>{ props.taskDesc }</p>
            <p>{ props.taskAttachment }</p>
            <p>{ props.taskDateExpiring }</p>
            <p>{ props.taskNotification.toString() }</p>
            <div className="flex justify-evenly">
                <button onClick={() => deleteTask(props.taskID)}>delete</button>
                <button>edit</button>
            </div>
        </div>
    )
}

export default TaskComponent