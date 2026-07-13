import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sun,
  X,
} from "lucide-react";

import aerialImg from "@/assets/aerial-array.jpg";
import handsImg from "@/assets/install-hands.jpg";
import heroImg from "@/assets/hero-solar.jpg";
import houseImg from "@/assets/house-solar.jpg";
import panelsImg from "@/assets/panels-closeup.jpg";

const services = [
  {
    n: "01",
    title: "Projeto Fotovoltaico",
    desc: "Desenvolvemos projetos personalizados, dimensionados para o seu consumo e perfil de telhado.",
  },
  {
    n: "02",
    title: "Instalacao de Paineis",
    desc: "Equipe certificada para instalacoes seguras, com equipamentos de alta performance e garantia.",
  },
  {
    n: "03",
    title: "Acompanhamento Pos-Venda",
    desc: "Monitoramento, manutencao e suporte continuo para o melhor rendimento do seu sistema.",
  },
];

const benefits = [
  {
    n: "01",
    title: "Solucoes Sustentaveis",
    desc: "Economia e responsabilidade ambiental para o seu negocio ou propriedade rural.",
  },
  {
    n: "02",
    title: "Energia Limpa",
    desc: "Geracao propria de energia limpa, renovavel e silenciosa para a sua rotina.",
  },
  {
    n: "03",
    title: "Ate 90% de Economia",
    desc: "Reduza drasticamente a conta de luz gerando a propria energia todos os meses.",
  },
];

const testimonials = [
  {
    name: "Michael Lorris",
    role: "Cliente - Vitoria",
    text: "Nao poderia estar mais feliz com o servico da LUCA SOLAR. Equipe profissional do inicio ao fim e qualidade impecavel dos paineis.",
  },
  {
    name: "Tabitha Stevens",
    role: "Cliente - Vila Velha",
    text: "Atencao meticulosa aos detalhes. A instalacao foi tranquila e os resultados superaram minhas expectativas.",
  },
  {
    name: "Rafael Costa",
    role: "Cliente - Serra",
    text: "Em poucos meses a economia na conta de luz ja era visivel. Recomendo de olhos fechados.",
  },
];

const faqs = [
  {
    q: "Como comecamos?",
    a: "Vamos dar o primeiro passo juntos em direcao a uma energia mais limpa e economica, comecando com um projeto sob medida para voce.",
  },
  {
    q: "Voces atendem todo o estado?",
    a: "Sim, atualmente a LUCA SOLAR atende todo o estado do Espirito Santo.",
  },
  {
    q: "Exigem pagamento antecipado?",
    a: "Oferecemos condicoes flexiveis e transparencia total, adaptando-nos as suas necessidades.",
  },
  {
    q: "Quais sao os termos de pagamento?",
    a: "Termos justos e claros, com tranquilidade para investir em energia solar.",
  },
];

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const emailAddress = "contato.lucasolar@gmail.com";

  useEffect(() => {
    document.documentElement.lang = "pt-BR";
    document.title = "LUCA SOLAR | Energia Solar no Espirito Santo";
  }, []);

  useEffect(() => {
    if (!copiedEmail) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => setCopiedEmail(false), 2000);
    return () => window.clearTimeout(timeoutId);
  }, [copiedEmail]);

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
        return;
      }

      copyTextFallback(emailAddress);
    };

    copy()
      .then(() => setCopiedEmail(true))
      .catch(() => {
        alert(
          `Nao foi possivel copiar o email automaticamente. Copie manualmente: ${emailAddress}`,
        );
      });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:font-medium focus:text-navy-deep"
      >
        Pular para o conteudo
      </a>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a
            href="#top"
            className="flex items-center gap-2 font-display font-bold text-navy-deep"
            aria-label="Ir para o topo da pagina"
          >
            <Sun className="size-6 text-accent" strokeWidth={2.5} />
            <span className="tracking-tight">
              LUCA<span className="text-accent">.</span>SOLAR
            </span>
          </a>

          <nav
            className="hidden items-center gap-8 text-sm font-medium md:flex"
            aria-label="Navegacao principal"
          >
            <a href="#sobre" className="transition hover:text-accent">
              Sobre
            </a>
            <a href="#servicos" className="transition hover:text-accent">
              Servicos
            </a>
            <a href="#depoimentos" className="transition hover:text-accent">
              Avaliacoes
            </a>
            <a href="#faq" className="transition hover:text-accent">
              FAQ
            </a>
          </nav>

          <a
            href="#contato"
            className="hidden rounded-full bg-navy-deep px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-navy md:inline-flex md:items-center md:gap-2"
          >
            Contato <ArrowUpRight className="size-4" />
          </a>

          <button
            type="button"
            className="md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {menuOpen && (
          <div
            id="mobile-menu"
            className="flex flex-col gap-3 border-t border-border bg-background px-6 py-4 text-sm md:hidden"
          >
            <a href="#sobre" onClick={() => setMenuOpen(false)}>
              Sobre
            </a>
            <a href="#servicos" onClick={() => setMenuOpen(false)}>
              Servicos
            </a>
            <a href="#depoimentos" onClick={() => setMenuOpen(false)}>
              Avaliacoes
            </a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>
              FAQ
            </a>
            <a
              href="#contato"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-navy-deep px-4 py-2 text-center text-primary-foreground"
            >
              Contato
            </a>
          </div>
        )}
      </header>

      <main id="conteudo">
        <section
          id="top"
          className="relative overflow-hidden pb-16 pt-24 md:pb-24 md:pt-32"
          style={{ background: "var(--gradient-navy-radial)" }}
        >
          <div
            className="absolute inset-0 opacity-20 mix-blend-overlay"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:items-center">
            <div className="text-primary-foreground lg:col-span-7">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs uppercase tracking-widest">
                <span className="size-1.5 rounded-full bg-accent animate-pulse" /> Espirito Santo -
                Brasil
              </span>
              <h1 className="font-display text-5xl font-bold leading-[0.95] md:text-7xl lg:text-8xl">
                Solucoes em
                <br />
                <span className="text-accent">Energia Solar</span>
              </h1>
              <p className="mt-8 max-w-xl text-lg text-white/70 md:text-xl">
                Projeto, instalacao e acompanhamento pos-venda em energia solar fotovoltaica para
                residencias, comercios e propriedades rurais.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 font-semibold text-navy-deep transition hover:scale-[1.02]"
                >
                  Solicitar orcamento <ArrowUpRight className="size-5" />
                </a>
                <a
                  href="#servicos"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 font-medium text-primary-foreground transition hover:bg-white/10"
                >
                  Nossos servicos
                </a>
              </div>
              <div className="mt-14 grid max-w-lg grid-cols-3 gap-6">
                {[
                  ["+500", "Instalacoes"],
                  ["90%", "Economia"],
                  ["10+", "Anos no ES"],
                ].map(([n, l]) => (
                  <div key={l}>
                    <div className="font-display text-3xl text-accent md:text-4xl">{n}</div>
                    <div className="mt-1 text-xs uppercase tracking-wider text-white/60">{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={heroImg}
                  alt="Instalacao de paineis solares ao por do sol"
                  className="h-full w-full object-cover"
                  width={1536}
                  height={1024}
                  fetchPriority="high"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 hidden aspect-square w-48 overflow-hidden rounded-2xl border-4 border-background shadow-elegant md:block">
                <img
                  src={handsImg}
                  alt="Instalacao tecnica"
                  loading="lazy"
                  className="h-full w-full object-cover"
                  width={400}
                  height={400}
                />
              </div>
              <div className="absolute -right-4 -top-4 hidden size-28 rotate-12 items-center justify-center rounded-full bg-accent text-center font-display text-sm font-bold leading-tight text-navy-deep md:flex">
                SAIBA
                <br />
                MAIS
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="py-24 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:items-center">
            <div className="grid grid-cols-2 gap-4 lg:col-span-6">
              <img
                src={panelsImg}
                alt="Paineis solares"
                loading="lazy"
                className="aspect-[3/4] w-full translate-y-8 rounded-2xl object-cover"
                width={600}
                height={800}
              />
              <img
                src={houseImg}
                alt="Casa com paineis solares"
                loading="lazy"
                className="aspect-[3/4] w-full rounded-2xl object-cover"
                width={600}
                height={800}
              />
            </div>
            <div className="lg:col-span-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Sobre nos
              </span>
              <h2 className="mt-4 font-display text-4xl font-bold text-navy-deep md:text-5xl lg:text-6xl">
                Solucoes personalizadas para residencias, comercio e industrias.
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                A LUCA SOLAR e referencia em energia solar no Espirito Santo. Trabalhamos com
                equipamentos de alta performance e uma equipe tecnica certificada para entregar
                projetos sob medida, do dimensionamento a operacao.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Equipamentos com garantia de fabrica",
                  "Equipe tecnica certificada",
                  "Atendimento em todo o Espirito Santo",
                ].map((text) => (
                  <li key={text} className="flex items-center gap-3 text-foreground">
                    <span className="grid size-6 place-items-center rounded-full bg-navy-deep text-primary-foreground">
                      <Check className="size-3.5" strokeWidth={3} />
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id="servicos"
          className="relative overflow-hidden bg-navy-deep py-24 text-primary-foreground md:py-32"
        >
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  O que fazemos
                </span>
                <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold md:text-6xl">
                  Tudo que voce precisa para gerar a propria energia.
                </h2>
              </div>
              <a
                href="#contato"
                className="hidden items-center gap-2 text-accent transition-all hover:gap-3 md:inline-flex"
              >
                Fale conosco <ArrowUpRight className="size-5" />
              </a>
            </div>
            <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.n}
                  className="group bg-navy-deep p-8 transition hover:bg-navy md:p-10"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-display text-5xl text-accent">{service.n}</span>
                    <ArrowUpRight className="size-6 opacity-40 transition-all group-hover:rotate-45 group-hover:opacity-100" />
                  </div>
                  <h3 className="mt-12 font-display text-2xl font-semibold">{service.title}</h3>
                  <p className="mt-4 text-white/65">{service.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Vamos trabalhar juntos
                </span>
                <h2 className="mt-4 font-display text-4xl font-bold text-navy-deep md:text-5xl">
                  Instalacao profissional, resultados duradouros.
                </h2>
                <p className="mt-6 text-muted-foreground">
                  Cada projeto e unico. Conheca os principais beneficios de adotar energia solar com
                  a LUCA SOLAR.
                </p>
              </div>
              <div className="lg:col-span-7">
                <img
                  src={aerialImg}
                  alt="Vista aerea de instalacao solar"
                  loading="lazy"
                  className="aspect-[16/10] w-full rounded-3xl object-cover shadow-elegant"
                  width={1280}
                  height={896}
                />
              </div>
            </div>
            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {benefits.map((benefit) => (
                <article
                  key={benefit.n}
                  className="rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-elegant"
                >
                  <span className="font-display text-sm font-bold text-accent">{benefit.n}</span>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-navy-deep">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground">{benefit.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="depoimentos" className="bg-secondary py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Avaliacoes
              </span>
              <h2 className="mt-4 font-display text-4xl font-bold text-navy-deep md:text-5xl">
                Historias reais de quem ja trocou pela LUCA SOLAR.
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <figure
                  key={testimonial.name}
                  className="rounded-2xl border border-border bg-background p-8"
                >
                  <div className="text-lg text-accent">★★★★★</div>
                  <blockquote className="mt-4 leading-relaxed text-foreground">
                    &quot;{testimonial.text}&quot;
                  </blockquote>
                  <figcaption className="mt-6 border-t border-border pt-6">
                    <div className="font-display font-semibold text-navy-deep">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-secondary py-24 md:py-32">
          <div className="mx-auto max-w-4xl px-6">
            <div className="mb-16 text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                FAQ
              </span>
              <h2 className="mt-4 font-display text-4xl font-bold text-navy-deep md:text-5xl">
                Perguntas frequentes
              </h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const panelId = `faq-panel-${index}`;
                const buttonId = `faq-button-${index}`;

                return (
                  <div
                    key={faq.q}
                    className="overflow-hidden rounded-2xl border border-border bg-background"
                  >
                    <button
                      id={buttonId}
                      type="button"
                      className="flex w-full items-center justify-between p-6 text-left"
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      aria-expanded={openFaq === index}
                      aria-controls={panelId}
                    >
                      <span className="font-display text-lg font-semibold text-navy-deep">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`size-5 transition-transform ${openFaq === index ? "rotate-180" : ""}`}
                      />
                    </button>
                    {openFaq === index && (
                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        className="px-6 pb-6 text-muted-foreground"
                      >
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="contato"
          className="relative overflow-hidden py-24 md:py-32"
          style={{ background: "var(--gradient-navy)" }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="relative mx-auto max-w-5xl px-6 text-center text-primary-foreground">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Vamos trabalhar juntos
            </span>
            <h2 className="mt-4 font-display text-5xl font-bold md:text-7xl">
              Pronto para gerar
              <br />
              sua <span className="text-accent">propria energia?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              Fale com a nossa equipe e receba um orcamento personalizado para a sua casa ou
              empresa.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/5527992253328"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-5 text-lg font-semibold text-navy-deep transition hover:scale-[1.02]"
                aria-label="Conversar pelo WhatsApp no numero 27 99225 3328"
              >
                <Phone className="size-5" /> (27) 99225-3328
              </a>
              <button
                type="button"
                onClick={copyEmailToClipboard}
                className="cursor-pointer rounded-full border border-white/25 px-8 py-5 text-left text-lg font-medium transition hover:bg-white/10"
                aria-label="Copiar email de contato"
              >
                <span className="inline-flex items-center gap-3">
                  <Mail className="size-5" />
                  <span>
                    <span className="block">{emailAddress}</span>
                    <span className="text-xs text-white/70">
                      {copiedEmail ? "Email copiado!" : "Clique para copiar"}
                    </span>
                  </span>
                </span>
              </button>
              <a
                href="https://instagram.com/lucasolar.es"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-white/25 px-8 py-5 text-lg font-medium transition hover:bg-white/10"
                aria-label="Abrir perfil do Instagram da Luca Solar"
              >
                <Instagram className="size-5" /> @lucasolar.es
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-navy-deep text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-3 md:items-center">
          <div className="flex items-center gap-2 font-display text-xl font-bold">
            <Sun className="size-6 text-accent" strokeWidth={2.5} />
            LUCA<span className="text-accent">.</span>SOLAR
          </div>
          <div className="text-sm text-white/60 md:text-center">
            © {new Date().getFullYear()} LUCA SOLAR. Energia limpa no Espirito Santo.
          </div>
          <div className="flex flex-wrap gap-4 md:justify-end">
            <a
              href="https://instagram.com/lucasolar.es"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid size-10 place-items-center rounded-full border border-white/15 transition hover:border-accent hover:bg-accent hover:text-navy-deep"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href="https://maps.google.com/?q=Espirito+Santo+Brasil"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir localizacao no mapa"
              className="grid size-10 place-items-center rounded-full border border-white/15 transition hover:border-accent hover:bg-accent hover:text-navy-deep"
            >
              <MapPin className="size-4" />
            </a>
          </div>
        </div>
      </footer>

      {copiedEmail && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-navy-deep shadow-xl">
          Email copiado para a area de transferencia!
        </div>
      )}
    </div>
  );
}
