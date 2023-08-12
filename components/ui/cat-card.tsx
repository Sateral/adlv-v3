import Image from "next/image";
import { MouseEventHandler } from "react";
import { Cat } from "@/types";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hooks/use-preview-modal";
import IconButton from "./icon-button";
import { Separator } from "./separator";
import { cn } from "@/lib/utils";

interface CatCard {
  data: Cat;
  index: number;
  title?: string;
}

const CatCard: React.FC<CatCard> = ({ data, title, index }) => {
  const previewModal = usePreviewModal();

  const onPreview: MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(data);
  };

  return (
    <>
      {title !== undefined && (
        <p className="font-karla font-lighta text-2xl">{title}</p>
      )}
      <div
        className="bg-[#EEEBE7] shadow-lg rounded-lg p-4 grid md:grid-cols-12 grid-cols-1 items-start justify-self-center md:gap-x-12"
        onClick={onPreview}
      >
        {/* IMAGES AND ACTIONS */}
        <div
          className={cn("md:col-span-5 md:mb-0 mb-4", {
            "md:order-1": index % 2 === 0,
            "md:order-2": index % 2 !== 0,
          })}
        >
          <div className="aspect-square relative h-full w-full rounded-lg overflow-hidden">
            <Image
              fill
              src={data?.images?.[0]?.url}
              alt="Kitten Image"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* DESCRIPTION */}
        <div
          className={cn("col-span-7 font-karla", {
            "order-2": index % 2 === 0,
            "order-1": index % 2 !== 0,
          })}
        >
          <p className="font-normal text-2xl">{data.name}</p>
          <p className="font-normal text-2xl">of Aurore de la Vie</p>

          <Separator className="bg-primary-tan h-[2px] rounded-full mb-4 mt-2" />

          <p className="font-normal text-2xl">
            <span className="font-semibold">Breed:</span> British Shorthair
            (BRI)
          </p>
          <p className="font-normal text-2xl">
            <span className="font-semibold">Colour:</span> {data.color}
          </p>
        </div>
      </div>
    </>
  );
};

export default CatCard;
