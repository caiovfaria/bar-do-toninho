import { useEffect, useState } from "react";

const NAV_LINKS = ["Início", "Sobre", "Cardápio", "Programação", "Galeria", "Contato"];

const PETISCOS = [
  { name: "Bolinho de Bacalhau", desc: "Receita da dona Zefa, frita na hora", price: "R$ 22", tag: "Mais Pedido" },
  { name: "Croquete de Carne", desc: "Carne moída temperada, massa crocante", price: "R$ 18", tag: null },
  { name: "Calabresa Acebolada", desc: "Na frigideira com cebola e pimentão", price: "R$ 28", tag: "Clássico" },
  { name: "Dadinhos de Tapioca", desc: "Com geleia de pimenta artesanal", price: "R$ 24", tag: null },
  { name: "Porção de Batata Frita", desc: "Com alho, salsa e parmesão ralado", price: "R$ 26", tag: null },
  { name: "Ovo de Codorna Frito", desc: "12 unidades com molho de mostarda", price: "R$ 16", tag: "Pra Compartilhar" },
];

const BEBIDAS = [
  { name: "Chope Gelado", desc: "Brahma, 300ml — tirado na pressão certa", price: "R$ 8" },
  { name: "Long Neck", desc: "Skol, Stella ou Heineken", price: "R$ 10" },
  { name: "Caipirinha", desc: "Cachaça Ypióca, limão taiti, na pedra", price: "R$ 16" },
  { name: "Água de Coco", desc: "Natural, 500ml, bem gelada", price: "R$ 9" },
  { name: "Refrigerante Lata", desc: "Coca, Guaraná, Sprite ou Fanta", price: "R$ 6" },
  { name: "Dose de Cachaça", desc: "Boa safra ou Salinas, com gelo", price: "R$ 12" },
];

const EVENTOS = [
  {
    day: "06",
    month: "SET",
    weekday: "Sábado",
    artist: "Grupo Pagode da Esquina",
    desc: "Pagode raiz com os brothers de sempre. A festa começa às 20h.",
    time: "20h00",
    free: true,
  },
  {
    day: "13",
    month: "SET",
    weekday: "Sábado",
    artist: "Roda de Samba Aberta",
    desc: "Traga seu instrumento e venha sambar. Participação de todos.",
    time: "19h30",
    free: true,
  },
  {
    day: "20",
    month: "SET",
    weekday: "Sábado",
    artist: "Zé Malandragem & Os Bambas",
    desc: "Samba de raiz, chorinho e muito suingue. Uma noite inesquecível.",
    time: "21h00",
    free: false,
  },
  {
    day: "27",
    month: "SET",
    weekday: "Sábado",
    artist: "Tarde de Pagode & Chope",
    desc: "Começa às 17h e vai até a madrugada. Happy hour especial.",
    time: "17h00",
    free: true,
  },
];

const GALLERY = [
  {
    url: "https://images.unsplash.com/photo-1712949243958-59f675ac5a1c?w=600&h=500&fit=crop&auto=format",
    alt: "Balcão do bar com garrafas e copos",
    wide: true,
  },
  {
    url: "https://images.unsplash.com/photo-1618183479302-1e0aa382c36b?w=400&h=500&fit=crop&auto=format",
    alt: "Copo de chope bem gelado",
    wide: false,
  },
  {
    url: "https://images.unsplash.com/photo-1632054553195-bfd7034fee25?w=400&h=340&fit=crop&auto=format",
    alt: "Show ao vivo no boteco",
    wide: false,
  },
  {
    url: "https://images.unsplash.com/photo-1696382194243-c088eb9b4ee4?w=600&h=340&fit=crop&auto=format",
    alt: "Garrafinhas de cerveja na mesa",
    wide: true,
  },
  {
    url: "https://images.unsplash.com/photo-1776884245646-7a2f66072e20?w=400&h=340&fit=crop&auto=format",
    alt: "Letreiro neon do bar",
    wide: false,
  },
];

const MARQUEE_ITEMS = [
  "⬥ CHOPE GELADO",
  "⬥ SÁBADO TEM PAGODE",
  "⬥ PETISCOS CASEIROS",
  "⬥ DESDE 1987",
  "⬥ ESQUINA DA ALEGRIA",
  "⬥ CHOPE GELADO",
  "⬥ SÁBADO TEM PAGODE",
  "⬥ PETISCOS CASEIROS",
  "⬥ DESDE 1987",
  "⬥ ESQUINA DA ALEGRIA",
];

export default function App() {
  const [menuTab, setMenuTab] = useState<"petiscos" | "bebidas">("petiscos");
  const [navOpen, setNavOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setNavOpen(false);
  };

  useEffect(() => {
    if (!navOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setNavOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [navOpen]);

  const sectionIds: Record<string, string> = {
    "Início": "hero",
    "Sobre": "sobre",
    "Cardápio": "cardapio",
    "Programação": "programacao",
    "Galeria": "galeria",
    "Contato": "contato",
  };

  return (
    <div className="min-h-full" style={{ background: "#170f06" }}>

      {/* ── NAV ── */}
      <nav
        aria-label="Navegação principal"
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{
          background: "linear-gradient(to bottom, rgba(23,15,6,0.97) 0%, rgba(23,15,6,0) 100%)",
        }}
      >
        <button
          onClick={() => scrollTo("hero")}
          className="font-display text-2xl tracking-wide neon-amber-soft"
          style={{ color: "#f0b02a", letterSpacing: "0.04em" }}
        >
          Bar do Toninho
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(sectionIds[link])}
                className="font-mono-bar text-xs uppercase tracking-widest transition-colors duration-200"
                style={{ color: "#a08060" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#f0b02a")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#a08060")}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setNavOpen(!navOpen)}
          aria-label={navOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={navOpen}
          aria-controls="menu-mobile"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-6 h-0.5 transition-all"
              style={{ background: "#f0b02a" }}
            />
          ))}
        </button>

        {/* Mobile menu */}
        {navOpen && (
          <div
            id="menu-mobile"
            className="absolute top-full left-0 right-0 py-6 flex flex-col items-center gap-5"
            style={{ background: "rgba(23,15,6,0.98)" }}
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(sectionIds[link])}
                className="font-mono-bar text-sm uppercase tracking-widest"
                style={{ color: "#f0e0c0" }}
              >
                {link}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            background: `url('https://images.unsplash.com/photo-1569174088347-f17be94fb57e?w=1600&h=900&fit=crop&auto=format') center/cover no-repeat`,
          }}
        />
        {/* Overlay gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(23,15,6,0.75) 0%, rgba(23,15,6,0.5) 40%, rgba(23,15,6,0.9) 100%)",
          }}
        />

        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
          <p
            className="font-mono-bar text-xs uppercase tracking-[0.4em] mb-6"
            style={{ color: "#f0b02a" }}
          >
            Desde 1987 · Rua das Palmeiras, 114
          </p>
          <h1
            className="font-display text-6xl md:text-8xl lg:text-9xl leading-none mb-6 neon-amber"
            style={{ color: "#f0b02a" }}
          >
            Bar do<br />Toninho
          </h1>
          <p
            className="text-lg md:text-xl font-light max-w-md leading-relaxed mb-10"
            style={{ color: "#d4b890" }}
          >
            O boteco da esquina onde o chope é gelado, o petisco é caseiro e o
            pagode nunca para.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo("cardapio")}
              className="font-mono-bar text-xs uppercase tracking-widest px-8 py-3.5 transition-all duration-200"
              style={{
                background: "#c97d10",
                color: "#0f0a02",
                border: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#f0b02a";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#c97d10";
              }}
            >
              Ver Cardápio
            </button>
            <button
              onClick={() => scrollTo("programacao")}
              className="font-mono-bar text-xs uppercase tracking-widest px-8 py-3.5 transition-all duration-200"
              style={{
                background: "transparent",
                color: "#f0b02a",
                border: "1px solid rgba(201, 125, 16, 0.6)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#f0b02a";
                e.currentTarget.style.color = "#f0e0c0";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(201, 125, 16, 0.6)";
                e.currentTarget.style.color = "#f0b02a";
              }}
            >
              Programação
            </button>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="font-mono-bar text-xs tracking-widest" style={{ color: "#a08060" }}>
            SCROLL
          </span>
          <div
            className="w-px h-10"
            style={{ background: "linear-gradient(to bottom, #c97d10, transparent)" }}
          />
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div
        className="overflow-hidden py-3 border-y"
        style={{
          background: "#c97d10",
          borderColor: "#a06008",
        }}
      >
        <div className="flex whitespace-nowrap marquee-track">
          {MARQUEE_ITEMS.map((item, i) => (
            <span
              key={i}
              className="font-display text-sm px-6 shrink-0"
              style={{ color: "#0f0a02" }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── SOBRE ── */}
      <section id="sobre" className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p
              className="font-mono-bar text-xs uppercase tracking-[0.35em] mb-4"
              style={{ color: "#c97d10" }}
            >
              Nossa história
            </p>
            <h2
              className="font-display text-4xl md:text-5xl mb-6 leading-tight"
              style={{ color: "#f0e0c0" }}
            >
              Um lugar que a esquina nunca esquece
            </h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "#a08060" }}>
              <p>
                O Bar do Toninho abriu as portas em 1987, quando seu Antônio Ferreira — o
                Toninho — trouxe uma geladeira velha e três tamboretes para a esquina da Rua das
                Palmeiras com a Travessa da Saudade.
              </p>
              <p>
                Trinta e sete anos depois, os tamboretes viraram mesas, o bar cresceu três
                vezes, mas a fórmula continua a mesma: chope tirado com cuidado, petisco feito na
                hora e a porta sempre aberta pra quem chega.
              </p>
              <p>
                Hoje quem toca o bar é a filha Cláudia e o genro Roberto, mas o Toninho ainda
                aparece nas sextas-feiras pra jogar dominó com os compadres.
              </p>
            </div>
            <div
              className="mt-8 grid grid-cols-3 gap-px"
              style={{ border: "1px solid rgba(201,125,16,0.2)" }}
            >
              {[
                { num: "37", label: "Anos de história" },
                { num: "8", label: "Mesas & banquetas" },
                { num: "∞", label: "Histórias contadas" },
              ].map(({ num, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center py-5 px-3"
                  style={{ background: "#1f1508" }}
                >
                  <span className="font-display text-3xl" style={{ color: "#f0b02a" }}>
                    {num}
                  </span>
                  <span
                    className="font-mono-bar text-xs uppercase tracking-wider mt-1 text-center"
                    style={{ color: "#7a5c3a" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image stack */}
          <div className="relative h-80 md:h-[480px]">
            <div
              className="absolute inset-0"
              style={{
                background: `url('https://images.unsplash.com/photo-1666110774499-f996a6fe76e3?w=700&h=500&fit=crop&auto=format') center/cover`,
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(23,15,6,0.3) 0%, rgba(23,15,6,0.1) 100%)",
              }}
            />
            {/* Corner accent */}
            <div
              className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2"
              style={{ borderColor: "#f0b02a" }}
            />
            <div
              className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2"
              style={{ borderColor: "#f0b02a" }}
            />
          </div>
        </div>
      </section>

      {/* ── CARDÁPIO ── */}
      <section id="cardapio" className="py-24 px-6" style={{ background: "#1f1508" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="font-mono-bar text-xs uppercase tracking-[0.35em] mb-4"
              style={{ color: "#c97d10" }}
            >
              O que tem hoje
            </p>
            <h2 className="font-display text-4xl md:text-5xl" style={{ color: "#f0e0c0" }}>
              Cardápio
            </h2>
          </div>

          {/* Tab switcher */}
          <div
            className="flex mb-10 border-b"
            style={{ borderColor: "rgba(201,125,16,0.2)" }}
            role="tablist"
            aria-label="Categorias do cardápio"
          >
            {(["petiscos", "bebidas"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setMenuTab(tab)}
                role="tab"
                id={`tab-${tab}`}
                aria-selected={menuTab === tab}
                aria-controls={`painel-${tab}`}
                className="font-mono-bar text-xs uppercase tracking-widest pb-4 px-6 transition-all duration-200"
                style={{
                  color: menuTab === tab ? "#f0b02a" : "#7a5c3a",
                  borderBottom: menuTab === tab ? "2px solid #f0b02a" : "2px solid transparent",
                  marginBottom: "-1px",
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Petiscos */}
          {menuTab === "petiscos" && (
            <div
              id="painel-petiscos"
              role="tabpanel"
              aria-labelledby="tab-petiscos"
              className="grid sm:grid-cols-2 gap-px"
              style={{ background: "rgba(201,125,16,0.1)" }}
            >
              {PETISCOS.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between items-start p-5 gap-4 card-hover"
                  style={{ background: "#1f1508" }}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-base font-semibold" style={{ color: "#f0e0c0" }}>
                        {item.name}
                      </span>
                      {item.tag && (
                        <span
                          className="font-mono-bar text-[10px] uppercase tracking-wider px-2 py-0.5"
                          style={{ background: "#c97d10", color: "#0f0a02" }}
                        >
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-sm" style={{ color: "#7a5c3a" }}>
                      {item.desc}
                    </p>
                  </div>
                  <span className="font-display text-lg shrink-0" style={{ color: "#f0b02a" }}>
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Bebidas */}
          {menuTab === "bebidas" && (
            <div
              id="painel-bebidas"
              role="tabpanel"
              aria-labelledby="tab-bebidas"
              className="grid sm:grid-cols-2 gap-px"
              style={{ background: "rgba(201,125,16,0.1)" }}
            >
              {BEBIDAS.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between items-start p-5 gap-4 card-hover"
                  style={{ background: "#1f1508" }}
                >
                  <div className="flex-1">
                    <p className="text-base font-semibold mb-1" style={{ color: "#f0e0c0" }}>
                      {item.name}
                    </p>
                    <p className="text-sm" style={{ color: "#7a5c3a" }}>
                      {item.desc}
                    </p>
                  </div>
                  <span className="font-display text-lg shrink-0" style={{ color: "#f0b02a" }}>
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          )}

          <p
            className="font-mono-bar text-xs mt-6 text-center uppercase tracking-wider"
            style={{ color: "#7a5c3a" }}
          >
            * Preços em reais. Sujeitos a alteração sem aviso prévio.
          </p>
        </div>
      </section>

      {/* ── PROGRAMAÇÃO ── */}
      <section id="programacao" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <p
              className="font-mono-bar text-xs uppercase tracking-[0.35em] mb-4"
              style={{ color: "#c97d10" }}
            >
              Setembro 2026
            </p>
            <h2 className="font-display text-4xl md:text-5xl" style={{ color: "#f0e0c0" }}>
              Programação
            </h2>
          </div>

          <div className="space-y-px" style={{ border: "1px solid rgba(201,125,16,0.15)" }}>
            {EVENTOS.map((ev, i) => (
              <div
                key={i}
                className="grid grid-cols-[80px_1fr_auto] gap-6 p-6 items-start transition-colors duration-200 group"
                style={{ background: "#170f06" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#1f1508")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#170f06")
                }
              >
                {/* Date block */}
                <div className="flex flex-col items-center pt-1">
                  <span className="font-display text-3xl leading-none" style={{ color: "#f0b02a" }}>
                    {ev.day}
                  </span>
                  <span
                    className="font-mono-bar text-xs uppercase tracking-widest mt-0.5"
                    style={{ color: "#c97d10" }}
                  >
                    {ev.month}
                  </span>
                  <span
                    className="font-mono-bar text-[10px] uppercase tracking-wider mt-1"
                    style={{ color: "#7a5c3a" }}
                  >
                    {ev.weekday}
                  </span>
                </div>

                {/* Info */}
                <div>
                  <h3 className="text-lg font-semibold mb-1" style={{ color: "#f0e0c0" }}>
                    {ev.artist}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#7a5c3a" }}>
                    {ev.desc}
                  </p>
                </div>

                {/* Time + entry */}
                <div className="flex flex-col items-end gap-2 shrink-0 pt-1">
                  <span className="font-mono-bar text-sm" style={{ color: "#a08060" }}>
                    {ev.time}
                  </span>
                  <span
                    className="font-mono-bar text-[10px] uppercase tracking-wider px-2.5 py-1"
                    style={{
                      background: ev.free ? "rgba(201,125,16,0.15)" : "rgba(107,35,24,0.3)",
                      color: ev.free ? "#c97d10" : "#d46050",
                      border: `1px solid ${ev.free ? "rgba(201,125,16,0.3)" : "rgba(212,96,80,0.3)"}`,
                    }}
                  >
                    {ev.free ? "Entrada livre" : "Couvert R$15"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALERIA ── */}
      <section id="galeria" className="py-24 px-6" style={{ background: "#1f1508" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="font-mono-bar text-xs uppercase tracking-[0.35em] mb-4"
              style={{ color: "#c97d10" }}
            >
              A vida aqui dentro
            </p>
            <h2 className="font-display text-4xl md:text-5xl" style={{ color: "#f0e0c0" }}>
              Galeria
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {GALLERY.map((img, i) => (
              <div
                key={i}
                className={`overflow-hidden relative ${img.wide && i === 0 ? "md:col-span-2" : ""} ${img.wide && i === 3 ? "col-span-2" : ""}`}
                style={{ background: "#2b1d0a", aspectRatio: img.wide ? "16/9" : "4/5" }}
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  style={{ display: "block" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.04)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTATO ── */}
      <section
        id="contato"
        className="py-24 px-6"
        style={{
          background:
            "linear-gradient(to bottom, #170f06 0%, #0d0802 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p
              className="font-mono-bar text-xs uppercase tracking-[0.35em] mb-4"
              style={{ color: "#c97d10" }}
            >
              Venha nos visitar
            </p>
            <h2 className="font-display text-4xl md:text-5xl mb-8" style={{ color: "#f0e0c0" }}>
              Como chegar
            </h2>
            <div className="space-y-6">
              {[
                {
                  label: "Endereço",
                  value: "Rua das Palmeiras, 114\nEsquina com Tv. da Saudade\nBairro Centro — São Paulo, SP",
                },
                {
                  label: "Telefone",
                  value: "(11) 3344-5566\n(11) 99123-4567 (WhatsApp)",
                },
                {
                  label: "Horário de funcionamento",
                  value: "Segunda a Quinta: 16h–00h\nSexta e Sábado: 14h–02h\nDomingo: 12h–22h",
                },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p
                    className="font-mono-bar text-xs uppercase tracking-wider mb-1.5"
                    style={{ color: "#c97d10" }}
                  >
                    {label}
                  </p>
                  <p
                    className="text-sm leading-relaxed whitespace-pre-line"
                    style={{ color: "#a08060" }}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Map placeholder */}
          <div
            className="relative overflow-hidden flex items-center justify-center"
            style={{
              background: "#1f1508",
              border: "1px solid rgba(201,125,16,0.2)",
              height: "360px",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1644330751329-f6b97794e341?w=600&h=400&fit=crop&auto=format"
              alt="Letreiro do bar à noite"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
              loading="lazy"
              decoding="async"
            />
            <div className="relative z-10 text-center px-6">
              <p className="font-display text-2xl mb-2 neon-amber-soft" style={{ color: "#f0b02a" }}>
                Bar do Toninho
              </p>
              <p
                className="font-mono-bar text-xs uppercase tracking-widest"
                style={{ color: "#a08060" }}
              >
                Rua das Palmeiras, 114 · São Paulo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="py-8 px-6 border-t text-center"
        style={{ borderColor: "rgba(201,125,16,0.12)" }}
      >
        <p className="font-display text-xl mb-1 neon-amber-soft" style={{ color: "#f0b02a" }}>
          Bar do Toninho
        </p>
        <p className="font-mono-bar text-xs uppercase tracking-widest" style={{ color: "#7a5c3a" }}>
          © 2026 · Desde 1987 · Rua das Palmeiras, 114
        </p>
      </footer>
    </div>
  );
}
