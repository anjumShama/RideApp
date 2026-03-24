import API from './api';

// GET rides
export const getAvailableRides = async () => {
  const res = await API.get('rides/available/');
  return res.data;
};

// ACCEPT ride
export const acceptRide = async (ride_id) => {
  const res = await API.post('rides/accept/', {
    ride_id: ride_id,
    driver_id: 1,
  });
  return res.data;
};

// START ride
export const startRide = async (ride_id) => {
  const res = await API.post('rides/start/', {
    ride_id: ride_id,
  });
  return res.data;
};

// END ride
export const endRide = async (ride_id) => {
  const res = await API.post('rides/end/', {
    ride_id: ride_id,
  });
  return res.data;
};