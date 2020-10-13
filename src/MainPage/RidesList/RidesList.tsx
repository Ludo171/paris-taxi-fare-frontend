import React, { useEffect, useContext, useState } from "react";
import { MainPageContext } from "../MainPage";
import { SORT_KEYS } from "../MainPageStore/state";
import { fetchAllRides } from "../../ApiRides/api";
import { IRide } from "../../ApiRides/interface";
import Ride from "./Ride";
import "./RidesList.scss";
import Select from "../../Components/Select";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


interface IProps { }

const RidesList: React.FC<IProps> = () => {
  const { state, dispatch } = useContext(MainPageContext);
  const [isLoading, setIsLoading] = useState(true);

  const fetchRidesList = async () => {
    const list = await fetchAllRides();
    if (list !== undefined) {
      const sorted = sortListBy(list, state.sortKey);
      dispatch({ type: 'UPDATE_RIDES_LIST', data: { rides: sorted } });
      setIsLoading(false);
    }
    clearTimeout();
    const nextRefreshDelay = list === undefined ? 5 * 1000 : 2 * 60 * 1000; // Refresh the list every 2min
    setTimeout(() => fetchRidesList(), nextRefreshDelay);
  };

  useEffect(() => {
    fetchRidesList();
  }, []);

  useEffect(() => {
    const sorted = sortListBy(state.ridesList, state.sortKey);
    dispatch({ type: 'UPDATE_RIDES_LIST', data: { rides: sorted } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

      {
        isLoading ?
          <div className="list-loader">
            <span>Waking up API servers sleeping at Heroku ...</span>
            <FontAwesomeIcon icon={faSpinner} color="grey" size="3x" spin />
          </div>
          :
          <ul>
            {state.ridesList ? state.ridesList.map((rideInfo, i) => <Ride info={rideInfo} key={i} />) : null}
          </ul>
      }
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
    else if (sortAttribute === "price" && a.price && b.price) return compare(a.price, b.price);
    return compare(a.id, b.id);
  });

  return sorted;
};
