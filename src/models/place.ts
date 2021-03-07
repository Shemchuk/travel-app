export default interface IPlace {
  id: number;
  name: string;
  description: string;
  photo: string;
  gps: { x: number, y: number };
}
