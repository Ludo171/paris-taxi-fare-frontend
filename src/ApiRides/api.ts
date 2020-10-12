import { adaptRide, parseNewRide } from "./adapter";

const API_URL = process.env.NODE_ENV === "production" ?
  process.env.REACT_APP_API_RIDES_PROD :
  process.env.REACT_APP_API_RIDES_DEV;

export const fetchAllRides = async () => {

  const url = `${API_URL}/rides`;
  const rides = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(res => res.json())
    .then(data => {
      if (data) {
        const cleanRides = data.map((ride: {}) => adaptRide(ride));
        return cleanRides;
      }
      return [];
    })
    .catch(
      (err) => {
        console.error(err);
      }
    );

  return rides;
};

export const createNewRide = async (newRideInfo: { duration: string, distance: string, startTime: string }) => {
  const ride = parseNewRide(newRideInfo);
  if (!ride) return;

  const url = `${API_URL}/rides`;
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(ride)
  };

  const newRide = await fetch(url, requestOptions)
    .then(res => res.json())
    .then(ride => {
      return adaptRide(ride);
    })
    .catch(err => { console.error(err) });

  return newRide;
}

export const deleteRide = async (rideId: string) => {

  const url = `${API_URL}/rides/${rideId}`;
  const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  };

  const newRide = await fetch(url, requestOptions)
    .then(res => res.json())
    .then(res => {
      const deletedCount = res.deletedCount;
      return deletedCount;
    })
    .catch(err => console.error(err));

  return newRide;
}

