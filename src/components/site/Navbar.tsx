import { Link } from "@tanstack/react-router";
import { ShoppingBag, Search } from "lucide-react";
import { useCart } from "@/lib/cart-store";

export function Navbar() {
  const count = useCart((s) => s.count());
  const setOpen = useCart((s) => s.setOpen);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/75 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="size-7 rounded-full bg-gold shadow-gold" />
          <span className="font-display text-2xl tracking-tight">Elgnstr</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <Link to="/dashboard" className="hover:text-foreground transition-colors" activeProps={{ className: "text-foreground" }}>Dashboard</Link>
          <Link to="/shop" className="hover:text-foreground transition-colors" activeProps={{ className: "text-foreground" }}>Shop</Link>
          <Link to="/collaborate" className="hover:text-foreground transition-colors" activeProps={{ className: "text-foreground" }}>Collaborate</Link>
          <a href="/#features" className="hover:text-foreground transition-colors">Platform</a>
          <a href="/#pricing" className="hover:text-foreground transition-colors">Pricing</a>
        </nav>
        <div className="flex items-center gap-1">
          <button className="p-2 rounded-full hover:bg-muted transition-colors" aria-label="Search">
            <Search className="size-[18px]" />
          </button>
          <button
            onClick={() => setOpen(true)}
            className="relative p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Open cart"
          >
            <ShoppingBag className="size-[18px]" />
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 size-4 rounded-full bg-gold text-gold-foreground text-[10px] font-semibold flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
          <Link
            to="/collaborate"
            className="ml-2 hidden sm:inline-flex items-center rounded-full bg-primary text-primary-foreground text-sm font-medium px-4 py-2 hover:opacity-90 transition-opacity"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </header>
  );
}
