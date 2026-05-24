import headphones from "@/assets/product-headphones.jpg";
import mug from "@/assets/product-mug.jpg";
import wallet from "@/assets/product-wallet.jpg";
import bottle from "@/assets/product-bottle.jpg";
import sneakers from "@/assets/product-sneakers.jpg";
import watch from "@/assets/product-watch.jpg";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: "Audio" | "Lifestyle" | "Accessories" | "Apparel";
  description: string;
  rating: number;
  badge?: string;
};

export const products: Product[] = [
  {
    id: "aria-headphones",
    name: "Aria Wireless Headphones",
    price: 2490000,
    image: headphones,
    category: "Audio",
    description:
      "Active noise cancellation, 40-hour battery, premium acoustic chamber tuned for clarity and warmth.",
    rating: 4.9,
    badge: "Bestseller",
  },
  {
    id: "north-watch",
    name: "North Leather Smartwatch",
    price: 3290000,
    image: watch,
    category: "Accessories",
    description:
      "Hand-stitched Italian leather strap with always-on AMOLED display and 14-day battery life.",
    rating: 4.8,
    badge: "New",
  },
  {
    id: "kira-sneakers",
    name: "Kira Everyday Sneakers",
    price: 1490000,
    image: sneakers,
    category: "Apparel",
    description:
      "Minimal silhouette crafted from recycled leather. Cloud-foam sole for all-day comfort.",
    rating: 4.7,
  },
  {
    id: "stoic-bottle",
    name: "Stoic Insulated Bottle",
    price: 590000,
    image: bottle,
    category: "Lifestyle",
    description:
      "Double-wall vacuum insulation keeps drinks cold 24h or hot 12h. Aerospace-grade steel.",
    rating: 4.8,
  },
  {
    id: "haven-wallet",
    name: "Haven Bifold Wallet",
    price: 890000,
    image: wallet,
    category: "Accessories",
    description:
      "Full-grain leather, RFID-blocking. Patinas beautifully with daily use.",
    rating: 4.9,
  },
  {
    id: "morn-mug",
    name: "Morn Ceramic Mug",
    price: 290000,
    image: mug,
    category: "Lifestyle",
    description:
      "Hand-thrown stoneware with a soft matte glaze. Microwave and dishwasher safe.",
    rating: 4.6,
  },
];

export const categories = ["All", "Audio", "Accessories", "Apparel", "Lifestyle"] as const;

export const formatIDR = (n: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);
