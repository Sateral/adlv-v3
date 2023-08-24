import getCats from "@/actions/get-cats";
import CatList from "@/components/cat-list";
import Hero from "@/components/hero";
import { FC } from "react";

interface QueensProps {}

export const revalidate = 0;
export const dynamic = "force-dynamic";

const Queens: FC<QueensProps> = async ({}) => {
  const cats = await getCats({ forSale: false });
  const queens = cats.filter((queen) => queen.gender === "F");

  return (
    <>
      <Hero title="Queens" sub="of Aurore de la Vie" />
      <div className="bg-[#E1E2E1]">
        <div className="max-w-7xl mx-auto">
          {queens !== undefined && <CatList items={queens} />}
        </div>
      </div>
    </>
  );
};

export default Queens;
