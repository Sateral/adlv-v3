export interface Litter {
  id: string;
  letter: string;
  birthDate: string;
  momName: string;
  dadName: string;
  kittens: Kitten[];
}

export interface Kitten {
  id: string;
  litterId: string;
  name: string;
  gender: string;
  color: string;
  status: string;
  images: Image[];
}

export interface Image {
  id: string;
  url: string;
}

export interface Cat {
  id: string;
  name: string;
  gender: string;
  color: string;
  forSale: boolean;
  images: Image[];
}
