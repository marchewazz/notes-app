import React from "react";

function AddTaskForm(){
    
    function showDate(){
        console.log('function');
    }

    return (
        <div className="place-self-center">
          <form method="POST">
            <textarea 
            name="taskTitle" 
            placeholder="Task title"
            required
            />
            <textarea 
            name="taskDescription" 
            placeholder="Task description"
            required
            />
            <input 
            className="border-yellow-200 border-8 text-yellow-200"
            type="radio"
            name="color"
            value="yellow-200"
            />
            <input 
            className="border-pink-400 border-8 text-pink-400"
            type="radio"
            name="color"
            value="pink-400"
            />
            <input 
            className="border-green-300 border-8 text-green-300"
            type="radio"
            name="color"
            value="green-300"
            />
            <input
            type="text"
            name="taskAttachment"
            placeholder="Task attachment"
            />
            <span>
                Notification?
                <input 
                type="checkbox" 
                name="notificationBool"
                onChange={showDate}
                />
            </span>
            <span>
                Delete when expired?
                <input 
                type="checkbox" 
                name="deletingBool"
                onChange={showDate}
                />
            </span>
            <input 
            type="date"
            name="expiringDate"
            />
            <input 
            type="submit"
            />
          </form>
        </div>
      )
}

export default AddTaskForm;