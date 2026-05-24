import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  Users,
  BarChart3,
  Settings,
  TrendingUp,
  Search,
  Plus,
  MoreHorizontal,
} from "lucide-react";
import { products, formatIDR } from "@/lib/products";

export const Route = createFileRoute("/dashboard")({
  component: DashboardPage,
  head: () => ({
    meta: [
      { title: "Dashboard — Elgnstr" },
      { name: "description", content: "Manage orders, products, customers and analytics from the Elgnstr command center." },
    ],
  }),
});

type Tab = "overview" | "orders" | "products" | "customers" | "analytics" | "settings";

const nav: { id: Tab; label: string; icon: typeof LayoutDashboard }[] = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "orders", label: "Orders", icon: ShoppingBag },
  { id: "products", label: "Products", icon: Package },
  { id: "customers", label: "Customers", icon: Users },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "settings", label: "Settings", icon: Settings },
];

function DashboardPage() {
  const [tab, setTab] = useState<Tab>("overview");

  return (
    <div className="container-page py-10 md:py-14">
      <div className="rounded-3xl border border-border bg-card shadow-card overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-surface/40">
          <div className="flex items-center gap-3">
            <span className="size-2.5 rounded-full bg-gold" />
            <p className="text-sm font-medium">elgnstr.app / {tab}</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-success" /> Live · synced just now
          </div>
        </div>

        <div className="grid md:grid-cols-[220px_1fr] min-h-[600px]">
          {/* Sidebar */}
          <aside className="border-r border-border p-4 bg-surface/20">
            <div className="space-y-1">
              {nav.map((item) => {
                const Icon = item.icon;
                const active = tab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setTab(item.id)}
                    className={`w-full flex items-center gap-3 text-sm px-3 py-2.5 rounded-lg transition-colors ${
                      active
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    <Icon className="size-[16px]" />
                    {item.label}
                  </button>
                );
              })}
            </div>
            <div className="mt-8 rounded-xl bg-gradient-to-br from-gold/20 to-transparent p-4 border border-gold/30">
              <p className="font-display italic text-sm">Need a hand?</p>
              <p className="mt-1 text-xs text-muted-foreground">Concierge available 24/7</p>
              <button className="mt-3 text-xs font-semibold underline underline-offset-4">Contact</button>
            </div>
          </aside>

          {/* Content */}
          <div className="p-6 md:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                {tab === "overview" && <OverviewView />}
                {tab === "orders" && <OrdersView />}
                {tab === "products" && <ProductsView />}
                {tab === "customers" && <CustomersView />}
                {tab === "analytics" && <AnalyticsView />}
                {tab === "settings" && <SettingsView />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ eyebrow, title, action }: { eyebrow: string; title: string; action?: React.ReactNode }) {
  return (
    <div className="flex items-end justify-between flex-wrap gap-4">
      <div>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">{eyebrow}</p>
        <h1 className="font-display text-3xl md:text-4xl font-light mt-1">{title}</h1>
      </div>
      {action}
    </div>
  );
}

function OverviewView() {
  const stats = [
    { l: "Revenue", v: formatIDR(184250000), d: "+24.6%" },
    { l: "Orders", v: "1,284", d: "+12.1%" },
    { l: "Avg. order", v: formatIDR(143500), d: "+4.3%" },
    { l: "Customers", v: "892", d: "+18.2%" },
  ];
  return (
    <>
      <SectionHeader eyebrow="This month" title="Hello, Dewa" action={<span className="text-xs text-success inline-flex items-center gap-1"><TrendingUp className="size-3" /> 24.6% vs last month</span>} />
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.l} className="rounded-xl border border-border p-5 bg-background">
            <p className="text-xs text-muted-foreground">{s.l}</p>
            <p className="mt-1 font-display text-2xl font-light">{s.v}</p>
            <p className="mt-2 text-xs text-success">{s.d}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-xl border border-border p-6 bg-background">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">Revenue · last 30 days</p>
          <p className="text-xs text-muted-foreground">Updated 2m ago</p>
        </div>
        <svg viewBox="0 0 400 120" className="mt-4 w-full h-40">
          <defs>
            <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.7 0.13 78)" stopOpacity="0.35" />
              <stop offset="100%" stopColor="oklch(0.7 0.13 78)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,90 C40,70 70,80 110,55 C150,30 190,65 230,45 C270,25 310,35 350,18 L400,15 L400,120 L0,120 Z" fill="url(#g)" />
          <path d="M0,90 C40,70 70,80 110,55 C150,30 190,65 230,45 C270,25 310,35 350,18 L400,15" fill="none" stroke="oklch(0.18 0.012 50)" strokeWidth="1.5" />
        </svg>
      </div>
    </>
  );
}

const mockOrders = [
  { id: "EL-10284", customer: "Dewa Pratama", total: 4890000, status: "Fulfilled", date: "2 hours ago" },
  { id: "EL-10283", customer: "Marcus Wijaya", total: 1290000, status: "Processing", date: "4 hours ago" },
  { id: "EL-10282", customer: "Lila Hartono", total: 2890000, status: "Fulfilled", date: "Yesterday" },
  { id: "EL-10281", customer: "Dewi Putri", total: 590000, status: "Shipped", date: "Yesterday" },
  { id: "EL-10280", customer: "Rangga Pratama", total: 3290000, status: "Fulfilled", date: "2 days ago" },
];

function OrdersView() {
  return (
    <>
      <SectionHeader
        eyebrow="Operations"
        title="Orders"
        action={
          <button className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90">
            <Plus className="size-4" /> New order
          </button>
        }
      />
      <div className="mt-8 rounded-xl border border-border bg-background overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-surface/40 text-xs uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="text-left px-5 py-3 font-medium">Order</th>
              <th className="text-left px-5 py-3 font-medium">Customer</th>
              <th className="text-left px-5 py-3 font-medium">Total</th>
              <th className="text-left px-5 py-3 font-medium">Status</th>
              <th className="text-left px-5 py-3 font-medium">Date</th>
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody>
            {mockOrders.map((o) => (
              <tr key={o.id} className="border-t border-border hover:bg-surface/30 transition-colors">
                <td className="px-5 py-4 font-medium">{o.id}</td>
                <td className="px-5 py-4">{o.customer}</td>
                <td className="px-5 py-4">{formatIDR(o.total)}</td>
                <td className="px-5 py-4">
                  <span className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full ${
                    o.status === "Fulfilled" ? "bg-success/15 text-success" :
                    o.status === "Processing" ? "bg-gold/20 text-gold-foreground" :
                    "bg-secondary text-secondary-foreground"
                  }`}>
                    <span className="size-1.5 rounded-full bg-current" /> {o.status}
                  </span>
                </td>
                <td className="px-5 py-4 text-muted-foreground">{o.date}</td>
                <td className="px-5 py-4 text-right">
                  <button className="p-1.5 rounded-md hover:bg-muted"><MoreHorizontal className="size-4" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function ProductsView() {
  return (
    <>
      <SectionHeader
        eyebrow="Catalog"
        title="Products"
        action={
          <button className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90">
            <Plus className="size-4" /> Add product
          </button>
        }
      />
      <div className="mt-6 relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <input
          placeholder="Search products…"
          className="w-full pl-9 pr-4 py-2.5 rounded-full border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.slice(0, 9).map((p) => (
          <div key={p.id} className="rounded-xl border border-border bg-background overflow-hidden hover:shadow-elegant transition-shadow">
            <div className="aspect-square bg-surface overflow-hidden">
              <img src={p.image} alt={p.name} className="size-full object-cover" loading="lazy" />
            </div>
            <div className="p-4">
              <p className="text-xs text-muted-foreground">{p.category}</p>
              <p className="font-medium text-sm mt-0.5 truncate">{p.name}</p>
              <div className="mt-2 flex items-center justify-between">
                <p className="text-sm font-medium">{formatIDR(p.price)}</p>
                <span className="text-xs text-success">In stock</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

const mockCustomers = [
  { name: "Dewa Pratama", email: "dewa@halcyon.id", orders: 14, spent: 28490000 },
  { name: "Marcus Wijaya", email: "marcus@maison.co", orders: 9, spent: 18900000 },
  { name: "Lila Hartono", email: "lila@vellum.id", orders: 22, spent: 41200000 },
  { name: "Dewi Putri", email: "dewi@northco.id", orders: 6, spent: 8900000 },
  { name: "Rangga Pratama", email: "rangga@atlas.id", orders: 11, spent: 19840000 },
];

function CustomersView() {
  return (
    <>
      <SectionHeader eyebrow="Audience" title="Customers" />
      <div className="mt-8 rounded-xl border border-border bg-background overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-surface/40 text-xs uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="text-left px-5 py-3 font-medium">Name</th>
              <th className="text-left px-5 py-3 font-medium">Email</th>
              <th className="text-left px-5 py-3 font-medium">Orders</th>
              <th className="text-left px-5 py-3 font-medium">Total spent</th>
            </tr>
          </thead>
          <tbody>
            {mockCustomers.map((c) => (
              <tr key={c.email} className="border-t border-border hover:bg-surface/30">
                <td className="px-5 py-4 font-medium flex items-center gap-3">
                  <span className="size-8 rounded-full bg-gradient-to-br from-gold/40 to-secondary flex items-center justify-center text-xs font-semibold">
                    {c.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                  {c.name}
                </td>
                <td className="px-5 py-4 text-muted-foreground">{c.email}</td>
                <td className="px-5 py-4">{c.orders}</td>
                <td className="px-5 py-4 font-medium">{formatIDR(c.spent)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function AnalyticsView() {
  const bars = [42, 58, 49, 71, 65, 88, 76, 94, 82, 110, 98, 124];
  const max = Math.max(...bars);
  return (
    <>
      <SectionHeader eyebrow="Insights" title="Analytics" />
      <div className="mt-8 grid md:grid-cols-3 gap-4">
        {[
          { l: "Conversion rate", v: "3.84%", d: "+0.6pt" },
          { l: "Sessions", v: "48,210", d: "+11.3%" },
          { l: "Cart abandonment", v: "21.4%", d: "-3.2pt" },
        ].map((s) => (
          <div key={s.l} className="rounded-xl border border-border p-5 bg-background">
            <p className="text-xs text-muted-foreground">{s.l}</p>
            <p className="mt-1 font-display text-2xl font-light">{s.v}</p>
            <p className="mt-2 text-xs text-success">{s.d}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-xl border border-border p-6 bg-background">
        <p className="text-sm font-medium">Monthly revenue</p>
        <div className="mt-6 flex items-end gap-2 h-40">
          {bars.map((b, i) => (
            <div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-gold/30 to-gold" style={{ height: `${(b / max) * 100}%` }} />
          ))}
        </div>
        <div className="mt-2 flex justify-between text-[10px] uppercase tracking-wider text-muted-foreground">
          {"JFMAMJJASOND".split("").map((m, i) => <span key={i}>{m}</span>)}
        </div>
      </div>
    </>
  );
}

function SettingsView() {
  return (
    <>
      <SectionHeader eyebrow="Workspace" title="Settings" />
      <div className="mt-8 max-w-xl space-y-6">
        {[
          { label: "Store name", value: "Elgnstr Atelier" },
          { label: "Support email", value: "concierge@elgnstr.app" },
          { label: "Default currency", value: "Indonesian Rupiah (IDR)" },
          { label: "Time zone", value: "Asia/Jakarta (GMT+7)" },
        ].map((f) => (
          <div key={f.label}>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">{f.label}</label>
            <input
              defaultValue={f.value}
              className="mt-2 w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        ))}
        <button className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90">
          Save changes
        </button>
      </div>
    </>
  );
}
