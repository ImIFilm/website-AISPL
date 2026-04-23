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
    title: "Polacy w AI Safety",
    titleEN: "Poles in AI Safety",
    author: "Jakub Kryś",
    date: "22 lutego 2025",
    dateEN: "February 22, 2025",
    readTime: "15 min",
    lead: "Choć na mapie organizacji AI Safety dominują Dolina Krzemowa i Londyn, globalny układ sił staje się coraz bardziej zróżnicowany. W ostatnim czasie dynamicznie rozwijają się nowe ośrodki w wielu zakątkach świata. Polska nie stanowi tu wyjątku; co więcej, może poszczycić się naprawdę znaczącą liczbą ekspertów w tej dziedzinie. W poniższym artykule przybliżymy sylwetki Polaków oraz osób związanych z Polską, które aktywnie działają na rzecz redukcji ryzyk płynących z zaawansowanej sztucznej inteligencji.",
    leadEN: "Although Silicon Valley and London dominate the AI Safety landscape, the global balance of power is becoming increasingly diverse. Recently, new centres have been dynamically developing in many corners of the world. Poland is no exception; moreover, it can boast a truly significant number of experts in this field. In this article, we will introduce the profiles of Poles and people connected with Poland who are actively working to reduce the risks of advanced artificial intelligence.",
    sections: [
      {
        heading: "Jan Betley & Anna Sztyber-Betley",
        headingEN: "Jan Betley & Anna Sztyber-Betley",
        body: "Jest to para jednych z najbardziej rozpoznawalnych naukowców w AI safety za sprawą ich prac nad zadziwiającymi zachowaniami LLMów. Jan i Anna skupiają się na badaniu zjawisk związanych z \"rozumowaniem poza kontekstem\" (out-of-context reasoning), a także na tym, jak LLMy uczą się ukrytych informacji ze swoich danych w trakcie treningu lub fine-tuningu. Dwie z ich publikacji o tzw. Emergent Misalignment i Subliminal Learning niedawno ukazały się w Nature – jednym z najbardziej prestiżowych czasopism naukowych na świecie. Anna ukończyła doktorat z Automatyki i Robotyki i jest adiunktem na Wydziale Mechatroniki Politechniki Warszawskiej. Jan z kolei przez ponad dekadę pracował jako software developer, po czym zmienił ścieżkę zawodową na AI Safety dzięki programom takim jak ARENA i Astra. Wspólnie współpracują z grupą TruthfulAI Owaina Evansa.",
        bodyEN: "This is a couple among the most recognizable scientists in AI safety due to their work on surprising behaviors of LLMs. Jan and Anna focus on studying phenomena related to \"out-of-context reasoning\", as well as how LLMs learn hidden information from their data during training or fine-tuning. Two of their publications on Emergent Misalignment and Subliminal Learning were recently published in Nature – one of the most prestigious scientific journals in the world. Anna completed her PhD in Automation and Robotics and is an assistant professor at the Faculty of Mechatronics at Warsaw University of Technology. Jan worked as a software developer for over a decade before changing his career path to AI Safety through programs such as ARENA and Astra. Together they collaborate with Owain Evans' TruthfulAI group.",
      },
      {
        heading: "Tomek Korbak",
        headingEN: "Tomek Korbak",
        body: "Tomek pracuje w OpenAI, gdzie skupia się na monitorowaniu LLMów pod kątem niepożądanych zachowań (misalignment) i kontrolą systemów AI. Jest autorem ponad 50 prac naukowych w zakresie AI i jednym z wiodących ekspertów w zakresie wykorzystania \"ciągu rozumowania\" (chain of thought) LLMów w celu wykrycia oznak misalignmentu. Poprzednio pracował w londyńskim UK AI Security Institute i Anthropic, badając aspekty takie jak filtrowanie danych treningowych i sykofancja. Tomek studiował kognitywistykę, filozofię i fizykę na Uniwersytecie Warszawskim, a następnie ukończył doktorat na Uniwersytecie Sussex w UK z zakresu \"uczenia przez wzmacnianie ze sprzężeniem zwrotnym od człowieka\" (RLHF).",
        bodyEN: "Tomek works at OpenAI, where he focuses on monitoring LLMs for misalignment and AI systems control. He is the author of over 50 scientific papers in AI and one of the leading experts in using LLM \"chain of thought\" to detect signs of misalignment. He previously worked at the London UK AI Security Institute and Anthropic, researching aspects such as training data filtering and sycophancy. Tomek studied cognitive science, philosophy, and physics at the University of Warsaw, then completed his PhD at the University of Sussex in the UK in Reinforcement Learning from Human Feedback (RLHF).",
      },
      {
        heading: "Krzysztof Bar",
        headingEN: "Krzysztof Bar",
        body: "Krzysztof jest CEO London Initiative for Safe AI (LISA), londyńskiego hubu AI Safety goszczącego na co dzień ponad 100 osób i zrzeszającego ponad 1000 członków, co czyni go największym tego typu ośrodkiem w Europie – ustępującym skalą jedynie kalifornijskiemu Berkeley. LISA jest również siedzibą organizacji takich jak Apollo Research oraz domem dla programów szkoleniowych typu ARENA, LASR czy Pivotal. Naukowa podróż Krzysztofa zaczęła się od komputerów kwantowych – po studiach z matematyki i informatyki na Uniwersytecie Oksfordzkim, obronił na tej uczelni doktorat, specjalizując się w teoretycznych aspektach obliczeń kwantowych oraz teorii kategorii. Po doktoracie przeszedł do sektora prywatnego, gdzie przez prawie dekadę pracował jako konsultant w firmie Oliver Wyman.",
        bodyEN: "Krzysztof is the CEO of London Initiative for Safe AI (LISA), a London AI Safety hub hosting over 100 people daily and gathering over 1000 members, making it the largest such center in Europe – second only in scale to Berkeley, California. LISA is also home to organizations such as Apollo Research and training programs like ARENA, LASR, and Pivotal. Krzysztof's scientific journey began with quantum computers – after studying mathematics and computer science at Oxford University, he defended his PhD there, specializing in theoretical aspects of quantum computing and category theory. After his PhD, he moved to the private sector, where he worked as a consultant at Oliver Wyman for almost a decade.",
      },
      {
        heading: "Jakub Growiec",
        headingEN: "Jakub Growiec",
        body: "Jakub jest profesorem i kierownikiem Katedry Ekonomii Ilościowej w warszawskiej Szkole Głównej Handlowej. Jego zainteresowania badawcze obejmują transformacje ekonomiczne wywołane przez zaawansowaną sztuczną inteligencję oraz teorię długookresowego wzrostu gospodarczego i zmian technologicznych. Na ten właśnie temat napisał książkę \"Accelerating Economic Growth\" opublikowaną przez prestiżowe wydawnictwo Springer.",
        bodyEN: "Jakub is a professor and head of the Department of Quantitative Economics at the Warsaw School of Economics. His research interests include economic transformations caused by advanced artificial intelligence and the theory of long-term economic growth and technological change. On this topic, he wrote the book \"Accelerating Economic Growth\" published by the prestigious Springer publishing house.",
      },
      {
        heading: "Sebastian Cygert",
        headingEN: "Sebastian Cygert",
        body: "Sebastian kieruje Zakładem Bezpieczeństwa i Przejrzystości Sztucznej Inteligencji w polskim instytucie NASK, gdzie prowadzi badania nad wyjaśnialnością oraz interpretowalnością modeli AI. Jego praca obejmuje również audytowanie systemów sztucznej inteligencji oraz rozwój specjalistycznego oprogramowania wspierającego ich analizę. Sebastian jest autorem ponad 50 prac naukowych w dziedzinie AI. Ukończył doktorat na Politechnice Gdańskiej, specjalizując się w widzeniu maszynowym.",
        bodyEN: "Sebastian heads the AI Safety and Transparency Department at the Polish NASK institute, where he conducts research on explainability and interpretability of AI models. His work also includes auditing artificial intelligence systems and developing specialized software supporting their analysis. Sebastian is the author of over 50 scientific papers in the field of AI. He completed his PhD at Gdańsk University of Technology, specializing in machine vision.",
      },
      {
        heading: "Kamil Deja",
        headingEN: "Kamil Deja",
        body: "Kamil jest liderem zespołu Generative AI w warszawskim Instytucie Badawczym IDEAS oraz adiunktem na Politechnice Warszawskiej. Skupia się na zrozumieniu mechanizmów zachodzących w sieciach neuronowych za pomocą tzw. interpretowalności. Jego badania obejmują nie tylko LLMy, ale także modele dyfuzyjne i wizję komputerową. Jest autorem ponad 40 prac naukowych z zakresu sztucznej inteligencji. Kamil ukończył studia i doktorat z informatyki na Politechnice Warszawskiej, a następnie współpracował z takimi instytucjami jak La Sapienza w Rzymie czy CERN w Genewie.",
        bodyEN: "Kamil is the leader of the Generative AI team at the IDEAS Research Institute in Warsaw and an assistant professor at Warsaw University of Technology. He focuses on understanding mechanisms in neural networks through interpretability. His research includes not only LLMs but also diffusion models and computer vision. He is the author of over 40 scientific papers in artificial intelligence. Kamil completed his studies and PhD in computer science at Warsaw University of Technology, then collaborated with institutions such as La Sapienza in Rome and CERN in Geneva.",
      },
      {
        heading: "Bartosz Cywiński",
        headingEN: "Bartosz Cywiński",
        body: "Bartosz jest doktorantem w dziedzinie uczenia maszynowego na Politechnice Warszawskiej oraz bliskim współpracownikiem Kamila Deji. W ramach programu MATS współpracuje również z Neelem Nandą i Arthurem Conmy z Google DeepMind. W swojej pracy badawczej skupia się na \"interpretowalności mechanistycznej\" (mechanistic interpretability) oraz metodach wydobywania z modeli LLM wiedzy ukrytej, której nie ujawniają one bezpośrednio (tzw. eliciting latent knowledge).",
        bodyEN: "Bartosz is a PhD student in machine learning at Warsaw University of Technology and a close collaborator of Kamil Deja. As part of the MATS program, he also collaborates with Neel Nanda and Arthur Conmy from Google DeepMind. His research focuses on mechanistic interpretability and methods for eliciting latent knowledge from LLM models that they do not reveal directly.",
      },
      {
        heading: "Patryk Wielopolski",
        headingEN: "Patryk Wielopolski",
        body: "Patryk ukończył doktorat na Politechnice Wrocławskiej specjalizując się w probabilistycznym modelowaniu niepewności z użyciem \"modeli przepływów normalizujących\" (normalizing flows). Przez sześć lat pracował w firmie DataWalk, gdzie zarządzał zespołem inżynierów. Po ukończeniu kursów BlueDot Impact, bootcampu ML4Good i paru osobistych projektów, rozpoczął pracę jako Research Manager w MATS – prestiżowym programie, który co pół roku pozwala ponad 100 talentom rozwijać badania nad AI Safety pod okiem ekspertów.",
        bodyEN: "Patryk completed his PhD at Wrocław University of Technology, specializing in probabilistic uncertainty modeling using normalizing flows. He worked at DataWalk for six years, managing a team of engineers. After completing BlueDot Impact courses, ML4Good bootcamp, and several personal projects, he started working as a Research Manager at MATS – a prestigious program that allows over 100 talents to develop AI Safety research under expert guidance every six months.",
      },
      {
        heading: "Mateusz Dziemian",
        headingEN: "Mateusz Dziemian",
        body: "Mateusz pracuje w firmie Gray Swan specjalizującej się w obszarze AI Security oraz usługach z zakresu red-teamingu. Oprócz rozwijania infrastruktury inżynieryjnej firmy, Mateusz zajmuje się analizą ataków na modele LLM. Organizacja ta pozyskuje dane od dziesiątek tysięcy użytkowników za pośrednictwem publicznych wyzwań na dedykowanej platformie Gray Swan Arena. Mateusz uczestniczył również w programie SPAR, gdzie badał zjawisko zmowy (collusion) między agentami AI nadzorowanymi przez inne modele językowe.",
        bodyEN: "Mateusz works at Gray Swan, a company specializing in AI Security and red-teaming services. In addition to developing the company's engineering infrastructure, Mateusz analyzes attacks on LLM models. The organization collects data from tens of thousands of users through public challenges on the dedicated Gray Swan Arena platform. Mateusz also participated in the SPAR program, where he studied collusion between AI agents supervised by other language models.",
      },
      {
        heading: "Julia Bazińska",
        headingEN: "Julia Bazińska",
        body: "Julia jest związana z firmą Lakera, gdzie odpowiada za projektowanie mechanizmów ochronnych dla przedsiębiorstw wdrażających rozwiązania oparte na agentach AI. Jest współautorką popularnej platformy Gandalf, która pozwala użytkownikom testować modele językowe poprzez symulowane ataki, dostarczając tym samym danych do tworzenia coraz skuteczniejszych zabezpieczeń. Swoją drogę naukową rozpoczęła od studiów informatycznych na Uniwersytecie Warszawskim, gdzie pełniła funkcję przewodniczącej Koła Naukowego Uczenia Maszynowego. Tytuł magistra zdobyła na ETH w Zurychu. Jej doświadczenie obejmuje staże naukowe w IBM, Google oraz Google DeepMind.",
        bodyEN: "Julia is associated with Lakera, where she is responsible for designing protective mechanisms for enterprises implementing AI agent-based solutions. She is a co-author of the popular Gandalf platform, which allows users to test language models through simulated attacks, providing data for creating increasingly effective safeguards. She began her scientific journey with computer science studies at the University of Warsaw, where she served as president of the Machine Learning Student Association. She earned her master's degree at ETH Zurich. Her experience includes research internships at IBM, Google, and Google DeepMind.",
      },
      {
        heading: "Filip Sondej",
        headingEN: "Filip Sondej",
        body: "Filip w swoich badaniach skupia się na \"oduczaniu\" (unlearning), tzn. procesie usuwania z LLMów niepożądanych informacji, które mogłyby posłużyć do celów takich jak np. ataki biologiczne. W przeszłości pracował również nad kooperacją i zapobieganiem konfliktom między agentami AI w ramach programu MATS oraz we współpracy z londyńskim Centre on Long-Term Risk. Filip ukończył informatykę na AGH w Krakowie, a następnie kognitywistykę na Uniwersytecie Jagiellońskim.",
        bodyEN: "Filip's research focuses on unlearning, i.e., the process of removing unwanted information from LLMs that could be used for purposes such as biological attacks. In the past, he also worked on cooperation and conflict prevention between AI agents as part of the MATS program and in collaboration with the London Centre on Long-Term Risk. Filip completed computer science at AGH in Kraków, then cognitive science at Jagiellonian University.",
      },
      {
        heading: "Konrad Kozaczek",
        headingEN: "Konrad Kozaczek",
        body: "Konrad zajmuje się badaniem konsekwencji potencjalnego istnienia tzw. \"cyfrowych umysłów\" w przyszłości, czyli świadomych bytów na bazie sztucznej inteligencji. W swojej pracy analizuje aspekty filozoficzne oraz moralne ich istnienia, a także rozważa, w jaki sposób obecne systemy prawne i polityczne mogłyby zostać rozszerzone, by objąć ich podmiotowość. Konrad interesuje się również zagrożeniami typu s-risks (zagrożeniami związanymi z ekstremalnym cierpieniem). W ramach programu Future Impact Group współpracuje z profesorem Jeffem Sebo z New York University oraz z doktorem Bradfordem Saad z Uniwersytetu Oksfordzkiego.",
        bodyEN: "Konrad studies the consequences of the potential existence of so-called \"digital minds\" in the future, i.e., conscious beings based on artificial intelligence. In his work, he analyzes philosophical and moral aspects of their existence, and considers how current legal and political systems could be extended to include their subjectivity. Konrad is also interested in s-risks (threats related to extreme suffering). As part of the Future Impact Group program, he collaborates with Professor Jeff Sebo from New York University and Dr. Bradford Saad from Oxford University.",
      },
      {
        heading: "Michał i Bartosz Kubiak",
        headingEN: "Michał and Bartosz Kubiak",
        body: "Michał jest badaczem koncentrującym się na AI governance – specjalizuje się w europejskich regulacjach oraz zarządzaniu ryzykiem AI. Jest współtwórcą platformy AI Risk Explorer, która na bieżąco monitoruje zagrożenia i incydenty związane z zaawansowaną sztuczną inteligencją. Bartosz specjalizuje się w polityce AI na poziomie europejskim – skupia się m.in. na wdrażaniu Aktu o AI (EU AI Act), regulacjach dotyczących infrastruktury AI oraz zarządzaniu zaawansowanymi systemami AI. Wcześniej pełnił funkcję AI Policy Officer w brukselskim Centre for Future Generations, gdzie doradzał Komisji Europejskiej w sprawach suwerennej mocy obliczeniowej i wdrażania AI Act.",
        bodyEN: "Michał is a researcher focusing on AI governance – he specializes in European regulations and AI risk management. He is a co-creator of the AI Risk Explorer platform, which continuously monitors threats and incidents related to advanced artificial intelligence. Bartosz specializes in AI policy at the European level – focusing on implementing the EU AI Act, regulations concerning AI infrastructure, and managing advanced AI systems. He previously served as AI Policy Officer at the Centre for Future Generations in Brussels, where he advised the European Commission on sovereign computing power and AI Act implementation.",
      },
      {
        heading: "Maciej Chrabąszcz i Jan Dubiński",
        headingEN: "Maciej Chrabąszcz and Jan Dubiński",
        body: "Maciej jest badaczem w instytucie NASK oraz doktorantem na Politechnice Warszawskiej. W swoich badaniach koncentruje się na wykorzystaniu wewnętrznych reprezentacji modeli do wykrywania i zapobiegania niebezpiecznym zachowaniom. Jest autorem ponad 10 prac naukowych ze sztucznej inteligencji. Jan również bada AI Safety w NASK i jest doktorantem na Politechnice Warszawskiej. Interesuje się atakami antagonistycznymi na systemy AI, znakami wodnymi dla outputów (watermarking), atakami wnioskowania o przynależności danych i atakami kradnącymi wagi modelu. Obecnie współpracuje z TruthfulAI Owaina Evansa w ramach programu Astra Fellowship.",
        bodyEN: "Maciej is a researcher at the NASK institute and a PhD student at Warsaw University of Technology. His research focuses on using internal model representations to detect and prevent dangerous behaviors. He is the author of over 10 scientific papers in artificial intelligence. Jan also researches AI Safety at NASK and is a PhD student at Warsaw University of Technology. He is interested in adversarial attacks on AI systems, watermarking for outputs, membership inference attacks, and model weight stealing attacks. He currently collaborates with Owain Evans' TruthfulAI as part of the Astra Fellowship program.",
      },
      {
        heading: "Mateusz Piotrowski",
        headingEN: "Mateusz Piotrowski",
        body: "Mateusz interesuje się interpretowalnością mechaniczną modeli (mechanistic interpretability), czyli zrozumieniem działania sieci neuronowych na poziomie neuronów i ich połączeń. Jest współtwórcą biblioteki open-source do generowania grafów atrybucji (attribution graphs), bazującej na metodzie śledzenia tzw. obwodów obliczeniowych (circuit tracing). Narzędzia te pozwalają badaczom wizualizować procesy decyzyjne modeli LLM oraz śledzić przepływ informacji przez sieć neuronową. Badania te zostały zapoczątkowane przez firmę Anthropic, z którą Mateusz współpracował w ramach programu Anthropic AI Safety Fellowship.",
        bodyEN: "Mateusz is interested in mechanistic interpretability of models, i.e., understanding how neural networks work at the level of neurons and their connections. He is a co-creator of an open-source library for generating attribution graphs, based on the circuit tracing method. These tools allow researchers to visualize decision-making processes of LLM models and track information flow through the neural network. This research was initiated by Anthropic, with whom Mateusz collaborated as part of the Anthropic AI Safety Fellowship program.",
      },
      {
        heading: "Taras Kutsyk",
        headingEN: "Taras Kutsyk",
        body: "Taras jest doktorantem zajmującym się \"interpretowalnością mechanistyczną\" (mechanistic interpretability) w GMUM (Grupa Uczenia Maszynowego) na Uniwersytecie Jagiellońskim w Krakowie. Wcześniej był stypendystą MATS w grupie Neela Nandy z Google DeepMind, a także uczestniczył w programie AI Safety Camp i ukończył kurs AI Safety Fundamentals od BlueDot Impact. Jego badania koncentrują się na zastosowaniu technik interpretowalności do problemów bezpieczeństwa AI, w tym na badaniu \"generalizacji osobowości\" (persona generalisation) w dużych modelach językowych. Taras współpracuje również z Janem Betley w zakresie badania samoświadomości w LLMach.",
        bodyEN: "Taras is a PhD student working on mechanistic interpretability at GMUM (Machine Learning Group) at Jagiellonian University in Kraków. He was previously a MATS fellow in Neel Nanda's group at Google DeepMind, participated in AI Safety Camp, and completed the AI Safety Fundamentals course from BlueDot Impact. His research focuses on applying interpretability techniques to AI safety problems, including studying persona generalization in large language models. Taras also collaborates with Jan Betley on studying self-awareness in LLMs.",
      },
      {
        heading: "Jakub Kryś",
        headingEN: "Jakub Kryś",
        body: "Jakub ukończył doktorat z fizyki teoretycznej na Uniwersytecie Durham w Wielkiej Brytanii, po czym zmienił ścieżkę kariery na AI Safety dzięki kursom takim jak Technical AI Safety od BlueDot Impact. Pracował nad atakami antagonistycznymi i jailbreakami, skupiając się na modelach językowo-wizyjnych (VLM). Posiada również doświadczenie w badaniach nad wykorzystaniem mocy obliczeniowej na rzecz AI Safety (compute governance), a także w opracowywaniu rozwiązań technicznych wspierających program badawczy AI Verification. Obecnie pracuje w organizacji non-profit SaferAI, gdzie zajmuje się modelowaniem cyberataków przeprowadzanych za pomocą LLMów. Jest również mentorem w programie SPAR, gdzie nadzoruje projekty badawcze na temat modelowania ryzyka oraz prognozowania za pomocą LLMów.",
        bodyEN: "Jakub completed his PhD in theoretical physics at Durham University in the UK, then changed his career path to AI Safety through courses such as Technical AI Safety from BlueDot Impact. He worked on adversarial attacks and jailbreaks, focusing on Vision Language Models (VLMs). He also has experience in research on compute governance for AI Safety, as well as developing technical solutions supporting the AI Verification research program. He currently works at the non-profit SaferAI, where he focuses on modeling cyberattacks conducted using LLMs. He is also a mentor in the SPAR program, where he oversees research projects on risk modeling and LLM forecasting.",
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
