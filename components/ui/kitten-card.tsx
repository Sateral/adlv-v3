import Image from "next/image";
import { MouseEventHandler } from "react";
import { Kitten } from "@/types";
import usePreviewModal from "@/hooks/use-preview-modal";

interface KittenCard {
  data: Kitten;
}

const KittenCard: React.FC<KittenCard> = ({ data }) => {
  const previewModal = usePreviewModal();

  const onPreview: MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(data);
  };

  return (
    <div
      className="bg-[#f3f3f3] shadow-lg group rounded-xl border p-3 space-y-4 cursor-pointer hover:scale-[1.02] duration-100 ease-in-out"
      onClick={onPreview}
    >
      {/* IMAGES AND ACTIONS */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data?.images?.[0]?.url}
          fill
          sizes="(max-width: 768px) 100vw"
          priority={false}
          alt="Image"
          className="aspect-square object-cover rounded-md"
        />
        {/* <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
          </div>
        </div> */}
      </div>
      {/* DESCRIPTION */}
      <div>
        <p className="font-normal text-lg">{data.name}</p>
        {/* <p className="font-normal text-sm">Color: {data.color}</p> */}
        {/* <p className="font-normal text-sm">Gender: {data.gender}</p> */}
        <p className="font-normal text-sm">Status: {data.status}</p>
      </div>
    </div>
  );
};

export default KittenCard;
