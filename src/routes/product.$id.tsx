import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Star, Truck, ShieldCheck, RotateCcw } from "lucide-react";
import { products, formatIDR } from "@/lib/products";
import { useCart } from "@/lib/cart-store";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/product/$id")({
  component: ProductPage,
  loader: ({ params }) => {
    const product = products.find((p) => p.id === params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.product.name} — Nordal` : "Nordal" },
      { name: "description", content: loaderData?.product.description },
    ],
  }),
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <p className="font-display text-3xl">Product not found</p>
      <Link to="/shop" className="text-sm mt-4 inline-block underline">Back to shop</Link>
    </div>
  ),
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const add = useCart((s) => s.add);
  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);

  return (
    <div>
      <div className="container-page pt-8">
        <Link to="/shop" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="size-4" /> Back to shop
        </Link>
      </div>
      <section className="container-page py-12 grid md:grid-cols-2 gap-12 lg:gap-20">
        <div className="aspect-square overflow-hidden rounded-2xl bg-surface">
          <img src={product.image} alt={product.name} className="size-full object-cover" width={900} height={900} />
        </div>
        <div className="md:py-8">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">{product.category}</p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl leading-tight">{product.name}</h1>
          <div className="mt-3 flex items-center gap-3 text-sm">
            <span className="inline-flex items-center gap-1">
              <Star className="size-4 fill-foreground" /> {product.rating}
            </span>
            <span className="text-muted-foreground">· 248 reviews</span>
          </div>
          <p className="mt-6 text-lg tabular-nums">{formatIDR(product.price)}</p>
          <p className="mt-6 text-muted-foreground leading-relaxed">{product.description}</p>

          <div className="mt-8 space-y-3">
            <button
              onClick={() => add(product)}
              className="w-full rounded-full bg-primary text-primary-foreground py-3.5 text-sm font-medium hover:opacity-90 transition"
            >
              Add to bag
            </button>
            <button className="w-full rounded-full border border-border py-3.5 text-sm font-medium hover:bg-muted transition">
              Add to wishlist
            </button>
          </div>

          <ul className="mt-10 grid grid-cols-3 gap-4 text-xs text-muted-foreground border-t border-border pt-6">
            <li className="flex flex-col items-start gap-2"><Truck className="size-4 text-foreground" /> Free shipping over Rp 1jt</li>
            <li className="flex flex-col items-start gap-2"><RotateCcw className="size-4 text-foreground" /> 30-day easy returns</li>
            <li className="flex flex-col items-start gap-2"><ShieldCheck className="size-4 text-foreground" /> 2-year warranty</li>
          </ul>
        </div>
      </section>

      {related.length > 0 && (
        <section className="container-page py-16 md:py-24 border-t border-border">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">You may also like</p>
          <div className="mt-8 grid gap-x-6 gap-y-10 grid-cols-2 md:grid-cols-4">
            {related.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        </section>
      )}
    </div>
  );
}
