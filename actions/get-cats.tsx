import { Cat } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/cats`;

// interface Query {
//   letter?: string;
//   birthDate?: string;
// }

const getCats = async (): Promise<Cat[]> => {
  // const url = qs.stringifyUrl({
  //   url: URL,
  //   query: {
  //     letter: query.letter,
  //     birthDate: query.birthDate,
  //   },
  // });

  const res = await fetch(URL);

  return res.json();
};

export default getCats;
