"use client"

import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { ContactFooter } from "@/components/contact-footer"
import type { Locale } from "@/lib/i18n/config"

export const PRIVACY_POLICY_EFFECTIVE_DATE = "2026-06-11"
export const PRIVACY_POLICY_VERSION_DATE = "2026-07-10"

const email = (
  <a className="policy-link" href="mailto:contact@aisafety.org.pl">
    contact@aisafety.org.pl
  </a>
)

const rowsPL = [
  ["Osoby kontaktujące się (e-mail, formularz)", "Imię, nazwisko, adres e-mail, treść korespondencji — w celu udzielenia odpowiedzi i prowadzenia korespondencji.", "Prowadzenie korespondencji i obrona roszczeń: art. 6 ust. 1 lit. f RODO. Do zakończenia sprawy + okres przedawnienia roszczeń."],
  ["Subskrybenci newslettera", "Adres e-mail, imię — w celu wysyłki informacji o działalności Fundacji.", "Wysyłka newslettera: art. 6 ust. 1 lit. a RODO; przechowywanie dowodu zgody i obrona roszczeń: art. 6 ust. 1 lit. f RODO. Do czasu cofnięcia zgody."],
  ["Uczestnicy wydarzeń / kursów / programów", "Dane rejestracyjne, dane kontaktowe — organizacja i realizacja działań statutowych.", "Art. 6 ust. 1 lit. f RODO; w przypadku płatnych wydarzeń art. 6 ust. 1 lit. b RODO; rozliczenia: art. 6 ust. 1 lit. c RODO. Czas trwania działania + okres rozliczeniowy/sprawozdawczy."],
  ["Współpracownicy, wolontariusze, kandydaci", "Dane identyfikacyjne i kontaktowe, dane z CV — nawiązanie i realizacja współpracy, rekrutacja.", "Art. 6 ust. 1 lit. b, c i f RODO; dane opcjonalne, np. zdjęcie/bio: art. 6 ust. 1 lit. a RODO. Rekrutacja: do 6 miesięcy; współpraca: czas trwania + przedawnienie."],
  ["Darczyńcy / przedstawiciele grantodawców (Coefficient Giving, BlueDot Impact)", "Dane kontaktowe osób reprezentujących, dane do rozliczenia grantów i darowizn.", "Art. 6 ust. 1 lit. c i f RODO. Okres: 5 lat wymagany ustawą o rachunkowości i Ordynacją podatkową, licząc od początku roku następującego po roku obrotowym."],
  ["Uczestnicy doradztwa kariery", "Dane identyfikacyjne i kontaktowe, CV, informacje o doświadczeniu i przebiegu kariery oraz notatki z rozmów — realizacja doradztwa, dopasowanie doradcy i ewaluacja programu. Za odrębną zgodą wskazane dane mogą zostać przekazane konkretnej organizacji.", "Realizacja doradztwa: art. 6 ust. 1 lit. b RODO; ewaluacja: art. 6 ust. 1 lit. f RODO; przekazanie danych konkretnej organizacji: art. 6 ust. 1 lit. a RODO. Czas udziału + 12 miesięcy."],
  ["Osoby widoczne na zdjęciach/nagraniach z wydarzeń", "Wizerunek utrwalony podczas wydarzeń Fundacji — dokumentacja i promocja działalności statutowej.", "Dokumentacja ogólnego przebiegu wydarzenia: art. 6 ust. 1 lit. f RODO; publikacja indywidualnego wizerunku: co do zasady art. 6 ust. 1 lit. a RODO + art. 81 prawa autorskiego. Do skutecznego sprzeciwu."],
  ["Członkowie społeczności (Slack)", "Imię i nazwisko/nick, adres e-mail, dane profilu, treść wiadomości — prowadzenie społeczności AI Safety Poland i komunikacja o działaniach Fundacji.", "Art. 6 ust. 1 lit. f RODO; ewentualne działania wymagane prawem: art. 6 ust. 1 lit. c RODO. Do opuszczenia Slacka społeczności lub skutecznego sprzeciwu."],
]

const rowsEN = [
  ["Contact persons (e-mail, form)", "Name, surname, e-mail address and correspondence content — responding and conducting correspondence.", "Article 6(1)(f) GDPR (handling inquiries, communication and defence against claims). Until the matter is resolved plus the applicable limitation period."],
  ["Newsletter subscribers", "E-mail address and name — sending information about the Foundation’s activities.", "Article 6(1)(a) GDPR; Article 6(1)(f) GDPR for storing proof of consent and defending claims. Until consent is withdrawn."],
  ["Participants of events / courses / programmes", "Registration and contact details — organisation and implementation of statutory activities.", "Article 6(1)(f) GDPR; Article 6(1)(b) GDPR for paid events; Article 6(1)(c) GDPR for billing. Duration of the activity plus the required billing/reporting period."],
  ["Collaborators, volunteers, candidates", "Identification and contact data, CV data — establishing and implementing cooperation and recruitment.", "Article 6(1)(b), (c) and (f) GDPR; Article 6(1)(a) GDPR for optional data. Recruitment: up to 6 months; cooperation: duration plus limitation period."],
  ["Donors / representatives of grantors (Coefficient Giving, BlueDot Impact)", "Representatives’ contact details and data required to settle grants and donations.", "Article 6(1)(c) and (f) GDPR. Five years as required by accounting and tax law, counted from the start of the following year."],
  ["Career counselling participants", "Identification and contact information, CV, experience and career information, and interview notes — counselling, advisor matching and programme evaluation. With express consent, designated data may be transferred to a specific organisation.", "Article 6(1)(b) GDPR; Article 6(1)(f) GDPR for evaluation; Article 6(1)(a) GDPR for third-party transfer. Duration of participation plus 12 months."],
  ["People visible in event photos/recordings", "Image captured during Foundation events — documentation and promotion of statutory activities.", "Article 6(1)(f) GDPR for general event documentation; Article 6(1)(a) GDPR and Article 81 of the Copyright Act for individual publication. Until a successful objection."],
  ["Community members (Slack)", "Name/nickname, e-mail address, profile data and message content — running the AI Safety Poland community and communicating about the Foundation’s activities.", "Article 6(1)(f) GDPR; Article 6(1)(c) GDPR where legally required. Until leaving the community or successfully objecting."],
]

const copy = {
  pl: {
    title: "Polityka prywatności",
    foundation: "Fundacji AI Safety Poland",
    effective: "Data wejścia w życie",
    version: "Data obecnej wersji",
    back: "Strona główna",
    headers: ["Kategoria osób / cel", "Zakres i cel przetwarzania", "Podstawa prawna / okres"],
    rows: rowsPL,
  },
  en: {
    title: "Privacy Policy",
    foundation: "AI Safety Poland Foundation",
    effective: "Effective date",
    version: "Date of current version",
    back: "Homepage",
    headers: ["Category of people / purpose", "Scope and purpose of processing", "Legal basis / period"],
    rows: rowsEN,
  },
} as const

function formatDate(value: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === "pl" ? "pl-PL" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`))
}

function PolicyTable({ locale }: { locale: Locale }) {
  const t = copy[locale]
  return (
    <div className="policy-table-wrap" role="region" aria-label={locale === "pl" ? "Tabela celów przetwarzania danych" : "Table of data processing purposes"} tabIndex={0}>
      <table className="policy-table">
        <thead><tr>{t.headers.map((header) => <th scope="col" key={header}>{header}</th>)}</tr></thead>
        <tbody>{t.rows.map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody>
      </table>
    </div>
  )
}

export function PrivacyPolicyPage({ locale }: { locale: Locale }) {
  const t = copy[locale]
  const pl = locale === "pl"
  return (
    <>
      <Navbar />
      <main className="policy-page bg-background pb-20 pt-28 md:pt-32">
        <article className="mx-auto max-w-4xl px-6">
          <Link href={`/${locale}`} className="print-hidden text-sm text-muted-foreground hover:text-foreground">← {t.back}</Link>
          <header className="mt-8 border-b border-border pb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald">{t.foundation}</p>
            <h1 className="mt-3 text-balance text-4xl font-bold text-foreground md:text-5xl">{t.title}</h1>
            <dl className="mt-6 flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:gap-8">
              <div><dt className="inline font-semibold text-foreground">{t.effective}: </dt><dd className="inline">{formatDate(PRIVACY_POLICY_EFFECTIVE_DATE, locale)}</dd></div>
              <div><dt className="inline font-semibold text-foreground">{t.version}: </dt><dd className="inline">{formatDate(PRIVACY_POLICY_VERSION_DATE, locale)}</dd></div>
            </dl>
          </header>

          <div className="policy-content">
            <section><h2>1. {pl ? "Administrator danych osobowych" : "Data Controller"}</h2>{pl ? <><p>Administratorem Twoich danych osobowych jest Fundacja AI Safety Poland z siedzibą w Poznaniu, ul. Święty Marcin 29/8, 61-806 Poznań, wpisana do właściwego rejestru Krajowego Rejestru Sądowego pod numerem KRS 0001247485, NIP 7831955886, REGON 544992138 (dalej: „Fundacja” lub „Administrator”).</p><p>We wszystkich sprawach dotyczących ochrony danych osobowych możesz kontaktować się z nami pod adresem e-mail: {email} lub korespondencyjnie na adres siedziby. Fundacja nie powołała inspektora ochrony danych; funkcję kontaktową w sprawach danych pełni Zarząd Fundacji.</p></> : <><p>The Controller of your personal data is the AI Safety Poland Foundation, with its registered office at Święty Marcin 29/8 Street, 61-806 Poznań, entered in the relevant register of the National Court Register under KRS number 0001247485, NIP 7831955886 and REGON 544992138 (the “Foundation” or “Controller”).</p><p>In all matters concerning personal data protection, contact us by e-mail at {email} or by mail to our registered office. The Foundation has not appointed a Data Protection Officer; the Management Board serves as the contact point for data matters.</p></>}</section>
            <section><h2>2. {pl ? "Podstawowe pojęcia" : "Basic concepts"}</h2><p>{pl ? "RODO oznacza Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE." : "GDPR refers to Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons regarding the processing of personal data and the free movement of such data, repealing Directive 95/46/EC."}</p></section>
            <section><h2>3. {pl ? "Cele, zakres i podstawy prawne przetwarzania" : "Purposes, scope and legal basis of processing"}</h2><p>{pl ? "W zależności od tego, w jaki sposób wchodzisz z nami w interakcję, przetwarzamy Twoje dane w następujących celach:" : "Depending on how you interact with us, we process your data for the following purposes:"}</p><PolicyTable locale={locale} /></section>
            <section><h2>4. {pl ? "Dobrowolność podania danych" : "Voluntary provision of data"}</h2><p>{pl ? "Podanie danych osobowych jest dobrowolne, jednak w niektórych przypadkach jest niezbędne, aby otrzymać odpowiedź, zapisać się na newsletter lub wziąć udział w wydarzeniu. Brak danych może uniemożliwić te działania. Zgoda na przekazanie CV lub innych danych konkretnej organizacji jest dobrowolna i jej brak nie wpływa na udział w doradztwie kariery." : "Providing personal data is voluntary, but may be necessary to receive a response, subscribe to a newsletter or participate in an event. Failure to provide data may prevent these activities. Consent to transfer a CV or other data to a specific organisation is voluntary and does not affect participation in career counselling."}</p></section>
            <section><h2>5. {pl ? "Odbiorcy danych" : "Data recipients"}</h2><p>{pl ? "Dane mogą być przekazywane podmiotom przetwarzającym je na zlecenie Fundacji oraz odrębnym administratorom, wyłącznie w niezbędnym zakresie:" : "Data may be transferred to processors acting for the Foundation and to separate controllers, only where necessary:"}</p><ul>{(pl ? ["dostawcy IT, hostingu i poczty (ProtonMail, Google Workspace)", "dostawcy narzędzi komunikacji i organizacji pracy (Slack, Zoom, Google Meet, Airtable)", "biuro rachunkowe", "bank oraz podmioty uprawnione przepisami", "grantodawcy i partnerzy (Coefficient Giving, BlueDot Impact)", "organizacje prowadzące rekrutacje, programy lub projekty rozwoju kariery — wyłącznie po odrębnej zgodzie"] : ["IT, hosting and e-mail providers (ProtonMail, Google Workspace)", "communication and work-organisation providers (Slack, Zoom, Google Meet, Airtable)", "the Foundation’s accounting office", "the bank and entities authorised by law", "grantors and partners (Coefficient Giving, BlueDot Impact)", "organisations conducting recruitment or career-development projects — only after separate consent"]).map((x) => <li key={x}>{x}</li>)}</ul></section>
            <section><h2>6. {pl ? "Przekazywanie danych poza EOG" : "Transfer of data outside the EEA"}</h2><p>{pl ? "Część dostawców i grantodawców ma siedzibę w państwach trzecich, w szczególności w USA. Przekazanie danych odbywa się na podstawie zabezpieczeń przewidzianych w RODO, zwłaszcza standardowych klauzul umownych lub decyzji stwierdzającej odpowiedni stopień ochrony. Kopię zabezpieczeń można uzyskać, kontaktując się z Administratorem." : "Some providers and funders are based in third countries, particularly the United States. Transfers rely on safeguards under the GDPR, especially standard contractual clauses or an adequacy decision. You may obtain a copy of the safeguards by contacting the Controller."}</p></section>
            <section><h2>7. {pl ? "Okres przechowywania danych" : "Data storage period"}</h2><p>{pl ? "Dane przechowujemy przez okres niezbędny do realizacji celu, a następnie przez okres wymagany prawem (co do zasady 5 lat) lub do przedawnienia roszczeń. Dane oparte na zgodzie przechowujemy do jej cofnięcia. Szczegóły zawiera tabela w pkt 3." : "We store data for the period necessary for its purpose, then for the period required by law (generally five years) or until claims expire. Data based on consent is stored until withdrawal. Detailed periods appear in section 3."}</p></section>
            <section><h2>8. {pl ? "Twoje prawa" : "Your rights"}</h2><p>{pl ? "W związku z przetwarzaniem danych przysługują Ci:" : "In connection with data processing, you have:"}</p><ul>{(pl ? ["prawo dostępu do danych i uzyskania kopii", "prawo do sprostowania danych", "prawo do usunięcia danych", "prawo do ograniczenia przetwarzania", "prawo do przenoszenia danych", "prawo sprzeciwu wobec przetwarzania opartego na prawnie uzasadnionym interesie", "prawo cofnięcia zgody w dowolnym momencie"] : ["the right to access data and obtain a copy", "the right to rectify data", "the right to have data deleted", "the right to restrict processing", "the right to data portability", "the right to object to processing based on legitimate interests", "the right to withdraw consent at any time"]).map((x) => <li key={x}>{x}</li>)}</ul><p>{pl ? <>Aby skorzystać z praw, napisz na {email}. Możesz też złożyć skargę do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa.</> : <>To exercise these rights, write to {email}. You may also complain to the President of the Personal Data Protection Office, ul. Stawki 2, 00-193 Warsaw.</>}</p></section>
            <section><h2>9. {pl ? "Profilowanie" : "Profiling"}</h2><p>{pl ? "Twoje dane nie są wykorzystywane do zautomatyzowanego podejmowania decyzji, w tym profilowania wywołującego skutki prawne." : "Your data is not used for automated decision-making, including profiling that produces legal effects."}</p></section>
            <section><h2>10. {pl ? "Pliki cookies" : "Cookies"}</h2><p>{pl ? "Nasza strona korzysta z plików cookies — niewielkich plików tekstowych zapisywanych na urządzeniu. Stosujemy:" : "Our website uses cookies—small text files stored on your device. We use:"}</p><ul>{(pl ? ["cookies niezbędne — konieczne do prawidłowego działania strony (art. 6 ust. 1 lit. f RODO)", "cookies analityczne i statystyczne — wyłącznie za zgodą wyrażoną przez baner cookies"] : ["necessary cookies — required for the proper functioning of the website (Article 6(1)(f) GDPR)", "analytical and statistical cookies — only with consent expressed through a cookie banner"]).map((x) => <li key={x}>{x}</li>)}</ul><p>{pl ? "Ustawienia cookies możesz zmienić w przeglądarce lub wycofać zgodę. Wyłączenie niektórych cookies może ograniczyć działanie strony." : "You can change browser cookie settings or withdraw consent at any time. Disabling some cookies may limit site functionality."}</p></section>
            <section><h2>11. {pl ? "Zmiany Polityki prywatności" : "Changes to the Privacy Policy"}</h2><p>{pl ? "Zastrzegamy sobie prawo do aktualizacji niniejszej Polityki. Aktualna wersja jest zawsze publikowana na stronie ze wskazaniem daty wejścia w życie." : "We reserve the right to update this Policy. The current version is always published on our website with its effective date."}</p></section>
          </div>
        </article>
      </main>
      <ContactFooter />
    </>
  )
}
