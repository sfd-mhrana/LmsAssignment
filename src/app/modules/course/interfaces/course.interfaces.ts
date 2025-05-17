export interface ICourse {
  id: string;
  title: string;
  description: string;
  category: string; // e.g.,"Programming","Design"
  isFree: boolean;
  prerequisites: string[];
  duration: number;
}