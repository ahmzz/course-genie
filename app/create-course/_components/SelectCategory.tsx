import { UserInputContext } from "@/app/_context/UserInputContext";
import CategoryList from "@/app/_shared/CategoryList";
import Image from "next/image";
import React, { useContext } from "react";

const SelectCategory = () => {
  const { userCourseInput, setCourseInput } = useContext(UserInputContext);
  const handleCategoryChange = (category: string) => {
    setCourseInput((prev) => ({
      ...prev,
      category,
    }));
  };
  return (
    <div className="px-10 md:px-20">
      <h2 className="font-bold my-5">Select course category</h2>
      <div className="grid grid-cols-3 gap-10 ">
        {CategoryList.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col p-5 border items-center rounded-xl hover:border-primary hover:bg-blue-50 cursor-pointer
              ${
                userCourseInput?.category == item.name &&
                "border-primary bg-blue-50"
              }`}
            onClick={() => handleCategoryChange(item.name)}
          >
            <Image src={item.icon} width={50} height={50} alt="icon" />
            <h2 className="font-bold">{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectCategory;
