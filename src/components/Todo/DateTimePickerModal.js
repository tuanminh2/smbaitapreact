import axios from 'axios';
import React, { useState, useEffect } from 'react';

import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';

import './DateTimePickerModal.scss';
import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

function DateTimePickerModal(props) {
  const [date1, setDate1] = React.useState(dayjs());
  const [date2, setDate2] = React.useState(dayjs());
  const [time1, setTime1] = React.useState(dayjs());
  const [time2, setTime2] = React.useState(dayjs());

  const handleChangeDate1 = (newValue) => {
    setDate1(newValue);
  };
  const handleChangeDate2 = (newValue) => {
    setDate2(newValue);
  };
  const handleChangeTime1 = (newValue) => {
    setTime1(newValue);
  };
  const handleChangeTime2 = (newValue) => {
    setTime2(newValue);
  };

  const handleSubmit = () => {
    let dt = {
      sdate: date1.get('date'),
      fdate: date2.get('date'),
      stime: time1.get('hour'),
      ftime: time2.get('hour'),
    };
    let { hdlAddDT } = props;

    hdlAddDT(dt);
    setOpen(false);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button id="pickDatetimeBtn" onClick={handleOpen}>datetime</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="dtpmain">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="dtp-content">
              <div className="date-content">
                <DesktopDatePicker
                  className="datepker"
                  label="Start date"
                  inputFormat="MM/DD/YYYY"
                  value={date1}
                  onChange={handleChangeDate1}
                  renderInput={(params) => <TextField {...params} />}
                />
                <DesktopDatePicker
                  className="datepker"
                  label="Finish Date"
                  inputFormat="MM/DD/YYYY"
                  value={date2}
                  onChange={handleChangeDate2}
                  renderInput={(params) => <TextField {...params} />}
                />
              </div>

              <div className="time-content">
                <TimePicker
                  className="timepker"
                  label="Start Time"
                  value={time1}
                  onChange={handleChangeTime1}
                  renderInput={(params) => <TextField {...params} />}
                />

                <TimePicker
                  className="timepker"
                  label="Finish Time"
                  value={time2}
                  onChange={handleChangeTime2}
                  renderInput={(params) => <TextField {...params} />}
                />
              </div>
            </div>
          </LocalizationProvider>

          <button className="dtpkerbtn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </Modal>
    </>
  );
}
export default DateTimePickerModal;
