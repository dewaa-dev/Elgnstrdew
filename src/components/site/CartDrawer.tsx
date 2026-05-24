import { AnimatePresence, motion } from "framer-motion";
import { X, Minus, Plus } from "lucide-react";
import { useCart } from "@/lib/cart-store";
import { formatIDR } from "@/lib/products";

export function CartDrawer() {
  const { open, setOpen, items, setQty, remove, subtotal, clear } = useCart();
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/20 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 280, damping: 32 }}
            className="fixed right-0 top-0 z-50 h-full w-full max-w-md bg-background border-l border-border flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-border">
              <h2 className="font-display text-2xl">Your bag</h2>
              <button onClick={() => setOpen(false)} className="p-2 rounded-full hover:bg-muted" aria-label="Close">
                <X className="size-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-2">
                  <p className="font-display text-2xl">Your bag is empty</p>
                  <p className="text-sm text-muted-foreground">Discover pieces curated for everyday excellence.</p>
                </div>
              ) : (
                <ul className="divide-y divide-border">
                  {items.map(({ product, qty }) => (
                    <li key={product.id} className="py-4 flex gap-4">
                      <img src={product.image} alt={product.name} className="size-20 rounded-md object-cover bg-surface" width={80} height={80} />
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between gap-3">
                          <p className="text-sm font-medium truncate">{product.name}</p>
                          <button onClick={() => remove(product.id)} className="text-xs text-muted-foreground hover:text-foreground">Remove</button>
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5">{product.category}</p>
                        <div className="mt-3 flex items-center justify-between">
                          <div className="inline-flex items-center rounded-full border border-border">
                            <button onClick={() => setQty(product.id, qty - 1)} className="p-1.5 hover:bg-muted rounded-l-full"><Minus className="size-3" /></button>
                            <span className="px-3 text-sm tabular-nums">{qty}</span>
                            <button onClick={() => setQty(product.id, qty + 1)} className="p-1.5 hover:bg-muted rounded-r-full"><Plus className="size-3" /></button>
                          </div>
                          <p className="text-sm font-medium">{formatIDR(product.price * qty)}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-border px-6 py-5 space-y-4 bg-surface/60">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium tabular-nums">{formatIDR(subtotal())}</span>
                </div>
                <p className="text-xs text-muted-foreground">Shipping & taxes calculated at checkout.</p>
                <button className="w-full rounded-full bg-primary text-primary-foreground py-3 text-sm font-medium hover:opacity-90 transition">
                  Checkout — {formatIDR(subtotal())}
                </button>
                <button onClick={clear} className="w-full text-xs text-muted-foreground hover:text-foreground">Clear bag</button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
