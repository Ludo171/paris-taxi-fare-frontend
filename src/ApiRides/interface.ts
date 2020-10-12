export interface IRide {
  id: string; // string to allow more robust identification
  distance: number; // in Miles
  startTime: string;
  duration: number; // in SECONDS
  price?: number;
}
