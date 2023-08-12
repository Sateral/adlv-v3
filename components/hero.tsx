import { FC } from "react";
import BgImage from "@/public/ForestTest.jpg";

interface HeroProps {
  title: string;
  sub?: string;
}

const Hero: FC<HeroProps> = ({ title, sub }) => {
  return (
    <div
      className="md:h-64 h-48 w-full bg-cover bg-center bg-no-repeat flex justify-center saturate-[0.7]"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(53, 46, 35, 0.9) 30%, transparent), url(${BgImage.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full max-w-[1580px] flex flex-col justify-center px-12">
        <div className="w-max text-gray-300 font-karla lg:text-4xl sm:text-2xl text-xl font-light md:font-normal">
          <h1 className="font-dancing font-semibold lg:text-8xl md:text-7xl sm:text-6xl text-5xl">
            {title}
          </h1>

          <h2 className="text-left sm:mr-0 mr-4">{sub}</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
