import React from "react";

function AddTaskForm(){

    function showDate(){
        console.log('function');
    }

    return (
        <div>
          <form method="POST">
            <input
            type="text"
            name="taskTitle" 
            placeholder="Task title"
            required
            />
            <textarea 
            name="taskDescription" 
            placeholder="Task description"
            required
            />
            <div>
              Choose task card color
              <input 
              className="border-yellow-200 border-8 text-yellow-200"
              type="radio"
              name="color"
              value="yellow-200"
              checked
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
            </div>
            <input
            type="text"
            name="taskAttachment"
            placeholder="Task attachment"
            />
            <div>
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
            </div>
            <input 
            type="datetime-local"
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