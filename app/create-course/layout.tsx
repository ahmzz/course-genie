"use client";
import React, { FC, ReactNode, useState } from "react";
import Header from "../dashboard/_components/Header";
import { UserInputContext } from "../_context/UserInputContext";

const CreateCourseLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const [userCourseInput, setCourseInput] = useState<any[]>([]); // Type your state if you can

  return (
    <UserInputContext.Provider value={{ userCourseInput, setCourseInput }}>
      <div>
        <Header />
        {children}
      </div>
    </UserInputContext.Provider>
  );
};

export default CreateCourseLayout;
