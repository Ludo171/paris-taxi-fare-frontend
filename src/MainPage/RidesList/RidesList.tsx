import React, { useEffect, useState, useContext } from "react";
import { MainPageContext } from "../MainPage";
import "./RidesList.scss";
import Ride from "./Ride";
import Select from "../../Components/Select";
import { fetchAllRides } from "../../ApiRide/api";
import { IRide } from "../../ApiRide/interface";
import { SORT_KEYS } from "../MainPageStore/state";


interface IProps { }

const RidesList: React.FC<IProps> = () => {
  const { state, dispatch } = useContext(MainPageContext);

  const fetchRidesList = async () => {
    const list = await fetchAllRides();
    dispatch({ type: 'UPDATE_RIDES_LIST', data: { rides: list } });
  }

  useEffect(() => {
    fetchRidesList();
  }, []);

  useEffect(() => {
    console.log(`New sort key ! ${state.sortKey}`);
    const sorted = sortListBy(state.ridesList, state.sortKey);
    dispatch({ type: 'UPDATE_RIDES_LIST', data: { rides: sorted } });
  }, [state.sortKey]);


  return (
    <div className="rides-list">
      <div className="list-head">
        <label className="subtitle-label">Rides List: </label>
        <Select label="Sort by" value={state.sortKey} items={SORT_KEYS}
          onChange={(v) => {
            dispatch({ type: 'UPDATE_SORT_KEY', data: { sortKey: v.toString() } });
          }}></Select>
      </div>
      <ul>
        {state.ridesList ? state.ridesList.map((rideInfo, i) => <Ride info={rideInfo} key={i} />) : null}
      </ul>
    </div>
  );
};

export default RidesList;


const sortListBy = (ridesList: Array<IRide>, sortAttribute: string) => {
  const compare = (a: string | number | Date, b: string | number | Date) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  };

  const sorted = ridesList.slice();
  sorted.sort((a, b) => {
    if (sortAttribute === "duration") return compare(a.duration, b.duration);
    else if (sortAttribute === "distance") return compare(a.distance, b.distance);
    else if (sortAttribute === "startTime") return compare(a.startTime, b.startTime);
    return compare(a.id, b.id);
  });

  return sorted;
};
