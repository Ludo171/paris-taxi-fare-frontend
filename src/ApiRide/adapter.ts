import { IRide } from "./interface";

export const adaptRide = (rawRideFromApi: { _id?: any; duration?: any; distance?: any; startTime?: any; }) => {
  const ride: IRide = {
    id: rawRideFromApi._id,
    duration: rawRideFromApi.duration,
    distance: rawRideFromApi.distance,
    startTime: rawRideFromApi.startTime
  };
  return ride;
};

export const parseNewRide = (newRideInfo: { duration: string, distance: string, startTime: string }) => {
  try {
    const parsedDistance = Number(newRideInfo.distance);
    const parsedDuration = Number(newRideInfo.duration);
    new Date(newRideInfo.startTime);
    return { duration: parsedDistance, distance: parsedDuration, startTime: newRideInfo.startTime };
  } catch (err) {
    console.error(err);
    alert('Wrong input, duration and distance should be numbers, and startTime should be parsable into a date.');
    return null;
  }
};
