import React, { useContext, useEffect } from "react";
import { MainPageContext } from "../MainPage";
import { deleteRide } from "../../ApiRides/api";
import { fetchRidePrice } from "../../ApiPricing/api";
import "./Ride.scss";
import Button from "../../Components/Button";
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


interface IProps {
  info: { id: string, distance: number, startTime: string, duration: number, price?: number };
}

const Ride: React.FC<IProps> = ({ info }: IProps) => {

  const { dispatch } = useContext(MainPageContext);

  const handleDelete = async () => {

    const deletedCount = await deleteRide(info.id);
    if (deletedCount) {
      dispatch({ type: 'REMOVE_RIDE', data: { rideId: info.id } });
    }
  }

  const fetchPrice = async () => {
    const ridePrice = await fetchRidePrice({
      duration: info.duration,
      distance: info.distance,
      startTime: info.startTime
    });
    if (ridePrice) {
      dispatch({ type: 'UPDATE_RIDE_PRICE', data: { rideId: info.id, newPrice: ridePrice.amount } });
    }
  }

  useEffect(() => {
    if (info.price) return;
    fetchPrice();
  }, [info.price])


  return (
    <div className="ride-item">
      <div className="ride-info">
        <label className="underlined">Ride : {info.id}</label>
        <label>Distance : {Math.round(100 * info.distance) / 100} miles</label>
        <label>StartTime : {getFriendlyDate(info.startTime)}</label>
        <label>Duration : {getFriendlyDuration(info.duration)}</label>
      </div>
      <div className="price-tag">
        <label>Price : </label>
        {info.price ? `${Math.round(100 * info.price) / 100}€` : <FontAwesomeIcon icon={faSpinner} color="grey" size="lg" spin />}
      </div>
      <Button label="Delete" icon={<FontAwesomeIcon icon={faMinusCircle} color="red" size="lg" />} onClick={handleDelete} />
    </div>
  );
};

export default Ride;

const getFriendlyDuration = (duration: number) => {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration - (hours * 3600)) / 60);
  const seconds = duration - (hours * 3600) - (minutes * 60);

  let str = ''
  if (hours > 0)
    str += `${hours < 10 ? '0' + hours.toString() : hours.toString()}h `;
  if (minutes > 0)
    str += `${minutes < 10 ? '0' + minutes.toString() : minutes.toString()}min `;
  if (seconds > 0)
    str += `${seconds < 10 ? '0' + seconds.toString() : seconds.toString()}s`;
  return str;
};

const getFriendlyDate = (dateStringISO: string) => {
  const date = new Date(dateStringISO);
  const options = { day: '2-digit', month: '2-digit', year: 'numeric', hour: 'numeric', minute: '2-digit', second: '2-digit' };

  return date.toLocaleDateString('en-GB', options);
};
