import React, { useState } from "react";
import "./NewRideForm.scss";
import Button from "../../Components/Button";
import Input from "../../Components/Input";

interface IProps { }

const NewRideForm: React.FC<IProps> = () => {
  const [distance, setDistance] = useState("");
  const [startTime, setStartTime] = useState("");
  const [duration, setDuration] = useState("");

  const submitForm = () => {
    // TODO Validate inputs
    // TODO call the service that will send a new Ride to the Ride API
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
