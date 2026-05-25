import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check } from "lucide-react";

export const Route = createFileRoute("/collaborate")({
  component: CollaboratePage,
  head: () => ({
    meta: [
      { title: "Collaborate — Dewstore" },
      { name: "description", content: "Partner with the Dewstore team to launch or scale your commerce brand." },
    ],
  }),
});

function CollaboratePage() {
  const [sent, setSent] = useState(false);

  return (
    <div>
      <section className="bg-hero">
        <div className="container-page pt-20 pb-16 md:pt-28 md:pb-20 text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Let's collaborate</p>
          <h1 className="mt-4 font-display text-5xl md:text-7xl leading-[1.05]">
            Tell us what you're <em className="italic">building.</em>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Whether you're launching your first store or replatforming a $50M brand, our team is ready to architect it with you.
          </p>
        </div>
      </section>

      <section className="container-page py-20 grid md:grid-cols-[1fr_1.2fr] gap-16">
        <div>
          <h2 className="font-display text-3xl">What you get</h2>
          <ul className="mt-6 space-y-4 text-sm">
            {[
              "30-min discovery call with a senior strategist",
              "Tailored proposal within 48 hours",
              "Bespoke storefront design & build",
              "Dedicated launch concierge",
              "Post-launch growth support",
            ].map((f) => (
              <li key={f} className="flex gap-3"><Check className="size-4 mt-0.5 text-success" /> {f}</li>
            ))}
          </ul>

          <div className="mt-12 rounded-2xl bg-surface p-6">
            <p className="font-display text-2xl">"They felt like an in-house team from day one."</p>
            <p className="text-sm text-muted-foreground mt-3">Maya Pranata · Founder, Atlas Studio</p>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-elegant"
        >
          {sent ? (
            <div className="py-20 text-center">
              <div className="mx-auto size-12 rounded-full bg-success/15 text-success flex items-center justify-center">
                <Check className="size-6" />
              </div>
              <p className="mt-5 font-display text-3xl">Thank you.</p>
              <p className="mt-2 text-sm text-muted-foreground">We'll reach out within one business day.</p>
            </div>
          ) : (
            <>
              <p className="font-display text-3xl">Start a conversation</p>
              <p className="text-sm text-muted-foreground mt-2">No commitment. We'll listen first.</p>
              <div className="mt-8 grid gap-4">
                {[
                  { l: "Full name", t: "text", ph: "Dewa Pratama" },
                  { l: "Work email", t: "email", ph: "dewa@brand.com" },
                  { l: "Company", t: "text", ph: "Halcyon Goods" },
                ].map((f) => (
                  <label key={f.l} className="block">
                    <span className="text-xs text-muted-foreground">{f.l}</span>
                    <input required type={f.t} placeholder={f.ph} className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/30" />
                  </label>
                ))}
                <label className="block">
                  <span className="text-xs text-muted-foreground">Project goal</span>
                  <select className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm">
                    <option>Launch a new brand</option>
                    <option>Replatform existing store</option>
                    <option>Add AI / automation</option>
                    <option>Just exploring</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-xs text-muted-foreground">Tell us more</span>
                  <textarea rows={4} placeholder="A few words about your vision…" className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/30" />
                </label>
              </div>
              <button type="submit" className="mt-8 w-full rounded-full bg-primary text-primary-foreground py-3.5 text-sm font-medium hover:opacity-90 transition">
                Send inquiry
              </button>
            </>
          )}
        </form>
      </section>
    </div>
  );
}
