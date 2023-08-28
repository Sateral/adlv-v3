"use client";

import { FC, useState } from "react";
import Image from "next/image";
import { Tab } from "@headlessui/react";

import { Image as ImageType } from "@/types";
import GalleryTab from "./gallery-tab";
import { ChevronLeft, ChevronRight, Dot } from "lucide-react";

interface GalleryProps {
  images: ImageType[];
}

const Gallery: FC<GalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-2xl w-full mx-auto relative group">
      <div className="aspect-square relative h-full w-full rounded-lg overflow-hidden">
        <Image
          fill
          src={images[currentIndex].url}
          alt="Kitten Image"
          className="object-cover object-center"
        />
      </div>

      {/* LEFT ARROW */}
      <div className="hidden group-hover:block select-none absolute top-[50%] -translate-x-0 -translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ChevronLeft size={32} onClick={prevSlide} />
      </div>

      {/* RIGHT ARROW */}
      <div className="hidden group-hover:block select-none absolute top-[50%] -translate-x-0 -translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ChevronRight size={32} onClick={nextSlide} />
      </div>

      <div className="flex items-center justify-center py-2">
        {images.map((slide, slideIndex) => (
          <div key={slide.id} onClick={() => goToSlide(slideIndex)}>
            <Dot
              size={32}
              className={`cursor-pointer ${
                slideIndex === currentIndex ? "scale-150" : "scale-100"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
