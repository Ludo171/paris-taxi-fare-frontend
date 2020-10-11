import * as React from "react";
import { useState, useContext } from "react";
import { MainPageContext } from "../MainPage";
import "./Ride.scss";
import Button from "../../Components/Button";
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { deleteRide } from "../../ApiRide/api";


interface IProps {
  info: { id: string, distance: number, startTime: string, duration: number };
}

const Ride: React.FC<IProps> = ({ info }: IProps) => {

  const { dispatch } = useContext(MainPageContext);

  const [price, setPrice] = useState(undefined);

  const handleDelete = async () => {
    const deletedCount = await deleteRide(info.id);
    console.log(deletedCount);
    if (deletedCount) {
      dispatch({ type: 'REMOVE_RIDE', data: { rideId: info.id } });
    }
  }

  return (
    <div className="ride-item">
      <div className="ride-info">
        <label className="underlined">Ride : {info.id}</label>
        <label>Distance : {info.distance}</label>
        <label>StartTime : {info.startTime}</label>
        <label>Duration : {info.duration}</label>
      </div>
      <div className="price-tag">
        <label>Price : </label>
        {price ? `${price}€` : <FontAwesomeIcon icon={faSpinner} color="grey" size="lg" spin />}
      </div>
      <Button label="Delete" icon={<FontAwesomeIcon icon={faMinusCircle} color="red" size="lg" />} onClick={handleDelete} />
    </div>
  );
};

export default Ride;
