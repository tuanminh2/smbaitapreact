import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './TaskList.scss';
import Drawler from '../Drawler/Drawler';
import TaskInp from './TaskInp';
import DateTimePickerModal from './DateTimePickerModal';

import { useSelector, useDispatch } from 'react-redux';
import { add } from '../../actions/taskAction';

function ListTask() {
  // const taskRedux = useSelector((state) => state.taskRedux);
  // const dispatch = useDispatch();

  const [taskList, setTaskList] = useState([]);

  const hdlAddTask = (newTask) => {
    let taskListCp = [...taskList];

    taskListCp.push(newTask);

    setTaskList(taskListCp);
    console.log(taskList);
  };

  const hdlDeleteTask = (delTaskName) => {
    let taskListCp = [...taskList];
    taskListCp = taskListCp.filter((item) => item.taskName !== delTaskName);
    setTaskList(taskListCp);
  };

  return (
    <>
      <div className="wrapper">
        <Drawler></Drawler>

        <div className="task-main">
          <TaskInp hdlAddTask={hdlAddTask} />
          <div className="task-container">
            {taskList &&
              taskList.length > 0 &&
              taskList.map((v, i) => {
                return (
                  <div
                    className="taskdiv"
                    key={Math.floor(Math.random() * 1000)}
                  >
                    <div className="tasktext">{v.taskName}</div>

                    <div>
                      <button onClick={() => hdlDeleteTask(v.taskName)}>
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
export default ListTask;
