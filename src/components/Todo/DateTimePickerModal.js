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

function DateTimePickerModal() {
  const [date1, setDate1] = React.useState(new Date());
  const [date2, setDate2] = React.useState(new Date());
  const [time1, setTime1] = React.useState(new Date());
  const [time2, setTime2] = React.useState(new Date());

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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
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

          <button className="dtpkerbtn" onClick={handleClose}>
            Submit
          </button>
        </div>
      </Modal>
    </>
  );
}
export default DateTimePickerModal;
