import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Burgut Marketplace — o'z do'koningizni yarating" },
      { name: "description", content: "Burgut marketpleysida har kim bir necha daqiqada o'z onlayn do'konini ochadi." },
      { property: "og:title", content: "Burgut Marketplace" },
      { property: "og:description", content: "Har kim o'z do'konini yaratadigan marketpleys." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stores = [
  { name: "Samarqand Ipak", cat: "Kiyim-kechak", emoji: "🧣", items: 124 },
  { name: "Toshkent Tech", cat: "Elektronika", emoji: "📱", items: 312 },
  { name: "Buxoro Ziravor", cat: "Oziq-ovqat", emoji: "🌶️", items: 86 },
  { name: "Farg'ona Kulol", cat: "Hunarmandchilik", emoji: "🏺", items: 47 },
];

function Index() {
  const [name, setName] = useState("");
  const [cat, setCat] = useState("Kiyim-kechak");
  const [created, setCreated] = useState<string | null>(null);

  return (
    <div className="bg-brand min-h-screen text-on-brand">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <img src={logo} alt="Burgut" className="h-12 w-auto" />
        <nav className="hidden gap-8 text-sm text-on-brand-muted md:flex">
          <a href="#dokonlar">Do'konlar</a><a href="#yaratish">Do'kon ochish</a><a href="#qanday">Qanday ishlaydi</a>
        </nav>
        <a href="#yaratish" className="btn-gold rounded-xl px-5 py-2.5 text-sm font-bold">Do'kon yaratish</a>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          <p className="mb-4 inline-block rounded-full border border-current/20 px-4 py-1 text-xs tracking-widest text-on-brand-muted">O'ZBEKISTON MARKETPLEYSI</p>
          <h1 className="text-5xl font-black leading-tight md:text-6xl">
            O'z do'koningizni <span className="text-gold">bir daqiqada</span> oching
          </h1>
          <p className="mt-6 text-lg text-on-brand-muted">Burgut — har bir kirgan odam o'z do'konini yaratib, mahsulotlarini butun mamlakatga sotadigan joy.</p>
          <div className="mt-8 flex gap-4">
            <a href="#yaratish" className="btn-gold rounded-2xl px-7 py-4 font-bold">Bepul boshlash</a>
            <a href="#dokonlar" className="rounded-2xl border border-current/30 px-7 py-4 font-semibold">Do'konlarni ko'rish</a>
          </div>
          <div className="mt-10 flex gap-10">
            {[["12 000+", "do'kon"], ["480 000+", "mahsulot"], ["1.2 mln", "xaridor"]].map(([a, b]) => (
              <div key={b}><div className="text-gold text-2xl font-black">{a}</div><div className="text-sm text-on-brand-muted">{b}</div></div>
            ))}
          </div>
        </div>
        <img src={logo} alt="" className="floaty mx-auto w-full max-w-md" />
      </section>

      <section id="qanday" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="mb-8 text-center text-3xl font-black">Qanday <span className="text-gold">ishlaydi</span></h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[["🦅", "Ro'yxatdan o'ting", "Telefon raqamingiz bilan kiring."], ["🏪", "Do'kon yarating", "Nom, logotip va turkumni tanlang."], ["💰", "Soting", "Mahsulot qo'shing va buyurtma qabul qiling."]].map(([e, t, d], i) => (
            <div key={t} className="card-3d rounded-3xl p-7">
              <div className="text-4xl">{e}</div>
              <div className="text-gold mt-4 text-sm font-bold">{i + 1}-qadam</div>
              <h3 className="mt-1 text-xl font-bold">{t}</h3>
              <p className="mt-2 text-on-brand-muted">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="yaratish" className="mx-auto max-w-6xl px-6 py-12">
        <div className="card-3d grid gap-8 rounded-[2rem] p-8 md:grid-cols-2 md:p-12">
          <div>
            <h2 className="text-3xl font-black">Do'koningizni <span className="text-gold">yarating</span></h2>
            <form className="mt-6 space-y-4" onSubmit={(e) => { e.preventDefault(); if (name.trim()) setCreated(name.trim()); }}>
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Do'kon nomi" className="w-full rounded-xl border border-current/20 bg-transparent px-4 py-3 outline-none" />
              <select value={cat} onChange={(e) => setCat(e.target.value)} className="w-full rounded-xl border border-current/20 bg-transparent px-4 py-3">
                {["Kiyim-kechak", "Elektronika", "Oziq-ovqat", "Hunarmandchilik", "Uy-ro'zg'or"].map((c) => <option key={c} className="text-foreground">{c}</option>)}
              </select>
              <button className="btn-gold w-full rounded-xl py-3.5 font-bold">Do'konni ochish</button>
            </form>
            {created && <p className="text-gold mt-4 font-bold">🎉 "{created}" do'koni ochildi!</p>}
          </div>
          <div className="rounded-3xl border border-current/20 p-6">
            <div className="text-xs text-on-brand-muted">Oldindan ko'rish</div>
            <div className="mt-4 flex items-center gap-4">
              <div className="btn-gold flex h-16 w-16 items-center justify-center rounded-2xl text-2xl font-black">{(name || "B")[0]?.toUpperCase()}</div>
              <div><div className="text-xl font-bold">{name || "Sizning do'koningiz"}</div><div className="text-sm text-on-brand-muted">{cat} · burgut.uz/{(name || "dokon").toLowerCase().replace(/\s+/g, "-")}</div></div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[1, 2, 3].map((i) => <div key={i} className="aspect-square rounded-xl border border-current/10 bg-current/5" />)}
            </div>
          </div>
        </div>
      </section>

      <section id="dokonlar" className="mx-auto max-w-6xl px-6 py-12 pb-24">
        <h2 className="mb-8 text-3xl font-black">Mashhur <span className="text-gold">do'konlar</span></h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stores.map((s) => (
            <div key={s.name} className="card-3d rounded-3xl p-6">
              <div className="text-5xl">{s.emoji}</div>
              <h3 className="mt-4 text-lg font-bold">{s.name}</h3>
              <p className="text-sm text-on-brand-muted">{s.cat}</p>
              <p className="text-gold mt-3 text-sm font-bold">{s.items} ta mahsulot</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
