import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum – Schulzi-Immobilien",
  description: "Impressum von Schulzi-Immobilien, Kevin Schulz, Schwerin.",
};

export default function Impressum() {
  return (
    <div className="min-h-screen bg-[#f5f1eb] text-slate-900">
      <header className="border-b border-black/5 bg-[#f5f1eb]/90 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="group">
            <div className="text-[11px] uppercase tracking-[0.30em] text-stone-500">
              Schwerin · Mecklenburg-Vorpommern
            </div>
            <div className="mt-1 text-xl font-semibold tracking-tight text-slate-950 transition group-hover:opacity-80">
              Schulzi-Immobilien
            </div>
          </Link>
          <Link
            href="/"
            className="text-sm text-slate-600 transition hover:text-slate-950"
          >
            ← Zurück
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950">
          Impressum
        </h1>
        <p className="mt-2 text-sm text-stone-500">Angaben gemäß § 5 TMG</p>

        <div className="mt-12 space-y-10">
          <section>
            <h2 className="text-lg font-semibold text-slate-950">
              Verantwortlich
            </h2>
            <div className="mt-3 space-y-1 text-slate-700">
              <p>Kevin Schulz</p>
              <p>Schulzi-Immobilien</p>
              {/* TODO: Straße und Hausnummer eintragen */}
              <p>[Straße] [Hausnummer]</p>
              {/* TODO: PLZ und Ort eintragen */}
              <p>[PLZ] Schwerin</p>
              <p>Mecklenburg-Vorpommern, Deutschland</p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-950">Kontakt</h2>
            <div className="mt-3 space-y-1 text-slate-700">
              {/* TODO: Telefonnummer eintragen */}
              <p>
                Telefon:{" "}
                <a
                  href="tel:[TELEFONNUMMER]"
                  className="underline underline-offset-2 hover:text-slate-950"
                >
                  [Telefonnummer]
                </a>
              </p>
              {/* TODO: E-Mail-Adresse eintragen */}
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:[EMAIL]"
                  className="underline underline-offset-2 hover:text-slate-950"
                >
                  [E-Mail-Adresse]
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-950">
              Berufsbezeichnung & Kammerzugehörigkeit
            </h2>
            <div className="mt-3 space-y-1 text-slate-700">
              <p>Berufsbezeichnung: Architekt</p>
              <p>Verliehen in: Deutschland</p>
              <p>
                Kammermitglied der Architektenkammer Mecklenburg-Vorpommern
              </p>
              {/* TODO: Mitgliedsnummer eintragen, sofern relevant */}
              {/* <p>Mitgliedsnummer: [NUMMER]</p> */}
              <p>
                Es gelten die berufsrechtlichen Regelungen der{" "}
                <a
                  href="https://www.ak-mv.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-slate-950"
                >
                  Architektenkammer Mecklenburg-Vorpommern
                </a>
                .
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-950">
              Umsatzsteuer-Identifikationsnummer
            </h2>
            <div className="mt-3 text-slate-700">
              {/*
                TODO: USt-IdNr. eintragen, sofern vorhanden (§ 27a UStG).
                Wenn keine USt-IdNr. vorhanden, diese Sektion entfernen oder
                durch Steuernummer ersetzen (§ 14 UStG).
              */}
              <p>USt-IdNr.: [UST-IDNR. EINTRAGEN ODER ABSCHNITT ENTFERNEN]</p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-950">
              Streitbeilegung
            </h2>
            <div className="mt-3 space-y-3 text-slate-700">
              <p>
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-slate-950"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                .
              </p>
              <p>
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-950">
              Haftung für Inhalte
            </h2>
            <div className="mt-3 space-y-3 text-slate-700">
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                Informationen nach den allgemeinen Gesetzen bleiben hiervon
                unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
                Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
                wir diese Inhalte umgehend entfernen.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-950">
              Haftung für Links
            </h2>
            <div className="mt-3 space-y-3 text-slate-700">
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich.
              </p>
              <p>
                Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
                mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren
                zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
                inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
                konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
                Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
                Links umgehend entfernen.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-950">
              Urheberrecht
            </h2>
            <div className="mt-3 space-y-3 text-slate-700">
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
              <p>
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
                wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
                werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
                trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
                bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
                von Rechtsverletzungen werden wir derartige Inhalte umgehend
                entfernen.
              </p>
            </div>
          </section>
        </div>
      </main>

      <footer className="mt-16 border-t border-black/5 bg-[#efe8de]">
        <div className="mx-auto flex max-w-3xl flex-col gap-6 px-6 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>Kevin Schulz · Schulzi-Immobilien · Schwerin</div>
          <div className="flex gap-6">
            <Link href="/impressum" className="font-medium text-slate-950">
              Impressum
            </Link>
            <Link href="/datenschutz" className="transition hover:text-slate-950">
              Datenschutz
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
