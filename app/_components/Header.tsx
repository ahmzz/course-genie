import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between p-4  ">
      <Image src={"/logo.png"} width={190} height={100} alt="logo" />
      <Button className="m-2">Get Started</Button>
    </div>
  );
};

export default Header;
