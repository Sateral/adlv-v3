import BgImage from "@/public/Hero.jpg";

const HomePageHero = () => {
  return (
    <div
      className="lg:h-screen w-full lg:aspect-auto aspect-square bg-cover bg-center bg-no-repeat flex justify-center"
      style={{ backgroundImage: `url(${BgImage.src})` }}
    >
      <div className="w-full max-w-[1580px] flex flex-col justify-center px-12">
        <div className="w-max text-[#7a7166] font-karla lg:text-4xl sm:text-2xl text-xl font-light md:font-normal">
          <h2>Welcome to the</h2>

          <h1 className="font-dancing font-semibold lg:text-8xl md:text-7xl sm:text-6xl text-5xl text-primary-tan">
            Aurore de la Vie
          </h1>

          <h2 className="text-right sm:mr-0 mr-4">Cattery</h2>
        </div>
      </div>
    </div>
  );
};

export default HomePageHero;