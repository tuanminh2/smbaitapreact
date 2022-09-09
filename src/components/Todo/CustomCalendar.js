import React, { useState, useEffect } from 'react';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Drawler from '../Drawler/Drawler';
import './CustomCalendar.scss';

import { useSelector, useDispatch } from 'react-redux';

function CustomCalendar() {
  const taskRedux = useSelector((state) => state.taskReducer.taskRedux);
  const [value, onChange] = useState(new Date());

  const showRdux = () => {
    console.log('FROM CALENDAR', taskRedux);
  };

  return (
    <div className="wrapper">
      <Drawler></Drawler>
      <div className="custom-calendar">
        <button onClick={showRdux}>show </button>
        <Calendar />
      </div>
    </div>
  );
}
export default CustomCalendar;
