import React, { useState } from "react";
import "./RidesList.scss";
import Ride from "./Ride";
import Select from "../../Components/Select";


interface IProps { }

const RidesList: React.FC<IProps> = () => {
  const [ridesList, setRidesList] = useState([
    { "id": 1, "distance": 2, "startTime": "2020-06-19T13:01:17.031Z", "duration": 9000 },
    { "id": 2, "distance": 1, "startTime": "2020-06-19T12:01:17.031Z", "duration": 6000 },
    { "id": 3, "distance": 5, "startTime": "2020-06-19T14:01:17.031Z", "duration": 7000 },
    { "id": 1, "distance": 2, "startTime": "2020-06-19T13:01:17.031Z", "duration": 9000 },
    { "id": 2, "distance": 1, "startTime": "2020-06-19T12:01:17.031Z", "duration": 6000 },
    { "id": 3, "distance": 5, "startTime": "2020-06-19T14:01:17.031Z", "duration": 7000 },
    { "id": 1, "distance": 2, "startTime": "2020-06-19T13:01:17.031Z", "duration": 9000 },
    { "id": 2, "distance": 1, "startTime": "2020-06-19T12:01:17.031Z", "duration": 6000 },
    { "id": 3, "distance": 5, "startTime": "2020-06-19T14:01:17.031Z", "duration": 7000 },
    { "id": 1, "distance": 2, "startTime": "2020-06-19T13:01:17.031Z", "duration": 9000 },
    { "id": 2, "distance": 1, "startTime": "2020-06-19T12:01:17.031Z", "duration": 6000 },
    { "id": 3, "distance": 5, "startTime": "2020-06-19T14:01:17.031Z", "duration": 7000 },
  ]);
  const [sortingSelector, setSortingSelector] = useState("startTime");

  const sortingItems = [{ value: "startTime", label: "start date" }, { value: "duration", label: "duration" }];

  return (
    <div className="rides-list">
      <div className="list-head">
        <label className="subtitle-label">Rides List: </label>
        <Select label="Sort by" value={sortingSelector} items={sortingItems} onChange={(v) => setSortingSelector(v)}></Select>
      </div>
      <ul>
        {ridesList.map((rideInfo) => <Ride info={rideInfo} />)}
      </ul>
    </div>
  );
};

export default RidesList;
