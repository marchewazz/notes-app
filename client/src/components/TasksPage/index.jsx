import React from 'react';

import AddTaskForm from '../AddTaskForm';
import TasksContainer from '../TasksContainer';
import LogoutBar from '../LogoutBar';

function TasksPage(){
    return(
        <>
            <div className="grid grid-cols-2 grid-rows-2">
              <LogoutBar className="col-span-2"/>
              
              <div className="row-start-2 col-start-1">
                <TasksContainer  />
              </div>
  
              <div className="col-start-2 row-start-2">
                <AddTaskForm />
              </div>
            </div>
        </>
    )
}

export default TasksPage;