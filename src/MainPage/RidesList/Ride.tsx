import * as React from "react";
import { useState } from "react";
import "./Ride.scss";
import Button from "../../Components/Button";


interface IProps {
  info: { id: number, distance: number, startTime: string, duration: number };
}

const Ride: React.FC<IProps> = ({ info }: IProps) => {

  const [price, setPrice] = useState(undefined);

  const deleteRide = () => {
    console.log(`Delete Ride ${info.id}`);
  }

  return (
    <div className="ride-item">
      <div className="ride-info">
        <label className="underlined">Ride : {info.id}</label>
        <label>Distance : {info.distance}</label>
        <label>StartTime : {info.startTime}</label>
        <label>Duration : {info.duration}</label>
      </div>
      <div className="price-tag">{price}€</div>
      <Button label="Delete" onClick={deleteRide} />
    </div>
  );
};

export default Ride;
