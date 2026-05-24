import headphones from "@/assets/product-headphones.jpg";
import mug from "@/assets/product-mug.jpg";
import wallet from "@/assets/product-wallet.jpg";
import bottle from "@/assets/product-bottle.jpg";
import sneakers from "@/assets/product-sneakers.jpg";
import watch from "@/assets/product-watch.jpg";
import pen from "@/assets/product-pen.jpg";
import scarf from "@/assets/product-scarf.jpg";
import perfume from "@/assets/product-perfume.jpg";
import bag from "@/assets/product-bag.jpg";
import sunglasses from "@/assets/product-sunglasses.jpg";
import candle from "@/assets/product-candle.jpg";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: "Audio" | "Lifestyle" | "Accessories" | "Apparel" | "Fragrance" | "Stationery";
  description: string;
  rating: number;
  badge?: string;
};

export const products: Product[] = [
  {
    id: "noir-perfume",
    name: "Noir Eau de Parfum",
    price: 2890000,
    image: perfume,
    category: "Fragrance",
    description:
      "Amber, oud, and Tonka bean. A signature scent crafted in Grasse — 50ml extrait concentration.",
    rating: 4.9,
    badge: "Signature",
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
    id: "atelier-bag",
    name: "Atelier Weekend Bag",
    price: 4590000,
    image: bag,
    category: "Accessories",
    description:
      "Full-grain Tuscan leather, brass hardware, suede-lined interior. Made to outlive trends.",
    rating: 4.9,
    badge: "Heirloom",
  },
  {
    id: "cashmere-scarf",
    name: "Camel Cashmere Scarf",
    price: 1890000,
    image: scarf,
    category: "Apparel",
    description:
      "Grade-A Mongolian cashmere, fringed edges. Featherweight warmth with a buttery hand-feel.",
    rating: 4.8,
  },
  {
    id: "lumen-pen",
    name: "Lumen Fountain Pen",
    price: 1290000,
    image: pen,
    category: "Stationery",
    description:
      "Lacquered brass body with 18k gold nib. Threaded converter included for bottled ink.",
    rating: 4.7,
    badge: "New",
  },
  {
    id: "halcyon-sunglasses",
    name: "Halcyon Sunglasses",
    price: 1690000,
    image: sunglasses,
    category: "Accessories",
    description:
      "Acetate tortoiseshell frames with polarized mineral glass lenses. UV400, hand-finished in Italy.",
    rating: 4.7,
  },
  {
    id: "ember-candle",
    name: "Ember Soy Candle",
    price: 390000,
    image: candle,
    category: "Lifestyle",
    description:
      "Amber, vetiver, and warm cedar. 60-hour burn, hand-poured in small batches.",
    rating: 4.8,
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

export const categories = [
  "All",
  "Fragrance",
  "Accessories",
  "Apparel",
  "Audio",
  "Lifestyle",
  "Stationery",
] as const;

export const formatIDR = (n: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);
