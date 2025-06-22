import React, { useContext } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { UserInputContext } from "@/app/_context/UserInputContext";

const SelectOption = () => {
  const { userCourseInput, setCourseInput } = useContext(UserInputContext);
  const handleInputChange = (fieldName: string, value: any) => {
    setCourseInput((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 gap-12 w-full max-w-4xl">
        <div>
          <label className="font-bold text-sm"> 🎓 Difficulty Level</label>
          <Select
            onValueChange={(value) => handleInputChange("level", value)}
            defaultValue={userCourseInput?.level}
          >
            <SelectTrigger className="w-full max-w-[400px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="Beginner"> Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advance">Advance</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="font-bold text-sm"> 🕑 Course Duration</label>
          <Select
            defaultValue={userCourseInput?.duration}
            onValueChange={(value) => handleInputChange("duration", value)}
          >
            <SelectTrigger className="w-full max-w-[400px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="1 hour">1 hour</SelectItem>
              <SelectItem value="2 hour">2 hour</SelectItem>
              <SelectItem value="More than 3 hours">
                More than 3 hours
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="font-bold text-sm"> ⏯️ Add Video</label>
          <Select
            defaultValue={userCourseInput?.displayVideo}
            onValueChange={(value) => handleInputChange("displayVideo", value)}
          >
            <SelectTrigger className="w-full max-w-[400px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="Yes">Yes</SelectItem>
              <SelectItem value="No">No</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full max-w-[400px]">
          <label className=" text-sm"> 📖 Total Chapters</label>
          <Input
            defaultValue={userCourseInput?.noOfChapter}
            type="number"
            onChange={(event) =>
              handleInputChange("noOfChapter", event.target.value)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SelectOption;
