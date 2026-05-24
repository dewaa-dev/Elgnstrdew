import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { categories, products } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/shop")({
  component: ShopPage,
  head: () => ({
    meta: [
      { title: "Shop — Nordal" },
      { name: "description", content: "Curated objects for everyday excellence. Browse the full Nordal demo collection." },
    ],
  }),
});

function ShopPage() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const [sort, setSort] = useState<"featured" | "low" | "high">("featured");
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    let r = products;
    if (cat !== "All") r = r.filter((p) => p.category === cat);
    if (q.trim()) r = r.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()));
    if (sort === "low") r = [...r].sort((a, b) => a.price - b.price);
    if (sort === "high") r = [...r].sort((a, b) => b.price - a.price);
    return r;
  }, [cat, sort, q]);

  return (
    <div className="container-page py-16 md:py-20">
      <header className="max-w-2xl">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">The collection</p>
        <h1 className="mt-3 font-display text-5xl md:text-6xl">Objects, considered.</h1>
        <p className="mt-4 text-muted-foreground">A curated edit of pieces designed for daily ritual.</p>
      </header>

      <div className="mt-10 flex flex-wrap items-center gap-3 justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-4 py-1.5 text-sm border transition ${
                cat === c ? "bg-foreground text-background border-foreground" : "border-border hover:bg-muted"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search…"
            className="rounded-full border border-border bg-background px-4 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring/30 w-44"
          />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as never)}
            className="rounded-full border border-border bg-background px-4 py-1.5 text-sm"
          >
            <option value="featured">Featured</option>
            <option value="low">Price: low to high</option>
            <option value="high">Price: high to low</option>
          </select>
        </div>
      </div>

      <div className="mt-12 grid gap-x-6 gap-y-12 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {list.map((p, i) => (
          <ProductCard key={p.id} product={p} index={i} />
        ))}
      </div>
      {list.length === 0 && (
        <p className="mt-20 text-center text-muted-foreground">No products match your filters.</p>
      )}
    </div>
  );
}
