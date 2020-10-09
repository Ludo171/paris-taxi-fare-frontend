import React, { useEffect, useState } from "react";
import "./RidesList.scss";
import Ride from "./Ride";
import Select from "../../Components/Select";
import { fetchAllRides } from "../../ApiRide/api";
import { IRide } from "../../ApiRide/interface";


interface IProps { }

const RidesList: React.FC<IProps> = () => {
  const [ridesList, setRidesList] = useState(Array<IRide>());
  const [sortingSelector, setSortingSelector] = useState("id");

  const fetchRidesList = async () => {
    const list = await fetchAllRides();
    console.log('Got Rides list !');
    console.log(list);
    setRidesList(list);
  }

  useEffect(() => {
    fetchRidesList();
  }, []);

  const sortingItems = [
    { value: "id", label: "Ride ID" },
    { value: "startTime", label: "Start Time" },
    { value: "duration", label: "Duration" },
    { value: "distance", label: "Distance" },
    { value: "price", label: "Price" }
  ];

  const sortRidesList = () => {
    const compare = (a: string | number | Date, b: string | number | Date) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    };

    const sorted = ridesList.slice();
    sorted.sort((a, b) => {
      if (sortingSelector === "duration") return compare(a.duration, b.duration);
      else if (sortingSelector === "distance") return compare(a.distance, b.distance);
      else if (sortingSelector === "startTime") return compare(a.startTime, b.startTime);
      return compare(a.id, b.id);
    });
    console.log(sorted);
    setRidesList(sorted);
  };

  useEffect(() => {
    console.log(`Sorting by ${sortingSelector}`);
    sortRidesList();
  }, [sortingSelector]);


  return (
    <div className="rides-list">
      <div className="list-head">
        <label className="subtitle-label">Rides List: </label>
        <Select label="Sort by" value={sortingSelector} items={sortingItems} onChange={(v) => setSortingSelector(v)}></Select>
      </div>
      <ul>
        {ridesList ? ridesList.map((rideInfo, i) => <Ride info={rideInfo} key={i} />) : null}
      </ul>
    </div>
  );
};

export default RidesList;
