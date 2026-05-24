import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, BarChart3, Bot, Wallet, Truck } from "lucide-react";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Elgnstr — Premium commerce, beautifully built" },
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
  { quote: "We moved from three platforms to Elgnstr in a weekend. Our checkout conversion jumped 32%.", name: "Anya Setiawan", role: "CEO, Halcyon Goods" },
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
        <div className="container-page pt-20 pb-24 md:pt-32 md:pb-36">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 backdrop-blur px-3 py-1 text-xs text-muted-foreground">
              <span className="size-1.5 rounded-full bg-gold" />
              New — AI storefront, now in private beta
            </span>
            <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.02] font-light">
              Commerce, <em className="italic text-gold">refined</em> for ambitious brands.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Elgnstr is a premium commerce platform that helps modern teams launch beautiful stores,
              automate operations, and grow with confidence — without the bloat.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/collaborate" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition">
                Start a collaboration <ArrowRight className="size-4" />
              </Link>
              <Link to="/shop" className="inline-flex items-center rounded-full border border-border bg-background px-6 py-3 text-sm font-medium hover:bg-muted transition">
                Explore the storefront
              </Link>
            </div>
          </motion.div>

          {/* Editorial product trio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 md:mt-20 grid grid-cols-3 gap-4 md:gap-6"
          >
            {products.slice(0, 3).map((p, i) => (
              <Link
                key={p.id}
                to="/product/$id"
                params={{ id: p.id }}
                className={`group relative overflow-hidden rounded-2xl bg-surface aspect-[3/4] ${i === 1 ? "translate-y-6 md:translate-y-10" : ""}`}
              >
                <img src={p.image} alt={p.name} className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-foreground/70 to-transparent text-background">
                  <p className="text-xs uppercase tracking-widest opacity-80">{p.category}</p>
                  <p className="font-display text-lg">{p.name}</p>
                </div>
              </Link>
            ))}
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
          <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight font-light">
            Everything you need. <em className="italic text-gold">Nothing you don't.</em>
          </h2>
          <p className="mt-4 text-muted-foreground">
            From storefront to fulfillment, every surface is crafted to feel inevitable.
          </p>
        </div>
        <div className="mt-14 grid gap-px bg-border rounded-2xl overflow-hidden md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="bg-background p-8 hover:bg-surface/50 transition-colors">
              <f.icon className="size-5 text-gold" />
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
            <p className="text-xs uppercase tracking-widest text-muted-foreground">The collection</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-light">Objects of <em className="italic text-gold">quiet luxury</em></h2>
          </div>
          <Link to="/shop" className="text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
            View all <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-x-6 gap-y-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.slice(0, 8).map((p, i) => (
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
                <blockquote className="font-display text-xl leading-snug italic">"{t.quote}"</blockquote>
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
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-light">Built around your <em className="italic text-gold">growth</em>.</h2>
          <p className="mt-4 text-muted-foreground">Transparent pricing. Cancel anytime. Every plan includes a dedicated launch concierge.</p>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl border p-8 flex flex-col ${
                p.highlight ? "border-foreground bg-ink text-background shadow-card" : "border-border bg-background"
              }`}
            >
              <div className="flex items-center justify-between">
                <p className="font-medium">{p.name}</p>
                {p.highlight && <span className="text-[10px] uppercase tracking-wider rounded-full bg-gold text-gold-foreground px-2 py-0.5 font-semibold">{p.tag}</span>}
              </div>
              {!p.highlight && <p className="text-xs text-muted-foreground mt-1">{p.tag}</p>}
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-5xl font-light">{p.price}</span>
                {p.period && <span className={p.highlight ? "text-background/60" : "text-muted-foreground"}>{p.period}</span>}
              </div>
              <ul className={`mt-6 space-y-3 text-sm ${p.highlight ? "text-background/80" : "text-muted-foreground"}`}>
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className={p.highlight ? "text-gold" : "text-gold"}>—</span> {f}
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
        <div className="rounded-3xl bg-ink text-background p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,oklch(0.7_0.13_78/0.5),transparent_70%)]" />
          <h2 className="relative font-display text-4xl md:text-6xl max-w-3xl mx-auto leading-tight font-light">
            Let's build the commerce experience your brand <em className="italic text-gold">deserves</em>.
          </h2>
          <Link to="/collaborate" className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-gold text-gold-foreground px-6 py-3 text-sm font-semibold hover:opacity-90">
            Book a strategy call <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
