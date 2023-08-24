import { Cat } from "@/types";
import { FC } from "react";
import CatCard from "./cat-card";

interface ProductListProps {
  items: Cat[];
}

const ProductList: FC<ProductListProps> = ({ items }) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <CatCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
