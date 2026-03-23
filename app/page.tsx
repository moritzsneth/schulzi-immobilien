"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Compass,
  DraftingCompass,
  MapPinned,
  PhoneCall,
  Sparkles,
} from "lucide-react";

export default function SchulziImmobilienLandingpage() {
  const navItems = [
    { label: "Haustypen", href: "#haustypen" },
    { label: "Leistungen", href: "#leistungen" },
    { label: "Über uns", href: "#ueber-uns" },
    { label: "Vorteile", href: "#vorteile" },
    { label: "Ablauf", href: "#ablauf" },
    { label: "Kontakt", href: "#kontakt" },
  ];

  const services = [
    {
      icon: DraftingCompass,
      title: "Bauplanung",
      text: "Individuelle Baupläne für Einfamilienhäuser – funktional, präzise und architektonisch durchdacht.",
    },
    {
      icon: Compass,
      title: "Beratung für Bauherren",
      text: "Von der ersten Idee bis zur konkreten Entscheidung: verständlich, persönlich und mit klarem Blick auf das Wesentliche.",
    },
    {
      icon: MapPinned,
      title: "Grundstücks- & Projektbewertung",
      text: "Fundierte Einschätzungen zu Grundstücken und Bauvorhaben – mit Blick auf Potenzial, Umsetzbarkeit und Qualität.",
    },
  ];

  const advantages = [
    {
      title: "Architektonisches Fachverständnis",
      text: "Nicht nur planen, sondern verstehen, was funktional, gestalterisch und praktisch wirklich trägt.",
    },
    {
      title: "Persönliche Betreuung",
      text: "Direkter Kontakt, klare Kommunikation und ein Ansprechpartner, der das Projekt im Detail kennt.",
    },
    {
      title: "Hoher Qualitätsanspruch",
      text: "Jedes Projekt wird mit Blick auf Langlebigkeit, Substanz und architektonische Klarheit entwickelt.",
    },
    {
      title: "Regional verankert",
      text: "Vertraut mit den Gegebenheiten in Schwerin, Mecklenburg-Vorpommern und Norddeutschland.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Anfrage",
      text: "Sie schildern Ihr Vorhaben, Ihre Idee oder Ihre Fragestellung.",
    },
    {
      number: "02",
      title: "Erstgespräch",
      text: "In einem persönlichen Gespräch werden Anforderungen, Möglichkeiten und erste Ansätze besprochen.",
    },
    {
      number: "03",
      title: "Planung",
      text: "Auf Basis Ihrer Ziele entsteht ein strukturiertes Konzept – klar, nachvollziehbar und individuell.",
    },
    {
      number: "04",
      title: "Begleitung",
      text: "Auch im weiteren Projektverlauf stehen wir mit Erfahrung, Übersicht und direkter Abstimmung zur Seite.",
    },
  ];

  const projectTypes = [
    {
      title: "Bungalow",
      subtitle: "Reduzierte Architektur mit klarer Struktur.",
      text: "Klare Linien, barrierearme Planung und komfortables Wohnen auf einer Ebene.",
      image: "/images/bungalow.webp",
    },
    {
      title: "Stadthaus",
      subtitle: "Zeitgemäße Architektur mit urbaner Ruhe.",
      text: "Großzügige Proportionen, klare Fassaden und eine moderne, souveräne Präsenz.",
      image: "/images/stadthaus.webp",
    },
    {
      title: "Satteldachhaus mit Kapitänsgiebel",
      subtitle: "Norddeutscher Charakter, präzise interpretiert.",
      text: "Klassische Formensprache mit hochwertiger Ausstrahlung und regionaler Identität.",
      image: "/images/satteldachhaus-kapitaensgiebel.webp",
    },
    {
      title: "Mehrfamilienhaus",
      subtitle: "Strukturierte Planung für mehrere Wohneinheiten.",
      text: "Durchdachte Grundrisse und moderne Architektur für anspruchsvolle Wohnkonzepte.",
      image: "/images/mehrfamilienhaus.webp",
    },
  ];

  const featuredProject = projectTypes[0];
  const secondaryProjects = projectTypes.slice(1);

  const sectionReveal = {
    initial: { opacity: 0, y: 34 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.18 },
    transition: { duration: 0.72 },
  };

  const cardReveal = (delay = 0) => ({
    initial: { opacity: 0, y: 26 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.18 },
    transition: { duration: 0.62, delay },
  });

  return (
    <div className="min-h-screen bg-[#f5f1eb] text-slate-900 selection:bg-slate-950 selection:text-white">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f5f1eb]/72 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="group">
            <div className="text-[11px] uppercase tracking-[0.30em] text-stone-500">
              Schwerin · Mecklenburg-Vorpommern
            </div>
            <div className="mt-1 text-xl font-semibold tracking-tight text-slate-950 transition group-hover:opacity-80">
              Schulzi-Immobilien
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-sm text-slate-700 transition hover:text-slate-950 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-slate-950 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#kontakt"
            className="inline-flex items-center justify-center rounded-2xl border border-slate-900/15 bg-white/85 px-5 py-2.5 text-sm font-medium text-slate-900 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-slate-900 hover:bg-slate-900 hover:text-white"
          >
            Erstgespräch anfragen
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden px-6 pb-20 pt-10 lg:px-8 lg:pb-32 lg:pt-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(120,113,108,0.22),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(15,23,42,0.10),transparent_24%),linear-gradient(to_bottom,rgba(255,255,255,0.35),transparent)]" />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/25 to-transparent" />

          <div className="mx-auto max-w-7xl">
            <div className="grid items-stretch gap-8 lg:grid-cols-[0.93fr_1.07fr]">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative flex flex-col justify-between rounded-[2.4rem] border border-white/60 bg-white/72 p-8 shadow-[0_24px_90px_rgba(15,23,42,0.08)] backdrop-blur xl:p-10"
              >
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.76),transparent_62%)]" />
                <div className="relative z-10">
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-stone-300/80 bg-stone-100/85 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-stone-600 shadow-sm">
                    <Sparkles className="h-3.5 w-3.5" />
                    Architektur · Planung · Immobilien
                  </div>

                  <h1 className="max-w-3xl text-5xl font-semibold leading-[0.92] tracking-[-0.055em] text-slate-950 md:text-6xl xl:text-7xl">
                    Architektur,
                    <br />
                    die Klarheit
                    <br />
                    schafft.
                  </h1>

                  <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
                    Planung und Begleitung für Bauherren, die strukturiert
                    entscheiden wollen – von der ersten Idee bis zur fundierten
                    Umsetzung.
                  </p>

                  <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <a
                      href="#kontakt"
                      className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-7 py-4 text-sm font-medium text-white shadow-lg shadow-slate-900/10 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                    >
                      Erstgespräch anfragen
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </a>
                    <a
                      href="#leistungen"
                      className="inline-flex items-center justify-center rounded-2xl border border-stone-300 bg-white px-7 py-4 text-sm font-medium text-slate-900 transition duration-300 hover:-translate-y-0.5 hover:border-slate-900"
                    >
                      Leistungen ansehen
                    </a>
                  </div>
                </div>

                <div className="relative z-10 mt-12 grid gap-3 border-t border-stone-200/80 pt-6 sm:grid-cols-3">
                  {[
                    "35+ Jahre Erfahrung",
                    "Persönliche Betreuung",
                    "Region Schwerin & Umgebung",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-stone-200/80 bg-white/72 px-4 py-3 text-sm text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.85 }}
                className="group relative min-h-[700px] overflow-hidden rounded-[2.4rem] border border-black/5 bg-[url('/images/schulzi-haus.webp')] bg-cover bg-center shadow-[0_26px_90px_rgba(15,23,42,0.14)]"
              >
                <div className="absolute inset-0 scale-100 bg-[url('/images/schulzi-haus.webp')] bg-cover bg-center transition duration-[1500ms] group-hover:scale-[1.045]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,23,42,0.80)_0%,rgba(15,23,42,0.28)_44%,rgba(15,23,42,0.06)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_24%)]" />

                <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-white/90 backdrop-blur md:left-8 md:top-8">
                  Moderne Architektur in Norddeutschland
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.82, delay: 0.18 }}
                  className="absolute inset-x-6 bottom-6 rounded-[1.9rem] border border-white/15 bg-slate-950/82 p-7 text-white shadow-2xl shadow-slate-900/20 backdrop-blur md:inset-x-8 md:bottom-8"
                >
                  <div className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
                    Schulzi-Immobilien
                  </div>
                  <div className="mt-3 max-w-md text-3xl font-semibold leading-tight tracking-tight">
                    Moderne Planung für Bauherren mit architektonischem Anspruch.
                  </div>

                  <div className="mt-6 grid gap-3 border-t border-white/10 pt-5 sm:grid-cols-2">
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                        Erfahrung
                      </div>
                      <div className="mt-1 text-sm text-slate-200">
                        35+ Jahre im Familienverbund
                      </div>
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                        Fokus
                      </div>
                      <div className="mt-1 text-sm text-slate-200">
                        Bauplanung, Beratung, Grundstücksbewertung
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="px-6 lg:px-8">
          <motion.div
            {...sectionReveal}
            className="mx-auto grid max-w-7xl gap-4 rounded-[2rem] border border-white/70 bg-white/65 p-5 shadow-[0_14px_42px_rgba(15,23,42,0.05)] backdrop-blur md:grid-cols-4"
          >
            {[
              "Kevin Schulz – Architekt mit 10 Jahren Erfahrung",
              "Zwei Generationen – 35+ Jahre gebündelte Projekterfahrung",
              "Enge Zusammenarbeit mit einem führenden Architekturbüro der Region",
              "Regional verankert in Schwerin und Norddeutschland",
            ].map((item, index) => (
              <motion.div
                key={item}
                {...cardReveal(index * 0.06)}
                className="rounded-2xl border border-stone-200/80 bg-white/72 px-4 py-4 text-sm leading-6 text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section id="haustypen" className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <motion.div {...sectionReveal} className="max-w-3xl">
            <div className="text-sm font-medium uppercase tracking-[0.22em] text-stone-500">
              Haustypen & Referenzen
            </div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Architektur, die zum norddeutschen Stil und zur Zielgruppe passt
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Von Bungalows bis zu Mehrfamilienhäusern: Schulzi-Immobilien plant
              und begleitet Projekte mit klarem architektonischem Anspruch,
              regionalem Verständnis und einem Blick für stimmige Lösungen.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 lg:grid-cols-12">
            <motion.div
              {...sectionReveal}
              className="group relative min-h-[620px] overflow-hidden rounded-[2.2rem] lg:col-span-7 lg:row-span-2"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-[1500ms] group-hover:scale-[1.045]"
                style={{ backgroundImage: `url(${featuredProject.image})` }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,23,42,0.80)_0%,rgba(15,23,42,0.18)_52%,rgba(15,23,42,0.02)_100%)]" />
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.10),transparent_28%)]" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white md:p-10">
                <div className="text-[11px] uppercase tracking-[0.24em] text-slate-300">
                  Featured Projekttyp
                </div>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                  {featuredProject.title}
                </h3>
                <p className="mt-3 max-w-xl text-lg text-slate-200">
                  {featuredProject.subtitle}
                </p>
                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">
                  {featuredProject.text}
                </p>
              </div>
            </motion.div>

            <div className="grid gap-6 lg:col-span-5 lg:grid-rows-3">
              {secondaryProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  {...cardReveal(index * 0.08)}
                  className="group relative min-h-[190px] overflow-hidden rounded-[1.9rem]"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-[1500ms] group-hover:scale-[1.045]"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,23,42,0.82)_0%,rgba(15,23,42,0.22)_55%,rgba(15,23,42,0.03)_100%)]" />
                  <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.10),transparent_32%)]" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-semibold tracking-tight">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-200">
                      {project.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="leistungen" className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <motion.div {...sectionReveal} className="max-w-3xl">
            <div className="text-sm font-medium uppercase tracking-[0.22em] text-stone-500">
              Leistungen
            </div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Planung, die Klarheit schafft
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Architektur, Beratung und fundierte Projektbewertung – präzise,
              verständlich und auf eine saubere Entscheidungsgrundlage
              ausgerichtet.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  {...cardReveal(index * 0.08)}
                  className="group rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_14px_40px_rgba(15,23,42,0.05)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_54px_rgba(15,23,42,0.08)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-stone-100 text-slate-900 transition duration-300 group-hover:bg-slate-950 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-6 text-xl font-semibold tracking-tight text-slate-950">
                    {service.title}
                  </div>
                  <p className="mt-4 text-base leading-8 text-slate-600">
                    {service.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="ueber-uns" className="relative overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_22%)]" />
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-28 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <motion.div {...sectionReveal}>
              <div className="text-sm font-medium uppercase tracking-[0.22em] text-slate-400">
                Über Schulzi-Immobilien
              </div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                Zwei Generationen Architekturverständnis.
              </h2>
            </motion.div>

            <motion.div
              {...sectionReveal}
              className="space-y-6 text-lg leading-8 text-slate-300"
            >
              <p>
                Hinter Schulzi-Immobilien stehen Kevin Schulz und sein Vater –
                zwei Architekten mit zusammen über 35 Jahren Erfahrung in der
                Planung und Begleitung von Bauprojekten.
              </p>
              <p>
                Was sie verbindet, ist ein gemeinsamer Anspruch: Projekte nicht
                nur umzusetzen, sondern von Anfang an strukturiert zu denken –
                funktional, architektonisch und wirtschaftlich.
              </p>
              <p>
                Durch die enge Zusammenarbeit mit einem führenden
                Architekturbüro der Region entstehen Lösungen, die weit über
                Standard hinausgehen – individuell geplant, klar strukturiert
                und mit hohem Qualitätsanspruch.
              </p>
            </motion.div>
          </div>
        </section>

        <section id="vorteile" className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <motion.div {...sectionReveal} className="max-w-3xl">
            <div className="text-sm font-medium uppercase tracking-[0.22em] text-stone-500">
              Warum Schulzi-Immobilien
            </div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Warum Bauherren auf Schulzi-Immobilien setzen
            </h2>
          </motion.div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                {...cardReveal(index * 0.07)}
                className="rounded-[2rem] border border-stone-200/70 bg-[#fbf8f3] p-8 shadow-[0_12px_36px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.06)]"
              >
                <div className="text-lg font-semibold tracking-tight text-slate-950">
                  {advantage.title}
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {advantage.text}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section
          id="ablauf"
          className="relative overflow-hidden border-y border-black/5 bg-white/70 backdrop-blur"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.35),transparent_24%,transparent_76%,rgba(255,255,255,0.2))]" />
          <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
            <motion.div {...sectionReveal} className="max-w-3xl">
              <div className="text-sm font-medium uppercase tracking-[0.22em] text-stone-500">
                Ablauf
              </div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                So läuft die Zusammenarbeit ab
              </h2>
            </motion.div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  {...cardReveal(index * 0.08)}
                  className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.06)]"
                >
                  <div className="text-4xl font-semibold tracking-[-0.06em] text-stone-300">
                    {step.number}
                  </div>
                  <div className="mt-5 text-xl font-semibold tracking-tight text-slate-950">
                    {step.title}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {step.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <motion.div
            {...sectionReveal}
            className="overflow-hidden rounded-[2.9rem] border border-white/60 bg-[linear-gradient(135deg,#0f172a_0%,#1f2937_44%,#8a7f73_100%)] px-8 py-16 text-white shadow-[0_28px_90px_rgba(15,23,42,0.16)] md:px-12 md:py-20"
          >
            <div className="max-w-4xl">
              <div className="text-sm font-medium uppercase tracking-[0.22em] text-slate-300">
                Statement
              </div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                Gute Architektur beginnt nicht auf dem Papier – sondern mit
                Klarheit.
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
                Wer ein Haus plant, trifft Entscheidungen fürs Leben. Umso
                wichtiger ist ein Partner, der nicht nur einzelne Schritte
                begleitet, sondern das Gesamtbild versteht. Schulzi-Immobilien
                steht für eine strukturierte, persönliche und fachlich fundierte
                Herangehensweise – von der ersten Idee bis zur konkreten
                Planung.
              </p>
            </div>
          </motion.div>
        </section>

        <section id="kontakt" className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
          <div className="grid gap-8 rounded-[2.6rem] border border-white/70 bg-white/82 p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur md:grid-cols-[1fr_0.9fr] md:p-12">
            <motion.div {...sectionReveal}>
              <div className="text-sm font-medium uppercase tracking-[0.22em] text-stone-500">
                Kontakt
              </div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                Lassen Sie uns über Ihr Bauvorhaben sprechen
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Ob erste Idee, konkretes Projekt oder Fragen zur Umsetzbarkeit –
                im persönlichen Austausch klären wir die nächsten sinnvollen
                Schritte.
              </p>

              <div className="mt-8 space-y-4 text-sm text-slate-700">
                <div className="inline-flex items-center gap-3 rounded-full bg-stone-100 px-4 py-2">
                  <PhoneCall className="h-4 w-4" />
                  Kontaktanfrage mit späterer Terminbuchung per Bot möglich
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full bg-stone-100 px-4 py-2">
                    Schwerin & Umgebung
                  </span>
                  <span className="rounded-full bg-stone-100 px-4 py-2">
                    Mecklenburg-Vorpommern
                  </span>
                  <span className="rounded-full bg-stone-100 px-4 py-2">
                    Norddeutschland
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              {...sectionReveal}
              className="rounded-[2rem] border border-stone-200 bg-[#faf7f2] p-6 md:p-8 shadow-sm"
            >
              <div className="text-lg font-semibold tracking-tight text-slate-950">
                Erstgespräch anfragen
              </div>
              <div className="mt-6 space-y-4">
                <input
                  className="w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 outline-none transition duration-300 focus:border-slate-900"
                  placeholder="Ihr Name"
                />
                <input
                  className="w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 outline-none transition duration-300 focus:border-slate-900"
                  placeholder="Ihre E-Mail"
                />
                <textarea
                  className="min-h-[140px] w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 outline-none transition duration-300 focus:border-slate-900"
                  placeholder="Worum geht es bei Ihrem Vorhaben?"
                />
                <button className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-4 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                  Anfrage senden
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-[#efe8de]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-sm text-slate-600 md:flex-row md:items-end md:justify-between lg:px-8">
          <div>
            <div className="text-base font-semibold text-slate-950">
              Schulzi-Immobilien
            </div>
            <div className="mt-2">Kevin Schulz · Schwerin & Umgebung</div>
            <div>Persönlich. Strukturiert. Fachlich fundiert.</div>
          </div>

          <div className="flex gap-6">
            <a href="#" className="transition hover:text-slate-950">
              Impressum
            </a>
            <a href="#" className="transition hover:text-slate-950">
              Datenschutz
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}