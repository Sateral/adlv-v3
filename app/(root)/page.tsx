import HomePageHero from "./components/hero";
import About from "./components/about";
import Preview from "./components/preview";
import Contact from "@/components/contact";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const HomePage = () => {
  return (
    <>
      <HomePageHero />

      <About />

      <Preview />

      <Contact />
    </>
  );
};

export default HomePage;
