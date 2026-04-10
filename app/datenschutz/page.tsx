import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – Schulzi-Immobilien",
  description:
    "Datenschutzerklärung von Schulzi-Immobilien gemäß DSGVO.",
};

export default function Datenschutz() {
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
          Datenschutzerklärung
        </h1>
        <p className="mt-2 text-sm text-stone-500">
          Gemäß Art. 13, 14 DSGVO – Stand: April 2026
        </p>

        <div className="mt-12 space-y-10">
          <section>
            <h2 className="text-lg font-semibold text-slate-950">
              1. Verantwortlicher
            </h2>
            <div className="mt-3 space-y-1 text-slate-700">
              <p>Kevin Schulz</p>
              <p>Schulzi-Immobilien</p>
              {/* TODO: Adresse eintragen */}
              <p>[Straße] [Hausnummer], [PLZ] Schwerin</p>
              {/* TODO: Kontaktdaten eintragen */}
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:[EMAIL]"
                  className="underline underline-offset-2 hover:text-slate-950"
                >
                  [E-Mail-Adresse]
                </a>
              </p>
              <p>
                Telefon:{" "}
                <a
                  href="tel:[TELEFON]"
                  className="underline underline-offset-2 hover:text-slate-950"
                >
                  [Telefonnummer]
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-950">
              2. Allgemeine Hinweise zur Datenverarbeitung
            </h2>
            <div className="mt-3 space-y-3 text-slate-700">
              <p>
                Wir nehmen den Schutz Ihrer persönlichen Daten ernst. Diese
                Datenschutzerklärung informiert Sie darüber, welche
                personenbezogenen Daten wir erheben, zu welchem Zweck und auf
                welcher Rechtsgrundlage wir sie verarbeiten sowie welche Rechte
                Ihnen zustehen.
              </p>
              <p>
                Personenbezogene Daten sind alle Informationen, die sich auf
                eine identifizierte oder identifizierbare natürliche Person
                beziehen (Art. 4 Nr. 1 DSGVO).
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-950">
              3. Hosting
            </h2>
            <div className="mt-3 space-y-3 text-slate-700">
              <p>
                Diese Website wird bei{" "}
                <strong>Vercel Inc.</strong>, 440 N Barranca Ave #4133,
                Covina, CA 91723, USA, gehostet. Beim Aufruf unserer Website
                werden automatisch technische Zugriffsdaten erfasst und in
                Server-Logfiles gespeichert, darunter:
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>IP-Adresse des anfragenden Geräts</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Aufgerufene URL</li>
                <li>Browser-Typ und Betriebssystem</li>
                <li>HTTP-Statuscode</li>
              </ul>
              <p>
                Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
                DSGVO (berechtigtes Interesse an einem sicheren und
                funktionsfähigen Betrieb der Website). Die Daten werden nach
                spätestens 30 Tagen gelöscht.
              </p>
              <p>
                Vercel verarbeitet Daten ggf. in den USA. Es gelten die
                Standardvertragsklauseln (SCC) der EU-Kommission. Weitere
                Informationen:{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-slate-950"
                >
                  Vercel Privacy Policy
                </a>
                .
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-950">
              4. Kontaktformular
            </h2>
            <div className="mt-3 space-y-3 text-slate-700">
              <p>
                Wenn Sie unser Kontaktformular nutzen, verarbeiten wir folgende
                Daten:
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Vor- und Nachname</li>
                <li>E-Mail-Adresse</li>
                <li>Telefonnummer (optional)</li>
                <li>Projekttyp</li>
                <li>Angabe zum Grundstück</li>
                <li>Geplanter Zeitraum</li>
                <li>Freitext-Nachricht</li>
              </ul>
              <p>
                <strong>Zweck:</strong> Bearbeitung Ihrer Anfrage und
                Kontaktaufnahme zum Erstgespräch.
              </p>
              <p>
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO
                (Anbahnung eines Vertragsverhältnisses) sowie Art. 6 Abs. 1 lit.
                f DSGVO (berechtigtes Interesse an der Bearbeitung von
                Kundenanfragen).
              </p>
              <p>
                <strong>Übermittlung:</strong> Die Formulardaten werden an einen
                Automatisierungsdienst (n8n, betrieben von automatiq.tech)
                übertragen und dort zur Weiterleitung an uns verarbeitet. Eine
                Speicherung über den Weiterleitungsvorgang hinaus findet nicht
                statt.
              </p>
              <p>
                <strong>Speicherdauer:</strong> Die Daten werden nach
                abschließender Bearbeitung Ihrer Anfrage gelöscht, spätestens
                nach 6 Monaten, sofern keine gesetzliche Aufbewahrungspflicht
                besteht.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-950">
              5. Schriftarten
            </h2>
            <div className="mt-3 text-slate-700">
              <p>
                Diese Website verwendet die Schriftart <em>Geist</em> von
                Vercel. Die Schriftdatei wird beim Build-Prozess lokal
                eingebunden und beim Seitenaufruf direkt von unserem Server
                ausgeliefert. Es erfolgt <strong>keine</strong> Verbindung zu
                externen Schriftanbieter-Servern.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-950">
              6. Cookies & Tracking
            </h2>
            <div className="mt-3 text-slate-700">
              <p>
                Diese Website verwendet <strong>keine</strong> Tracking-Cookies,
                keine Analyse-Tools (z. B. Google Analytics) und keine
                Werbenetzwerke. Es werden ausschließlich technisch notwendige
                Cookies eingesetzt, die für den Betrieb der Website erforderlich
                sind (Art. 6 Abs. 1 lit. f DSGVO). Einer Einwilligung bedarf es
                hierfür nicht.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-950">
              7. Ihre Rechte als betroffene Person
            </h2>
            <div className="mt-3 space-y-3 text-slate-700">
              <p>Sie haben nach der DSGVO folgende Rechte:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong>Auskunft</strong> (Art. 15 DSGVO): Sie können
                  Auskunft über die zu Ihrer Person gespeicherten Daten
                  verlangen.
                </li>
                <li>
                  <strong>Berichtigung</strong> (Art. 16 DSGVO): Sie können die
                  Berichtigung unrichtiger Daten verlangen.
                </li>
                <li>
                  <strong>Löschung</strong> (Art. 17 DSGVO): Sie können die
                  Löschung Ihrer Daten verlangen, soweit keine gesetzlichen
                  Aufbewahrungspflichten entgegenstehen.
                </li>
                <li>
                  <strong>Einschränkung der Verarbeitung</strong> (Art. 18
                  DSGVO): Sie können die Einschränkung der Verarbeitung Ihrer
                  Daten verlangen.
                </li>
                <li>
                  <strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO): Sie
                  haben das Recht, Ihre Daten in einem strukturierten,
                  maschinenlesbaren Format zu erhalten.
                </li>
                <li>
                  <strong>Widerspruch</strong> (Art. 21 DSGVO): Sie können der
                  Verarbeitung Ihrer Daten auf Basis von Art. 6 Abs. 1 lit. f
                  DSGVO jederzeit widersprechen.
                </li>
                <li>
                  <strong>Beschwerde</strong> (Art. 77 DSGVO): Sie haben das
                  Recht, sich bei der zuständigen Datenschutzaufsichtsbehörde zu
                  beschweren. Zuständig ist der{" "}
                  <a
                    href="https://www.datenschutz-mv.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-slate-950"
                  >
                    Landesbeauftragter für Datenschutz und
                    Informationsfreiheit Mecklenburg-Vorpommern
                  </a>
                  .
                </li>
              </ul>
              <p>
                Zur Ausübung Ihrer Rechte wenden Sie sich bitte an die oben
                genannten Kontaktdaten des Verantwortlichen.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-950">
              8. Aktualität dieser Datenschutzerklärung
            </h2>
            <div className="mt-3 text-slate-700">
              <p>
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand
                April 2026. Durch die Weiterentwicklung unserer Website oder
                aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann
                es notwendig werden, diese Datenschutzerklärung zu ändern.
              </p>
            </div>
          </section>
        </div>
      </main>

      <footer className="mt-16 border-t border-black/5 bg-[#efe8de]">
        <div className="mx-auto flex max-w-3xl flex-col gap-6 px-6 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>Kevin Schulz · Schulzi-Immobilien · Schwerin</div>
          <div className="flex gap-6">
            <Link href="/impressum" className="transition hover:text-slate-950">
              Impressum
            </Link>
            <Link href="/datenschutz" className="font-medium text-slate-950">
              Datenschutz
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
