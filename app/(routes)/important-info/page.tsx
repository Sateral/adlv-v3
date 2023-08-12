import Hero from "@/components/hero";
import Image from "next/image";
import Image1 from "@/public/yossi.jpg";
import Image2 from "@/public/fiona.jpg";
import Image3 from "@/public/ursula.jpg";
import Link from "next/link";

const ImportantInfo = () => {
  return (
    <>
      <Hero title="Important Info" />
      <div className="bg-[#EDEFEB]">
        <div className="mx-auto max-w-7xl font-karla p-8 text-lg">
          <div className="flex md:flex-row flex-col justify-around gap-8 font-karla lg:text-3xl md:text-2xl text-3xl text-white text-center">
            <Link
              href="/reserve"
              className="aspect-square rounded-lg w-full h-full flex justify-center items-center saturate-[0.2] bg-center bg-cover cursor-pointer overflow-hidden shadow-xl"
              style={{ backgroundImage: `url(${Image1.src})` }}
            >
              <div className="absolute inset-0 bg-primary-tan opacity-70" />
              <p className="z-10">How to Reserve</p>
            </Link>
            <Link
              href="/kitten-policy"
              className="aspect-square rounded-lg w-full h-full flex justify-center items-center saturate-[0.2] bg-center bg-cover cursor-pointer overflow-hidden shadow-xl"
              style={{ backgroundImage: `url(${Image2.src})` }}
            >
              <div className="absolute inset-0 bg-primary-tan opacity-70" />
              <p className="z-10">Kitten Policy</p>
            </Link>
            <Link
              href="/expensive"
              className="aspect-square rounded-lg w-full h-full flex justify-center items-center saturate-[0.2] bg-center bg-cover cursor-pointer overflow-hidden shadow-xl"
              style={{ backgroundImage: `url(${Image3.src})` }}
            >
              <div className="absolute inset-0 bg-primary-tan opacity-70" />
              <p className="z-10">Why are Kittens so Expensive?</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImportantInfo;
