"use client";

import { Cat } from "@/types";
import { FC } from "react";
import CatCard from "./ui/cat-card";

interface CatListProps {
  items: Cat[];
}

const CatList: FC<CatListProps> = ({ items }) => {
  return (
    <div className="space-y-8 p-4">
      {items.map((item, index) => (
        <CatCard key={item.id} data={item} index={index} />
      ))}
    </div>
  );
};

export default CatList;
