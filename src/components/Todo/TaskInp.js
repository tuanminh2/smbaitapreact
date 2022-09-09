import axios from 'axios';
import React, { useState, useEffect } from 'react';
import DateTimePickerModal from './DateTimePickerModal';

function TaskInp(props) {
  const [inpTaskName, setInpTaskName] = useState('');
  const [dtData, setDtData] = useState({});
  const hdlInpTaskNameChange = (event) => {
    event.preventDefault();
    setInpTaskName(event.target.value);
  };

  const hdlAddTaskBtn = () => {
    const newTask = {
      ...dtData,
      taskName: inpTaskName,
    };
    let { hdlAddTask } = props;
    setInpTaskName('');
    hdlAddTask(newTask);
  };

  const hdlAddDT = (dt) => {
    setDtData(dt);
  };

  return (
    <>
      <div className="task-inp ">
        <div className="task-form form-group">
          <input
            className="fomr-control"
            type="text"
            name=""
            onChange={(event) => hdlInpTaskNameChange(event)}
            value={inpTaskName}
          />
          <span>
            <DateTimePickerModal hdlAddDT={hdlAddDT}></DateTimePickerModal>
          </span>
          <button onClick={hdlAddTaskBtn}>Add</button>
        </div>
      </div>
    </>
  );
}
export default TaskInp;
