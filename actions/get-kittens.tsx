import { Kitten } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}`;

interface Query {
  litterId: string;
}

const getKittens = async (): Promise<Kitten[]> => {
  // const url = qs.stringifyUrl({
  //   url: URL,
  //   query: {
  //     litterId: query.litterId,
  //   },
  // });

  const res = await fetch(`${URL}/kittens`);

  return res.json();
};

export default getKittens;
