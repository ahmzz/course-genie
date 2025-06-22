import { createContext } from "react";

type UserInputContextType = {
  userCourseInput: any; // Or better, define a specific type instead of any[]
  setCourseInput: React.Dispatch<React.SetStateAction<any[]>>;
};

// Use `undefined!` so you don't have to provide default value here
export const UserInputContext = createContext<UserInputContextType>(undefined!);
