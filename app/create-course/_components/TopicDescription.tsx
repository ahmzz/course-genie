import { UserInputContext } from "@/app/_context/UserInputContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useContext } from "react";

const TopicDescription = () => {
  const { userCourseInput, setCourseInput } = useContext(UserInputContext);

  const handleInputChange = (fieldName: string, value: any) => {
    setCourseInput((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };
  return (
    <div className="mx-20 lg:mx-40">
      <div className="mt-15">
        <label className="font-bold">
          💡 Write the topic for which you want to generate a course:
        </label>
        <Input
          placeholder="Topic"
          className="h-14 text-xl"
          defaultValue={userCourseInput?.topic}
          onChange={(e) => handleInputChange("topic", e.target.value)}
        />
      </div>
      <div className="mt-6">
        <label className="font-bold">
          📝 Tell us more abut your course (optional):
        </label>
        <Textarea
          placeholder="About your course"
          className="h-24 text-xl"
          defaultValue={userCourseInput?.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
        />
      </div>
    </div>
  );
};

export default TopicDescription;
