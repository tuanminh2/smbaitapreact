import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './TaskList.scss';
import Drawler from '../Drawler/Drawler';
import TaskInp from './TaskInp';
import DateTimePickerModal from './DateTimePickerModal';

import { useSelector, useDispatch } from 'react-redux';
import { addTask } from '../../actions/taskAction';

function ListTask() {
  const taskRedux = useSelector((state) => state.taskReducer.taskRedux);
  const dispatch = useDispatch();

  // const [taskList, setTaskList] = useState([]);

  const hdlAddTask = (newTask) => dispatch(addTask(newTask));
  // let taskListCp = [...taskList];

  // taskListCp.push(newTask);

  // setTaskList(taskListCp);
  // console.log(taskList);

  // const hdlDeleteTask = (delTaskName) => {
  //   let taskListCp = [...taskList];
  //   taskListCp = taskListCp.filter((item) => item.taskName !== delTaskName);
  //   setTaskList(taskListCp);
  // };

  return (
    <>
      <div className="wrapper">
        <Drawler></Drawler>

        <div className="task-main">
          <TaskInp hdlAddTask={hdlAddTask} />
          <div className="task-container">
            {taskRedux &&
              taskRedux.length > 0 &&
              taskRedux.map((v, i) => {
                return (
                  <div
                    className="taskdiv"
                    key={Math.floor(Math.random() * 1000)}
                  >
                    <div className="tasktext">{v.taskName}</div>

                    <div>
                      <button>Delete</button>
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
