import React from 'react';

import AddTaskForm from '../AddTaskForm';
import TasksContainer from '../TasksContatiner';
import LogoutBar from '../LogoutBar';

function TaskPage(){
    return(
        <>
            <div className="grid grid-cols-2 grid-rows-2">
              <LogoutBar className="col-span-2"/>
              <TasksContainer className="row-start-2"/>
              <div className="col-start-2">
                <AddTaskForm />
              </div>
            </div>
        </>
    )
}

export default TaskPage;