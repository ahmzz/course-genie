import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";

type LoadingDialogProps = {
  loading: boolean;
};

const LoadingDialouge: React.FC<LoadingDialogProps> = ({ loading }) => {
  return (
    <AlertDialog open={loading}>
      <AlertDialogContent className="bg-white border-none">
        <AlertDialogHeader>
          <div className="flex flex-col items-center py-15">
            <Image src={"/loader.gif"} width={100} height={100} alt="loader" />
            <h2 className="font-bold py-2.5">Generating course contents...</h2>
          </div>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LoadingDialouge;
