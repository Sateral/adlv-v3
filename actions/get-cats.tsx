import { Cat } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/cats`;

interface Query {
  forSale?: boolean;
}

const getCats = async (query: Query): Promise<Cat[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      forSale: query.forSale,
    },
  });

  const res = await fetch(url);

  return res.json();
};

export default getCats;
