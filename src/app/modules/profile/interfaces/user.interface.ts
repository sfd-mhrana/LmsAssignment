export interface IUser {
  userId: string;
  name: string;
  email: string;
  preferences: {
    preferredCategories: string[]; // e.g., ["Programming","Design"]
    notifications: boolean;
  };
}
