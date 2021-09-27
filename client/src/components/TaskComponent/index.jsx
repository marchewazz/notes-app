import React from "react";
import ModifyTaskComponent from "../ModifyTaskComponent";

function TaskComponent(props){
    return(
        <div className={`bg-${props.taskColor}`}>
            <p>{ props.taskTitle }</p>
            <p>{ props.taskDesc }</p>
            <p>{ props.taskAttachment }</p>
            <p>{ props.taskDateExpiring }</p>
            <p>{ props.taskNotification.toString() }</p>
            <ModifyTaskComponent />
        </div>
    )
}

export default TaskComponent