import { FC } from "react";

import getKittens from "@/actions/get-kittens";
import getLitters from "@/actions/get-litters";
import getCats from "@/actions/get-cats";
import CatCards from "@/components/cat-cards";
import Parents from "./components/parents";
import Hero from "@/components/hero";

interface KittensPageProps {}

const KittensPage: FC<KittensPageProps> = async ({}) => {
  const litters = await getLitters();
  const kittens = await getKittens();

  const cats = await getCats();
  return (
    <div className="bg-[#EDEFEB]">
      <Hero title="Kittens" sub="of Aurore de la Vie" />
      <CatCards kittens={kittens} litters={litters} parents={cats} />
    </div>
  );
};

export default KittensPage;
