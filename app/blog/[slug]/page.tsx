import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BlogArticle } from "./blog-article"

const articles: Record<
  string,
  {
    title: string
    titleEN?: string
    author: string
    date: string
    dateEN?: string
    readTime: string
    lead: string
    leadEN?: string
    sections: { heading: string; headingEN?: string; body: string; bodyEN?: string }[]
  }
> = {
  "intro-ai-safety": {
    title: "Dlaczego powinieneś zainteresować się AI Safety?",
    titleEN: "Why should you care about AI Safety?",
    author: "Marcel Windys",
    date: "8 kwietnia 2025",
    dateEN: "April 8, 2025",
    readTime: "12 min",
    lead: "Sztuczna inteligencja rozwija się w niespotykanym tempie. W ciągu ostatnich kilku lat modele językowe przeszły od generowania niespójnych zdań do tworzenia tekstów nierozróżnialnych od ludzkich. Systemy AI pokonują ludzi w coraz szerszym zakresie zadań. Ten artykuł przybliży główne argumenty przemawiające za traktowaniem zaawansowanej AI jako poważnego ryzyka egzystencjalnego.",
    leadEN: "Artificial intelligence is developing at an unprecedented pace. Over the past few years, language models have gone from generating incoherent sentences to creating texts indistinguishable from human-written ones. AI systems are outperforming humans in an ever-wider range of tasks. This article will outline the main arguments for treating advanced AI as a serious existential risk.",
    sections: [
      {
        heading: "Skala i tempo postępów",
        headingEN: "Scale and pace of progress",
        body: "W ostatniej dekadzie moc obliczeniowa wykorzystywana do trenowania modeli AI rosła wykładniczo, podwajając się mniej więcej co 6 miesięcy. GPT-4, Claude i inne duże modele językowe wykazują zdolności emergentne - umiejętności, których nie zaprogramowano wprost, a które pojawiają się wraz ze wzrostem skali modelu. Badacze z DeepMind, OpenAI i Anthropic zgodnie twierdzą, że tempo postępów może się jeszcze przyspieszyć. To budzi pytanie: co się stanie, gdy AI przewyższy ludzkie zdolności poznawcze w praktycznie każdej dziedzinie?",
        bodyEN: "Over the past decade, the computing power used to train AI models has grown exponentially, roughly doubling every 6 months. GPT-4, Claude, and other large language models exhibit emergent capabilities - skills that were not explicitly programmed but appear as the model scales up. Researchers from DeepMind, OpenAI, and Anthropic agree that the pace of progress may accelerate further. This raises the question: what will happen when AI surpasses human cognitive abilities in virtually every domain?",
      },
      {
        heading: "Problem kontroli i dopasowania celów",
        headingEN: "The control and goal alignment problem",
        body: "Centralnym wyzwaniem AI Safety jest tak zwany problem alignment - jak zapewnić, że superinteligentny system będzie działał zgodnie z ludzkimi wartościami i intencjami? Historia rozwoju AI jest pełna przykładów, w których systemy znajdują nieprzewidziane sposoby osiągania celów. Gry Atari, w których agenci AI odkrywali błędy w oprogramowaniu zamiast grać zgodnie z regulami, to tylko najprostszy przykład. W miarę jak systemy stają się bardziej zaawansowane, konsekwencje nieprawidłowego dopasowania celów mogą być coraz poważniejsze.",
        bodyEN: "The central challenge of AI Safety is the so-called alignment problem - how to ensure that a superintelligent system will act in accordance with human values and intentions? The history of AI development is full of examples where systems find unforeseen ways to achieve goals. Atari games, where AI agents discovered software bugs instead of playing by the rules, are just the simplest example. As systems become more advanced, the consequences of misaligned goals can become increasingly severe.",
      },
      {
        heading: "Scenariusze ryzyka",
        headingEN: "Risk scenarios",
        body: "Eksperci identyfikują kilka głównych scenariuszy ryzyka. Po pierwsze, niekontrolowana eskalacja - system AI może dojść do wniosku, że najlepszym sposobem realizacji swojego celu jest przejęcie kontroli nad zasobami. Po drugie, błąd w specyfikacji - nawet dobrze zaprojektowany system może zrealizować polecenie w sposób dosowny, ale niezgodny z intencjami. Po trzecie, wyścig zbrojeń w AI - konkurencja między państwami i firmami może prowadzić do pomijania kroków związanych z bezpieczeństwem na rzecz szybszego wdrażania technologii.",
        bodyEN: "Experts identify several main risk scenarios. First, uncontrolled escalation - an AI system may conclude that the best way to achieve its goal is to take control of resources. Second, specification error - even a well-designed system may execute a command literally but contrary to intentions. Third, the AI arms race - competition between states and companies may lead to skipping safety steps in favour of faster technology deployment.",
      },
      {
        heading: "Co mówią eksperci?",
        headingEN: "What do experts say?",
        body: "W ankiecie przeprowadzonej wśród najważniejszych badaczy AI na świecie, ponad połowa oceniła prawdopodobieństwo katastrofalnych skutków rozwoju AI na co najmniej 10%. Wielu z nich, w tym Geoffrey Hinton, Yoshua Bengio i Stuart Russell, publicznie wyraziło zaniepokojenie tempem rozwoju technologii. Statement on AI Risk, podpisany przez setki badaczy, porównuje ryzyko AI do ryzyka pandemii i wojny jądrowej.",
        bodyEN: "In a survey conducted among the world's leading AI researchers, more than half estimated the probability of catastrophic consequences from AI development at at least 10%. Many of them, including Geoffrey Hinton, Yoshua Bengio, and Stuart Russell, have publicly expressed concern about the pace of technological development. The Statement on AI Risk, signed by hundreds of researchers, compares AI risk to the risk of pandemics and nuclear war.",
      },
      {
        heading: "Dlaczego warto działać teraz?",
        headingEN: "Why act now?",
        body: "Kluczowym argumentem za działaniem jest to, że przygotowania na ryzyko muszą wyprzedzać samo ryzyko. Budowanie instytucji, tworzenie regulacji i rozwijanie technik alignment wymaga lat pracy. Jeśli poczekamy, aż zagrożenie stanie się oczywiste dla każdego, może być za późno na skuteczną reakcję. Dlatego organizacje takie jak AI Safety Polska działają już teraz - budując świadomość, kompetencje i społeczność gotową stawić czoła wyzwaniom przyszłości.",
        bodyEN: "The key argument for action is that preparations for risk must precede the risk itself. Building institutions, creating regulations, and developing alignment techniques takes years of work. If we wait until the threat becomes obvious to everyone, it may be too late for an effective response. That is why organisations like AI Safety Polska are acting now - building awareness, competencies, and a community ready to face the challenges of the future.",
      },
    ],
  },
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
    title: "Wkład Polaków w rozwój bezpieczeństwa AI",
    titleEN: "Polish contributions to the development of AI safety",
    author: "Jakub Kryś",
    date: "22 lutego 2025",
    dateEN: "February 22, 2025",
    readTime: "8 min",
    lead: "Polska ma długą tradycję w matematyce i informatyce. Coraz więcej polskich badaczy i inżynierów angażuje się w prace nad bezpieczeństwem sztucznej inteligencji, wnosząc istotny wkład do globalnej społeczności AI Safety.",
    leadEN: "Poland has a long tradition in mathematics and computer science. More and more Polish researchers and engineers are getting involved in work on artificial intelligence safety, making significant contributions to the global AI Safety community.",
    sections: [
      {
        heading: "Polskie korzenie w matematyce i informatyce",
        headingEN: "Polish roots in mathematics and computer science",
        body: "Od łamaczy kodów Enigmy po współczesnych badaczy AI - Polacy zawsze odgrywali ważną rolę w rozwoju technologii. Ta tradycja doskonale przygotowuje nas do stawienia czoła wyzwaniom bezpieczeństwa AI, gdzie wymagane są głęboka wiedza matematyczna i zdolność abstrakcyjnego myślenia.",
        bodyEN: "From the Enigma code breakers to modern AI researchers - Poles have always played an important role in the development of technology. This tradition prepares us well to face the challenges of AI safety, where deep mathematical knowledge and the ability to think abstractly are required.",
      },
      {
        heading: "Polacy w globalnych instytucjach",
        headingEN: "Poles in global institutions",
        body: "Coraz więcej Polaków pracuje w czołowych organizacjach badawczych zajmujących się AI Safety - od Anthropic i DeepMind po Machine Intelligence Research Institute. Ich praca obejmuje zarówno badania teoretyczne nad alignment, jak i praktyczne rozwiązania z zakresu interpretacji i kontroli modeli AI.",
        bodyEN: "More and more Poles are working in leading research organisations dealing with AI Safety - from Anthropic and DeepMind to the Machine Intelligence Research Institute. Their work includes both theoretical research on alignment and practical solutions in the field of AI model interpretation and control.",
      },
      {
        heading: "Budowanie lokalnej społeczności",
        headingEN: "Building a local community",
        body: "AI Safety Polska powstała, aby połączyć polskich ekspertów i entuzjastów bezpieczeństwa AI. Przez webinary, spotkania lokalne i współpracę z uczelniami tworzymy ekosystem, który wspiera rozwój talentów i buduje świadomość tematu w Polsce.",
        bodyEN: "AI Safety Polska was created to connect Polish experts and AI safety enthusiasts. Through webinars, local meetups, and collaboration with universities, we are creating an ecosystem that supports talent development and builds awareness of the topic in Poland.",
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
