import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BlogArticle, type ArticleData } from "./blog-article"

const articles: Record<string, ArticleData> = {
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
    title: "Polacy w AI Safety",
    titleEN: "Poles in AI Safety",
    author: "Jakub Kryś",
    date: "22 lutego 2025",
    dateEN: "February 22, 2025",
    readTime: "15 min",
    lead: "Choć na mapie organizacji AI Safety dominują Dolina Krzemowa i Londyn, globalny układ sił staje się coraz bardziej zróżnicowany. W ostatnim czasie dynamicznie rozwijają się nowe ośrodki w wielu zakątkach świata. Polska nie stanowi tu wyjątku; co więcej, może poszczycić się naprawdę znaczącą liczbą ekspertów w tej dziedzinie. W poniższym artykule przybliżymy sylwetki Polaków oraz osób związanych z Polską, które aktywnie działają na rzecz redukcji ryzyk płynących z zaawansowanej sztucznej inteligencji.",
    leadEN: "Although Silicon Valley and London dominate the AI Safety landscape, the global balance of power is becoming increasingly diverse. Recently, new centres have been dynamically developing in many corners of the world. Poland is no exception; moreover, it can boast a truly significant number of experts in this field. In this article, we will introduce the profiles of Poles and people connected with Poland who are actively working to reduce the risks of advanced artificial intelligence.",
    leadNote:
      "Nie widzisz siebie na tej liście? [Dołącz do naszej społeczności](https://forms.gle/J2yTVJXYcaMyR5i56) i daj o sobie znać! ;)",
    leadNoteEN:
      "Don't see yourself on this list? [Join our community](https://forms.gle/J2yTVJXYcaMyR5i56) and let us know! ;)",
    sections: [
      {
        heading: "Jan Betley & Anna Sztyber-Betley",
        body: `Jest to para jednych z najbardziej rozpoznawalnych naukowców w AI safety za sprawą ich prac nad zadziwiającymi zachowaniami LLMów. Jan i Anna skupiają się na badaniu zjawisk związanych z „rozumowaniem poza kontekstem" (out-of-context reasoning), a także na tym, jak LLMy uczą się ukrytych informacji ze swoich danych w trakcie treningu lub fine-tuningu. Dwie z ich publikacji o tzw. [Emergent Misalignment](https://www.nature.com/articles/s41586-025-09937-5) i [Subliminal Learning](https://www.nature.com/articles/s41586-026-10319-8) niedawno ukazały się w Nature – jednym z najbardziej prestiżowych czasopism naukowych na świecie.

Anna ukończyła doktorat z Automatyki i Robotyki i jest adiunktem na Wydziale Mechatroniki Politechniki Warszawskiej. Jan z kolei przez ponad dekadę pracował jako software developer, po czym zmienił ścieżkę zawodową na AI Safety dzięki programom takim jak [ARENA](https://www.arena.education/) i [Astra](https://constellation.org/programs/astra). Wspólnie współpracują z grupą [TruthfulAI](https://truthful.ai/) Owaina Evansa.`,
        bodyEN: `This couple are among the most recognised researchers in AI safety thanks to their work on surprising behaviours of LLMs. Jan and Anna focus on studying phenomena related to out-of-context reasoning, as well as how LLMs learn hidden information from their data during training or fine-tuning. Two of their publications on [Emergent Misalignment](https://www.nature.com/articles/s41586-025-09937-5) and [Subliminal Learning](https://www.nature.com/articles/s41586-026-10319-8) were recently published in Nature – one of the most prestigious scientific journals in the world.

Anna completed her PhD in Automation and Robotics and is an assistant professor at the Faculty of Mechatronics at Warsaw University of Technology. Jan worked as a software developer for over a decade before switching his career to AI Safety through programmes such as [ARENA](https://www.arena.education/) and [Astra](https://constellation.org/programs/astra). Together they collaborate with Owain Evans' [TruthfulAI](https://truthful.ai/) group.`,
        linksTitle: "Poczytaj więcej:",
        linksTitleEN: "Read more:",
        links: [
          {
            href: "https://www.nature.com/articles/s41586-025-09937-5",
            label: "Training large language models on narrow tasks can lead to broad misalignment",
          },
          {
            href: "https://www.nature.com/articles/s41586-026-10319-8",
            label: "Language models transmit behavioural traits through hidden signals in data",
          },
          {
            href: "https://arxiv.org/abs/2512.09742",
            label: "Weird Generalization and Inductive Backdoors: New Ways to Corrupt LLMs",
          },
          {
            href: "https://www.youtube.com/watch?v=wSgSd9rEr7Y",
            label: "Weird Generalization, Inductive Backdoors (and Subliminal Learning) – prezentacja Anny",
            labelEN: "Weird Generalization, Inductive Backdoors (and Subliminal Learning) – Anna's talk",
          },
        ],
      },
      {
        heading: "Tomek Korbak",
        body: `Tomek pracuje w OpenAI, gdzie skupia się na monitorowaniu LLMów pod kątem niepożądanych zachowań (misalignment) i kontrolą systemów AI. Jest autorem ponad 50 prac naukowych w zakresie AI i jednym z wiodących ekspertów w zakresie wykorzystania „ciągu rozumowania" (chain of thought) LLMów w celu wykrycia oznak misalignmentu ([chain of thought monitoring](https://arxiv.org/abs/2507.11473)). Poprzednio pracował w londyńskim UK AI Security Institute i Anthropic, badając aspekty takie jak [filtrowanie danych treningowych](https://arxiv.org/abs/2508.06601) i [sykofancja](https://arxiv.org/abs/2310.13548). Tomek studiował kognitywistykę, filozofię i fizykę na Uniwersytecie Warszawskim, a następnie ukończył doktorat na Uniwersytecie Sussex w UK z zakresu „uczenia przez wzmacnianie ze sprzężeniem zwrotnym od człowieka" (RLHF – Reinforcement Learning from Human Feedback).`,
        bodyEN: `Tomek works at OpenAI, where he focuses on monitoring LLMs for misalignment and on AI system control. He is the author of over 50 scientific papers on AI and one of the leading experts on using LLMs' chain of thought to detect signs of misalignment ([chain of thought monitoring](https://arxiv.org/abs/2507.11473)). Previously he worked at the London UK AI Security Institute and Anthropic, studying aspects such as [training-data filtering](https://arxiv.org/abs/2508.06601) and [sycophancy](https://arxiv.org/abs/2310.13548). Tomek studied cognitive science, philosophy and physics at the University of Warsaw, and then completed his PhD at the University of Sussex in the UK on Reinforcement Learning from Human Feedback (RLHF).`,
        linksTitle: "Poczytaj więcej:",
        linksTitleEN: "Read more:",
        links: [
          {
            href: "https://arxiv.org/abs/2507.11473",
            label: "Chain of Thought Monitorability: A New and Fragile Opportunity for AI Safety",
          },
          {
            href: "https://arxiv.org/abs/2602.22303",
            label: "Training Agents to Self-Report Misbehavior",
          },
          {
            href: "https://arxiv.org/abs/2512.13526",
            label: "Async Control: Stress-testing Asynchronous Control Measures for LLM Agents",
          },
          {
            href: "https://arxiv.org/abs/2508.06601",
            label:
              "Deep Ignorance: Filtering Pretraining Data Builds Tamper-Resistant Safeguards into Open-Weight LLMs",
          },
          {
            href: "https://arxiv.org/abs/2502.14828",
            label: "Fundamental Limitations in Pointwise Defences of LLM Finetuning APIs",
          },
        ],
      },
      {
        heading: "Krzysztof Bar",
        body: `Krzysztof jest CEO [London Initiative for Safe AI](https://www.safeai.org.uk/) (LISA), londyńskiego hubu AI Safety goszczącego na co dzień ponad 100 osób i zrzeszającego ponad 1000 członków, co czyni go największym tego typu ośrodkiem w Europie – ustępującym skalą jedynie kalifornijskiemu Berkeley. LISA jest również siedzibą organizacji takich jak [Apollo Research](https://www.apolloresearch.ai/) oraz domem dla programów szkoleniowych typu [ARENA](https://www.arena.education/), [LASR](https://www.lasrlabs.org/) czy [Pivotal](https://www.pivotal-research.org/fellowship).

Naukowa podróż Krzysztofa zaczęła się jednak od… komputerów kwantowych! Po studiach z matematyki i informatyki na Uniwersytecie Oksfordzkim, obronił na tej uczelni doktorat, specjalizując się w teoretycznych aspektach obliczeń kwantowych oraz teorii kategorii. W tym samym okresie pełnił również funkcję przewodniczącego Federacji Polskich Stowarzyszeń Studenckich w Wielkiej Brytanii.

Po doktoracie, Krzysztof przeszedł do sektora prywatnego, gdzie przez prawie dekadę pracował jako konsultant w firmie Oliver Wyman. Skupiał się tam na doradztwie w sprawach polityki publicznej i technologii, pracując m.in. przy wprowadzaniu Online Safety Act w UK. Krzysztof zmienił kierunek swojej ścieżki zawodowej na początku 2025 roku, kiedy to ukończył kurs AGI Strategy od [BlueDot Impact](https://bluedot.org/), a następnie w ramach [GovAI Fellowship](https://www.governance.ai/opportunities) pracował z Tobym Ordem nad analizą konsekwencji „skalowania inferencji" w modelach myślących ([inference scaling](https://www.tobyord.com/writing/inference-scaling-reshapes-ai-governance)).`,
        bodyEN: `Krzysztof is CEO of [London Initiative for Safe AI](https://www.safeai.org.uk/) (LISA), a London AI Safety hub that hosts over 100 people daily and gathers over 1000 members, making it the largest such centre in Europe – surpassed in scale only by Berkeley, California. LISA is also home to organisations such as [Apollo Research](https://www.apolloresearch.ai/) and training programmes like [ARENA](https://www.arena.education/), [LASR](https://www.lasrlabs.org/) and [Pivotal](https://www.pivotal-research.org/fellowship).

Krzysztof's scientific journey, however, began with… quantum computers! After studying mathematics and computer science at the University of Oxford, he earned his PhD there, specialising in theoretical aspects of quantum computing and category theory. During the same period he also chaired the Federation of Polish Student Societies in the UK.

After his PhD, Krzysztof moved to the private sector, where he worked for nearly a decade as a consultant at Oliver Wyman. He focused there on public-policy and technology advisory, working among others on the rollout of the UK Online Safety Act. Krzysztof pivoted his career in early 2025, completing the AGI Strategy course from [BlueDot Impact](https://bluedot.org/) and then, as part of the [GovAI Fellowship](https://www.governance.ai/opportunities), working with Toby Ord on the consequences of [inference scaling](https://www.tobyord.com/writing/inference-scaling-reshapes-ai-governance) in reasoning models.`,
        linksTitle: "Warto obejrzeć:",
        linksTitleEN: "Worth watching:",
        links: [
          {
            href: "https://www.youtube.com/watch?v=fiy0kQpzOFY",
            label: "wywiad z Krzysztofem przeprowadzony przez założyciela BlueDot Impact",
            labelEN: "interview with Krzysztof by the founder of BlueDot Impact",
          },
        ],
      },
      {
        heading: "Jakub Growiec",
        body: `Jakub jest profesorem i kierownikiem Katedry Ekonomii Ilościowej w warszawskiej Szkole Głównej Handlowej. Jego zainteresowania badawcze obejmują transformacje ekonomiczne wywołane przez zaawansowaną sztuczną inteligencję oraz teorię długookresowego wzrostu gospodarczego i zmian technologicznych. Na ten właśnie temat napisał książkę „Accelerating Economic Growth" opublikowaną przez prestiżowe wydawnictwo Springer.`,
        bodyEN: `Jakub is a professor and head of the Department of Quantitative Economics at the Warsaw School of Economics. His research interests include the economic transformations driven by advanced AI and the theory of long-run economic growth and technological change. He authored the book "Accelerating Economic Growth", published by the prestigious Springer publishing house, on exactly this subject.`,
        linksTitle: "Poczytaj więcej:",
        linksTitleEN: "Read more:",
        links: [
          {
            href: "https://link.springer.com/book/10.1007/978-3-031-07195-9",
            label:
              "Accelerating Economic Growth: Lessons From 200,000 Years of Technological Progress and Human Development",
          },
          {
            href: "https://arxiv.org/abs/2509.04855",
            label: "The Paradox of Doom: Acknowledging Extinction Risk Reduces the Incentive to Prevent It",
          },
          {
            href: "https://arxiv.org/abs/2503.07341",
            label:
              "The Economics of p(doom): Scenarios of Existential Risk and Economic Growth in the Age of Transformative AI",
          },
          {
            href: "https://www.youtube.com/watch?v=a4DQLNR2sdE",
            label: "The Economics of Transformative AI: Hardware, Software, and p(doom) – prezentacja Jakuba",
            labelEN: "The Economics of Transformative AI: Hardware, Software, and p(doom) – Jakub's talk",
          },
        ],
      },
      {
        heading: "Sebastian Cygert",
        body: `Sebastian kieruje Zakładem Bezpieczeństwa i Przejrzystości Sztucznej Inteligencji w polskim instytucie NASK, gdzie prowadzi badania nad wyjaśnialnością oraz interpretowalnością modeli AI. Jego praca obejmuje również audytowanie systemów sztucznej inteligencji oraz rozwój specjalistycznego oprogramowania wspierającego ich analizę.

Sebastian jest autorem ponad 50 prac naukowych w dziedzinie AI. Ukończył doktorat na Politechnice Gdańskiej, specjalizując się w widzeniu maszynowym.`,
        bodyEN: `Sebastian heads the AI Safety and Transparency Department at the Polish NASK institute, where he conducts research on explainability and interpretability of AI models. His work also includes auditing AI systems and developing specialised software to support their analysis.

Sebastian is the author of over 50 scientific papers in the field of AI. He completed his PhD at Gdańsk University of Technology, specialising in computer vision.`,
        linksTitle: "Poczytaj więcej:",
        linksTitleEN: "Read more:",
        links: [
          {
            href: "https://arxiv.org/abs/2502.16174",
            label: "Efficient LLM Moderation with Multi-Layer Latent Prototypes",
          },
        ],
      },
      {
        heading: "Kamil Deja",
        body: `Kamil jest liderem zespołu Generative AI w warszawskim [Instytucie Badawczym IDEAS](https://www.ideas.edu.pl/) oraz adiunktem na Politechnice Warszawskiej. Skupia się na zrozumieniu mechanizmów zachodzących w sieciach neuronowych za pomocą tzw. interpretowalności. Jego badania obejmują nie tylko LLMy, ale także modele dyfuzyjne i wizję komputerową. Jest autorem ponad 40 prac naukowych z zakresu sztucznej inteligencji.

Kamil ukończył studia i doktorat z informatyki na Politechnice Warszawskiej, a następnie współpracował z takimi instytucjami jak La Sapienza w Rzymie czy CERN w Genewie.`,
        bodyEN: `Kamil leads the Generative AI team at the Warsaw-based [IDEAS Research Institute](https://www.ideas.edu.pl/) and is an assistant professor at Warsaw University of Technology. He focuses on understanding the mechanisms inside neural networks through interpretability. His research covers not only LLMs but also diffusion models and computer vision. He is the author of over 40 scientific papers on AI.

Kamil completed his studies and PhD in computer science at Warsaw University of Technology, and then collaborated with institutions such as La Sapienza in Rome and CERN in Geneva.`,
        linksTitle: "Poczytaj więcej:",
        linksTitleEN: "Read more:",
        links: [
          {
            href: "https://arxiv.org/abs/2501.18052",
            label: "SAeUron: Interpretable Concept Unlearning in Diffusion Models with Sparse Autoencoders",
          },
          {
            href: "https://arxiv.org/abs/2512.09654",
            label: "Membership and Dataset Inference Attacks on Large Audio Generative Models",
          },
          {
            href: "https://www.sciencedirect.com/science/article/pii/S0925231225014201",
            label: "Adapt & Align: Continual Learning with Generative Models' Latent Space Alignment",
          },
        ],
      },
      {
        heading: "Bartosz Cywiński",
        body: `Bartosz jest doktorantem w dziedzinie uczenia maszynowego na Politechnice Warszawskiej oraz bliskim współpracownikiem Kamila Deji. W ramach programu MATS współpracuje również z Neelem Nandą i Arthurem Conmy z Google DeepMind. W swojej pracy badawczej skupia się na „interpretowalności mechanistycznej" (mechanistic interpretability) oraz metodach wydobywania z modeli LLM wiedzy ukrytej, której nie ujawniają one bezpośrednio (tzw. eliciting latent knowledge).`,
        bodyEN: `Bartosz is a PhD student in machine learning at Warsaw University of Technology and a close collaborator of Kamil Deja. Through the MATS programme he also collaborates with Neel Nanda and Arthur Conmy from Google DeepMind. His research focuses on mechanistic interpretability and on methods for eliciting latent knowledge from LLMs that they do not reveal directly.`,
        linksTitle: "Poczytaj więcej:",
        linksTitleEN: "Read more:",
        links: [
          {
            href: "https://arxiv.org/abs/2510.01070",
            label: "Eliciting Secret Knowledge from Language Models",
          },
          {
            href: "https://arxiv.org/abs/2602.10371",
            label: "Simple LLM Baselines are Competitive for Model Diffing",
          },
        ],
      },
      {
        heading: "Patryk Wielopolski",
        body: `Patryk ukończył doktorat na Politechnice Wrocławskiej specjalizując się w probabilistycznym modelowaniu niepewności z użyciem „modeli przepływów normalizujących" (normalizing flows). Przez sześć lat pracował w firmie DataWalk, gdzie zarządzał zespołem inżynierów, zdobywając równocześnie doświadczenie w obszarze biznesu oraz zarządzania produktem.

To doświadczenie już wkrótce okazało się bardzo cenne – Patryk zdecydował się na kilka miesięcy przerwy w karierze, w trakcie których zaczął intensywnie poświęcać czas na AI Safety. Po ukończeniu kursów BlueDot Impact, bootcampu [ML4Good](https://ml4good.org/) i paru osobistych projektów, rozpoczął pracę jako Research Manager w [MATS](https://www.matsprogram.org/). Jest to prestiżowy program, który co pół roku pozwala ponad 100 talentom rozwijać badania nad AI Safety pod okiem ekspertów. Na co dzień Patryk nie tylko dba o najwyższy poziom merytoryczny ich prac, ale również zarządza operacyjnym i strukturalnym rozwojem tej organizacji.`,
        bodyEN: `Patryk completed his PhD at Wrocław University of Technology, specialising in probabilistic uncertainty modelling with normalising flows. He spent six years at DataWalk, where he managed a team of engineers while also gaining business and product-management experience.

That experience soon proved very valuable – Patryk took a several-month career break during which he started devoting significant time to AI Safety. After completing BlueDot Impact courses, the [ML4Good](https://ml4good.org/) bootcamp and a few personal projects, he joined [MATS](https://www.matsprogram.org/) as a Research Manager. MATS is a prestigious programme that, every six months, allows over 100 talents to develop AI Safety research under expert guidance. Day to day, Patryk not only ensures the high scientific quality of their work but also manages the operational and structural growth of the organisation.`,
      },
      {
        heading: "Mateusz Dziemian",
        body: `Mateusz pracuje w firmie Gray Swan specjalizującej się w obszarze AI Security oraz usługach z zakresu *red-teamingu*. Oprócz rozwijania infrastruktury inżynieryjnej firmy, Mateusz zajmuje się analizą ataków na modele LLM. Organizacja ta pozyskuje dane od dziesiątek tysięcy użytkowników za pośrednictwem publicznych wyzwań na dedykowanej platformie [Gray Swan Arena](https://app.grayswan.ai/arena). Dzięki temu zespół badawczy może analizować rzeczywiste przypadki i czerpać z kreatywności społeczności. Takie podejście gwarantuje znacznie szersze zbadanie spektrum zagrożeń w porównaniu z tradycyjnymi metodami ewaluacji AI.

Mateusz uczestniczył również w programie SPAR, gdzie badał zjawisko zmowy (*collusion*) między agentami AI nadzorowanymi przez inne modele językowe.`,
        bodyEN: `Mateusz works at Gray Swan, a company specialising in AI Security and red-teaming services. Apart from developing the company's engineering infrastructure, Mateusz analyses attacks on LLMs. The organisation collects data from tens of thousands of users via public challenges on the dedicated [Gray Swan Arena](https://app.grayswan.ai/arena) platform. This allows the research team to analyse real-world cases and tap into the creativity of the community, ensuring much broader coverage of the threat landscape than traditional AI evaluation methods.

Mateusz also took part in the SPAR programme, where he studied the phenomenon of collusion between AI agents supervised by other language models.`,
        linksTitle: "Poczytaj więcej:",
        linksTitleEN: "Read more:",
        links: [
          {
            href: "https://arxiv.org/abs/2603.15714",
            label:
              "How Vulnerable Are AI Agents to Indirect Prompt Injections? Insights from a Large-Scale Public Competition",
          },
          {
            href: "https://arxiv.org/abs/2410.09024",
            label: "AgentHarm: A Benchmark for Measuring Harmfulness of LLM Agents",
          },
          {
            href: "https://arxiv.org/abs/2410.10871",
            label: "Applying Refusal-Vector Ablation to Llama 3.1 70B Agents",
          },
        ],
      },
      {
        heading: "Julia Bazińska",
        body: `Julia jest związana z firmą Lakera, gdzie odpowiada za projektowanie mechanizmów ochronnych dla przedsiębiorstw wdrażających rozwiązania oparte na agentach AI. Jest współautorką popularnej platformy [Gandalf](https://gandalf.lakera.ai/baseline), która – podobnie jak Gray Swan Arena – pozwala użytkownikom testować modele językowe poprzez symulowane ataki, dostarczając tym samym danych do tworzenia coraz skuteczniejszych zabezpieczeń.

Swoją drogę naukową rozpoczęła od studiów informatycznych 1. stopnia na Uniwersytecie Warszawskim, gdzie pełniła funkcję przewodniczącej Koła Naukowego Uczenia Maszynowego. Tytuł magistra zdobyła na ETH w Zurychu. Jej doświadczenie obejmuje staże naukowe w firmach takich jak IBM, Google oraz Google DeepMind.`,
        bodyEN: `Julia is associated with Lakera, where she designs protection mechanisms for companies deploying AI-agent-based solutions. She is a co-author of the popular [Gandalf](https://gandalf.lakera.ai/baseline) platform, which – like Gray Swan Arena – lets users test language models through simulated attacks, providing data for ever more effective safeguards.

She began her scientific path with a Bachelor's in Computer Science at the University of Warsaw, where she chaired the Machine Learning Student Society. She earned her Master's at ETH Zurich. Her experience includes research internships at companies such as IBM, Google and Google DeepMind.`,
        linksTitle: "Poczytaj więcej:",
        linksTitleEN: "Read more:",
        links: [
          {
            href: "https://arxiv.org/abs/2510.22620",
            label: "Breaking Agent Backbones: Evaluating the Security of Backbone LLMs in AI Agents",
          },
          {
            href: "https://arxiv.org/abs/2501.07927",
            label: "Gandalf the Red: Adaptive Security for LLMs",
          },
          {
            href: "https://arxiv.org/abs/2511.21990",
            label: "A Safety and Security Framework for Real-World Agentic Systems",
          },
        ],
      },
      {
        heading: "Filip Sondej",
        body: `Filip w swoich badaniach skupia się na „oduczaniu" (unlearning), tzn. procesie usuwania z LLMów niepożądanych informacji, które mogłyby posłużyć do celów takich jak np. ataki biologiczne. W przeszłości pracował również nad [kooperacją i zapobieganiem konfliktom między agentami AI](https://longtermrisk.org/research-agenda) w ramach programu [MATS](https://www.matsprogram.org/) oraz we współpracy z londyńskim [Centre on Long-Term Risk](https://longtermrisk.org/).

Filip ukończył informatykę na AGH w Krakowie, a następnie kognitywistykę na Uniwersytecie Jagiellońskim.`,
        bodyEN: `Filip's research focuses on unlearning – the process of removing unwanted information from LLMs that could be used for purposes such as biological attacks. In the past he also worked on [cooperation and conflict prevention between AI agents](https://longtermrisk.org/research-agenda) as part of [MATS](https://www.matsprogram.org/) and in cooperation with the London [Centre on Long-Term Risk](https://longtermrisk.org/).

Filip completed computer science at AGH in Kraków and then cognitive science at Jagiellonian University.`,
        linksTitle: "Poczytaj więcej:",
        linksTitleEN: "Read more:",
        links: [
          {
            href: "https://arxiv.org/abs/2509.11816",
            label:
              "Collapse of Irrelevant Representations (CIR) Ensures Robust and Non-Disruptive LLM Unlearning",
          },
          {
            href: "https://arxiv.org/abs/2506.12484",
            label:
              "Robust LLM Unlearning with MUDMAN: Meta-Unlearning with Disruption Masking And Normalization",
          },
          {
            href: "https://arxiv.org/abs/2502.19145",
            label:
              "Multi-Agent Security Tax: Trading Off Security and Collaboration Capabilities in Multi-Agent Systems",
          },
        ],
      },
      {
        heading: "Konrad Kozaczek",
        body: `Konrad zajmuje się dość niszową (ale jakże ciekawą!) dziedziną AI Safety – badaniem konsekwencji potencjalnego istnienia tzw. „[cyfrowych umysłów](https://forum.effectivealtruism.org/posts/p7BtTgrX8WLXr2mAu/digital-minds-a-quickstart-guide)" w przyszłości, czyli świadomych bytów na bazie sztucznej inteligencji. W swojej pracy analizuje aspekty filozoficzne oraz moralne ich istnienia, a także rozważa, w jaki sposób obecne systemy prawne i polityczne mogłyby zostać rozszerzone, by objąć ich podmiotowość. Konrad interesuje się również zagrożeniami typu [s-risks](https://www.youtube.com/watch?v=fqnJcZiDMDo) (zagrożeniami związanymi z ekstremalnym cierpieniem).

W ramach programu [Future Impact Group](https://futureimpact.group/), Konrad współpracuje z profesorem Jeffem Sebo z New York University oraz z doktorem Bradfordem Saad z Uniwersytetu Oksfordzkiego. Sam jest również mentorem w programie Impact First. Konrad ukończył studia magisterskie filozofii i AI na Northeastern University London, a jego praca dotyczyła badania replikujących się cyfrowych umysłów.`,
        bodyEN: `Konrad works in a rather niche (but fascinating!) area of AI Safety – studying the consequences of the potential future existence of so-called "[digital minds](https://forum.effectivealtruism.org/posts/p7BtTgrX8WLXr2mAu/digital-minds-a-quickstart-guide)", i.e. conscious entities based on AI. His work analyses the philosophical and moral aspects of their existence and considers how current legal and political systems could be extended to include their moral status. Konrad is also interested in [s-risks](https://www.youtube.com/watch?v=fqnJcZiDMDo) – risks related to extreme suffering.

Through the [Future Impact Group](https://futureimpact.group/) programme, Konrad collaborates with Professor Jeff Sebo at New York University and Dr Bradford Saad at the University of Oxford. He also mentors in the Impact First programme. Konrad completed his Master's in Philosophy and AI at Northeastern University London, with a thesis on replicating digital minds.`,
      },
      {
        heading: "Michał Kubiak",
        body: `Michał jest badaczem koncentrującym się na AI governance – specjalizuje się w europejskich regulacjach oraz zarządzaniu ryzykiem AI. Jego doświadczenie w obszarze polityki technologicznej obejmuje rolę specjalisty ds. polityki AI w European DIGITAL SME Alliance oraz w Observatorio de Riesgos Catastróficos Globales. Jest również współtwórcą platformy [AI Risk Explorer](https://www.airiskexplorer.com/), która na bieżąco monitoruje zagrożenia i incydenty związane z zaawansowaną sztuczną inteligencją. W swojej pracy badawczej analizuje rolę tzw. „mocarstw średnich" (middle powers) – bada, jakie działania mogą podjąć państwa spoza duopolu USA–Chiny, aby zachować konkurencyjność technologiczną i realnie wpływać na globalne standardy bezpieczeństwa AI.

Michał angażuje się także w edukację: jako facylitator prowadzi grupy w ramach kursów AI Safety takich jak [BlueDot Impact](https://bluedot.org/), [ML4Good](https://ml4good.org/) oraz [Electric Sheep](https://www.electricsheep.is/).`,
        bodyEN: `Michał is a researcher focused on AI governance – specialising in European regulation and AI risk management. His tech-policy experience includes AI-policy specialist roles at the European DIGITAL SME Alliance and at Observatorio de Riesgos Catastróficos Globales. He is also a co-creator of the [AI Risk Explorer](https://www.airiskexplorer.com/) platform, which continuously monitors risks and incidents related to advanced AI. His research analyses the role of "middle powers" – exploring what actions countries outside the US–China duopoly can take to maintain technological competitiveness and genuinely shape global AI safety standards.

Michał is also active in education: as a facilitator he runs groups for AI Safety courses such as [BlueDot Impact](https://bluedot.org/), [ML4Good](https://ml4good.org/) and [Electric Sheep](https://www.electricsheep.is/).`,
      },
      {
        heading: "Bartosz Kubiak",
        body: `Bartosz specjalizuje się w polityce AI na poziomie europejskim – skupia się m.in. na wdrażaniu Aktu o AI ([EU AI Act](https://artificialintelligenceact.eu/ai-act-explorer/)), regulacjach dotyczących infrastruktury AI (centra danych, suwerenna moc obliczeniowa, tzw. Gigafactories) oraz zarządzaniu zaawansowanymi systemami AI. Brał udział w programie [ERA](https://erafellowship.org) w Cambridge, gdzie pracował nad ramami odpowiedzialności prawnej dla autonomicznych agentów AI. Prowadzi kursy AGI Strategy, Frontier AI Governance oraz Technical AI Safety w [BlueDot Impact](https://bluedot.org).

Wcześniej Bartosz pełnił funkcję AI Policy Officer w brukselskim [Centre for Future Generations](https://cfg.eu), gdzie pracował nad partnerstwem publiczno-prywatnym AI Gigafactories o wartości 25 miliardów euro, a także doradzał Komisji Europejskiej w sprawach suwerennej mocy obliczeniowej i wdrażania AI Act. Doradzał również klientom z listy Fortune 100 w kwestiach regulacji EU (DSA, DMA, AI Act, GDPR).

Bartosz ukończył studia magisterskie o profilu Master of Public Policy w Blavatnik School of Government na Uniwersytecie Oksfordzkim.`,
        bodyEN: `Bartosz specialises in AI policy at the European level – focusing on implementation of the [EU AI Act](https://artificialintelligenceact.eu/ai-act-explorer/), regulation of AI infrastructure (data centres, sovereign compute, the so-called Gigafactories) and governance of advanced AI systems. He took part in the Cambridge-based [ERA](https://erafellowship.org) programme, where he worked on legal-liability frameworks for autonomous AI agents. He teaches the AGI Strategy, Frontier AI Governance and Technical AI Safety courses at [BlueDot Impact](https://bluedot.org).

Previously, Bartosz was AI Policy Officer at the Brussels-based [Centre for Future Generations](https://cfg.eu), where he worked on the €25-billion public–private AI Gigafactories partnership and advised the European Commission on sovereign compute and AI Act implementation. He also advised Fortune 100 clients on EU regulation (DSA, DMA, AI Act, GDPR).

Bartosz earned a Master of Public Policy from the Blavatnik School of Government at the University of Oxford.`,
      },
      {
        heading: "Maciej Chrabąszcz",
        body: `Maciej jest badaczem w instytucie [NASK](https://www.nask.pl/) oraz doktorantem na Politechnice Warszawskiej. W swoich badaniach koncentruje się na wykorzystaniu wewnętrznych reprezentacji modeli do wykrywania i zapobiegania niebezpiecznym zachowaniom. Jest autorem ponad 10 prac naukowych ze sztucznej inteligencji.

Maciej studiował matematykę i analizę danych na Politechnice Warszawskiej, gdzie był również przewodniczącym [Koła Naukowego Sztucznej Inteligencji Golem](https://golem.ii.pw.edu.pl/).`,
        bodyEN: `Maciej is a researcher at the [NASK](https://www.nask.pl/) institute and a PhD student at Warsaw University of Technology. His research focuses on using models' internal representations to detect and prevent dangerous behaviours. He is the author of over 10 scientific papers in AI.

Maciej studied mathematics and data analysis at Warsaw University of Technology, where he also chaired the [Golem Artificial Intelligence Student Society](https://golem.ii.pw.edu.pl/).`,
        linksTitle: "Poczytaj więcej:",
        linksTitleEN: "Read more:",
        links: [
          {
            href: "https://arxiv.org/abs/2502.16174",
            label: "Efficient LLM Moderation with Multi-Layer Latent Prototypes",
          },
          {
            href: "https://arxiv.org/abs/2603.03163",
            label: "Conditioned Activation Transport for T2I Safety Steering",
          },
          {
            href: "https://aclanthology.org/2026.eacl-long.44.pdf",
            label:
              "Safety of Large Language Models Beyond English: A Systematic Literature Review of Risks, Biases, and Safeguards",
          },
        ],
      },
      {
        heading: "Jan Dubiński",
        body: `Podobnie do Macieja, Jan bada AI Safety w NASK i jest doktorantem na Politechnice Warszawskiej, gdzie ukończył wcześniej informatykę. Interesuje się atakami antagonistycznymi na systemy AI, znakami wodnymi dla outputów (watermarking), atakami wnioskowania o przynależności danych (membership inference attacks) i atakami kradnącymi wagi modelu. Obecnie współpracuje z [TruthfulAI](https://truthful.ai/) Owaina Evansa w ramach programu Astra Fellowship. Jest również członkiem Kolaboracji ATLAS w CERN.`,
        bodyEN: `Like Maciej, Jan studies AI Safety at NASK and is a PhD student at Warsaw University of Technology, where he previously completed computer science. He is interested in adversarial attacks on AI systems, output watermarking, membership-inference attacks and model-weight-stealing attacks. He currently collaborates with Owain Evans' [TruthfulAI](https://truthful.ai/) through the Astra Fellowship. He is also a member of the ATLAS Collaboration at CERN.`,
        linksTitle: "Poczytaj więcej:",
        linksTitleEN: "Read more:",
        links: [
          {
            href: "https://arxiv.org/abs/2405.12295",
            label: "Efficient Model-Stealing Attacks Against Inductive Graph Neural Networks",
          },
          {
            href: "https://arxiv.org/abs/2506.23731",
            label: "Radioactive Watermarks in Diffusion and Autoregressive Image Generative Models",
          },
          {
            href: "https://arxiv.org/abs/2512.09654",
            label: "Membership and Dataset Inference Attacks on Large Audio Generative Models",
          },
        ],
      },
      {
        heading: "Mateusz Piotrowski",
        body: `Mateusz interesuje się interpretowalnością mechaniczną modeli (mechanistic interpretability), czyli zrozumieniem działania sieci neuronowych na poziomie neuronów i ich połączeń. Jest współtwórcą biblioteki open-source do generowania grafów atrybucji (attribution graphs), bazującej na metodzie śledzenia tzw. obwodów obliczeniowych (circuit tracing). Narzędzia te pozwalają badaczom wizualizować procesy decyzyjne modeli LLM oraz śledzić przepływ informacji przez sieć neuronową. Badania te zostały zapoczątkowane przez firmę Anthropic – jednego z liderów sektora AI – z którą Mateusz współpracował w ramach programu Anthropic AI Safety Fellowship.

Mateusz pracował również nad mechaniką obliczeniową (computational mechanics) w kontekście teorii informacji i procesów stochastycznych. Ta stosunkowo niszowa dziedzina technicznego AI Safety bada, jak transformery uczą się określonych struktur geometrycznych w swoich reprezentacjach wewnętrznych. Mateusz w swojej pracy wykazał, że pośrednie reprezentacje w transformerach mają geometrię fraktalną, a jej strukturę można przewidzieć analizując proces generujący dane, na których został wytrenowany ten transformer.`,
        bodyEN: `Mateusz is interested in mechanistic interpretability – understanding how neural networks work at the level of neurons and their connections. He is a co-author of an open-source library for generating attribution graphs based on the circuit-tracing method. These tools let researchers visualise decision processes in LLMs and follow how information flows through the neural network. This line of research was initiated by Anthropic – one of the sector's leaders – with whom Mateusz worked as part of the Anthropic AI Safety Fellowship.

Mateusz has also worked on computational mechanics in the context of information theory and stochastic processes. This relatively niche area of technical AI Safety studies how transformers learn certain geometric structures in their internal representations. In his work Mateusz showed that intermediate representations in transformers have fractal geometry, whose structure can be predicted by analysing the data-generating process on which the transformer was trained.`,
        linksTitle: "Poczytaj więcej:",
        linksTitleEN: "Read more:",
        links: [
          {
            href: "https://www.anthropic.com/research/open-source-circuit-tracing",
            label: "Open-sourcing circuit tracing tools",
          },
          {
            href: "https://arxiv.org/abs/2502.01954",
            label: "Constrained belief updates explain geometric structures in transformer representations",
          },
        ],
      },
      {
        heading: "Reworr",
        body: `Reworr pracuje w organizacji badawczej non-profit Palisade Research, gdzie zajmuje się analizą niebezpiecznych zdolności agentów AI w domenie cyberbezpieczeństwa. Posiada bogate doświadczenie w obszarach AI oraz IT Security, zdobyte m.in. w ramach red-teamingu, testów penetracyjnych oraz audytów bezpieczeństwa aplikacji webowych.`,
        bodyEN: `Reworr works at the non-profit research organisation Palisade Research, analysing the dangerous capabilities of AI agents in the cybersecurity domain. He has extensive experience in AI and IT Security, acquired among others through red-teaming, penetration testing and web-application security audits.`,
        linksTitle: "Poczytaj więcej:",
        linksTitleEN: "Read more:",
        links: [
          {
            href: "https://palisaderesearch.org/blog/hacking-cable",
            label: "Hacking Cable: AI in post-exploitation operations",
          },
          {
            href: "https://ai-honeypot.palisaderesearch.org/",
            label: "LLM Agent Honeypot: Monitoring AI Hacking Agents in the Wild",
          },
          {
            href: "https://arxiv.org/abs/2511.04860",
            label: "GPT-5 at CTFs: Case Studies From Top-Tier Cybersecurity Events",
          },
        ],
      },
      {
        heading: "Taras Kutsyk",
        body: `Taras jest doktorantem zajmującym się „interpretowalnością mechanistyczną" (mechanistic interpretability) w GMUM (Grupa Uczenia Maszynowego) na Uniwersytecie Jagiellońskim w Krakowie. Wcześniej był stypendystą MATS w grupie Neela Nandy z Google DeepMind, a także uczestniczył w programie AI Safety Camp i ukończył kurs AI Safety Fundamentals od BlueDot Impact. Jego badania koncentrują się na zastosowaniu technik interpretowalności do problemów bezpieczeństwa AI, w tym na badaniu „generalizacji osobowości" (persona generalisation) w dużych modelach językowych. Taras współpracuje również z Janem Betley w zakresie badania samoświadomości w LLMach.

Taras ukończył matematykę stosowaną i informatykę na Politechnice Lwowskiej, a następnie matematykę inżynieryjną na Uniwersytecie w L'Aquila we Włoszech.`,
        bodyEN: `Taras is a PhD student working on mechanistic interpretability at GMUM (Machine Learning Group) at Jagiellonian University in Kraków. He was previously a MATS fellow in Neel Nanda's group at Google DeepMind, took part in the AI Safety Camp and completed the AI Safety Fundamentals course at BlueDot Impact. His research focuses on applying interpretability techniques to AI-safety problems, including persona generalisation in large language models. Taras also collaborates with Jan Betley on studying self-awareness in LLMs.

Taras completed applied mathematics and computer science at Lviv Polytechnic and then engineering mathematics at the University of L'Aquila in Italy.`,
        linksTitle: "Poczytaj więcej:",
        linksTitleEN: "Read more:",
        links: [
          {
            href: "https://unireps.org/blog/2025/do-sparse-autoencoders-saes-transfer-across-base-and-finetuned-language-models/",
            label: "Do Sparse Autoencoders (SAEs) transfer across base and finetuned language models?",
          },
          {
            href: "https://www.lesswrong.com/posts/WzHPpMz2kRongsA7q/what-is-the-functional-role-of-sae-errors",
            label: "What is the functional role of SAE errors?",
          },
        ],
      },
      {
        heading: "Jakub Kryś",
        body: `Na koniec przedstawimy sylwetkę autora tego artykułu. Jakub ukończył doktorat z fizyki teoretycznej na Uniwersytecie Durham w Wielkiej Brytanii, po czym zmienił ścieżkę kariery na AI Safety dzięki kursom takim jak Technical AI Safety od BlueDot Impact. Pracował nad atakami antagonistycznymi i jailbreakami, skupiając się na modelach językowo-wizyjnych (VLM – Vision Language Models). Posiada również doświadczenie w badaniach nad wykorzystaniem mocy obliczeniowej na rzecz AI Safety ([compute governance](https://arxiv.org/abs/2402.08797)), a także w opracowywaniu rozwiązań technicznych wspierających program badawczy [AI Verification](https://www.rand.org/pubs/working_papers/WRA4077-1.html). Obecnie pracuje w organizacji non-profit [SaferAI](http://safer-ai.org), gdzie zajmuje się modelowaniem cyberataków przeprowadzanych za pomocą LLMów.

Jakub interesuje się zagrożeniami [s-risks](https://www.youtube.com/watch?v=fqnJcZiDMDo), [kooperacją i konfliktem w wieloagentowych systemach AI](https://longtermrisk.org/research-agenda) oraz [wykorzystaniem najnowszych LLMów w badaniach matematycznych i fizycznych](https://www.quantamagazine.org/the-ai-revolution-in-math-has-arrived-20260413/). Jest również mentorem w programie [SPAR](https://sparai.org/), gdzie nadzoruje projekty badawcze na temat modelowania ryzyka (w domenach cyber i „[Loss of Control](https://www.apolloresearch.ai/research/loss-of-control/)"), a także na temat prognozowania za pomocą LLMów ([LLM forecasting](https://forecastbench.org/)).`,
        bodyEN: `To close, the profile of this article's author. Jakub completed a PhD in theoretical physics at Durham University in the UK, then switched his career to AI Safety through courses such as Technical AI Safety at BlueDot Impact. He has worked on adversarial attacks and jailbreaks, focusing on Vision Language Models (VLMs). He also has experience in research on using compute for AI Safety ([compute governance](https://arxiv.org/abs/2402.08797)), and on developing technical solutions supporting the [AI Verification](https://www.rand.org/pubs/working_papers/WRA4077-1.html) research programme. He currently works at the non-profit [SaferAI](http://safer-ai.org), where he models cyberattacks carried out with LLMs.

Jakub is interested in [s-risks](https://www.youtube.com/watch?v=fqnJcZiDMDo), [cooperation and conflict in multi-agent AI systems](https://longtermrisk.org/research-agenda) and [the use of state-of-the-art LLMs in mathematical and physical research](https://www.quantamagazine.org/the-ai-revolution-in-math-has-arrived-20260413/). He is also a mentor in the [SPAR](https://sparai.org/) programme, where he supervises research projects on risk modelling (in the cyber and "[Loss of Control](https://www.apolloresearch.ai/research/loss-of-control/)" domains) and on [LLM forecasting](https://forecastbench.org/).`,
        linksTitle: "Poczytaj więcej:",
        linksTitleEN: "Read more:",
        links: [
          {
            href: "https://arxiv.org/abs/2507.07765",
            label:
              "Distributed and Decentralised Training: Technical Governance Challenges in a Shifting AI Landscape",
          },
          {
            href: "https://apartresearch.com/project/fingerprinting-all-ai-cluster-io-without-mutually-trusted-processors-d81l",
            label: "Fingerprinting All AI Cluster I/O Without Mutually Trusted Processors",
          },
          {
            href: "https://arxiv.org/abs/2512.08864",
            label: "Toward Quantitative Modeling of Cybersecurity Risks Due to AI Misuse",
          },
          {
            href: "https://jakubkrys.substack.com/p/on-theoretical-physics-ai-and-human",
            label: "On theoretical physics, AI and human creativity",
          },
        ],
      },
    ],
    outroNote: `Jeśli udało Ci się dotrwać do końca tego artykułu, zapewne jesteś osobą, którą zainteresuje dołączenie do naszej społeczności :) W ramach AI Safety Polska organizujemy regularne webinary, grupę czytelniczą oraz spotkania na żywo, a także oferujemy przestrzeń do merytorycznych dyskusji o przeróżnych aspektach AI Safety.

Zapraszamy do śledzenia naszych wydarzeń na kalendarzu [Luma](https://luma.com/aisafetypl) i dołączenia do [Slacka](https://forms.gle/J2yTVJXYcaMyR5i56)!`,
    outroNoteEN: `If you made it all the way to the end of this article, you are probably someone who would be interested in joining our community :) Within AI Safety Polska we organise regular webinars, a reading group and in-person meetups, and we offer space for substantive discussions on many aspects of AI Safety.

Follow our events on our [Luma](https://luma.com/aisafetypl) calendar and join our [Slack](https://forms.gle/J2yTVJXYcaMyR5i56)!`,
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
