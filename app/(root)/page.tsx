import HomePageHero from "./components/hero";
import About from "./components/about";
import Preview from "./components/preview";
import Contact from "@/components/contact";
import Qualities from "./components/qualities";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const HomePage = () => {
  return (
    <>
      <HomePageHero />

      <About />

      <Qualities />

      <Preview />

      <div className="bg-[#EBE4DA]">
        <Contact />
      </div>
    </>
  );
};

export default HomePage;
