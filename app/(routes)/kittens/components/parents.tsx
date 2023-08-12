import ParentCard from "@/components/ui/parent-card";
import { Cat } from "@/types";
import { FC } from "react";

interface ParentsProps {
  mom: Cat;
  dad: Cat;
}

const Parents: FC<ParentsProps> = ({ mom, dad }) => {
  return (
    <div className="flex flex-col">
      <p className="text-center pb-4 font-karla font-semibold text-3xl text-primary-tan">
        Parents
      </p>
      <div className="flex flex-row flex-grow xl:justify-center justify-around gap-8">
        <ParentCard title="Mother" data={mom} />

        <ParentCard title="Father" data={dad} />
      </div>
    </div>
  );
};

export default Parents;
