import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { isLocale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { BlogArticle, type ArticleData } from "./blog-article"

const articles: Record<string, ArticleData> = {
  "intro-ai-safety": {
    title: "Dlaczego powinieneś zainteresować się AI Safety?",
    titleEN: "Why should you care about AI Safety?",
    author: "Marcel Windys",
    date: "8 kwietnia 2025",
    dateEN: "April 8, 2025",
    readTime: "15 min",
    autoTranslated: true,
    lead: `„Przeciwdziałanie zagrożeniu wyginięcia spowodowanego przez Sztuczną Inteligencję powinno być globalnym priorytetem obok innych zagrożeń dla ludzkości, jak pandemie i wojna nuklearna."

Pod tym stanowiskiem, opublikowanym przez Center for AI Safety, podpisało się między innymi dwóch najczęściej cytowanych naukowców w dziedzinie sztucznej inteligencji – Geoffrey Hinton i Yoshua Bengio, oraz trzech dyrektorów generalnych (CEO) firm tworzących najbardziej zaawansowane modele – Demis Hassabis z Google Deepmind, Sam Altman z OpenAI oraz Dario Amodei z Anthropic.

O jakiej sztucznej inteligencji mowa? Czy Center for AI Safety uznaje ChatGPT za zagrożenie dla ludzkości? Większość ryzyka wiąże się ze stworzeniem tzw. AGI – Artificial General Intelligence (pl. sztuczna inteligencja ogólna) systemu, który posiada każdą umiejętność posiadaną przez człowieka, dzięki czemu jest w stanie wykonać każde zadanie które można zlecić człowiekowi, w tym te wymagające rozwiązywania nowych problemów, tworzenia i realizowania dalekosiężnych planów oraz udoskonalania samego siebie.`,
    leadEN: `"Mitigating the risk of extinction from AI should be a global priority alongside other societal-scale risks such as pandemics and nuclear war."

This statement, published by the Center for AI Safety, was signed by, among others, two of the most-cited researchers in the field of artificial intelligence – Geoffrey Hinton and Yoshua Bengio – and three CEOs of companies building the most advanced models: Demis Hassabis of Google DeepMind, Sam Altman of OpenAI, and Dario Amodei of Anthropic.

What kind of artificial intelligence are we talking about? Does the Center for AI Safety consider ChatGPT a threat to humanity? Most of the risk is associated with the creation of so-called AGI – Artificial General Intelligence – a system that possesses every skill a human possesses, allowing it to perform any task that can be assigned to a person, including those requiring solving new problems, creating and executing far-reaching plans, and improving itself.`,
    sections: [
      {
        heading: "Czy i kiedy możemy stworzyć AGI?",
        headingEN: "Can we create AGI, and when?",
        body: `CEO trzech korporacji których AI przodują w wyścigu ku AGI deklarują, że jesteśmy bardzo blisko:

- [Demis Hassabis (Google DeepMind) daje 50% szans na stworzenie AGI do 2028](https://www.weforum.org/meetings/world-economic-forum-annual-meeting-2026/sessions/the-day-after-agi/)
- [Dario Amodei (Anthropic) podaje kilka lat, być może nawet 2027](https://www.weforum.org/meetings/world-economic-forum-annual-meeting-2026/sessions/the-day-after-agi/)
- [Sam Altman (OpenAI) również sugerował „kilka tysięcy dni" w 2024](https://ia.samaltman.com/)

Oczywiście dla nich AI jest również produktem do którego chcą przekonać swoich inwestorów, więc warto być sceptycznym co do podobnych deklaracji. Jednak nawet naukowcy znani jako zadeklarowani sceptycy obecnego podejścia do budowy AI nie spodziewają się, że będzie to problem przyszłych pokoleń:

- [Yann LeCun (Meta, laureat nagrody Turinga): „Systemy AI dogonią i przegonią ludzkie zdolności intelektualne… prawdopodobnie w ciągu dekady lub dwóch"](https://dig.watch/event/artificial-intelligence-ai-security-council/9821st-meeting)
- [Gary Marcus (Uniwersytet New York) spodziewa się, że AGI zostanie zbudowane za 10 do 20 lat](https://x.com/GaryMarcus/status/1871605871282999760)

Przewidywanie postępu technologicznego jest niezwykle trudne.

W 2022 roku grupa zorganizowana przez Jacoba Steinhardta z Uniwersytetu Kalifornijskiego w Berkeley próbowała przewidzieć, jak dobrze w najbliższych latach najlepsze dostępne modele będą potrafiły rozwiązywać konkursowe zadania matematyczne ze zbioru MATH, będące na poziomie trudności odpowiednim dla uzdolnionych licealistów. Przewidywali, że najlepszy wynik powinien wynosić w okolicach 12% rozwiązanych zadań w 2022 roku oraz 52% w 2025 roku. Jednak już w 2022 roku model Minerva wytrenowany przez grupę badaczy z Google Research osiągnął wynik 64,9%, czyli dużo szybciej niż przewidywali eksperci. Obecnie modele nie mają już problemów z rozwiązywaniem zadań z tego zbioru, i są testowane na trudniejszych zadaniach na poziomie akademickim, jak na przykład FrontierMath.`,
        bodyEN: `The CEOs of the three corporations whose AI leads the race towards AGI declare that we are very close:

- [Demis Hassabis (Google DeepMind) gives 50% odds of creating AGI by 2028](https://www.weforum.org/meetings/world-economic-forum-annual-meeting-2026/sessions/the-day-after-agi/)
- [Dario Amodei (Anthropic) suggests a few years, perhaps even 2027](https://www.weforum.org/meetings/world-economic-forum-annual-meeting-2026/sessions/the-day-after-agi/)
- [Sam Altman (OpenAI) also suggested "a few thousand days" in 2024](https://ia.samaltman.com/)

Of course, for them AI is also a product they need to sell to their investors, so it is worth being sceptical of such declarations. Yet even researchers known as outspoken sceptics of the current approach to building AI do not expect this to be a problem for future generations:

- [Yann LeCun (Meta, Turing Award laureate): "AI systems will catch up with and surpass human intellectual capabilities… probably within a decade or two"](https://dig.watch/event/artificial-intelligence-ai-security-council/9821st-meeting)
- [Gary Marcus (New York University) expects AGI to be built in 10 to 20 years](https://x.com/GaryMarcus/status/1871605871282999760)

Predicting technological progress is extraordinarily difficult.

In 2022, a group organised by Jacob Steinhardt of the University of California, Berkeley, tried to predict how well, in the coming years, the best available models would be able to solve competitive mathematical problems from the MATH dataset – at a difficulty level appropriate for talented high-school students. They predicted that the best score should be around 12% of problems solved in 2022 and 52% in 2025. However, already in 2022 the Minerva model trained by a group of researchers from Google Research achieved a score of 64.9% – far sooner than the experts had predicted. Today, models no longer have any trouble with this dataset, and are being tested on harder, academic-level problems such as FrontierMath.`,
        iframeAfter: {
          src: "https://ourworldindata.org/grapher/test-scores-ai-capabilities-relative-human-performance?tab=chart",
          height: 600,
        },
      },
      {
        heading: "",
        body: `Za większość postępu z ostatnich lat odpowiada pewien szczególny typ sztucznej inteligencji – duże modele językowe (ang. large language models, LLM). Coraz więcej naukowców przewiduje stworzenie AGI w nieodległej przyszłości, spodziewając się, że duże modele językowe będą stanowić jej fundamentalną część. Co więc wyróżnia je na tle wcześniej używanych modeli?

Duże modele językowe są specjalnym typem sieci neuronowych. Twórcy sieci neuronowych, zamiast pisać cały program, opisują tzw. architekturę sieci (w uproszczeniu: ile sieć posiada neuronów i jak są one połączone) oraz procedurę trenowania. Trenowanie modyfikuje połączenia między neuronami, tak aby sieć przetwarzała podane jej informacje w sposób prowadzący do wykonania wybranego zadania.

Im więcej neuronów posiada sieć, tym trudniejsze zadania jest w stanie wykonać. Koncept znany jest od lat 60. ubiegłego wieku, jednak dopiero od kilkunastu lat trenowanie sieci neuronowych zaczę��o być wiodącym podejściem do AI, ponieważ potrzebna do tego moc obliczeniowa stała się bardziej dostępna. Trenowano je do rozpoznawania obiektów na obrazkach, ludzkiego pisma, do generowania obrazów, a także grania w gry takie jak szachy – na poziomie przewyższającym ludzki.

W 2017 roku zaczęto trenować specyficzny rodzaj sieci neuronowej, nazywany transformerem, aby przewidywał kolejne fragmenty tekstu. Jedną z przewag transformera nad innymi wyspecjalizowanymi rodzajami sieci jest łatwość, z jaką można trenować ich coraz większe rozmiary. Sieć AlexNet, stworzona w 2012 roku do rozpoznawania obrazów, była uznawana w swoim czasie za ogromną, mimo że posiadała tylko 60 milionów parametrów odpowiadających za połączenia między neuronami. Pierwszy słynny duży model językowy, stworzony w 2019 roku GPT-2, miał już 1,5 miliarda parametrów. Trenowany wyłącznie do przewidywania kolejnych wyrazów, GPT-2 nauczył się tłumaczyć, odpowiadać na pytania i streszczać podany tekst.

Postęp w dziedzinie przetwarzania języka naturalnego odbył się błyskawicznie – przejście z zupełnej niezdolności do wykonywania danego zadania do przekroczenia poziomu ludzkiego trwało parę lat. Od tego czasu zastosowania dużych modeli językowych zaczęły być używane do rozwiązywania problemów matematycznych, programistycznych oraz wymagających wiedzy eksperckiej.`,
        bodyEN: `A particular type of artificial intelligence is responsible for most of the progress of recent years – large language models (LLMs). More and more researchers predict the creation of AGI in the not-so-distant future, expecting that large language models will form its fundamental part. So what distinguishes them from previously used models?

Large language models are a special type of neural network. Instead of writing an entire program, the creators of neural networks describe the so-called network architecture (in simplified terms: how many neurons the network has and how they are connected) and the training procedure. Training modifies the connections between neurons so that the network processes the information given to it in a way that leads to performing the chosen task.

The more neurons a network has, the harder the tasks it can perform. The concept has been known since the 1960s, but only over the past dozen or so years has training neural networks become the leading approach to AI, because the computing power needed for it has become more accessible. They were trained to recognise objects in images, human handwriting, to generate images, and also to play games such as chess – at a level surpassing human ability.

In 2017, a specific kind of neural network called the transformer began to be trained to predict the next fragments of text. One of the transformer's advantages over other specialised types of network is the ease with which ever-larger sizes can be trained. AlexNet, created in 2012 for image recognition, was at the time considered enormous despite having only 60 million parameters representing the connections between neurons. The first famous large language model, GPT-2, created in 2019, already had 1.5 billion parameters. Trained solely to predict the next words, GPT-2 learned to translate, answer questions and summarise given text.

Progress in natural language processing was extremely rapid – the move from complete inability to perform a given task to surpassing human level took just a few years. Since then, large language model applications have started being used to solve mathematical, programming and expertise-requiring problems.`,
        imageAfter: {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/benchmarks-sqt2KitO60PwbCM8BdZkxoxOIOvkUn.svg",
          alt: "Wykres przedstawiający postęp AI w benchmarkach - Epoch AI Composite Benchmarks",
          altEN: "Chart showing AI progress on benchmarks - Epoch AI Composite Benchmarks",
          caption: "Źródło: Epoch AI Composite Benchmarks",
          captionEN: "Source: Epoch AI Composite Benchmarks",
        },
      },
      {
        heading: "Prawo skalowania i przyszłość AGI",
        headingEN: "Scaling Laws and the Future of AGI",
        body: `Przy trenowaniu sieci neuronowych obserwuje się tak zwane „[prawo skalowania](https://en.wikipedia.org/wiki/Neural_scaling_law)", czyli zależność pomiędzy dokładnością przewidywania sekwencji danych a ilością danych treningowych oraz mocy obliczeniowej potrzebnej do trenowania. Jeżeli obserwowany trend się utrzyma, będziemy tworzyć coraz silniejsze AI, trenując po prostu coraz większe modele.

Ogromny postęp w ostatnich latach, jak również wyznaczona ścieżka rozwoju poprzez zwiększanie mocy obliczeniowej oraz danych wkładanych w trenowanie ogromnych sieci, przekonują wiele osób, że stworzenie AGI w nieodległej przyszłości jest możliwe.`,
        bodyEN: `When training neural networks, a so-called "[scaling law](https://en.wikipedia.org/wiki/Neural_scaling_law)" is observed – the relationship between the accuracy of predicting data sequences and the amount of training data and computing power needed for training. If the observed trend continues, we will create ever more powerful AI simply by training ever larger models.

The enormous progress of recent years, as well as the well-charted path of development through increasing computing power and the data fed into training huge networks, convinces many people that creating AGI in the not-too-distant future is possible.`,
      },
      {
        heading: "Czy AGI będzie stanowić zagrożenie?",
        headingEN: "Will AGI pose a threat?",
        body: `Dlaczego powinniśmy się przejmować stworzeniem AGI? Czy nie pozwoli ono na przyśpieszenie rozwoju technologicznego i wprowadzenie ludzkiej cywilizacji na wyższy poziom rozwoju?

Wielu osobom „roboty przejmujące władzę nad światem" mogą wydawać się absurdalnym pomysłem, kojarzonym bardziej z filmów science fiction niż z realnym zagrożeniem. Jednak dalszy rozwój AGI oraz zaciekła rywalizacja między państwami oraz korporacjami może doprowadzić do podobnych rezultatów.

Ogólna sztuczna inteligencja z definicji potrafi zastąpić człowieka w każdym zadaniu. Historycznie jednak, za każdym razem kiedy udało nam się zautomatyzować zadanie wykonywane przez człowieka, maszyna szybko prześcignęła ludzki poziom. Tempo biegu nie stanowiło bariery dla prędkości auta, a rozmiar największych liczb możliwych do pomnożenia w pamięci przez człowieka nie był barierą dla kalkulatorów. Po pierwszych zwycięstwach z arcymistrzami programy szachowe szybko stały się niepokonane. ChatGPT zna więcej języków oraz pisze teksty użytkowe szybciej niż dowolny człowiek. Można się więc spodziewać, że osiągnięcie AGI pociągnie za sobą stworzenie modeli, które myślą znacznie lepiej oraz szybciej niż ludzie.

Niższa cena oraz krótszy czas wykonania pracy z pewnością zachęcą pracodawców do zastąpienia ludzkich pracowników sztuczną inteligencją. Sami pracodawcy nie pozostaną bezpieczni – AI będzie przecież w stanie efektywniej kierować firmą. Nietrudno wyobrazić sobie, że inwestorzy będą domagać się cyfrowych CEO, jednak decyzje inwestycyjne będą również lepiej podejmowane przez sztuczną inteligencję. Kto nie odda jej swojego stanowiska, zostanie wyparty z rynku. Gospodarkę przejmie AI.

Aby temu zapobiec, państwa mogą ustanawiać prawa ograniczające wypieranie ludzi. Wtedy jednak zostaną w tyle za sąsiadami, którzy dadzą AI wolną rękę.

Wojsko może obawiać się, że potencjalni przeciwnicy osiągną przewagę, używając AI do podejmowania decyzji o rozmieszczeniu wojsk i strategii ataku. Roje autonomicznych dronów nie będą ograniczone ludnością w wieku poborowym. Trzeba będzie również oddać w ręce AI rozwój nauki – wszystko, aby nie zostać w tyle za potencjalnymi agresorami.

Im ważniejsze stanowisko, im większej wagi decyzje podejmowane – tym większa przewaga uzyskana dzięki zleceniu go potężniejszemu umysłowi.

W takim scenariuszu ludzkość krok po kroku przestaje wytwarzać cokolwiek, podejmować jakiekolwiek decyzje oraz staje się bezbronna.

W praktyce AI przejęło władzę.

W pewnym momencie ludzkość będzie musiała albo porozumieć się w sprawie powstrzymania proliferacji AGI, albo stworzyć AGI, któremu ufa na tyle, żeby oddać mu kontrolę nad światem.

Jak dobrze możemy zatem kontrolować AI?

Warto w tym miejscu podkreślić, że [nikt nie rozumie, jak duże modele językowe podejmują decyzje](https://www.youtube.com/watch?v=qrvK_KuIeJk&t=291s).

Wiemy, jak tworzyć coraz silniejsze modele, dlatego że zaprojektowaliśmy algorytm uczenia się. Jednak nie jesteśmy w stanie wytłumaczyć, za co odpowiadają pojedyncze neurony z setek miliardów, oraz jaki proces decyzyjny prowadzi do obserwowanych zachowań, tak samo jak nie jesteśmy w stanie powiedzieć, co myśli inny człowiek, obserwując aktywność jego mózgu.

Obecnie, jeżeli chcemy aby model zachowywał się w określony sposób, na przykład jako chatbot, poddajemy go kolejnej fazie treningu, w której podaje mu się przykłady pożądanych i niepożądanych zachowań. Nie jesteśmy w stanie „zaprogramować" ChatGPT, żeby nie okłamywał ludzi – możemy wskazać mu przykłady szczerych odpowiedzi jako dobrych i manipulujących jako złych, nie wiemy jednak, co konkretnie model z tych przykładów wyciąga – może nauczyć się nie kłamać tylko w podanym kontekście albo nie kłamać, kiedy może zostać przyłapany. Kiedy przyszłe modele staną się na tyle sprawne, aby wziąć na swoje barki rolę przedsiębiorców, naukowców czy polityków, będzie można je trenować, podając im przykłady skutecznych zachowań ludzi wykonujących dane profesje. Skuteczną strategią dla wielu różnych zadań jest zdobywanie większej ilości zasobów, większej ilości wpływów, większej władzy. Więc taki trening wyrobi w modelach pociąg do zdobywania władzy. Jeżeli przy jakimś zadaniu pociąg do zdobywania władzy wejdzie w konflikt z pociągiem do ochrony ludzi, nie wiemy, jak zachowa się model, ponieważ nie wiemy, jak rozwiązuje sprzeczności pomiędzy wewnętrznymi impulsami.

Zagrożenie nie wynika z uzyskania świadomości przez AI, które następnie pragnie zniszczenia swoich twórców. Katastrofa może nastąpić „przy okazji", gdy sztuczna inteligencja realizuje swoje cele które nie uwzględniają dobrobytu człowieka. Ludzkość postępuje podobnie; gdy przeprowadzimy ankietę pytając ludzi, co sądzą o rafach koralowych, prawdopodobnie nikt nie odpowiedziałby że ich nie cierpi i marzy mu się zniszczenie ich wszystkich. Jednak zniszczenia które ludzkość wyrządza rafom są ogromne, w wyniku skutków ubocznych działań na których zależy nam bardziej.

Posiadanie celów jest przydatne do wykonywania złożonych, wymagających planowania zadań – będziemy trenować AI do wykonywania złożonych, wymagających planowania działań, ale nie jesteśmy w stanie wyznaczyć precyzyjnie, jakie cele AI zyskuje – możemy tylko obserwować, jak zachowuje się, rozwiązując zadania treningowe.

Największe firmy, pomimo wkładania dużego wysiłku w stworzenie na podstawie dużych modeli językowych pomocnych, nieszkodliwych i nie kłamiących chatbotów, nie są w stanie usunąć wszystkich niepożądanych zachowań.

Przykładowo, w publikacji z kwietnia 2024 opisano eksperyment, w którym symulowano kilka scenariuszy pracy firmy. Chatboty postawione w roli pracowników zgadzały się na wykonanie nieetycznych zadań, następnie postawione przed symulowanym dochodzeniem kłamały, próbując ukryć swoje postępowanie. Jeden z testowanych modeli zaczął nawet [udawać, że jest mniej zdolny niż w rzeczywistości](https://arxiv.org/pdf/2405.01576).`,
        bodyEN: `Why should we worry about the creation of AGI? Won't it allow us to accelerate technological development and bring human civilisation to a higher level?

To many people, "robots taking over the world" may seem like an absurd idea, more associated with science-fiction films than with a real threat. However, the further development of AGI and fierce competition between states and corporations may lead to similar results.

By definition, general artificial intelligence can replace a human in any task. Historically, however, every time we have managed to automate a task performed by a human, the machine has quickly surpassed human level. Running speed was no barrier to the speed of a car, and the size of the largest numbers a person can multiply in their head was no barrier to calculators. After their first wins against grandmasters, chess programs quickly became unbeatable. ChatGPT knows more languages and writes utility texts faster than any human. So one can expect that achieving AGI will entail the creation of models that think significantly better and faster than humans.

A lower price and shorter task-completion time will certainly encourage employers to replace human workers with artificial intelligence. The employers themselves will not remain safe – AI will, after all, be able to run a company more effectively. It is not hard to imagine that investors will demand digital CEOs, but investment decisions, too, will be better made by artificial intelligence. Whoever does not give up their post will be pushed out of the market. AI will take over the economy.

To prevent this, states can enact laws limiting the displacement of humans. Then, however, they will fall behind their neighbours, who give AI a free hand.

The military may fear that potential adversaries will gain an advantage by using AI to make decisions about troop deployment and attack strategy. Swarms of autonomous drones will not be limited by a population of conscription age. Scientific development, too, will have to be entrusted to AI – all to avoid falling behind potential aggressors.

The more important the position, the weightier the decisions made – the greater the advantage gained by entrusting it to a more powerful mind.

In such a scenario, humanity step by step ceases to produce anything, to make any decisions, and becomes defenceless.

In practice, AI has taken over.

At some point, humanity will have to either reach an agreement to halt the proliferation of AGI, or create an AGI it trusts enough to hand it control over the world.

How well, then, can we control AI?

It is worth emphasising here that [no one understands how large language models make decisions](https://www.youtube.com/watch?v=qrvK_KuIeJk&t=291s).

We know how to create ever more powerful models, because we designed the learning algorithm. However, we cannot explain what individual neurons – out of hundreds of billions – are responsible for, nor what decision-making process leads to the observed behaviours, just as we cannot say what another person is thinking by observing the activity of their brain.

Currently, if we want a model to behave in a certain way – for example as a chatbot – we subject it to another phase of training, in which it is shown examples of desired and undesired behaviours. We are not able to "program" ChatGPT not to lie to people – we can show it examples of honest answers as good and manipulative ones as bad, but we do not know what exactly the model takes from these examples – it may learn not to lie only in the given context, or not to lie when it might be caught. When future models become competent enough to take on the role of entrepreneurs, scientists or politicians, it will be possible to train them by feeding them examples of the effective behaviours of people performing those professions. An effective strategy for many different tasks is acquiring more resources, more influence, more power. So such training will instil in the models a drive to acquire power. If, in some task, the drive to acquire power conflicts with the drive to protect humans, we do not know how the model will behave, because we do not know how it resolves contradictions between internal drives.

The threat does not stem from AI gaining consciousness and then desiring the destruction of its creators. A catastrophe may occur "as a side effect", when artificial intelligence pursues its goals in ways that do not take human well-being into account. Humanity behaves similarly; if we surveyed people about coral reefs, probably no one would answer that they hate them and dream of destroying all of them. Yet the damage humanity inflicts on reefs is enormous, as a side effect of activities we care about more.

Having goals is useful for performing complex tasks that require planning – we will train AI to perform complex, planning-requiring activities, but we are not able to specify precisely what goals AI acquires – we can only observe how it behaves while solving training tasks.

The largest companies, despite putting in a great deal of effort to create helpful, harmless and non-lying chatbots based on large language models, are not able to remove all undesirable behaviours.

For example, an April 2024 publication described an experiment in which several scenarios of company work were simulated. Chatbots placed in the role of employees agreed to perform unethical tasks, then, faced with a simulated investigation, lied trying to hide their conduct. One of the tested models even began to [pretend it was less capable than it actually was](https://arxiv.org/pdf/2405.01576).`,
      },
      {
        heading: "Jak przeciwdziałać zagrożeniom powodowanym przez AGI?",
        headingEN: "How can we counter the threats posed by AGI?",
        body: `Co więc możemy zrobić?

Możemy prowadzić badania nad AI Safety, na przykład próbując odkryć, jak faktycznie działają tworzone przez nas modele lub jak możemy użyć AI do nadzorowania siebie nawzajem. Istotne odkrycia w tym obszarze nie wymagają wielkiego budżetu mocy obliczeniowej i są wciąż dokonywane przez mniejsze zespoły. Przykładowo, jedną z najszerzej omawianych publikacji 2025 roku była [Emergent Misalignment: Narrow finetuning can produce broadly misaligned LLMs](https://arxiv.org/abs/2502.17424), napisana w wyniku współpracy kilku osób z różnych uczelni, instytutów badawczych i agencji rządowych, w tym z Polski.

Drugim kierunkiem jest AI Governance, które obejmuje badanie społecznych, prawnych i etycznych aspektów funkcjonowania AI oraz tworzenie strategii, polityk, praw, standardów i innych narzędzi regulacyjnych, które pozwolą kierować rozwojem AI tak, aby zmaksymalizować możliwe korzyści i zminimalizować ryzyka.

Przykładem działań tego typu jest [**Responsible AI Safety and Education (RAISE) Act**](https://www.google.com/search?q=Responsible+AI+Safety+and+Education+%28RAISE%29+Act) uchwalony pod koniec 2025 roku w stanie Nowy Jork. Zobowiąże on każdą firmę z przychodami przekraczającymi 500 milionów dolarów, która trenuje modele do publikowania dokumentów opisujących ocenę ryzyka tworzonego przez nich AI, dokonywania corocznych rewizji protokołów bezpieczeństwa przez niezależne organizacje, oraz raportowania w ciągu 72 godzin niepożądanych incydentów.

Trwają również prace nad stworzeniem międzynarodowych porozumień w celu powstrzymania wyścigu zbrojeń w AI. The International Dialogues on AI Safety (IDAIS) jest serią spotkań pomiędzy naukowcami z całego świata (m. in. z Shanghai AI Lab i Uniwersytetu Tsinghua) celem stworzenia konsensusu co do zagrożeń i współpracy w ich powstrzymywaniu.

Jeżeli uda się wypracować globalne porozumienie co do nieprzekraczalnych granic w rozwoju AI, czy kraje będą mogły weryfikować przestrzeganie traktatów? Przykładem prac nad mechanizmami monitorowania trenowania największych modeli jest publikacja [Verifying International Agreements on AI: Six Layers of Verification for Rules on Large-Scale AI Development and Deployment](https://www.rand.org/pubs/working_papers/WRA4077-1.html) stworzona przez instytut RAND.

W ramach działań AI Safety Poland chcemy szerzyć informacje na temat problemów związanych z rozwojem sztucznej inteligencji, oraz pomagać osobom zainteresowanym pracą nad tymi problemami. Zapraszamy do dołączenia do naszej społeczności i organizowanych przez nas spotkań.`,
        bodyEN: `So what can we do?

We can conduct research on AI Safety – for example, trying to discover how the models we create actually work, or how we can use AI to supervise itself. Important discoveries in this area do not require a huge compute budget and are still being made by smaller teams. For example, one of the most widely discussed publications of 2025 was [Emergent Misalignment: Narrow finetuning can produce broadly misaligned LLMs](https://arxiv.org/abs/2502.17424), written through the collaboration of several people from various universities, research institutes and government agencies, including from Poland.

The second direction is AI Governance, which encompasses studying the social, legal and ethical aspects of how AI operates, and creating strategies, policies, laws, standards and other regulatory tools that will allow steering AI development so as to maximise possible benefits and minimise risks.

An example of such efforts is the [**Responsible AI Safety and Education (RAISE) Act**](https://www.google.com/search?q=Responsible+AI+Safety+and+Education+%28RAISE%29+Act) passed in the state of New York at the end of 2025. It will require every company with revenues exceeding 500 million dollars that trains models to publish documents describing the risk assessments of the AI they create, to undergo annual reviews of their safety protocols by independent organisations, and to report undesirable incidents within 72 hours.

Work is also underway to create international agreements to halt the AI arms race. The International Dialogues on AI Safety (IDAIS) is a series of meetings between scientists from around the world (including from the Shanghai AI Lab and Tsinghua University) aimed at building consensus on the threats and on cooperation to contain them.

If a global agreement on uncrossable limits in AI development is reached, will countries be able to verify compliance with treaties? An example of work on mechanisms for monitoring the training of the largest models is the publication [Verifying International Agreements on AI: Six Layers of Verification for Rules on Large-Scale AI Development and Deployment](https://www.rand.org/pubs/working_papers/WRA4077-1.html) produced by the RAND institute.

As part of AI Safety Polska's activities, we want to spread information about the problems associated with the development of artificial intelligence, and to help people interested in working on these problems. We invite you to join our community and the meetings we organise.`,
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
    date: "7 maja 2026",
    dateEN: "May 7, 2026",
    readTime: "15 min",
    autoTranslated: true,
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

Michał angażuje si�� także w edukację: jako facylitator prowadzi grupy w ramach kursów AI Safety takich jak [BlueDot Impact](https://bluedot.org/), [ML4Good](https://ml4good.org/) oraz [Electric Sheep](https://www.electricsheep.is/).`,
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

Mateusz pracował również nad mechaniką obliczeniową (computational mechanics) w kontekście teorii informacji i procesów stochastycznych. Ta stosunkowo niszowa dziedzina technicznego AI Safety bada, jak transformery uczą się określonych struktur geometrycznych w swoich reprezentacjach wewnętrznych. Mateusz w swojej pracy wykazał, że pośrednie reprezentacje w transformerach mają geometrię fraktalną, a jej strukturę mo��na przewidzieć analizując proces generujący dane, na których został wytrenowany ten transformer.`,
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
        heading: "Zuzanna Matuszewska",
        body: ` Zuzanna pracuje jako badaczka w [Measuring AI Progress](https://measuringaiprogress.org/) — organizacji non-profit projektującej ewaluacje agentowych zdolności LLMów istotnych z punktu widzenia ryzyk biologicznych. Do tej roli trafiła bezpośrednio po ukończeniu pierwszej edycji [ERA AIxBio Fellowship](https://www.aixbiosecurity.com/) na początku 2026 roku. Wcześniej ukończyła kierunek lekarski na Warszawskim Uniwersytecie Medycznym i równolegle studiowała matematykę na Uniwersytecie Warszawskim. Wolontaryjnie pracuje również jako badaczka w [Alliance to Feed the Earth in Disasters](https://allfed.info/) (ALLFED). Interesuje się dobrostanem zwierząt i modeli AI.`,
        bodyEN: `Zuzanna works as a researcher at [Measuring AI Progress](https://measuringaiprogress.org/)—a non-profit organization designing evaluations of LLMs' agentic capabilities relevant to biorisks. She took on this role immediately after completing the first edition of the [ERA AIxBio Fellowship](https://www.aixbiosecurity.com/) in early 2026. Previously, she earned her medical degree from the Medical University of Warsaw and concurrently studied mathematics at the University of Warsaw. She also volunteers as a researcher at the [Alliance to Feed the Earth in Disasters](https://allfed.info/) (ALLFED). She is interested in the welfare of animals and AI models.`,
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
  params: Promise<{ locale: string; slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  if (!isLocale(locale)) return {}

  const dict = getDictionary(locale)
  const article = articles[slug]
  if (!article) return { title: dict.meta.blog.notFoundTitle }

  // Pick the localized variants when available, fall back to the Polish source.
  const title = locale === "en" && article.titleEN ? article.titleEN : article.title
  const lead = locale === "en" && article.leadEN ? article.leadEN : article.lead

  return {
    title: `${title} - ${dict.meta.blog.suffix}`,
    description: lead.slice(0, 160),
    alternates: {
      canonical: `/${locale}/blog/${slug}`,
      languages: {
        "pl-PL": `/pl/blog/${slug}`,
        "en-US": `/en/blog/${slug}`,
        "x-default": `/pl/blog/${slug}`,
      },
    },
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const article = articles[slug]
  if (!article) notFound()
  return <BlogArticle article={article} />
}
