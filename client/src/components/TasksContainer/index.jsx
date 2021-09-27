import React, { useState, useEffect } from "react";
import TaskComponent from "../TaskComponent";

function TasksContainer(){

    const [tasks, setTasks] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    
    useEffect(() => {
        fetch('tasks/63')
            .then(res => res.json())
            .then(res => {
                setTasks(res['tasks'])
                setIsLoaded(true)
            })
        
    }, []);

    console.log(tasks);
    return (
        <div className="bg-red-900">
            {!isLoaded &&
                <h1>LOADING...</h1>
            } 
            {isLoaded && 
               <TaskComponent 
               taskTitle = {tasks[2].task_title} 
               taskDesc = {tasks[2].task_description}
               taskAttachment = {tasks[2].task_attachment}
               taskDateExpiring = {tasks[2].task_date_expiring}
               taskNotification = {tasks[2].task_notification}
               taskColor = {tasks[2].task_color}
               />
            }
        </div>
    )
}

export default TasksContainer