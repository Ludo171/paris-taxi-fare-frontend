import { adaptRide, parseNewRide } from "./adapter";


export const fetchAllRides = async () => {

  const url = `/rides`;
  const rides = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(res => {
      console.log(res);
      return res.json();
    })
    .then(res => {
      const cleanRides = res.map((ride: {}) => adaptRide(ride));
      return cleanRides;
    })
    .catch((err) => console.error(err));

  return rides;
};

export const createNewRide = async (newRideInfo: { duration: string, distance: string, startTime: string }) => {
  const ride = parseNewRide(newRideInfo);
  if (!ride) return;

  const url = `/rides`;
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
  const url = `/rides/${rideId}`;
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

