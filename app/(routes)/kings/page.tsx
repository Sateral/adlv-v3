import getCats from "@/actions/get-cats";
import CatList from "@/components/cat-list";
import Hero from "@/components/hero";
import { FC } from "react";

interface KingsProps {}

export const revalidate = 0;
export const dynamic = "force-dynamic";

const Kings: FC<KingsProps> = async ({}) => {
  const cats = await getCats({ forSale: false });
  console.log(cats);
  const kings = cats.filter((king) => king.gender === "M");

  return (
    <>
      <Hero title="Kings" sub="of Aurore de la Vie" />
      <div className="bg-[#E1E2E1]">
        <div className="max-w-7xl mx-auto">
          {kings !== undefined && <CatList items={kings} />}
        </div>
      </div>
    </>
  );
};

export default Kings;
