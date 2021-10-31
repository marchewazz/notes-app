import React from 'react';

import AddTaskForm from '../AddTaskForm';
import TasksContainer from '../TasksContainer';
import LogoutBar from '../LogoutBar';
import { useLocation } from 'react-router';

function TasksPage(){
  
    const location = useLocation().state
    return(
        <>
          <div className="">
            <LogoutBar className="col-span-2"
            userEmail={location.userEmail} 
            />
              
            <div className="">
              <TasksContainer userID={location.userID} />
            </div>
  
            <div className="">
              <AddTaskForm userID={location.userID}/>
            </div>

          </div>
        </>
    )
}

export default TasksPage;