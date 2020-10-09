export interface IRide {
  id: number;
  distance: number; // in Miles
  startTime: string;
  duration: number; // in SECONDS
  price?: number;
}
