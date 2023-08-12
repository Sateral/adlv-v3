import Image from "next/image";
import { MouseEventHandler } from "react";
import { Cat } from "@/types";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hooks/use-preview-modal";
import IconButton from "./icon-button";
import { Separator } from "./separator";
import { cn } from "@/lib/utils";

interface ParentCard {
  data: Cat;
  title: string;
}

const ParentCard: React.FC<ParentCard> = ({ data, title }) => {
  const previewModal = usePreviewModal();

  const onPreview: MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(data);
  };

  return (
    <div className="flex flex-col">
      <p className="font-karla font-lighta text-2xl xl:text-left text-center">
        {title}
      </p>

      <div
        className="bg-[#EEEBE7] shadow-lg rounded-lg p-4 grid xl:grid-cols-12 grid-cols-1 items-start justify-self-center xl:gap-x-4 gap-x-2 cursor-pointer"
        onClick={onPreview}
      >
        {/* IMAGES AND ACTIONS */}
        <div className="xl:col-span-7 xl:mb-0 mb-4">
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
        <div className="xl:col-span-5 font-karla">
          <p className="font-normal md:text-3xl text-2xl">{data.name}</p>
          <p className="font-normal md:text-2xl text-xl sm:block hidden">
            of Aurore de la Vie
          </p>

          <Separator className="bg-primary-tan h-[2px] rounded-full mb-4 mt-2" />

          <p className="font-normal md:text-2xl sm:text-xl">
            <span className="font-semibold">Breed:</span> British Shorthair
            (BRI)
          </p>
          <p className="font-normal md:text-2xl sm:text-xl">
            <span className="font-semibold">Colour:</span> {data.color}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParentCard;
