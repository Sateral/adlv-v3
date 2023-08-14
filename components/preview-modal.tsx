"use client";

import { FC } from "react";
import usePreviewModal from "@/hooks/use-preview-modal";
import Modal from "@/components/ui/modal";
import Gallery from "./gallery";
import Info from "./kitten-info";

interface PreviewModalProps {}

const PreviewModal: FC<PreviewModalProps> = ({}) => {
  const previewModal = usePreviewModal();
  const product = usePreviewModal((state) => state.data);

  if (!product) {
    return null;
  }

  return (
    <Modal open={previewModal.isOpen} onClose={previewModal.onClose}>
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-2 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-9 lg:col-span-9">
          <Gallery images={product.images} />
        </div>
        <div className="sm:col-span-3 lg:col-span-3">
          <Info data={product} />
        </div>
      </div>
    </Modal>
  );
};

export default PreviewModal;
