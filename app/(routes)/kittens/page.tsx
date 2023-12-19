import { FC } from "react";

import getKittens from "@/actions/get-kittens";
import getLitters from "@/actions/get-litters";
import getCats from "@/actions/get-cats";
import CatCards from "@/components/cat-cards";
import Parents from "./components/parents";
import Hero from "@/components/hero";
import NoLitters from "@/components/no-litters";

interface KittensPageProps {}

export const revalidate = 0;
export const dynamic = "force-dynamic";

const KittensPage: FC<KittensPageProps> = async ({}) => {
  const litters = await getLitters();
  const kittens = await getKittens();

  const cats = await getCats({});
  return (
    <div className="bg-[#EDEFEB]">
      <Hero title="Kittens" sub="of Aurore de la Vie" />

      {litters.length !== 0 && (
        <CatCards kittens={kittens} litters={litters} parents={cats} />
      )}
      {litters.length === 0 && <NoLitters />}
    </div>
  );
};

export default KittensPage;
