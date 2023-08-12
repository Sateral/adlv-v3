import { Litter } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/litters`;

const getLitters = async (): Promise<Litter[]> => {
  const res = await fetch(URL);

  return res.json();
};

const getLitter = async (): Promise<Litter[]> => {
  const litters = await getLitters();
  console.log(litters);
  return litters;
};

export default getLitters;
