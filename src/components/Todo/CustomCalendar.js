import React, { useState, useEffect } from 'react';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Drawler from '../Drawler/Drawler';
import './CustomCalendar.scss';

function CustomCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="wrapper">
      <Drawler></Drawler>
      <div className="custom-calendar">
        <Calendar onChange={onChange} value={value} />
      </div>
    </div>
  );
}
export default CustomCalendar;
