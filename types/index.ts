import { StaticImageData } from "next/image";

export interface ButtonConversation {
  id?: Number;
  title: string;
  position?: "justify-start" | "justify-end";
  background?: boolean;
}

export interface Product {
  id?: Number;
  title: string;
  image: StaticImageData;
  alt: String;
}

export interface Offer {
  id?: number;
  title: string;
  image: StaticImageData;
  alt: string;
  advantage: string[];
  price: String;
}
[];
