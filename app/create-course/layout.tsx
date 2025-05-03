import React, { FC, ReactNode } from "react";
import Header from "../dashboard/_components/Header";

const CreateCourseLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return <div>
    <Header/>
    {children}</div>;
};

export default CreateCourseLayout;
