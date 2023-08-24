import { FC } from "react";

import getCats from "@/actions/get-cats";
import Hero from "@/components/hero";
import CatCard from "./components/cat-card";
import ProductList from "./components/product-list";

interface KittensPageProps {}

export const revalidate = 0;
export const dynamic = "force-dynamic";

const KittensPage: FC<KittensPageProps> = async ({}) => {
  const cats = await getCats({ forSale: true });

  console.log(cats);

  return (
    <div className="bg-[#EDEFEB]">
      <Hero title="Cats" sub="for Sale" />
      <div className="p-4">
        <ProductList items={cats} />
      </div>
    </div>
  );
};

export default KittensPage;
