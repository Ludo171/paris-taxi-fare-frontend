import { IRide } from "../../ApiRide/interface";
import { RidesAction } from "./actions";

export interface IMainPageContext {
  state: IMainPageState;
  dispatch: (action: RidesAction) => void;
};

export interface IMainPageState {
  ridesList: Array<IRide>;
  sortKey: string;
};

export const SORT_KEYS = [
  { label: 'Ride Id', value: 'id' },
  { label: 'Start Time', value: 'startTime' },
  { label: 'Duration', value: 'duration' },
  { label: 'Distance', value: 'distance' },
  { label: 'Price', value: 'price' }
];

export const initialState = {
  ridesList: new Array<IRide>(),
  sortKey: 'id'
};
