import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Sun, Phone, Instagram, Mail, MapPin, ArrowUpRight, Check, ChevronDown, Menu, X } from "lucide-react";
import heroImg from "@/assets/hero-solar.jpg";
import panelsImg from "@/assets/panels-closeup.jpg";
import handsImg from "@/assets/install-hands.jpg";
import aerialImg from "@/assets/aerial-array.jpg";
import houseImg from "@/assets/house-solar.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LUCA SOLAR — Energia Solar no Espírito Santo" },
      { name: "description", content: "Projeto, instalação e acompanhamento de energia solar fotovoltaica em todo o Espírito Santo." },
    ],
  }),
  component: Index,
});

const services = [
  { n: "01", title: "Projeto Fotovoltaico", desc: "Desenvolvemos projetos personalizados, dimensionados para o seu consumo e perfil de telhado." },
  { n: "02", title: "Instalação de Painéis", desc: "Equipe certificada para instalações seguras, com equipamentos de alta performance e garantia." },
  { n: "03", title: "Acompanhamento Pós-Venda", desc: "Monitoramento, manutenção e suporte contínuo para o melhor rendimento do seu sistema." },
];

const benefits = [
  { n: "01", title: "Soluções Sustentáveis", desc: "Economia e responsabilidade ambiental para o seu negócio ou propriedade rural." },
  { n: "02", title: "Energia Limpa", desc: "Geração própria de energia limpa, renovável e silenciosa para a sua rotina." },
  { n: "03", title: "Até 90% de Economia", desc: "Reduza drasticamente a conta de luz gerando a própria energia todos os meses." },
];

const testimonials = [
  { name: "Michael Lorris", role: "Cliente — Vitória", text: "Não poderia estar mais feliz com o serviço da LUCA SOLAR. Equipe profissional do início ao fim e qualidade impecável dos painéis." },
  { name: "Tabitha Stevens", role: "Cliente — Vila Velha", text: "Atenção meticulosa aos detalhes. A instalação foi tranquila e os resultados superaram minhas expectativas." },
  { name: "Rafael Costa", role: "Cliente — Serra", text: "Em poucos meses a economia na conta de luz já era visível. Recomendo de olhos fechados." },
];

const faqs = [
  { q: "Como começamos?", a: "Vamos dar o primeiro passo juntos em direção a uma energia mais limpa e econômica, começando com um projeto sob medida para você." },
  { q: "Vocês atendem todo o estado?", a: "Sim, atualmente a LUCA SOLAR atende todo o estado do Espírito Santo." },
  { q: "Exigem pagamento antecipado?", a: "Oferecemos condições flexíveis e transparência total, adaptando-nos às suas necessidades." },
  { q: "Quais são os termos de pagamento?", a: "Termos justos e claros, com tranquilidade para investir em energia solar." },
];

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const emailAddress = "contato.lucasolar@gmail.com";

  const copyTextFallback = (text: string) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    const success = document.execCommand("copy");
    document.body.removeChild(textarea);

    if (!success) {
      throw new Error("Copy failed");
    }
  };

  const copyEmailToClipboard = () => {
    const copy = async () => {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(emailAddress);
      } else {
        copyTextFallback(emailAddress);
      }
    };

    copy()
      .then(() => {
        setCopiedEmail(true);
        window.setTimeout(() => setCopiedEmail(false), 2000);
      })
      .catch(() => {
        alert("Não foi possível copiar o email automaticamente. Copie manualmente: " + emailAddress);
      });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-display font-bold text-navy-deep">
            <Sun className="size-6 text-accent" strokeWidth={2.5} />
            <span className="tracking-tight">LUCA<span className="text-accent">.</span>SOLAR</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#sobre" className="hover:text-accent transition">Sobre</a>
            <a href="#servicos" className="hover:text-accent transition">Serviços</a>
            <a href="#depoimentos" className="hover:text-accent transition">Avaliações</a>
            <a href="#faq" className="hover:text-accent transition">FAQ</a>
          </nav>
          <a href="#contato" className="hidden md:inline-flex items-center gap-2 bg-navy-deep text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:bg-navy transition">
            Contato <ArrowUpRight className="size-4" />
          </a>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-3 text-sm">
            <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a>
            <a href="#servicos" onClick={() => setMenuOpen(false)}>Serviços</a>
            <a href="#depoimentos" onClick={() => setMenuOpen(false)}>Avaliações</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
            <a href="#contato" onClick={() => setMenuOpen(false)} className="bg-navy-deep text-primary-foreground px-4 py-2 rounded-full text-center mt-2">Contato</a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden" style={{ background: "var(--gradient-navy-radial)" }}>
        <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-primary-foreground">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 text-xs uppercase tracking-widest mb-6">
              <span className="size-1.5 rounded-full bg-accent animate-pulse" /> Espírito Santo · Brasil
            </span>
            <h1 className="font-display font-bold leading-[0.95] text-5xl md:text-7xl lg:text-8xl">
              Soluções em<br /><span className="text-accent">Energia Solar</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-white/70 max-w-xl">
              Projeto, instalação e acompanhamento pós-venda em energia solar fotovoltaica para residências, comércios e propriedades rurais.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contato" className="inline-flex items-center gap-2 bg-accent text-navy-deep px-7 py-4 rounded-full font-semibold hover:scale-[1.02] transition">
                Solicitar orçamento <ArrowUpRight className="size-5" />
              </a>
              <a href="#servicos" className="inline-flex items-center gap-2 border border-white/25 text-primary-foreground px-7 py-4 rounded-full font-medium hover:bg-white/10 transition">
                Nossos serviços
              </a>
            </div>
            <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
              {[["+500", "Instalações"], ["90%", "Economia"], ["10+", "Anos no ES"]].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-3xl md:text-4xl text-accent">{n}</div>
                  <div className="text-xs uppercase tracking-wider text-white/60 mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img src={heroImg} alt="Instalação de painéis solares ao pôr do sol" className="w-full h-full object-cover" width={1536} height={1024} />
            </div>
            <div className="hidden md:block absolute -bottom-8 -left-8 w-48 aspect-square rounded-2xl overflow-hidden border-4 border-background shadow-elegant">
              <img src={handsImg} alt="Instalação técnica" loading="lazy" className="w-full h-full object-cover" width={400} height={400} />
            </div>
            <div className="hidden md:flex absolute -top-4 -right-4 bg-accent text-navy-deep rounded-full size-28 items-center justify-center text-center font-display font-bold text-sm leading-tight rotate-12">
              SAIBA<br />MAIS
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <img src={panelsImg} alt="Painéis solares" loading="lazy" className="w-full aspect-[3/4] object-cover rounded-2xl translate-y-8" width={600} height={800} />
            <img src={houseImg} alt="Casa com painéis solares" loading="lazy" className="w-full aspect-[3/4] object-cover rounded-2xl" width={600} height={800} />
          </div>
          <div className="lg:col-span-6">
            <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Sobre nós</span>
            <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl lg:text-6xl text-navy-deep">
              Soluções personalizadas para residências, comércio e indústrias.
            </h2>
            <p className="mt-6 text-muted-foreground text-lg">
              A LUCA SOLAR é referência em energia solar no Espírito Santo. Trabalhamos com equipamentos de alta performance e uma equipe técnica certificada para entregar projetos sob medida — do dimensionamento à operação.
            </p>
            <ul className="mt-8 space-y-3">
              {["Equipamentos com garantia de fábrica", "Equipe técnica certificada", "Atendimento em todo o Espírito Santo"].map((t) => (
                <li key={t} className="flex items-center gap-3 text-foreground">
                  <span className="grid place-items-center size-6 rounded-full bg-navy-deep text-primary-foreground">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-24 md:py-32 bg-navy-deep text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">O que fazemos</span>
              <h2 className="mt-4 font-display font-bold text-4xl md:text-6xl max-w-2xl">Tudo que você precisa para gerar a própria energia.</h2>
            </div>
            <a href="#contato" className="hidden md:inline-flex items-center gap-2 text-accent hover:gap-3 transition-all">
              Fale conosco <ArrowUpRight className="size-5" />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
            {services.map((s) => (
              <div key={s.n} className="bg-navy-deep p-8 md:p-10 group hover:bg-navy transition">
                <div className="flex items-start justify-between">
                  <span className="font-display text-5xl text-accent">{s.n}</span>
                  <ArrowUpRight className="size-6 opacity-40 group-hover:opacity-100 group-hover:rotate-45 transition-all" />
                </div>
                <h3 className="font-display font-semibold text-2xl mt-12">{s.title}</h3>
                <p className="mt-4 text-white/65">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS WITH AERIAL IMAGE */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Vamos trabalhar juntos</span>
              <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl text-navy-deep">
                Instalação profissional, resultados duradouros.
              </h2>
              <p className="mt-6 text-muted-foreground">
                Cada projeto é único. Conheça os principais benefícios de adotar energia solar com a LUCA SOLAR.
              </p>
            </div>
            <div className="lg:col-span-7">
              <img src={aerialImg} alt="Vista aérea de instalação solar" loading="lazy" className="w-full aspect-[16/10] object-cover rounded-3xl shadow-elegant" width={1280} height={896} />
            </div>
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.n} className="p-8 rounded-2xl border border-border bg-card hover:shadow-elegant hover:-translate-y-1 transition-all">
                <span className="font-display text-sm text-accent font-bold">{b.n}</span>
                <h3 className="mt-3 font-display font-semibold text-2xl text-navy-deep">{b.title}</h3>
                <p className="mt-3 text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="py-24 md:py-32 bg-secondary">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Avaliações</span>
            <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl text-navy-deep">
              Histórias reais de quem já trocou pela LUCA SOLAR.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure key={t.name} className="bg-background p-8 rounded-2xl border border-border">
                <div className="flex gap-1 text-accent text-lg">★★★★★</div>
                <blockquote className="mt-4 text-foreground leading-relaxed">"{t.text}"</blockquote>
                <figcaption className="mt-6 pt-6 border-t border-border">
                  <div className="font-display font-semibold text-navy-deep">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 md:py-32 bg-secondary">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">FAQ</span>
            <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl text-navy-deep">Perguntas frequentes</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="bg-background rounded-2xl border border-border overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-display font-semibold text-lg text-navy-deep">{f.q}</span>
                  <ChevronDown className={`size-5 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-muted-foreground">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / CONTATO */}
      <section id="contato" className="py-24 md:py-32 relative overflow-hidden" style={{ background: "var(--gradient-navy)" }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="relative mx-auto max-w-5xl px-6 text-center text-primary-foreground">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Vamos trabalhar juntos</span>
          <h2 className="mt-4 font-display font-bold text-5xl md:text-7xl">
            Pronto para gerar<br />sua <span className="text-accent">própria energia?</span>
          </h2>
          <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
            Fale com a nossa equipe e receba um orçamento personalizado para a sua casa ou empresa.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/5527992253328" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-accent text-navy-deep px-8 py-5 rounded-full font-semibold text-lg hover:scale-[1.02] transition">
              <Phone className="size-5" /> (27) 99225-3328
            </a>
            <button
              type="button"
              onClick={copyEmailToClipboard}
              className="inline-flex items-center gap-3 border border-white/25 px-8 py-5 rounded-full font-medium text-lg text-left hover:bg-white/10 transition cursor-pointer"
              aria-label="Copiar email de contato"
            >
              <Mail className="size-5" />
              <div>
                <div>{emailAddress}</div>
                <div className="text-xs text-white/70">{copiedEmail ? "Email copiado!" : "Clique para copiar"}</div>
              </div>
            </button>
            <a href="https://instagram.com/lucasolar.es" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 border border-white/25 px-8 py-5 rounded-full font-medium text-lg hover:bg-white/10 transition">
              <Instagram className="size-5" /> @lucasolar.es
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy-deep text-primary-foreground border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center gap-2 font-display font-bold text-xl">
            <Sun className="size-6 text-accent" strokeWidth={2.5} />
            LUCA<span className="text-accent">.</span>SOLAR
          </div>
          <div className="text-sm text-white/60 md:text-center">
            © {new Date().getFullYear()} LUCA SOLAR. Energia limpa no Espírito Santo.
          </div>
          <div className="flex md:justify-end gap-4">
            <a href="https://instagram.com/lucasolar.es" target="_blank" rel="noreferrer" aria-label="Instagram" className="size-10 grid place-items-center rounded-full border border-white/15 hover:bg-accent hover:text-navy-deep hover:border-accent transition">
              <Instagram className="size-4" />
            </a>
          </div>
        </div>
      </footer>
      {copiedEmail && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-navy-deep shadow-xl">
          Email copiado para a área de transferência!
        </div>
      )}
    </div>
  );
}
