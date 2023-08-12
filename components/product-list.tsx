import { Kitten } from "@/types";
import { FC } from "react";
import KittenCard from "@/components/ui/kitten-card";

interface ProductListProps {
  items: Kitten[];
}

const ProductList: FC<ProductListProps> = ({ items }) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <KittenCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
