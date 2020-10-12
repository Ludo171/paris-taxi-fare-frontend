import { IRide } from "./interface";

export const adaptRide = (rawRideFromApi: { _id?: any; duration?: any; distance?: any; startTime?: any; }) => {
  try {
    const ride: IRide = {
      id: rawRideFromApi._id,
      duration: Number(rawRideFromApi.duration),
      distance: Number(rawRideFromApi.distance),
      startTime: rawRideFromApi.startTime
    };
    return ride;
  } catch (err) {
    console.error(err);
    alert('Wrong input, duration and distance should be numbers, and startTime should be parsable into a date.');
    return null;
  }
};

export const parseNewRide = (newRideInfo: { duration: string, distance: string, startTime: string }) => {
  try {
    if (isNaN(Number(newRideInfo.distance)) || Number(newRideInfo.distance) <= 0)
      throw (new Error('Distance should be parsable into number'));
    if (isNaN(Number(newRideInfo.duration)) || Number(newRideInfo.duration) <= 0)
      throw (new Error('Duration should be parsable into number'));
    if (isNaN(Date.parse(newRideInfo.startTime)))
      throw (new Error('Date should be parsable into a Date'));
    const parsedDistance = Number(newRideInfo.distance);
    const parsedDuration = Number(newRideInfo.duration);
    return { distance: parsedDistance, duration: parsedDuration, startTime: newRideInfo.startTime };
  } catch (err) {
    alert(`Wrong input, ${err.message}`);
    return null;
  }
};
