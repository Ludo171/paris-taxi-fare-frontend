import React, { useState, useContext } from "react";
import { MainPageContext } from "../MainPage";
import "./NewRideForm.scss";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { createNewRide } from "../../ApiRide/api";
import { IRide } from "../../ApiRide/interface";
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";

interface IProps { }

const NewRideForm: React.FC<IProps> = () => {
  const { state, dispatch } = useContext(MainPageContext);
  const [distance, setDistance] = useState("");
  const [startTime, setStartTime] = useState((new Date()).toISOString());
  const [duration, setDuration] = useState("");
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(new Date());

  const submitForm = async () => {
    const newRide = await createNewRide({ duration: (Number(duration) * 60).toString(), distance, startTime });
    if (newRide) {
      // Find insert index that will keep ridesList sorted
      let index = 0;
      const sortKey = state.sortKey;
      const value = getRideValueFromKey(sortKey, newRide);
      while (index < state.ridesList.length && value > getRideValueFromKey(sortKey, state.ridesList[index])) {
        index += 1;
      }
      dispatch({ type: 'ADD_NEW_RIDE', data: { newRide, index } });
      setDistance("");
      setStartTime("");
      setDuration("");
      setSelectedDate(new Date());
    }
  };

  const handleDateChange = (date: MaterialUiPickersDate, value?: string | null | undefined) => {
    setSelectedDate(date);
    if (date)
      setStartTime(date.toISOString());
  };

  return (
    <div className="new-ride-form">
      <label className="subtitle-label">Add New Ride:</label>
      <div className="entries">
        <Input label="Distance (mi.)" value={distance} onChange={(v) => setDistance(v)} />
        <Input label="Duration (min.)" value={duration} onChange={(v) => setDuration(v)} />
        <Button label="Submit" onClick={submitForm} />
      </div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Start Date"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Start Time"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default NewRideForm;

const getRideValueFromKey = (key: string, ride: IRide) => {
  if (key === "duration") return ride.duration;
  if (key === "distance") return ride.distance;
  if (key === "startTime") return ride.startTime;
  if (key === "price") return ride.price || -1;
  return ride.id;
}
