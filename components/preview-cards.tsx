"use client";

import { FC, useEffect, useState } from "react";
import ProductList from "./product-list";
import getKittens from "@/actions/get-kittens";
import { Litter, Kitten } from "@/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Separator } from "./ui/separator";

interface PreviewCardsProps {
  litters: Litter[];
  kittens: Kitten[];
}

const PreviewCards: FC<PreviewCardsProps> = ({ litters, kittens }) => {
  const [litterLetter, setLitterLetter] = useState(litters[0].letter);
  const [isMounted, setIsMounted] = useState(false);

  const handleLitterChange = (selectedValue: string) => {
    setLitterLetter(selectedValue);
  };

  const filteredKittens = kittens.filter(
    (kitten) => kitten.litterId === litterLetter
  );

  useEffect(() => {
    setIsMounted(true);
  });

  if (!isMounted) {
    return null;
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h2 className="font-rem text-3xl pb-2 text-primary-tan">
        View Kittens Preview
      </h2>

      <Separator className="h-[2px] bg-primary-tan rounded-full" />

      <div className="pb-6 pt-2 flex flex-row items-center gap-2">
        <h2 className="font-karla text-xl text-primary-tan">
          British Shorthair Litter:
        </h2>
        <Select onValueChange={handleLitterChange}>
          <SelectTrigger className="w-[180px] bg-[#f8f7f7]">
            <SelectValue>{litterLetter}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            {litters.map((litter) => (
              <SelectItem key={litter.id} value={litter.letter}>
                {litter.letter}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-y-8 ">
        <ProductList items={filteredKittens} />
      </div>
    </div>
  );
};

export default PreviewCards;
