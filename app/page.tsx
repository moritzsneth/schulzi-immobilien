"use client";

import { motion } from "framer-motion";
import { ArrowRight, Compass, DraftingCompass, MapPinned, PhoneCall, Ruler, Sparkles } from "lucide-react";

export default function SchulziImmobilienLandingpage() {
  const navItems = [
    { label: "Leistungen", href: "#leistungen" },
    { label: "Haustypen", href: "#haustypen" },
    { label: "Über uns", href: "#ueber-uns" },
    { label: "Vorteile", href: "#vorteile" },
    { label: "Ablauf", href: "#ablauf" },
    { label: "Kontakt", href: "#kontakt" },
  ];

  const services = [
    {
      icon: DraftingCompass,
      title: "Bauplanung & Architektur",
      text: "Individuelle Baupläne für Einfamilienhäuser – durchdacht, funktional und architektonisch anspruchsvoll. Jedes Projekt wird auf die Bedürfnisse der Bauherren abgestimmt und strukturiert entwickelt.",
    },
    {
      icon: Compass,
      title: "Beratung für Bauherren",
      text: "Von der ersten Idee bis zur konkreten Planung: Schulzi-Immobilien unterstützt Bauherren dabei, fundierte Entscheidungen zu treffen – verständlich, transparent und praxisnah.",
    },
    {
      icon: MapPinned,
      title: "Grundstücks- & Projektbewertung",
      text: "Einschätzung von Grundstücken und Bauvorhaben aus architektonischer Perspektive – mit Blick auf Potenzial, Umsetzbarkeit und sinnvolle Nutzungsmöglichkeiten.",
    },
    {
      icon: Ruler,
      title: "Strukturierte Projektbegleitung",
      text: "Klare Abläufe, direkte Kommunikation und eine saubere Planung sorgen dafür, dass Projekte effizient und nachvollziehbar umgesetzt werden können.",
    },
  ];

  const advantages = [
    {
      title: "Architektonisches Fachverständnis",
      text: "Nicht nur planen, sondern verstehen, was wirklich funktioniert – gestalterisch, technisch und praktisch.",
    },
    {
      title: "Persönliche Betreuung",
      text: "Direkter Kontakt, klare Kommunikation und ein Ansprechpartner, der das Projekt wirklich kennt.",
    },
    {
      title: "Hoher Qualitätsanspruch",
      text: "Jedes Projekt wird mit einem klaren Blick für Architektur, Funktion und Langlebigkeit entwickelt.",
    },
    {
      title: "Regional verankert",
      text: "Vertraut mit den Gegebenheiten in Schwerin und Norddeutschland – nah am Markt, nah an den Bauherren.",
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
      text: "Auf Basis Ihrer Ziele wird ein strukturiertes Konzept entwickelt – klar, nachvollziehbar und individuell.",
    },
    {
      number: "04",
      title: "Begleitung",
      text: "Während des Projekts stehen wir Ihnen weiterhin zur Seite – mit Erfahrung, Übersicht und direkter Abstimmung.",
    },
  ];

  const projectTypes = [
    {
      title: "Bungalow",
      text: "Klare Linien, barrierearme Planung und komfortables Wohnen auf einer Ebene.",
      image: "/images/bungalow.webp",
    },
    {
      title: "Mehrfamilienhaus",
      text: "Durchdachte Grundrisse und moderne Architektur für mehrere Wohneinheiten.",
      image: "/images/mehrfamilienhaus.webp",
    },
    {
      title: "Satteldachhaus mit Kapitänsgiebel",
      text: "Norddeutscher Charakter mit klassischer Formensprache und hochwertiger Ausstrahlung.",
      image: "/images/satteldachhaus-kapitaensgiebel.webp",
    },
    {
      title: "Stadthaus",
      text: "Zeitgemäße Architektur mit urbaner Klarheit, Struktur und großzügigem Raumgefühl.",
      image: "/images/stadthaus.webp",
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.6},
  };

  return (
    <div className="min-h-screen bg-[#f5f1eb] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f5f1eb]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="group">
            <div className="text-[11px] uppercase tracking-[0.28em] text-stone-500">
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
                className="text-sm text-slate-700 transition hover:text-slate-950"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#kontakt"
            className="rounded-full border border-slate-900/15 bg-white/80 px-5 py-2.5 text-sm font-medium text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-900 hover:bg-slate-900 hover:text-white"
          >
            Erstgespräch anfragen
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden px-6 pb-16 pt-10 lg:px-8 lg:pb-24 lg:pt-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(120,113,108,0.24),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(15,23,42,0.12),transparent_22%),linear-gradient(to_bottom,rgba(255,255,255,0.4),transparent)]" />
          <div className="mx-auto max-w-7xl">
            <div className="grid items-stretch gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <motion.div
                {...fadeInUp}
                className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 p-8 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur xl:p-10"
              >
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.65),transparent_60%)]" />
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-stone-300/80 bg-stone-100/80 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-stone-600">
                      <Sparkles className="h-3.5 w-3.5" />
                      Architektur · Planung · Immobilien
                    </div>

                    <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight text-slate-950 md:text-6xl xl:text-7xl">
                      Architektur. Planung. Immobilien – mit klarem Blick fürs Ganze.
                    </h1>

                    <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
                      Schulzi-Immobilien begleitet Bauherren von der ersten Idee bis zur fundierten Planung – mit architektonischer Expertise, persönlicher Betreuung und einem hohen Anspruch an Qualität.
                    </p>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                      <a
                        href="#kontakt"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 text-sm font-medium text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5"
                      >
                        Erstgespräch anfragen
                        <ArrowRight className="h-4 w-4" />
                      </a>
                      <a
                        href="#leistungen"
                        className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-7 py-4 text-sm font-medium text-slate-900 transition hover:border-slate-900"
                      >
                        Leistungen ansehen
                      </a>
                    </div>
                  </div>

                  <div className="mt-12 grid gap-3 sm:grid-cols-3">
                    {[
                      "Persönlich betreut",
                      "Architektonisch fundiert",
                      "Regional verankert",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-[1.25rem] border border-stone-200 bg-white/85 px-4 py-4 text-sm text-slate-700 shadow-sm"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                {...fadeInUp}
                transition={{ duration: 0.75 }}
                className="relative min-h-[620px] overflow-hidden rounded-[2rem] border border-black/5 bg-[url('/images/schulzi-haus.webp')] bg-cover bg-center shadow-[0_24px_80px_rgba(15,23,42,0.12)]"
              >
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,23,42,0.72)_0%,rgba(15,23,42,0.28)_42%,rgba(15,23,42,0.08)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.20),transparent_22%)]" />

                <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-white/90 backdrop-blur md:left-8 md:top-8">
                  Moderne Architektur in Norddeutschland
                </div>

                <div className="absolute inset-x-6 bottom-6 rounded-[1.75rem] border border-white/15 bg-slate-950/88 p-7 text-white shadow-2xl shadow-slate-900/20 backdrop-blur md:inset-x-8 md:bottom-8">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
                        Schulzi-Immobilien
                      </div>
                      <div className="mt-3 max-w-sm text-3xl font-semibold tracking-tight">
                        Moderne Planung für Bauherren mit architektonischem Anspruch.
                      </div>
                    </div>
                    <div className="hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-right md:block">
                      <div className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                        Erfahrung gesamt
                      </div>
                      <div className="mt-2 text-lg font-semibold">35+ Jahre</div>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      "Einfamilienhäuser",
                      "Baupläne & Beratung",
                      "Grundstücksbewertung",
                      "Schwerin & Norddeutschland",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
            {[
              ["Kevin Schulz", "Architekt mit 10 Jahren Erfahrung in Planung, Beratung und Bauherren-Begleitung."],
              ["Zwei Generationen", "Gemeinsam mit seinem Vater vereint Schulzi-Immobilien über 35 Jahre Erfahrung und architektonisches Know-how."],
              ["Starke Partnerschaften", "Enge Zusammenarbeit mit einem führenden Architekturbüro der Region für hochwertige, durchdachte Lösungen."],
            ].map(([title, text], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="rounded-[1.75rem] border border-white/70 bg-white/75 p-6 shadow-[0_12px_36px_rgba(15,23,42,0.05)] backdrop-blur"
              >
                <div className="text-lg font-semibold tracking-tight text-slate-950">{title}</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="leistungen" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <motion.div {...fadeInUp} className="max-w-3xl">
            <div className="text-sm font-medium uppercase tracking-[0.22em] text-stone-500">
              Leistungen
            </div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Leistungen, die Architektur und Immobilienkompetenz verbinden
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="group rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_14px_40px_rgba(15,23,42,0.05)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-100 text-slate-900 transition group-hover:bg-slate-950 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-6 text-xl font-semibold tracking-tight text-slate-950">
                    {service.title}
                  </div>
                  <p className="mt-4 text-base leading-8 text-slate-600">{service.text}</p>
                </motion.div>
              );
            })}
          </div>
        </section>
        <section id="haustypen" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <motion.div {...fadeInUp} className="max-w-3xl">
            <div className="text-sm font-medium uppercase tracking-[0.22em] text-stone-500">
              Haustypen & Referenzen
            </div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Architektur, die zum norddeutschen Stil und zur Zielgruppe passt
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Von Bungalows bis zu Mehrfamilienhäusern: Schulzi-Immobilien plant und begleitet Projekte mit klarem architektonischem Anspruch, regionalem Verständnis und einem Blick für stimmige Lösungen.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {projectTypes.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 shadow-[0_14px_40px_rgba(15,23,42,0.06)]"
              >
                <div
                  className="h-64 w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="p-6">
                  <div className="text-xl font-semibold tracking-tight text-slate-950">
                    {project.title}
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{project.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="ueber-uns" className="bg-slate-950 text-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <motion.div {...fadeInUp}>
              <div className="text-sm font-medium uppercase tracking-[0.22em] text-slate-400">
                Über Schulzi-Immobilien
              </div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                Zwei Generationen Architekturverständnis – ein gemeinsamer Anspruch
              </h2>
            </motion.div>

            <motion.div {...fadeInUp} className="space-y-6 text-lg leading-8 text-slate-300">
              <p>
                Hinter Schulzi-Immobilien stehen Kevin Schulz und sein Vater – zwei Architekten mit zusammen über 35 Jahren Erfahrung in der Planung und Begleitung von Bauprojekten.
              </p>
              <p>
                Was sie verbindet, ist ein gemeinsamer Anspruch: Projekte nicht nur umzusetzen, sondern von Anfang an strukturiert zu durchdenken – funktional, architektonisch und wirtschaftlich.
              </p>
              <p>
                Durch die enge Zusammenarbeit mit einem führenden Architekturbüro der Region entstehen Lösungen, die weit über Standard hinausgehen – individuell geplant, klar strukturiert und mit einem hohen Qualitätsanspruch.
              </p>
            </motion.div>
          </div>
        </section>

        <section id="vorteile" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <motion.div {...fadeInUp} className="max-w-3xl">
            <div className="text-sm font-medium uppercase tracking-[0.22em] text-stone-500">
              Warum Schulzi-Immobilien
            </div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Warum Bauherren auf Schulzi-Immobilien setzen
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="rounded-[2rem] border border-stone-200/70 bg-[#fbf8f3] p-8 shadow-[0_12px_36px_rgba(15,23,42,0.04)]"
              >
                <div className="text-lg font-semibold tracking-tight text-slate-950">
                  {advantage.title}
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">{advantage.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="ablauf" className="border-y border-black/5 bg-white/70 backdrop-blur">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <motion.div {...fadeInUp} className="max-w-3xl">
              <div className="text-sm font-medium uppercase tracking-[0.22em] text-stone-500">
                Ablauf
              </div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                So läuft die Zusammenarbeit ab
              </h2>
            </motion.div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
                >
                  <div className="text-sm font-medium tracking-[0.25em] text-stone-400">
                    {step.number}
                  </div>
                  <div className="mt-4 text-xl font-semibold tracking-tight text-slate-950">
                    {step.title}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{step.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="overflow-hidden rounded-[2.5rem] border border-white/60 bg-[linear-gradient(135deg,#0f172a_0%,#1f2937_46%,#8a7f73_100%)] px-8 py-12 text-white shadow-[0_24px_80px_rgba(15,23,42,0.14)] md:px-12 md:py-16"
          >
            <div className="max-w-4xl">
              <div className="text-sm font-medium uppercase tracking-[0.22em] text-slate-300">
                Statement
              </div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                Gute Architektur beginnt nicht auf dem Papier – sondern mit Klarheit.
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
                Wer ein Haus plant, trifft Entscheidungen fürs Leben. Umso wichtiger ist ein Partner, der nicht nur einzelne Schritte begleitet, sondern das Gesamtbild versteht. Schulzi-Immobilien steht für eine strukturierte, persönliche und fachlich fundierte Herangehensweise – von der ersten Idee bis zur konkreten Planung.
              </p>
            </div>
          </motion.div>
        </section>
        <section id="kontakt" className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
          <div className="grid gap-8 rounded-[2.5rem] border border-white/70 bg-white/80 p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur md:grid-cols-[1fr_0.9fr] md:p-12">
            <motion.div {...fadeInUp}>
              <div className="text-sm font-medium uppercase tracking-[0.22em] text-stone-500">
                Kontakt
              </div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                Lassen Sie uns über Ihr Bauvorhaben sprechen
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Ob erste Idee, konkretes Projekt oder Fragen zur Umsetzbarkeit – im persönlichen Austausch klären wir die nächsten sinnvollen Schritte.
              </p>

              <div className="mt-8 space-y-4 text-sm text-slate-700">
                <div className="inline-flex items-center gap-3 rounded-full bg-stone-100 px-4 py-2">
                  <PhoneCall className="h-4 w-4" />
                  Kontaktanfrage mit späterer Terminbuchung per Bot möglich
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full bg-stone-100 px-4 py-2">Schwerin & Umgebung</span>
                  <span className="rounded-full bg-stone-100 px-4 py-2">Mecklenburg-Vorpommern</span>
                  <span className="rounded-full bg-stone-100 px-4 py-2">Norddeutschland</span>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="rounded-[2rem] border border-stone-200 bg-[#faf7f2] p-6 md:p-8">
              <div className="text-lg font-semibold tracking-tight text-slate-950">
                Erstgespräch anfragen
              </div>
              <div className="mt-6 space-y-4">
                <input
                  className="w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 outline-none transition focus:border-slate-900"
                  placeholder="Ihr Name"
                />
                <input
                  className="w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 outline-none transition focus:border-slate-900"
                  placeholder="Ihre E-Mail"
                />
                <textarea
                  className="min-h-[140px] w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 outline-none transition focus:border-slate-900"
                  placeholder="Worum geht es bei Ihrem Vorhaben?"
                />
                <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5">
                  Anfrage senden
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-[#efe8de]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-sm text-slate-600 md:flex-row md:items-end md:justify-between lg:px-8">
          <div>
            <div className="text-base font-semibold text-slate-950">Schulzi-Immobilien</div>
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