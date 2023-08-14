"use client";

import { Kitten, Cat } from "@/types";
import { FC } from "react";
import Button from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface InfoProps {
  data: Kitten | Cat;
}

const Info: FC<InfoProps> = ({ data }) => {
  const isKitten = "status" in data;

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 z-0">{data.name}</h1>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Gender:</h3>
          <div>{data?.gender}</div>
        </div>

        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div>{data?.color}</div>
        </div>

        {isKitten && (
          <div className="flex items-center gap-x-4">
            <h3 className="font-semibold text-black">Status:</h3>
            <div>{data?.status}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Info;
