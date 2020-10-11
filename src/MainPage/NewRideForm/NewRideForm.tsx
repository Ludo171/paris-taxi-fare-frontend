import React, { useState, useContext } from "react";
import { MainPageContext } from "../MainPage";
import "./NewRideForm.scss";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { createNewRide } from "../../ApiRide/api";
import { IRide } from "../../ApiRide/interface";

interface IProps { }

const NewRideForm: React.FC<IProps> = () => {
  const { state, dispatch } = useContext(MainPageContext);
  const [distance, setDistance] = useState("");
  const [startTime, setStartTime] = useState("");
  const [duration, setDuration] = useState("");

  const submitForm = async () => {
    const newRide = await createNewRide({ duration, distance, startTime });
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
    }
  };


  return (
    <div className="new-ride-form">
      <label className="subtitle-label">Add New Ride:</label>
      <div className="entries">
        <Input label="Distance" value={distance} onChange={(v) => setDistance(v)} />
        <Input label="Start time" value={startTime} onChange={(v) => setStartTime(v)} />
        <Input label="Duration" value={duration} onChange={(v) => setDuration(v)} />
        <Button label="Submit" onClick={submitForm} />
      </div>

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
