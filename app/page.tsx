'use client';

import { useEffect, useRef, useState, FormEvent } from 'react';

export default function Home() {
  const heroWrapRef = useRef<HTMLElement | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const imgBPRef = useRef<HTMLImageElement | null>(null);
  const imgFNRef = useRef<HTMLImageElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const heroArtRef = useRef<HTMLElement | null>(null);
  const meterFillRef = useRef<HTMLDivElement | null>(null);
  const meterPctRef = useRef<HTMLSpanElement | null>(null);
  const stageNumRef = useRef<HTMLSpanElement | null>(null);
  const stageNameRef = useRef<HTMLSpanElement | null>(null);
  const cueRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const [projekt, setProjekt] = useState<string[]>([]);
  const [grundstueck, setGrundstueck] = useState<string | null>(null);
  const [zeitraum, setZeitraum] = useState<string | null>(null);
  const [formErr, setFormErr] = useState('');
  const [sendState, setSendState] = useState<'idle' | 'loading' | 'sent'>('idle');

  // Hero scroll story + nav scrolled state + reveal observer
  useEffect(() => {
    const stageNames = ['Skizze', 'Plan', 'Boden', 'Aufbau', 'Zuhause'];
    const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
    const ease = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

    // Headline word entrance
    const headlineWords = Array.from(document.querySelectorAll<HTMLElement>('.hero-headline .word'));
    headlineWords.forEach((w, i) => {
      w.style.opacity = '0';
      w.style.transform = 'translateY(28px)';
      w.style.transition = `opacity .9s cubic-bezier(.2,.7,.2,1) ${0.05 * i + 0.1}s, transform .9s cubic-bezier(.2,.7,.2,1) ${0.05 * i + 0.1}s`;
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          w.style.opacity = '1';
          w.style.transform = 'none';
        })
      );
    });

    const onScrollNav = () => {
      if (navRef.current) navRef.current.classList.toggle('scrolled', window.scrollY > 24);
    };

    const chapters = Array.from(document.querySelectorAll<HTMLElement>('#chapterStack .chapter'));

    const onScrollHero = () => {
      const wrap = heroWrapRef.current;
      if (!wrap) return;
      const r = wrap.getBoundingClientRect();
      const total = wrap.offsetHeight - window.innerHeight;
      const p = clamp(-r.top / total, 0, 1);

      if (cueRef.current) cueRef.current.style.opacity = p < 0.04 ? '1' : '0';

      const morph = ease(clamp((p - 0.2) / 0.55, 0, 1));
      if (imgFNRef.current) imgFNRef.current.style.opacity = String(morph);
      if (imgBPRef.current) imgBPRef.current.style.opacity = String(1 - morph * 0.92);
      if (gridRef.current) gridRef.current.style.opacity = String((1 - morph) * 0.9);

      const scale = 1 + (1 - p) * 0.04;
      const ty = (p - 0.5) * 40;
      if (heroArtRef.current)
        heroArtRef.current.style.transform = `translateY(${ty}px) scale(${scale.toFixed(4)})`;

      const reveal = ease(clamp((p - 0.18) / 0.62, 0, 1));
      if (imgFNRef.current) imgFNRef.current.style.clipPath = `inset(${(1 - reveal) * 100}% 0 0 0)`;

      const pct = Math.round(p * 100);
      if (meterFillRef.current) meterFillRef.current.style.width = pct + '%';
      if (meterPctRef.current) meterPctRef.current.textContent = pct + '%';

      const idx = clamp(Math.floor(p / 0.2), 0, 4);
      chapters.forEach((c) => c.classList.toggle('active', Number(c.dataset.chapter) === idx));
      if (stageNumRef.current) stageNumRef.current.textContent = `— Etappe 0${idx + 1} / 05`;
      if (stageNameRef.current) stageNameRef.current.textContent = stageNames[idx];
    };

    document.addEventListener('scroll', onScrollNav, { passive: true });
    document.addEventListener('scroll', onScrollHero, { passive: true });
    window.addEventListener('resize', onScrollHero);
    onScrollNav();
    onScrollHero();

    // Reveal on scroll
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 }
    );
    document.querySelectorAll('.reveal, .proc').forEach((el) => io.observe(el));

    // Floating labels
    const fields = Array.from(document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('.field input, .field textarea'));
    const handlers: Array<() => void> = [];
    fields.forEach((inp) => {
      const sync = () => inp.parentElement?.classList.toggle('has-value', !!inp.value);
      inp.addEventListener('input', sync);
      inp.addEventListener('blur', sync);
      sync();
      handlers.push(() => {
        inp.removeEventListener('input', sync);
        inp.removeEventListener('blur', sync);
      });
    });

    return () => {
      document.removeEventListener('scroll', onScrollNav);
      document.removeEventListener('scroll', onScrollHero);
      window.removeEventListener('resize', onScrollHero);
      io.disconnect();
      handlers.forEach((h) => h());
    };
  }, []);

  const toggleProjekt = (val: string) => {
    setProjekt((p) => (p.includes(val) ? p.filter((v) => v !== val) : [...p, val]));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormErr('');
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get('name') || '').trim();
    const email = String(fd.get('email') || '').trim();
    if (name.length < 2 || !/\S+@\S+\.\S+/.test(email)) {
      setFormErr('— Bitte Name und gültige E-Mail eintragen.');
      return;
    }
    const payload = {
      name,
      email,
      phone: String(fd.get('phone') || '').trim() || null,
      region: String(fd.get('region') || '').trim() || null,
      projekt,
      grundstueck,
      zeitraum,
      message: String(fd.get('message') || '').trim() || null,
      ts: new Date().toISOString(),
    };
    setSendState('loading');
    // TODO: replace with your n8n webhook
    // await fetch('https://YOUR-N8N-WEBHOOK', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) });
    await new Promise((r) => setTimeout(r, 1100));
    console.log('[schulzi] would POST to n8n:', payload);
    setSendState('sent');
  };

  const sendLabel =
    sendState === 'sent' ? '✓ Anfrage übermittelt' : sendState === 'loading' ? 'Wird gesendet…' : 'Anfrage senden';

  return (
    <>
      {/* ═══════ Navigation ═══════ */}
      <nav className="nav" id="nav" ref={navRef}>
        <div className="container nav-row">
          <a href="#top" className="brand">
            <span className="brand-mark serif">S</span>
            <div>
              <div className="brand-name">Schulzi</div>
              <div className="brand-sub">Immobilien · Schwerin</div>
            </div>
          </a>
          <div className="nav-links">
            <a href="#leistungen">Leistungen</a>
            <a href="#haustypen">Haustypen</a>
            <a href="#ueber">Über uns</a>
            <a href="#ablauf">Ablauf</a>
          </div>
          <a href="#kontakt" className="nav-cta">
            <span className="dot"></span>Erstgespräch
          </a>
        </div>
      </nav>

      {/* ═══════ Hero ═══════ */}
      <header id="top" className="hero-wrap" data-screen-label="01 Hero" ref={heroWrapRef}>
        <div className="hero-sticky">
          <div className="hero-stage">
            <figure className="hero-art" id="heroArt" ref={heroArtRef}>
              <img className="hero-img blueprint" id="imgBP" src="/images/house-blueprint.png" alt="Blueprint" ref={imgBPRef} />
              <img className="hero-img final" id="imgFN" src="/images/house-final.png" alt="Final" ref={imgFNRef} />
              <div className="grid-overlay" id="gridOv" ref={gridRef}></div>
              <div className="ticks">
                <span className="tl"></span>
                <span className="tr"></span>
                <span className="bl"></span>
                <span className="br"></span>
              </div>
              <div className="dim top">
                <span className="line"></span>
                <span>12.40 m</span>
                <span className="line"></span>
              </div>
              <div className="dim left">
                <span className="line"></span>
                <span>8.20 m</span>
                <span className="line"></span>
              </div>
            </figure>
          </div>

          <div className="hero-overlay">
            <div className="hero-top">
              <div className="hero-eyebrow">
                <span className="bar"></span>Schwerin · Mecklenburg-Vorpommern
              </div>
              <div className="hero-eyebrow hide-mobile">
                N 53°37′ · E 11°25′ &nbsp;<span className="bar"></span>
              </div>
            </div>

            <div>
              <h1 className="hero-headline">
                <span className="word">Von</span> <span className="word">der</span> <span className="word">ersten</span>{' '}
                <span className="word">
                  <em>Skizze</em>
                </span>
                <br />
                <span className="word">bis</span> <span className="word">zum</span> <span className="word">fertigen</span>{' '}
                <span className="word">
                  <em>Zuhause</em>.
                </span>
              </h1>

              <div className="hero-bottom" style={{ marginTop: 48 }}>
                <p className="hero-sub">
                  Architektonische Planung, Bauherrenberatung und persönliche Begleitung im Norden — von zwei Generationen, die ihr Handwerk verstehen.
                </p>
                <div className="hero-meter">
                  <span className="label">Fortschritt</span>
                  <div className="track">
                    <div className="fill" id="meterFill" ref={meterFillRef}></div>
                  </div>
                  <span className="pct" id="meterPct" ref={meterPctRef}>
                    0%
                  </span>
                </div>
                <div className="hero-stage-label">
                  <span className="num" id="stageNum" ref={stageNumRef}>
                    — Etappe 01 / 05
                  </span>
                  <span className="name serif" id="stageName" ref={stageNameRef}>
                    Skizze
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="scroll-cue" id="scrollCue" ref={cueRef}>
            <span>Scrollen</span>
            <span className="pipe"></span>
          </div>

          <div className="chapter-stack" id="chapterStack" aria-hidden="true">
            <div className="chapter active" data-chapter="0">
              <span className="idx">— 01 / Skizze</span>
              <span className="title">Idee &amp; Erstberatung</span>
            </div>
            <div className="chapter" data-chapter="1">
              <span className="idx">— 02 / Plan</span>
              <span className="title">Bauplanung &amp; Entwurf</span>
            </div>
            <div className="chapter" data-chapter="2">
              <span className="idx">— 03 / Boden</span>
              <span className="title">Grundstücks- &amp; Projektbewertung</span>
            </div>
            <div className="chapter" data-chapter="3">
              <span className="idx">— 04 / Aufbau</span>
              <span className="title">Persönliche Begleitung</span>
            </div>
            <div className="chapter" data-chapter="4">
              <span className="idx">— 05 / Zuhause</span>
              <span className="title">Bezugsfertig.</span>
            </div>
          </div>
        </div>
      </header>

      {/* ═══════ Trust bar ═══════ */}
      <section className="trust">
        <div className="container">
          <div className="trust-grid">
            <div className="trust-item reveal">
              <div className="trust-num serif">
                35<span style={{ color: 'var(--ochre)' }}>+</span>
              </div>
              <div className="trust-label">Jahre gebündelte Erfahrung — Architekt &amp; Bauherrenberatung in zweiter Generation</div>
              <div className="trust-tag">— Generationenwissen</div>
            </div>
            <div className="trust-item reveal" data-d="1">
              <div className="trust-num serif">MV</div>
              <div className="trust-label">Schwerin, Mecklenburg-Vorpommern und der gesamte norddeutsche Raum</div>
              <div className="trust-tag">— Region</div>
            </div>
            <div className="trust-item reveal" data-d="2">
              <div className="trust-num serif">1:1</div>
              <div className="trust-label">Persönliche Betreuung. Kein Callcenter, keine anonyme Kette — direkter Draht zum Architekten</div>
              <div className="trust-tag">— Beratung</div>
            </div>
            <div className="trust-item reveal" data-d="3">
              <div className="trust-num serif">∠</div>
              <div className="trust-label">Architekturverständnis von der Skizze bis zur strukturellen Detailplanung</div>
              <div className="trust-tag">— Planung</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ Leistungen ═══════ */}
      <section id="leistungen" className="sec" data-screen-label="03 Leistungen">
        <div className="container">
          <div className="sec-head">
            <div className="reveal">
              <div className="sec-eyebrow">
                <span className="bar"></span>
                <span className="label">— Leistungen</span>
              </div>
              <p className="num" style={{ marginTop: 18 }}>§ 02 / 05</p>
            </div>
            <h2 className="sec-title reveal" data-d="1">
              Vier Disziplinen, ein <em>strukturiertes</em> Vorgehen für Ihr Bauvorhaben.
            </h2>
          </div>

          <div className="services">
            {[
              { n: '01', t: 'Bauplanung für Einfamilienhäuser', p: 'Architektonischer Entwurf, Grundriss, Konstruktion und Detail. Vom ersten Skizzenbuch bis zur freigegebenen Bauantragsplanung — sauber dokumentiert, klar verantwortet.', tag: '— Entwurf, Grundriss, Bauantrag', d: '0' },
              { n: '02', t: 'Beratung für Bauherren', p: 'Ehrliche Einschätzung statt verkaufsorientierter Versprechen. Wir prüfen Vorhaben, Budget und Anforderungen und übersetzen sie in eine umsetzbare Architektur.', tag: '— Vorhaben, Budget, Anforderungen', d: '1' },
              { n: '03', t: 'Grundstücks- & Projektbewertung', p: 'Lage, Topografie, Bebaubarkeit, Bodenverhältnisse, Erschließung. Wir prüfen, ob ein Grundstück trägt — und welcher Haustyp wirklich dorthin gehört.', tag: '— Lage, Bebauung, Erschließung', d: '2' },
              { n: '04', t: 'Persönliche Projektbegleitung', p: 'Ein Ansprechpartner, vom Erstgespräch bis zur Übergabe. Termine mit Behörden, Fachplanern und Gewerken — strukturiert, wöchentlich, transparent.', tag: '— Behörden, Fachplaner, Gewerke', d: '3' },
            ].map((s) => (
              <article key={s.n} className="service reveal" data-d={s.d}>
                <span className="num">{s.n}</span>
                <div>
                  <h3 className="serif">{s.t}</h3>
                  <p>{s.p}</p>
                  <span className="tag">{s.tag}</span>
                </div>
                <span className="arrow">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ Haustypen ═══════ */}
      <section id="haustypen" className="sec houses" data-screen-label="04 Haustypen">
        <div className="container">
          <div className="sec-head">
            <div className="reveal">
              <div className="sec-eyebrow">
                <span className="bar"></span>
                <span className="label">— Haustypen</span>
              </div>
              <p className="num" style={{ marginTop: 18 }}>§ 03 / 05</p>
            </div>
            <h2 className="sec-title reveal" data-d="1">
              Vier Typologien, die zum <em>Norden</em> gehören.
            </h2>
          </div>

          <div className="houses-grid">
            <article className="house h-bungalow reveal">
              <div className="frame"><img src="/images/bungalow.webp" alt="Bungalow" loading="lazy" /></div>
              <div className="house-meta">
                <div><span className="num">— Typ 01</span><h4 className="serif">Bungalow</h4></div>
                <span className="tag">Ebenerdig · barrierearm</span>
              </div>
            </article>
            <article className="house h-stadthaus reveal" data-d="1">
              <div className="frame"><img src="/images/stadthaus.webp" alt="Stadthaus" loading="lazy" /></div>
              <div className="house-meta">
                <div><span className="num">— Typ 02</span><h4 className="serif">Stadthaus</h4></div>
                <span className="tag">Urbane Klarheit · Klare Linie</span>
              </div>
            </article>
            <article className="house h-satteldach reveal" data-d="2">
              <div className="frame"><img src="/images/satteldachhaus-kapitaensgiebel.webp" alt="Satteldach mit Kapitänsgiebel" loading="lazy" /></div>
              <div className="house-meta">
                <div><span className="num">— Typ 03</span><h4 className="serif">Satteldach mit&nbsp;Kapitänsgiebel</h4></div>
                <span className="tag">Norddeutsche Tradition</span>
              </div>
            </article>
            <article className="house h-mfh reveal" data-d="3">
              <div className="frame"><img src="/images/mehrfamilienhaus.webp" alt="Mehrfamilienhaus" loading="lazy" /></div>
              <div className="house-meta">
                <div><span className="num">— Typ 04</span><h4 className="serif">Mehrfamilienhaus</h4></div>
                <span className="tag">Mehrwert · Mehrere Parteien</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ═══════ Über uns ═══════ */}
      <section id="ueber" className="sec about" data-screen-label="05 Ueber">
        <div className="container">
          <div className="about-grid">
            <div className="reveal">
              <div className="sec-eyebrow">
                <span className="bar" style={{ background: 'rgba(244,241,236,.6)' }}></span>
                <span className="label">— Über Schulzi-Immobilien</span>
              </div>
              <h2 style={{ marginTop: 24 }}>
                Zwei <em>Generationen</em>, ein gemeinsames Architekturverständnis.
              </h2>
              <p>Kevin Schulz ist Architekt und arbeitet seit rund zehn Jahren an Wohnbauten in Norddeutschland. Sein Vater bringt mehr als zwei&shy;einhalb Jahrzehnte Erfahrung in Planung, Bewertung und Begleitung mit.</p>
              <p>Was uns zusammenhält: ein ruhiger, strukturierter Blick auf das, was ein Haus zum Zuhause macht. Wir sind klein genug, um wirklich zuzuhören — und groß genug, um Bauvorhaben verlässlich durch die Realität zu bringen.</p>
            </div>
            <div className="gens reveal" data-d="1">
              <div className="gen">
                <div className="av">KS</div>
                <div>
                  <div className="name serif">Kevin Schulz</div>
                  <div className="role">— Architekt · Planung &amp; Entwurf</div>
                </div>
                <div className="yrs"><div className="big serif">10</div><div className="lbl">Jahre</div></div>
              </div>
              <div className="gen">
                <div className="av">HS</div>
                <div>
                  <div className="name serif">Schulz Senior</div>
                  <div className="role">— Bewertung &amp; Bauherrenberatung</div>
                </div>
                <div className="yrs"><div className="big serif">25<span style={{ color: 'var(--ochre-soft)' }}>+</span></div><div className="lbl">Jahre</div></div>
              </div>
              <div className="gen">
                <div className="av" style={{ background: 'transparent', borderStyle: 'dashed' }}>∑</div>
                <div>
                  <div className="name serif">Gemeinsam</div>
                  <div className="role">— Vier Augen, eine Linie</div>
                </div>
                <div className="yrs"><div className="big serif" style={{ color: 'var(--ochre-soft)' }}>35<span style={{ opacity: 0.5 }}>+</span></div><div className="lbl">Jahre summiert</div></div>
              </div>
            </div>
          </div>

          <div className="why-strip">
            <div className="why reveal"><span className="num">— 01</span><h4 className="serif">Architektonisch gedacht</h4><p>Häuser, keine Kataloge. Jeder Grundriss entsteht aus Lage, Rhythmus und Budget.</p></div>
            <div className="why reveal" data-d="1"><span className="num">— 02</span><h4 className="serif">Direkter Draht</h4><p>Sie sprechen mit dem Architekten — nicht mit einer Hotline.</p></div>
            <div className="why reveal" data-d="2"><span className="num">— 03</span><h4 className="serif">Ehrliche Bewertung</h4><p>Manchmal lautet die beste Antwort: nicht dieses Grundstück. Wir verkaufen keinen Konsens.</p></div>
            <div className="why reveal" data-d="3"><span className="num">— 04</span><h4 className="serif">Norddeutsche Bauweise</h4><p>Klinker, Wind, Witterung, Behörden — wir kennen die Region zwischen Wismar und Rostock.</p></div>
          </div>
        </div>
      </section>

      {/* ═══════ Ablauf ═══════ */}
      <section id="ablauf" className="sec process" data-screen-label="07 Ablauf">
        <div className="container">
          <div className="sec-head">
            <div className="reveal">
              <div className="sec-eyebrow"><span className="bar"></span><span className="label">— Ablauf</span></div>
              <p className="num" style={{ marginTop: 18 }}>§ 04 / 05</p>
            </div>
            <h2 className="sec-title reveal" data-d="1">Vier Etappen, von der ersten Idee bis zur <em>Übergabe</em>.</h2>
          </div>

          <div className="proc-grid">
            <div className="proc reveal">
              <span className="num">01 — Idee</span>
              <h4 className="serif">Erstgespräch</h4>
              <p>Ein ruhiges Gespräch über Vorstellung, Lage, Familie und Budget. Kein Verkaufsdruck — nur Klarheit, ob ein gemeinsamer Weg trägt.</p>
              <div className="dur">— ca. 60–90 Minuten</div>
            </div>
            <div className="proc reveal" data-d="1">
              <span className="num">02 — Plan</span>
              <h4 className="serif">Bauplanung</h4>
              <p>Entwurf, Grundriss, Architekturkonzept, Detail. Strukturiert in Phasen, mit Skizzen, Modellen und nachvollziehbaren Entscheidungen.</p>
              <div className="dur">— 8–14 Wochen</div>
            </div>
            <div className="proc reveal" data-d="2">
              <span className="num">03 — Boden</span>
              <h4 className="serif">Projektbewertung</h4>
              <p>Grundstück, Topografie, Erschließung, Behörden. Wir ordnen Risiken und Reserven so ein, dass Sie eine echte Entscheidungs&shy;grundlage haben.</p>
              <div className="dur">— 2–4 Wochen</div>
            </div>
            <div className="proc reveal" data-d="3">
              <span className="num">04 — Aufbau</span>
              <h4 className="serif">Begleitung</h4>
              <p>Persönliche Abstimmung mit Fachplanern, Gewerken und Behörden — bis zur Schlüsselübergabe. Ein Ansprechpartner, ein Faden.</p>
              <div className="dur">— bis Übergabe</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ Kontakt ═══════ */}
      <section id="kontakt" className="sec contact" data-screen-label="08 Kontakt">
        <div className="container">
          <div className="contact-shell">
            <div className="contact-side">
              <div className="sec-eyebrow reveal"><span className="bar"></span><span className="label">— Erstgespräch anfragen</span></div>
              <h2 className="reveal" data-d="1" style={{ marginTop: 24 }}>
                Erzählen Sie uns von <em>Ihrem Vorhaben</em>.
              </h2>
              <p className="reveal" data-d="2">Ein Erstgespräch ist kostenfrei und unverbindlich. Wir melden uns innerhalb von zwei Werktagen mit einer ehrlichen ersten Einschätzung.</p>

              <div className="contact-meta reveal" data-d="3">
                <div className="meta-row"><span className="k">Standort</span><span className="v serif">Schwerin · MV</span></div>
                <div className="meta-row"><span className="k">Reaktionszeit</span><span className="v serif">≤ 2 Werktage</span></div>
                <div className="meta-row"><span className="k">Erstgespräch</span><span className="v serif">Kostenfrei</span></div>
                <div className="meta-row"><span className="k">Region</span><span className="v serif">Norddeutschland</span></div>
              </div>
            </div>

            <form className="form reveal" data-d="2" id="contactForm" noValidate onSubmit={onSubmit} ref={formRef}>
              <div className="form-step">
                <span className="lbl">— Anfrage / 01</span>
                <span className="pill"><span className="dot"></span>Bereit für Sie</span>
              </div>

              <div className="field-row">
                <div className="field"><label htmlFor="f-name">Name</label><input id="f-name" name="name" type="text" required autoComplete="name" /></div>
                <div className="field"><label htmlFor="f-mail">E-Mail</label><input id="f-mail" name="email" type="email" required autoComplete="email" /></div>
              </div>
              <div className="field-row">
                <div className="field"><label htmlFor="f-tel">Telefon (optional)</label><input id="f-tel" name="phone" type="tel" autoComplete="tel" /></div>
                <div className="field"><label htmlFor="f-area">Region / Ort</label><input id="f-area" name="region" type="text" /></div>
              </div>

              <div style={{ marginTop: 32 }}>
                <span className="label" style={{ color: 'var(--ink-3)' }}>— Projekttyp</span>
                <div className="chips" role="group">
                  {['Bungalow', 'Stadthaus', 'Satteldach mit Kapitänsgiebel', 'Mehrfamilienhaus', 'Nur Beratung', 'Grundstücksbewertung'].map((label) => {
                    const val = label === 'Satteldach mit Kapitänsgiebel' ? 'Satteldach' : label === 'Nur Beratung' ? 'Beratung' : label === 'Grundstücksbewertung' ? 'Bewertung' : label;
                    return (
                      <button key={val} type="button" className={`chip${projekt.includes(val) ? ' on' : ''}`} onClick={() => toggleProjekt(val)}>
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
                <div>
                  <span className="label" style={{ color: 'var(--ink-3)' }}>— Grundstück vorhanden?</span>
                  <div className="seg">
                    {[['ja', 'Ja'], ['suche', 'In Suche'], ['nein', 'Noch nicht']].map(([v, l]) => (
                      <button key={v} type="button" className={grundstueck === v ? 'on' : ''} onClick={() => setGrundstueck(v)}>{l}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="label" style={{ color: 'var(--ink-3)' }}>— Zeitraum</span>
                  <div className="seg">
                    {[['3-6m', '3–6 Monate'], ['6-12m', '6–12 Monate'], ['12m+', '12 Monate +']].map(([v, l]) => (
                      <button key={v} type="button" className={zeitraum === v ? 'on' : ''} onClick={() => setZeitraum(v)}>{l}</button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="field" style={{ marginTop: 32 }}>
                <label htmlFor="f-msg">Ihre Nachricht</label>
                <textarea id="f-msg" name="message"></textarea>
              </div>

              <div className="form-err">{formErr}</div>

              <div className="submit">
                <p className="legal">Mit dem Absenden stimmen Sie zu, dass wir Ihre Angaben zur Bearbeitung Ihrer Anfrage nutzen. Keine Weitergabe an Dritte.</p>
                <button type="submit" className={`send${sendState === 'loading' ? ' loading' : ''}${sendState === 'sent' ? ' sent' : ''}`} disabled={sendState !== 'idle'}>
                  <span>{sendLabel}</span>
                  <span className="icn">→</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ═══════ Footer ═══════ */}
      <footer>
        <div className="container">
          <div className="foot-grid">
            <div className="foot foot-brand">
              <div className="brand">
                <span className="brand-mark serif" style={{ borderColor: 'rgba(244,241,236,.6)', color: 'var(--sand)' }}>S</span>
                <div>
                  <div className="brand-name" style={{ color: 'var(--sand)' }}>Schulzi</div>
                  <div className="brand-sub" style={{ color: 'rgba(244,241,236,.5)' }}>Immobilien · Schwerin</div>
                </div>
              </div>
              <p>Architektonische Planung, Bauherrenberatung und persönliche Begleitung in Schwerin, Mecklenburg-Vorpommern und ganz Norddeutschland.</p>
            </div>
            <div className="foot">
              <h5>Leistungen</h5>
              <a href="#leistungen">Bauplanung</a>
              <a href="#leistungen">Bauherrenberatung</a>
              <a href="#leistungen">Projektbewertung</a>
              <a href="#leistungen">Begleitung</a>
            </div>
            <div className="foot">
              <h5>Haustypen</h5>
              <a href="#haustypen">Bungalow</a>
              <a href="#haustypen">Stadthaus</a>
              <a href="#haustypen">Satteldach</a>
              <a href="#haustypen">Mehrfamilienhaus</a>
            </div>
            <div className="foot">
              <h5>Kontakt</h5>
              <a href="#kontakt">Erstgespräch</a>
              <a href="mailto:hallo@schulzi-immobilien.de">hallo@schulzi-immobilien.de</a>
              <a href="tel:+493850000000">+49 385 0000000</a>
              <a href="#kontakt">Schwerin · MV</a>
            </div>
          </div>
          <div className="foot-bot">
            <span>© 2026 Schulzi-Immobilien</span>
            <span>— Architektur · Beratung · Begleitung</span>
            <span>
              <a href="/impressum">Impressum</a> · <a href="/datenschutz">Datenschutz</a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
