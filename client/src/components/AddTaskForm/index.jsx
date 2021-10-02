import React, { useState } from "react";

function AddTaskForm(){

    const [showForm, setShowForm] = useState(false);
    const [not, setNot] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [showDateInput, setShowDateInput] = useState(not || deleting);
    
    function addTask(event){

      const requestOptions = {
        method: 'POST'
      };
      event.preventDefault();
      const data = new FormData(event.target);
      
      const title = data.get('taskTitle');
      const description = data.get('taskDescription');
      const color = data.get('color');
      const attachment = null ? data.get('taskAttachment') === '' : data.get('taskAttachment');
      const notificationBool = true ? data.get('notificationBool') === 'on' : false;
      const deletingBool = true ? data.get('deletingBool') === 'on' : false;
      const expiringDate = null ? data.get('expiringDate') === '' : data.get('expiringDate');
      console.log(expiringDate);

      fetch(
        `tasks/add/${title}/${description}/${color}/${attachment}/${notificationBool}/${deletingBool}/${expiringDate}/63`, 
        requestOptions)
      .then(res => res.json())
      .then(res => console.log(res.message))
    }
    return (
        <div>
            {showForm &&
            <>
              <button className="bg-red-900"
              onClick={() => setShowForm(!showForm)}>
                Hide
              </button>
              <form onSubmit={addTask}>
              <input
              type="text"
              name="taskTitle" 
              placeholder="Task title"
              required
              />
              <input
              type="text"
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
                    onChange={() => {setNot(!not); setShowDateInput(not || deleting); console.log(showDateInput)}}
                    />
                </span>
                <span>
                    Delete when expired?
                    <input 
                    type="checkbox" 
                    name="deletingBool"
                    onChange={() => {setDeleting(!deleting); setShowDateInput(not || deleting); console.log(showDateInput)}}
                    />
                </span>
              </div>
              {showDateInput &&
                <input 
                type="datetime-local"
                name="expiringDate"
                />
              }
              <input 
              type="submit"
              />
            </form>
            </>
          } 
          {!showForm &&
          <button className="bg-green-900"
          onClick={() => {setShowForm(!showForm); setShowDateInput(not || deleting)}}>
            Add Task
          </button>
          }
        </div>
      )
}

export default AddTaskForm;