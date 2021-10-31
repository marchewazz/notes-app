import React, { useState, useEffect } from "react";
import TaskComponent from "../TaskComponent";

function TasksContainer(props){

    const [tasks, setTasks] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    
    useEffect(() => {
        fetch(`tasks/${props.userID}`)
            .then(res => res.json())
            .then(res => {
                setTasks(res['tasks'])
                setIsLoaded(true)
            })
        
    }, []);

    function createTasksComponent(tasks){
        let components = [];

        for (let i = 0; i < tasks.length; i++){
            components.push(
                <TaskComponent 
                taskID = {tasks[i].task_id}
                taskTitle = {tasks[i].task_title} 
                taskDesc = {tasks[i].task_description}
                taskAttachment = {tasks[i].task_attachment}
                taskDateExpiring = {tasks[i].task_date_expiring}
                taskNotification = {tasks[i].task_notification}
                taskColor = {tasks[i].task_color}
                />)
        }
        return components;
    }

    console.log(tasks);
    console.log(props.userID);
    return (
        <div className="bg-red-900">
            {!isLoaded ? (
                <h1>LOADING...</h1>
            ) : ( 
               tasks.length === 0 ?(
                    <h1>no tasks</h1>
                ) : ( createTasksComponent(tasks) )
            )}
        </div>
    )
}

export default TasksContainer