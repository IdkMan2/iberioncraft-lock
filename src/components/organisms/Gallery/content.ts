import {GalleryElement} from "./types";
import edycja1SpawnImage from "../../../assets/images/Gallery/edycja-pierwsza-spawn.jpg";
import animowaneZycieImage from "../../../assets/images/Gallery/edycja-pierwsza-screen1.png";
import edycjaDrugaImage from "../../../assets/images/Gallery/edycja-druga.png";
import edycjaDrugaServerDown from "../../../assets/images/Gallery/edycja-druga-server-down.png";
import edycjaTrzecia from "../../../assets/images/Gallery/edycja-trzecia.png";
import edycjaTrzeciaSloty from "../../../assets/images/Gallery/edycja-trzecia-sloty.png";
import edycjaCzwarta from "../../../assets/images/Gallery/edycja-czwarta.png";
import ed4Trenerzy from "../../../assets/images/Gallery/ed4-trenerzy.png";
import lobby from "../../../assets/images/Gallery/lobby.png";
import pirateWars from "../../../assets/images/Gallery/pirate-wars.png";
import gomez from "../../../assets/images/Gallery/gomez.png";
import zimaWszedzie from "../../../assets/images/Gallery/zima-wszedzie.png";
import ed5Konkurs from "../../../assets/images/Gallery/ed5-konkurs.png";
import ed5Cobblestone from "../../../assets/images/Gallery/ed5-cobblestone.png";
import eventInwazja from "../../../assets/images/Gallery/event-inwazja.png";
import ed6Budowa from "../../../assets/images/Gallery/ed6-budowa.png";
import ed6PapierkowaRobota from "../../../assets/images/Gallery/ed6-papierkowa-robota.png";
import ed6Tron from "../../../assets/images/Gallery/ed6-tron.png";
import ed6Fontanna from "../../../assets/images/Gallery/ed6-nexus.png";
import ed6Wykonczenia from "../../../assets/images/Gallery/ed6-wykonczenia.png";
import ed7Banner from "../../../assets/images/Gallery/ed7-banner.jpg";
import ed7Gracze from "../../../assets/images/Gallery/ed7-gracze.png";
import ed7Festiwal from "../../../assets/images/Gallery/ed7-festiwal-kolorow.png";
import ed7powrot from "../../../assets/images/Gallery/ed7-powrot.png";
import ed8 from "../../../assets/images/Gallery/ed8.png";
import ed8LobbyNew from "../../../assets/images/Gallery/ed8-lobby-new.png";
import ed8Pogadanki from "../../../assets/images/Gallery/ed8-pogadanki.png";
import ed9Spawn from "../../../assets/images/Gallery/ed9-spawn.png";
import ed9Pluginy from "../../../assets/images/Gallery/ed9-nowe-pluginy.png";
import ed9Bossy from "../../../assets/images/Gallery/ed9-bossy.png";
import ed9Siedzonka from "../../../assets/images/Gallery/ed9-siedzonka.png";
import ed9TheEnd from "../../../assets/images/Gallery/ed9-the-end.png";

export const galleryData: GalleryElement[] = [
  {
    type: "timeline",
    date: '18 Września 2016',
    anchorId: 'scroll-down-xs'
  },
  {
    type: 'row-container',
    childs: [
      {
        type: "video-card",
        title: 'Pierwszy sezon',
        subtitle: 'Tutaj nasza przygoda się rozpoczyna. Pierwszy sezon trwał mniej więcej w granicach 18 września - 19 listopada 2016. Byliśmy wtedy połączeni jeszcze z inną siecią serwerów "QuasiClick" ✌.',
        video: 'https://www.youtube.com/embed/sAjLCFJZIic',
        tags: ['#początek', '#reklama', '#youtube']
      },
      {
        type: "photo-card",
        title: 'Spawn z Gothica 1',
        subtitle: 'Mapa wyjęta rodem z Gothica, NPC, oryginalne skiny przedstawiające stroje strażników, unikalne lokacje. Chyba każdemu przypadł do gustu. Zresztą miał w sobie to coś 🤠.',
        image: edycja1SpawnImage,
        tags: ['#spawn', '#gothic']
      },
      {
        type: "photo-card",
        title: 'Animowane życie',
        subtitle: 'Staraliśmy się dopieścić każdy element, w tym aby NPC na spawnie prowadzili prawdziwe życie. Kulawo to wyszło, a w efekcie zaczeliśmy bawić się konwencją i w ten oto sposób zorganizowaliśmy pierwszą walkę NPC - Trump VS Obama 😤.',
        image: animowaneZycieImage,
        tags: ['#NPC', '#Trump-vs-Obama']
      },
    ],
  },
  {
    type: "quote",
    content: 'Brakuje mi tylko w administracji JOmeY\'a i Sebix\'a.',
    author: '~ Gagussi'
  },
  {
    type: "timeline",
    date: '19 Listopada 2016',
  },
  {
    type: 'row-container',
    childs: [
      {
        type: "photo-card",
        title: 'Drugi sezon był tuż za rogiem',
        subtitle: 'Pierwszy sezon powoli sie już kończył, planowaliśmy wydać kolejny. Nowy świat, nowe przygody. Szturm graczy w dniu otwarcia sezonu był zdumiewający. 60 osób na serwerze, a w poczekalni kolejni czekają, aby dołączyć 😨. Niezapomniany dzień.',
        image: edycjaDrugaImage,
        wide: true,
        tags: ['#licznie']
      },
      {
        type: "video-card",
        title: 'Reklama życia',
        subtitle: 'W zaledwie kilka dni po opublikowaniu nabiła ponad 30k wyświetleń. Szczyt marzeń na tamten moment. Teraz co prawda jest już ponad 50K, ale i zdecydowanie lata świetności za sobą.',
        video: 'https://www.youtube.com/embed/7utOUtJg4V8',
        extraWide: true,
        tags: ['#reklama', '#youtube']
      },
    ],
  },
  {
    type: "quote",
    content: 'Super Server ;)',
    author: '~ XxRudyKotxX',
  },
  {
    type: "timeline",
    date: '26 Listopada 2016'
  },
  {
    type: "parallax-section",
    title: 'No i po zabawie',
    subtitle: 'Niestety nadal tkwiliśmy w sieci serwerów "QuasiClick", gdzie administratorzy nie byli zbyt mili i potrafili sabotować nasz serwer bo był bardziej popularny od całej reszty. Tak to już bywa, musieliśmy spakować manatki i się zwijać z rynku... Ale nie na długo 😮.',
    image: edycjaDrugaServerDown,
  },
  {
    type: "timeline",
    date: '7 lipca 2017'
  },
  {
    type: "row-container",
    childs: [
      {
        type: "video-card",
        title: 'Feniks budzi się z popiołów',
        subtitle: 'To już była tylko kwestia czasu, kiedy Iberion się odrodzi. Idk trochę nauczył się programować i tak oto został otwarty - SEZON 3 😄',
        video: 'https://www.youtube.com/embed/D861wEtryII',
        tags: ['#reklama', '#youtube', '#sezon3']
      },
      {
        type: "photo-card",
        title: 'Kolorowo tutaj',
        subtitle: 'Podczas budowy trzeciej edycji staraliśmy się, żeby był najbardziej pokręcony i kolorowy klimat ever. Chyba się udało 🤪? Pamiętacie fontanne? Znak charakterystyczny Iberionu, był z nami od 3 edycji aż do samego końca.',
        image: edycjaTrzecia,
        tags: ['#edycja3', '#spawn']
      },
      {
        type: "photo-card",
        title: 'Jest power!',
        subtitle: 'Mimo, że na początku było bardzo pusto i biednie na serwerze, to tłum graczy napierał na serwer - wszystkie sloty zajęte, serwer ledwie dyszał 😜.',
        image: edycjaTrzeciaSloty,
        tags: ['#klimat', '#power']
      },
    ],
  },
  {
    type: "quote",
    content: 'Pamiętam jakby to było jeszcze kilka dni temu :D',
    author: '~ Kokosim'
  },
  {
    type: "timeline",
    date: '7 Października 2017'
  },
  {
    type: "row-container",
    childs: [
      {
        type: "photo-card",
        title: 'Kolejne miesiące zabawy, czyli Sezon 4',
        subtitle: 'Dwa miesiace świetnej zabawy na edycji trzeciej były mgnieniem oka. W tym czasie weszło dużo nowych usprawnień i mogliśmy zawitać na serwerze kolejny sezon.',
        image: edycjaCzwarta,
        extraWide: true,
        tags: ['#edycja4', '#spawn']
      },
      {
        type: "photo-card",
        title: 'Questy, trenerzy',
        subtitle: 'Tak jest, to właśne w tej edycji pojawili się pierwsi trenerzy. Nauka skilli, misje, zadania i nie tylko 🧐. Dzień za dniem mijał, a level rósł. Już po kilku dniach edycji mieliśmy mocną topkę graczy 😀.',
        image: ed4Trenerzy,
        wide: true,
        tags: ['#trenerzy', '#questy']
      },
    ],
  },
  {
    type: "row-container",
    childs: [
      {
        type: "photo-card",
        title: 'Prawdziwa sieć serwerów!',
        subtitle: 'W między czasie zbudowaliśmy lobby. To był kluczowy moment w życiu Iberionu. Projekt z małego serwera przerósł w rozbudowaną sieć serwerów.',
        image: lobby,
        tags: ['#lobby', '#sieć']
      },
      {
        type: "photo-card",
        title: 'Pirate Wars?',
        subtitle: 'Pamiętacie Pirate Wars? Nie? Ja też, cóż za przypadek. Nigdy nie było tego trybu, nie było czasu kiedy go zrobić. Pomysł był dobry, ale z wykonaniem nie za bardzo 😂.',
        image: pirateWars,
        tags: ['#nowy-tryb', '#lobby']
      },
      {
        type: "photo-card",
        title: '✌ Cześć Gomez!',
        subtitle: 'No tak, nieszczęsny Gomez. Miał napis XXL nad głową "Porozmawiaj ze mną", ale i tak nikt z nim nie chciał rozmawiać. A szkoda, miał dla was fajne questy! 😆',
        image: gomez,
        tags: ['#NPC', '#questy']
      },
    ],
  },
  {
    type: "timeline",
    date: '15 Grudnia 2017'
  },
  {
    type: "parallax-section",
    title: 'Zima zima! Sezon 5 🎅',
    subtitle: [
      'Dzięki naszym wspaniałym budowniczym już 15 Grudnia mogliśmy zwiedzać zimową wersję spawnu. Prezenty były? Były! Kto się załapał ten wie 😁.',
      'PS: Widzicie tam Gomeza? A widzicie jakiegoś gracza obok? Ja też nie!'
    ],
    image: zimaWszedzie,
  },
  {
    type: "row-container",
    childs: [
      {
        type: "photo-card",
        title: 'Konkursy, gemy',
        subtitle: 'Gemy to już była waluta o wyższej wartości niż nagie fotki i każdy to wiedział. Konkursy na Iberionie to był strzał w dziesiątkę.',
        image: ed5Konkurs,
        tags: ['#konkursy', '#gemy']
      },
      {
        type: "photo-card",
        title: 'Cobblestone',
        subtitle: 'To mniej więcej wtedy na serwerze pojawił się cobblestone. NPC Guliver handlował magicznymi cobblami jak narkotykami na przecenie. Czasami wypadała gwiazda netheru, a czasami dirt 10 razy pod rząd 😅.',
        image: ed5Cobblestone,
        tags: ['#cobblestone', '#NPC']
      },
      {
        type: "photo-card",
        title: 'Event Inwazja ⚔️',
        subtitle: 'Niewiele osób pewnie pamięta. Był kiedyś event "Inwazja". Polegał na tym, aby wspólnymi siłami obronić nexus wewnątrz zamku przeciw hordom zombie,' +
          ' którzy z każdą rudną rośli w siłę. Niestety zombie byli pobugowani w cholerę i w efekcie końcowym event nigdy wiecej nie wystartował. Ale pomysł dobry, nie 😃?',
        image: eventInwazja,
        tags: ['#NPC', '#questy']
      },
    ],
  },
  {
    type: "timeline",
    date: '3 Luty 2018'
  },
  {
    type: "row-container",
    childs: [
      {
        type: "photo-card",
        title: 'Budu budu ⛏️',
        subtitle: 'Zimowe dni się dłużyły, ale nie da ekipy budowlanej IberionCraft Sp. z o.o. Plan był taki - budować spawna, niech wygląda dobrze.',
        image: ed6Budowa,
        wide: true,
        tags: ['#edycja6', '#spawn']
      },
      {
        type: "photo-card",
        title: 'No i te wykończenia',
        subtitle: 'W tej edycji na spawnie było kilkanaście znajdziek. Skrzynki ze skarbami były rozsiane po całym spawnie, a w nich atrakcyjne nagrody. W każdym razie stivki były zadowolone 🤴.',
        image: ed6Wykonczenia,
        extraWide: true,
        tags: ['#tresure-chests']
      },
    ],
  },
  {
    type: "row-container",
    childs: [
      {
        type: "photo-card",
        title: 'I tak oto - Sezon 6',
        subtitle: 'Z przyjemnością mogliśmy ogłosić otwarcie nowego sezonu wiosennego w środku zimy. To były czasy! No i tron. Tron też troche był większy. Tylko troche 😅.',
        image: ed6Tron,
        tags: ['#edycja-6', '#tron']
      },
      {
        type: "photo-card",
        title: 'Boost fontanny',
        subtitle: 'Podrasowaliśmy trochę fontannę - od teraz mogła rzucać w powietrze wszystko - dosłownie wszystko. Mina stivków, kiedy widzą beacony, których nie da się złapać - bezcenna 😍.',
        image: ed6Fontanna,
        tags: ['#sezon-6', '#fontanna']
      },
      {
        type: "photo-card",
        title: 'Prawnik z powołania',
        subtitle: [
          'W międzyczasie znaleźliśmy prawdziwego "Murarz, tynkarz, akrobata".. i prawnik. Ktoś musiał robić papierkową robotę.',
          'A tak serio, to zrobiliśmy biuro adwokata jako strefę sprawdzania graczy - kto był, ten był - nie ma się czym chwalić 🤷😁.'
        ],
        image: ed6PapierkowaRobota,
        tags: ['#sprawdzanko', '#adwokat', '#prawnik']
      },
    ],
  },
  {
    type: "timeline",
    date: '24 Marca 2018'
  },
  {
    type: "parallax-section",
    title: 'Wiosna 🌼 - Sezon 7',
    subtitle: [
      'Średniowieczny styl, więcej trenerów, więcej questów, więcej wszystkiego! Ta edycja była jedną z najlepszych. W momencie otwarcia mieliśmy prawie setkę graczy.',
    ],
    image: ed7Banner,
  },
  {
    type: "row-container",
    childs: [
      {
        type: "photo-card",
        title: 'Wspaniałe community',
        subtitle: 'Na serwerze mieliśmy wspaniałe community zarówno młodszych, jak i starszych graczy, którzy nie tylko potrafili budować, ale i też świetnie walczyć. Topka królestw i tona ich pomysłów jak obejść system, żeby więcej zarobić 😛.',
        image: ed7Gracze,
        tags: ['#edycja-7', '#community']
      },
      {
        type: "photo-card",
        title: 'Festiwal kolorów 🍉',
        subtitle: 'I proszę Państwa, właśnie wtedy wjechał na serwer najbardziej dopasiony event świata. Podzieleni na drużyny gracze malowali powierzchnie podłogi, łapali boosty, bronili terytorium. Jak to leciało? #Maluj #Podbijaj 😊.',
        image: ed7Festiwal,
        tags: ['#festiwal', '#kolorki']
      },
      {
        type: "photo-card",
        title: 'Powrót do korzeni',
        subtitle: 'W międzyczasie Idk myślał nad jakimś powrotem do korzeni. Klimat w stylu 1-2 sezonu? Cóż, skończyło się chyba na planach.',
        image: ed7powrot,
        tags: ['#powrót-do-korzeni', '#stare-lata']
      },
    ],
  },
  {
    type: "quote",
    content: 'PS: Może jeszcze kiedyś się umówimy na meczyk festiwalu? Nadal mam sprawny Iberion, hah!',
    author: '~ IdkMan',
  },
  {
    type: "timeline",
    date: '7 Lipca 2018'
  },
  {
    type: "row-container",
    childs: [
      {
        type: "photo-card",
        title: 'Lato ☀️ - Sezon 8',
        subtitle: 'Z racji tego, że zupełnie nowe pluginy były już w przygotowaniu została wydana tymczasowa edycja (nieoficjalnie z numerkiem 8).' +
          ' Przywróciliśmy bardzo starą mapę sprzed 1 sezonu (kto wie, ten wie 😜) przy czym zachowując nowoczesne rozwiązania, które do tej pory wprowadziliśmy.' +
          ' Niestety.. nie wszystko układało się kolorowo. Ostatnimi czasy przychody z serwera były coraz mniejsze, a graczy na serwerze zaczynało powoli brakować.',
        image: ed8,
        extraWide: true,
        tags: ['#edycja8', '#tymczasowo']
      },
      {
        type: "photo-card",
        title: 'Nowe Lobby',
        subtitle: 'Dotyczasowe Lobby wydawało się być już troche stare i wysłużone, także w środku edycji zrobiliśmy graczom miłe zaskoczenie w postaci zupełnie odświeżonego serwera Lobby.',
        image: ed8LobbyNew,
        wide: true,
        tags: ['#lobby']
      },
    ],
  },
  {
    type: 'row-container',
    childs: [
      {
        type: "photo-card",
        title: 'Pierwsze pogadanki',
        subtitle: '1 Września pierszy raz były zorganizowane pogadanki. Zebraliśmy się razem na disordzie, aby omówić dalszy plan rozbudowy Iberionu. Było niemal 30 osób na kanale 😵.',
        image: ed8Pogadanki,
        wide: true,
        tags: ['#pogadanki', '#discord']
      },
      {
        type: "video-card",
        title: 'Najnowsza reklama',
        subtitle: 'Naszym zdaniem też najlepsza. Muzyczka pitu pitu i pokaz serwera. Nie da się zapomnieć całego tego szumu wokół Minecraft 1.13' +
          ' - podwodny świat. Szkoda tylko, że serwery nie były na to jeszcze przygotowane.',
        video: 'https://www.youtube.com/embed/MlMG9MNTWis',
        extraWide: true,
        tags: ['#reklama', '#1.13']
      },
    ],
  },
  {
    type: 'quote',
    content: 'Nie zapomne tego jak na poprzedniej edzie mój nick powodował loganie całych gildii xDDD',
    author: '~ BartekCzemu / Frio'
  },
  {
    type: "timeline",
    date: '8 Września 2018'
  },
  {
    type: "parallax-section",
    title: 'Jesień 🍂 - Sezon 9',
    subtitle: 'Wyczekiwania edycja - Iberion na serwerze 1.13 przebudowany od zera, z nowymi pluginami, nową mapą, nowym życiem. Każdy w administracji liczył na wielkie bum' +
      ' z okazji otwarcia tej edycji. Niestety serwer 1.13 był na tamten moment bardzo niestabilny. Brakowało wielu modyfikacji serwera, które jeszcze nie działały na nowej wersji.',
    image: ed9Spawn,
  },
  {
    type: 'row-container',
    childs: [
      {
        type: "photo-card",
        title: 'Autorskie pluginy',
        subtitle: [
          'Część pluginów, które były wykorzystywane na serwerze zostały udostępnione na spigocie do pobrania za darmo.',
          'spigotmc.org/members/idkman.257368'
        ],
        image: ed9Pluginy,
        tags: ['#pluginy']
      },
      {
        type: "photo-card",
        title: 'Bossy',
        subtitle: 'Pamiętacie Quefro i Xadeza? Zawsze na początku edyji byli chowani głęboko pod spawnem, żeby później móc oficjalnie ich "wypuścić".' +
          'Te płotki na zdjęciu to nie przypadek. Gdy przebywali obok siebie to naparzali się jak dzikie borsuki w lesie.',
        image: ed9Bossy,
        tags: ['#bossy', '#quefro', '#xadez']
      },
      {
        type: "photo-card",
        title: 'Krzesła, fotele, schodki',
        subtitle: 'Karczma za to ku mojemu zdziwieniu przeżywała drugą młodość na tej edycji. Mimo, że możliwość siadania na krzesłach była już od dawna, to w tej edycji dopiero wszystkie fotele były zajęte 😅.',
        image: ed9Siedzonka,
        tags: ['#the-end']
      },
    ],
  },
  {
    type: "timeline",
    date: '9 Września 2018'
  },
  {
    type: 'row-container',
    childs: [
      {
        type: "photo-card",
        title: 'THE END',
        subtitle: [
          'Przykro mi o tym mówić.. Cieszę się, że mogliśmy być z wami przez tak długi okres. Z przerwami jest to około 2 lat współpracy... ' +
          'Nie ukrywam, że w ostatnich dniach wychodziliśmy z bilansem pieniężnym na minus. Jestem dumny z tego, że mogliśmy oferować wam bardzo tanie usługi,' +
          ' aczkolwiek nie było to już dla nas opłacalne, a koszta utrzymania maszyny, domeny, pluginów, strony nie pokrywały się z dochodami. Ja osobiście (IdkMan) nie mam czasu kompletnie na utrzymywanie Iberionu.' +
          ' Zbliża się semestr studiów.. studiuję, pracuję w 2 pracach jednocześnie i do tego utrzymuję Iberion. Muszę mieć też czas dla siebie i bliskich.. Wspominam te dobre czasy,' +
          ' kiedy na serwerze było 50/50 osób i ludzie czekali na lobby, żeby się tylko sloty zwolniły. Piękne czasy.. Pluginy mimo,' +
          ' że genialne to zaczeły się sypać i wymagają wiecznego dopracowywania. Z kolei minecraft na 1.13 jest nadal bardzo nie stabilny także nowa edycja to był duży błąd.' +
          ' Mimo wszystko uważam, że to nie był aż tak bardzo stracony czas - dużo się nauczyłem z Javy i programowania, także z rzeczy technicznych. Być może kiedyś powstanie aplikacja' +
          ' na smartfony mojego autorstwa, gdzie z powrotem powstanie nasze małe IB. '
        ],
        extraWide: true,
        image: ed9TheEnd,
        tags: ['#koniec', '#zamknięcie']
      },
    ],
  },
];