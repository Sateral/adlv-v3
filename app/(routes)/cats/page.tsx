import { FC } from "react";

import getCats from "@/actions/get-cats";
import Hero from "@/components/hero";
import CatCard from "./components/cat-card";
import ProductList from "./components/product-list";
import Container from "@/components/ui/container";

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
        <Container>
          <p className="text-center p-8 pt-4 font-karla md:text-lg text-base">
            Not only kittens need homes. Our cattery proudly offers a selection
            of charming adult cats looking for their forever families. Browse
            through our collection of adult cats, each with their own story and
            charm, and find the perfect feline friend to bring joy and
            companionship into your life.
          </p>
        </Container>

        <h2 className="font-karla sm:text-3xl text-xl">Collection of Cats:</h2>
        <ProductList items={cats} />
      </div>
    </div>
  );
};

export default KittensPage;
