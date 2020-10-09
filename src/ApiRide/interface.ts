export interface IRide {
  id: string;
  distance: number; // in Miles
  startTime: string;
  duration: number; // in SECONDS
  price?: number;
}
