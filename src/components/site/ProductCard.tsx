import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useCart } from "@/lib/cart-store";
import { formatIDR, type Product } from "@/lib/products";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const add = useCart((s) => s.add);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <Link to="/product/$id" params={{ id: product.id }} className="block">
        <div className="relative aspect-square overflow-hidden rounded-xl bg-surface">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            width={600}
            height={600}
            className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {product.badge && (
            <span className="absolute top-3 left-3 rounded-full bg-background/90 backdrop-blur px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider">
              {product.badge}
            </span>
          )}
          <button
            onClick={(e) => { e.preventDefault(); add(product); }}
            className="absolute bottom-3 right-3 size-9 rounded-full bg-foreground text-background flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
            aria-label="Add to cart"
          >
            <Plus className="size-4" />
          </button>
        </div>
        <div className="mt-3 flex items-baseline justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground">{product.category}</p>
            <p className="mt-0.5 text-sm font-medium truncate">{product.name}</p>
          </div>
          <p className="text-sm font-medium tabular-nums whitespace-nowrap">{formatIDR(product.price)}</p>
        </div>
      </Link>
    </motion.div>
  );
}
