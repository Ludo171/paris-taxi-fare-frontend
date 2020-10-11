import { RidesAction } from "./actions";
import { IMainPageState, initialState } from "./state";

export const ridesReducer = (state: IMainPageState, action: RidesAction) => {
  switch (action.type) {
    case 'UPDATE_RIDES_LIST':
      return {
        ...state,
        ridesList: action.data.rides
      }
    case 'UPDATE_SORT_KEY':
      return {
        ...state,
        sortKey: action.data.sortKey
      }
    case 'ADD_NEW_RIDE':
      const index = action.data.index || 0;
      const newRidesList = state.ridesList.slice();
      newRidesList.splice(index, 0, action.data.newRide);
      console.log(newRidesList);
      return {
        ...state,
        ridesList: newRidesList
      }
    case 'REMOVE_RIDE':
      return {
        ...state,
        ridesList: state.ridesList.filter(ride => ride.id !== action.data.rideId)
      };
    case 'UPDATE_RIDE_PRICE':
      return {
        ...state,
        ridesList: state.ridesList.map(ride => {
          if (ride.id === action.data.rideId) {
            const updateRide = { ...ride, price: action.data.newPrice };
            return updateRide;
          }
          return ride;
        })
      };
    default:
      return initialState;
  }
};
