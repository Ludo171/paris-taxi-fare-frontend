import { IRide } from "../../ApiRide/interface"

export interface UpdateRidesListAction {
  type: 'UPDATE_RIDES_LIST';
  data: { rides: Array<IRide> };
};

export interface UpdateSortKeytAction {
  type: 'UPDATE_SORT_KEY';
  data: { sortKey: string };
};

export interface AddNewRideAction {
  type: 'ADD_NEW_RIDE';
  data: { newRide: IRide, index?: number };
};

export interface RemoveRideAction {
  type: 'REMOVE_RIDE';
  data: { rideId: string };
};

export interface UpdateRidePriceAction {
  type: 'UPDATE_RIDE_PRICE';
  data: { rideId: string, newPrice: number };
};


export type RidesAction = UpdateRidesListAction | UpdateSortKeytAction | AddNewRideAction | RemoveRideAction | UpdateRidePriceAction;
