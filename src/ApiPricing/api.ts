export const fetchRidePrice = async (newRideInfo: { duration: number, distance: number, startTime: string }) => {

  const url = `/pricing/v1`;
  const rides = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newRideInfo)
  })
    .then(res => {
      return res.json();
    })
    .then(res => res)
    .catch((err) => console.error(err));

  return rides;
};
