import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, BarChart3, Bot, Wallet, Truck } from "lucide-react";
import { products, formatIDR } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Nordal — Premium commerce, beautifully built" },
      { name: "description", content: "Enterprise-grade e-commerce for ambitious brands. Trusted by modern teams to ship, sell and scale." },
    ],
  }),
});

const features = [
  { icon: Sparkles, title: "AI-powered storefront", desc: "Smart recommendations, generated copy, and assistive search built into every surface." },
  { icon: BarChart3, title: "Insightful analytics", desc: "Revenue, cohorts and inventory in one elegant dashboard. No spreadsheets required." },
  { icon: Wallet, title: "Frictionless checkout", desc: "Multi-step or one-tap. Tax, shipping and coupons calculated in real-time." },
  { icon: ShieldCheck, title: "Enterprise security", desc: "Role-based access, SSO and PCI-ready payments out of the box." },
  { icon: Truck, title: "End-to-end orders", desc: "Track every order from cart to delivery with branded customer updates." },
  { icon: Bot, title: "AI customer support", desc: "An on-brand chatbot that handles 80% of tickets while you focus on growth." },
];

const logos = ["Atlas", "North&Co", "Maison", "Vellum", "Halcyon", "Soren"];

const testimonials = [
  { quote: "We moved from three platforms to Nordal in a weekend. Our checkout conversion jumped 32%.", name: "Anya Setiawan", role: "CEO, Halcyon Goods" },
  { quote: "The dashboard feels like Linear for commerce. Our ops team finally enjoys their tools.", name: "Marcus Wijaya", role: "Head of Ops, Maison" },
  { quote: "It looks like a brand we already wanted to be. That changed everything.", name: "Lila Hartono", role: "Founder, Vellum" },
];

const plans = [
  { name: "Studio", price: "Rp 4.9jt", period: "/mo", tag: "For emerging brands", features: ["Up to 1,000 orders/mo", "Storefront & checkout", "Email & chat support", "Standard analytics"] },
  { name: "Growth", price: "Rp 12jt", period: "/mo", tag: "Most popular", highlight: true, features: ["Up to 10,000 orders/mo", "AI features included", "Multi-channel sync", "Priority support", "Custom integrations"] },
  { name: "Enterprise", price: "Custom", period: "", tag: "For category leaders", features: ["Unlimited orders", "Dedicated success manager", "SLA & SSO", "Custom contracts", "On-prem options"] },
];

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-hero">
        <div className="container-page pt-20 pb-24 md:pt-28 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 backdrop-blur px-3 py-1 text-xs text-muted-foreground">
              <span className="size-1.5 rounded-full bg-success" />
              New — AI storefront, now in private beta
            </span>
            <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.05]">
              Commerce, <em className="italic">refined</em> for ambitious brands.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Nordal is a premium commerce platform that helps modern teams launch beautiful stores,
              automate operations, and grow with confidence — without the bloat.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/collaborate" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition">
                Start a collaboration <ArrowRight className="size-4" />
              </Link>
              <Link to="/shop" className="inline-flex items-center rounded-full border border-border bg-background px-6 py-3 text-sm font-medium hover:bg-muted transition">
                Explore live demo
              </Link>
            </div>
          </motion.div>

          {/* Dashboard preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 md:mt-20"
          >
            <DashboardPreview />
          </motion.div>
        </div>
      </section>

      {/* Logos */}
      <section className="border-y border-border/60 bg-surface/40">
        <div className="container-page py-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-muted-foreground">
          <p className="text-xs uppercase tracking-widest mr-4">Trusted by</p>
          {logos.map((l) => (
            <span key={l} className="font-display text-2xl opacity-70">{l}</span>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container-page py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">The platform</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight">
            Everything you need. <em className="italic">Nothing you don't.</em>
          </h2>
          <p className="mt-4 text-muted-foreground">
            From storefront to fulfillment, every surface is crafted to feel inevitable.
          </p>
        </div>
        <div className="mt-14 grid gap-px bg-border rounded-2xl overflow-hidden md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="bg-background p-8 hover:bg-surface/50 transition-colors">
              <f.icon className="size-5 text-accent-foreground" />
              <p className="mt-5 font-medium">{f.title}</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="container-page py-24 md:py-32">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Live demo storefront</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Made by makers we admire</h2>
          </div>
          <Link to="/shop" className="text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
            View all <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-x-6 gap-y-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.slice(0, 4).map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-surface/60 border-y border-border/60">
        <div className="container-page py-24">
          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl bg-background p-8 shadow-elegant">
                <blockquote className="font-display text-xl leading-snug">"{t.quote}"</blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-medium">{t.name}</span>
                  <span className="text-muted-foreground"> · {t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="container-page py-24 md:py-32">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Partnership packages</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Built around your growth.</h2>
          <p className="mt-4 text-muted-foreground">Transparent pricing. Cancel anytime. Every plan includes a dedicated launch concierge.</p>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl border p-8 flex flex-col ${
                p.highlight ? "border-foreground bg-foreground text-background shadow-card" : "border-border bg-background"
              }`}
            >
              <div className="flex items-center justify-between">
                <p className="font-medium">{p.name}</p>
                {p.highlight && <span className="text-[10px] uppercase tracking-wider rounded-full bg-background/10 px-2 py-0.5">{p.tag}</span>}
              </div>
              {!p.highlight && <p className="text-xs text-muted-foreground mt-1">{p.tag}</p>}
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-5xl">{p.price}</span>
                {p.period && <span className={p.highlight ? "text-background/60" : "text-muted-foreground"}>{p.period}</span>}
              </div>
              <ul className={`mt-6 space-y-3 text-sm ${p.highlight ? "text-background/80" : "text-muted-foreground"}`}>
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className={p.highlight ? "text-background" : "text-foreground"}>—</span> {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/collaborate"
                className={`mt-8 inline-flex items-center justify-center rounded-full py-3 text-sm font-medium transition ${
                  p.highlight ? "bg-background text-foreground hover:opacity-90" : "border border-border hover:bg-muted"
                }`}
              >
                Start with {p.name}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-24">
        <div className="rounded-3xl bg-primary text-primary-foreground p-12 md:p-20 text-center">
          <h2 className="font-display text-4xl md:text-6xl max-w-3xl mx-auto leading-tight">
            Let's build the commerce experience your brand deserves.
          </h2>
          <Link to="/collaborate" className="mt-8 inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3 text-sm font-medium hover:opacity-90">
            Book a strategy call <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function DashboardPreview() {
  return (
    <div className="rounded-2xl border border-border bg-card shadow-card overflow-hidden">
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-surface/50">
        <span className="size-2.5 rounded-full bg-border" />
        <span className="size-2.5 rounded-full bg-border" />
        <span className="size-2.5 rounded-full bg-border" />
        <span className="ml-3 text-xs text-muted-foreground">nordal.app / dashboard</span>
      </div>
      <div className="grid md:grid-cols-[200px_1fr]">
        <aside className="border-r border-border p-4 hidden md:block">
          {["Overview", "Orders", "Products", "Customers", "Analytics", "Settings"].map((s, i) => (
            <div key={s} className={`text-sm px-3 py-2 rounded-md ${i === 0 ? "bg-secondary text-secondary-foreground" : "text-muted-foreground"}`}>
              {s}
            </div>
          ))}
        </aside>
        <div className="p-6 md:p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">This month</p>
              <p className="font-display text-3xl mt-1">Hello, Anya</p>
            </div>
            <span className="text-xs text-success">↑ 24.6% vs last month</span>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-4">
            {[
              { l: "Revenue", v: formatIDR(184250000) },
              { l: "Orders", v: "1,284" },
              { l: "Avg. order", v: formatIDR(143500) },
            ].map((s) => (
              <div key={s.l} className="rounded-xl border border-border p-4">
                <p className="text-xs text-muted-foreground">{s.l}</p>
                <p className="mt-1 font-display text-2xl">{s.v}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-border p-4 h-44 relative overflow-hidden">
            <p className="text-xs text-muted-foreground">Revenue · last 30 days</p>
            <svg viewBox="0 0 400 120" className="absolute inset-x-4 bottom-4 w-[calc(100%-2rem)] h-28">
              <defs>
                <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.4 0.06 255)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="oklch(0.4 0.06 255)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,90 C40,70 70,80 110,55 C150,30 190,65 230,45 C270,25 310,35 350,18 L400,15 L400,120 L0,120 Z" fill="url(#g)" />
              <path d="M0,90 C40,70 70,80 110,55 C150,30 190,65 230,45 C270,25 310,35 350,18 L400,15" fill="none" stroke="oklch(0.22 0.04 255)" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
