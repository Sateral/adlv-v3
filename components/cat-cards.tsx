"use client";

import { FC, useEffect, useState } from "react";
import ProductList from "./product-list";
import { Litter, Kitten, Cat } from "@/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Separator } from "./ui/separator";
import Parents from "@/app/(routes)/kittens/components/parents";

interface CatCardsProps {
  parents: Cat[];
  litters: Litter[];
  kittens: Kitten[];
}

const CatCards: FC<CatCardsProps> = ({ litters, kittens, parents }) => {
  const [litterLetter, setLitterLetter] = useState(litters[0].letter);
  const [isMounted, setIsMounted] = useState(false);

  const handleLitterChange = (selectedValue: string) => {
    setLitterLetter(selectedValue);
  };

  const filteredKittens = kittens.filter(
    (kitten) => kitten.litterId === litterLetter
  );

  const selectedLitter = litters.find(
    (litter) => litter.letter === litterLetter
  );

  const mom = parents.find((mom) => mom.name === selectedLitter?.momName);
  const dad = parents.find((dad) => dad.name === selectedLitter?.dadName);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
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
      </div>

      <div className="w-full bg-[#E1E2E1] p-4">
        {mom !== undefined && dad !== undefined && (
          <Parents dad={dad} mom={mom} />
        )}
      </div>

      <div className="p-4 sm:p-6 lg:p-8">
        <p className="text-2xl">Kittens</p>
        <p className="font-karla text-xl">Born: {selectedLitter?.birthDate}</p>
        <Separator className="bg-[#c2a991] h-[2px]" />
        <p className="font-karla text-lg italic font-semibold">
          Click on the kitten to expand
        </p>
        <div className="flex flex-col gap-y-8 pt-6 ">
          <ProductList items={filteredKittens} />
        </div>
      </div>
    </>
  );
};

export default CatCards;
