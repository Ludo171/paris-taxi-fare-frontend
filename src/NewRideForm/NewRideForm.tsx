import React, { useState } from "react";
import styled from "styled-components";
import SubmitButton from "./SubmitButton";
import Input from "./Input";

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  background-color: #cccccc55;
  width: 90%;
  margin: auto;
  padding: 10px;
  border-radius: 5px;
`;
const StyledSubtitle = styled.label`
  font-weight: bold;
  font-size: x-large;
  color: white;
  margin-bottom: 10px;
`;
const StyledEntries = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;


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
    < StyledForm >
      <StyledSubtitle>New Ride:</StyledSubtitle>
      <StyledEntries>
        <Input label="Distance" value={distance} onChange={(v) => setDistance(v)} />
        <Input label="Start time" value={startTime} onChange={(v) => setStartTime(v)} />
        <Input label="Duration" value={duration} onChange={(v) => setDuration(v)} />
        <SubmitButton label="Submit" onClick={submitForm} />
      </StyledEntries>

    </StyledForm >
  );
};

export default NewRideForm;
