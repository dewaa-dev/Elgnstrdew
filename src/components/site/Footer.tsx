export function Footer() {
  return (
    <footer className="border-t border-border/60 mt-32">
      <div className="container-page py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="size-7 rounded-full bg-gold shadow-gold" />
            <span className="font-display text-2xl tracking-tight">Elgnstr</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
            A premium commerce platform crafted for ambitious brands. Sell beautifully, scale confidently.
          </p>
        </div>
        <div>
          <p className="text-sm font-medium">Platform</p>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li><a href="/#features" className="hover:text-foreground">Features</a></li>
            <li><a href="/#pricing" className="hover:text-foreground">Pricing</a></li>
            <li><a href="/shop" className="hover:text-foreground">Live demo</a></li>
            <li><a href="/dashboard" className="hover:text-foreground">Dashboard</a></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium">Company</p>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li><a href="/collaborate" className="hover:text-foreground">Collaborate</a></li>
            <li><a href="/collaborate" className="hover:text-foreground">Contact</a></li>
            <li><a href="#" className="hover:text-foreground">Privacy</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-page py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Elgnstr Commerce. All rights reserved.</p>
          <p>Crafted for ambitious teams.</p>
        </div>
      </div>
    </footer>
  );
}
