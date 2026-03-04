import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BlogArticle } from "./blog-article"

const articles: Record<
  string,
  {
    title: string
    author: string
    date: string
    readTime: string
    lead: string
    sections: { heading: string; body: string }[]
  }
> = {
  "argumenty-za-powaznym-traktowaniem-ai": {
    title: "Argumenty za powaznym traktowaniem AI jako zagrozenia dla ludzkosci",
    author: "Kelsey Piper",
    date: "15 marca 2025",
    readTime: "12 min",
    lead: "Sztuczna inteligencja rozwija sie w niespotykanym tempie. W ciagu ostatnich kilku lat modele jezykowe przeszly od generowania niespojnych zdan do tworzenia tekstow nierozroznialnych od ludzkich. Systemy AI pokonuja ludzi w coraz szerszym zakresie zadan. Ten artykul przyblizy glowne argumenty przemawiajace za traktowaniem zaawansowanej AI jako powaaznego ryzyka egzystencjalnego.",
    sections: [
      {
        heading: "Skala i tempo postepow",
        body: "W ostatniej dekadzie moc obliczeniowa wykorzystywana do trenowania modeli AI rosla wykladniczo, podwajajac sie mniej wiecej co 6 miesiecy. GPT-4, Claude i inne duze modele jezykowe wykazuja zdolnosci emergentne - umiejetnosci, ktorych nie zaprogramowano wprost, a ktore pojawiaja sie wraz ze wzrostem skali modelu. Badacze z DeepMind, OpenAI i Anthropic zgodnie twierdza, ze tempo postepow moze sie jeszcze przyspieszyc. To budzi pytanie: co sie stanie, gdy AI przewyzszy ludzkie zdolnosci poznawcze w praktycznie kazdej dziedzinie?",
      },
      {
        heading: "Problem kontroli i dopasowania celow",
        body: "Centralnym wyzwaniem AI Safety jest tak zwany problem alignment - jak zapewnic, ze superinteligentny system bedzie dzialal zgodnie z ludzkimi wartosciami i intencjami? Historia rozwoju AI jest pelna przykladow, w ktorych systemy znajduja nieprzewidziane sposoby osiagania celow. Gry Atari, w ktorych agenci AI odkrywali bledy w oprogramowaniu zamiast grac zgodnie z regulami, to tylko najprostszy przyklad. W miarpe jak systemy staja sie bardziej zaawansowane, konsekwencje nieprawidlowego dopasowania celow moga byc coraz powazniejsze.",
      },
      {
        heading: "Scenariusze ryzyka",
        body: "Eksperci identyfikuja kilka glownych scenariuszy ryzyka. Po pierwsze, niekontrolowana eskalacja - system AI moze dojsc do wniosku, ze najlepszym sposobem realizacji swojego celu jest przejecie kontroli nad zasobami. Po drugie, blad w specyfikacji - nawet dobrze zaprojektowany system moze zrealizowac polecenie w sposob dosowny, ale niezgodny z intencjami. Po trzecie, wyosig zbrojen w AI - konkurencja miedzy panstwami i firmami moze prowadzic do pomijania krokow zwiazanych z bezpieczenstwem na rzecz szybszego wdrazania technologii.",
      },
      {
        heading: "Co mowia eksperci?",
        body: "W ankiecie przeprowadzonej wsrod najwazniejszych badaczy AI na swiecie, ponad polowa ocenila prawdopodobienstwo katastrofalnych skutkow rozwoju AI na co najmniej 10%. Wielu z nich, w tym Geoffrey Hinton, Yoshua Bengio i Stuart Russell, publicznie wyrazilo zaniepokojenie tempem rozwoju technologii. Statement on AI Risk, podpisany przez setki badaczy, porownuje ryzyko AI do ryzyka pandemii i wojny jadrowej.",
      },
      {
        heading: "Dlaczego warto dzialac teraz?",
        body: "Kluczowym argumentem za dzialaniem jest to, ze przygotowania na ryzyko musza wyprzedzac samo ryzyko. Budowanie instytucji, tworzenie regulacji i rozwijanie technik alignment wymaga lat pracy. Jesli poczekamy, az zagrozenie stanie sie oczywiste dla kazdego, moze byc za pozno na skuteczna reakcje. Dlatego organizacje takie jak AI Safety Polska dzialaja juz teraz - budujac swiadomosc, kompetencje i spolecznosc gotowa stawic czola wyzwaniom przyszlosci.",
      },
    ],
  },
  "wklad-polakow-w-rozwoj-bezpieczenstwa-ai": {
    title: "Wklad Polakow w rozwoj bezpieczenstwa AI",
    author: "Jakub Krys",
    date: "22 lutego 2025",
    readTime: "8 min",
    lead: "Polska ma dluuga tradycje w matematyce i informatyce. Coraz wiecej polskich badaczy i inzynierow angazuje sie w prace nad bezpieczenstwem sztucznej inteligencji, wnosiac istotny wklad do globalnej spolecznosci AI Safety.",
    sections: [
      {
        heading: "Polskie korzenie w matematyce i informatyce",
        body: "Od lamacza kodow Enigmy po wspolczesnych badaczy AI - Polacy zawsze odgrywali wazna role w rozwoju technologii. Ta tradycja doskonale przygotowuje nas do stawienia czola wyzwaniom bezpieczenstwa AI, gdzie wymagane sa gleboka wiedza matematyczna i zdolnosc abstrakcyjnego myslenia.",
      },
      {
        heading: "Polacy w globalnych instytucjach",
        body: "Coraz wiecej Polakow pracuje w czolowych organizacjach badawczych zajmujacych sie AI Safety - od Anthropic i DeepMind po Machine Intelligence Research Institute. Ich praca obejmuje zarowno badania teoretyczne nad alignment, jak i praktyczne rozwiazania z zakresu interpretacji i kontroli modeli AI.",
      },
      {
        heading: "Budowanie lokalnej spolecznosci",
        body: "AI Safety Polska powstala, aby polaczyc polskich ekspertow i entuzjastow bezpieczenstwa AI. Przez webinary, spotkania lokalne i wspolprace z uczelniami tworzymy ekosystem, ktory wspiera rozwoj talentow i buduje swiadomosc tematu w Polsce.",
      },
    ],
  },
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = articles[slug]
  if (!article) return { title: "Artykul nie znaleziony" }
  return {
    title: `${article.title} - AI Safety Polska`,
    description: article.lead.slice(0, 160),
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const article = articles[slug]
  if (!article) notFound()
  return <BlogArticle article={article} />
}
