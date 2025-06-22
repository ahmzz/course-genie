"use client";
import { Button } from "@/components/ui/button";
import React, { useContext, useEffect, useState } from "react";
import {
  HiClipboardDocumentCheck,
  HiLightBulb,
  HiMiniSquares2X2,
} from "react-icons/hi2";
import SelectCategory from "./_components/SelectCategory";
import TopicDescription from "./_components/TopicDescription";
import SelectOption from "./_components/SelectOption";
import { UserInputContext } from "../_context/UserInputContext";
import { ai, GenerateCourseLayout_AI } from "@/configs/AiModel";
import LoadingDialouge from "./_components/LoadingDialouge";

const CreateCourse = () => {
  const StepperOptions = [
    {
      id: 1,
      name: "Category",
      icon: <HiMiniSquares2X2 />,
    },
    {
      id: 2,
      name: "Topic",
      icon: <HiLightBulb />,
    },
    {
      id: 3,
      name: "Options",
      icon: <HiClipboardDocumentCheck />,
    },
  ];
  const { userCourseInput, setCourseInput } = useContext(UserInputContext);

  const [activeIndex, setActiveIndex] = useState(0);
  const [generatingAiResponse, setgeneratingAiResponse] = useState(false);

  useEffect(() => {}, [userCourseInput]);

  const checkStatus = () => {
    if (userCourseInput?.length === 0) {
      return true;
    }
    if (
      activeIndex === 0 &&
      (userCourseInput?.category?.length === 0 ||
        userCourseInput?.category == undefined)
    ) {
      return true;
    }
    if (
      activeIndex === 1 &&
      (userCourseInput?.topic?.length === 0 ||
        userCourseInput?.topic === undefined)
    ) {
      return true;
    } else if (
      activeIndex == 2 &&
      (userCourseInput?.level == undefined ||
        userCourseInput?.duration == undefined ||
        userCourseInput?.displayVideo == undefined ||
        userCourseInput?.noOfChapter == undefined)
    ) {
      return true;
    }
    return false;
  };

  const GenerateCourseLayout = async () => {
    setgeneratingAiResponse(true);
    // <--- Add 'async' here
    const BASIC_PROMPT =
      "Generate A Course Tutorial on Following Detail With field as Course Name, Along with Chapter Name, about, Duration:";
    const USER_INPUT = `Category: ${userCourseInput?.category}, Topic: ${userCourseInput?.topic}, Level: ${userCourseInput?.level}, Duration: ${userCourseInput?.duration}, NoOf Chapters:${userCourseInput?.noOfChapter}, in JSON format`;
    const FINAL_PROMPT = BASIC_PROMPT + USER_INPUT;
    const customCourseInput: any = {
      topic: userCourseInput?.topic,
      level: userCourseInput?.level,
      duration: userCourseInput?.duration,
      numberOfChapters: userCourseInput?.noOfChapter,
      category: userCourseInput?.category,
    };

    try {
      const courseContentString = await GenerateCourseLayout_AI(
        customCourseInput
      );
      const parsedCourseContent = JSON.parse(courseContentString); // Parse the JSON string
      console.log("Parsed Course Content:", parsedCourseContent);
      // You can then update your UI state with courseContent here
    } catch (error) {
      console.error("Error generating course layout:", error);
      // Handle the error appropriately, e.g., show an error message to the user
    }
    setgeneratingAiResponse(false);
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-10">
        <h2 className="text-4xl text-primary font-bold">Create Course</h2>
        <div className="flex mt-10">
          {StepperOptions.map((item, index) => (
            <div key={item.id} className="flex items-center">
              <div className="flex flex-col items-center w-[50px] md:w-[100px]">
                <div
                  className={`bg-gray-200 p-3 rounded-full text-white ${
                    activeIndex >= index && "bg-primary"
                  }`}
                >
                  {item.icon}
                </div>
                <h2 className="hidden md:text-bold md:block md:text-sm font-bold">
                  {item.name}
                </h2>
              </div>
              {index !== StepperOptions?.length - 1 && (
                <div
                  className={`h-1 w-[50px] md:w-[100px] rounded-full lg:w-[170px]  ${
                    activeIndex - 1 >= index ? "bg-primary" : "bg-gray-300"
                  } `}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="px-10 md:px-20 lg:px-44 mt-10">
        {activeIndex === 0 ? (
          <SelectCategory />
        ) : activeIndex === 1 ? (
          <TopicDescription />
        ) : (
          <SelectOption />
        )}
        <div className="flex justify-between mt-10">
          <Button
            variant="outline"
            disabled={activeIndex === 0}
            onClick={() => setActiveIndex(activeIndex - 1)}
          >
            Previous
          </Button>
          {activeIndex < 2 && (
            <Button
              disabled={checkStatus()}
              onClick={() => setActiveIndex(activeIndex + 1)}
            >
              Next
            </Button>
          )}
          {activeIndex === 2 && (
            <Button
              disabled={checkStatus()}
              onClick={() => GenerateCourseLayout()}
            >
              Generate Course Layout
            </Button>
          )}
        </div>
      </div>
      <LoadingDialouge loading={generatingAiResponse} />
    </div>
  );
};

export default CreateCourse;
