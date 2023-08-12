import { create } from "zustand";

import { Kitten, Cat } from "@/types";
interface PreviewModalStore {
  isOpen: boolean;
  data?: Kitten | Cat;
  onOpen: (data: Kitten | Cat) => void;
  onClose: () => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: Kitten | Cat) => set({ data, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;
