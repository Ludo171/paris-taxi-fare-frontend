import React, { useState } from "react";
import "./NewRideForm.scss";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { createNewRide } from "../../ApiRide/api";

interface IProps { }

const NewRideForm: React.FC<IProps> = () => {
  const [distance, setDistance] = useState("");
  const [startTime, setStartTime] = useState("");
  const [duration, setDuration] = useState("");

  const submitForm = async () => {
    const newRide = await createNewRide({ duration, distance, startTime })
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
