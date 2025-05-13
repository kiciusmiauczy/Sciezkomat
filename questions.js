const questions = [
  {
    text: "Która aktywność sprawia Ci najwięcej satysfakcji?",
    type: "single",
    options: [
      { text: "Pomaganie innym", category: ["Medycyna", "Psychologia", "Pielęgniarstwo"] },
      { text: "Rozwiązywanie zagadek logicznych", category: ["Informatyka", "Matematyka", "Cyberbezpieczeństwo"] },
      { text: "Tworzenie rzeczy od podstaw", category: ["Budownictwo", "Inżynieria Biomedyczna", "Architektura"] },
      { text: "Kreatywne projektowanie", category: ["Sztuka i design", "Grafika Komputerowa", "Architektura"] }
    ]
  },
  {
    text: "W jakim środowisku pracy czujesz się najlepiej?",
    type: "single",
    options: [
      { text: "Laboratorium lub sala operacyjna", category: ["Medycyna", "Farmacja", "Weterynaria"] },
      { text: "Przy komputerze", category: ["Informatyka", "Grafika Komputerowa", "Sztuczna Inteligencja"] },
      { text: "Wśród ludzi", category: ["Psychologia", "Zarządzanie", "Socjologia"] },
      { text: "W terenie lub warsztacie", category: ["Rolnictwo", "Budownictwo", "Automatyka i Robotyka"] }
    ]
  },
  {
    text: "Czy bardzo interesują Cię nowe technologie?",
    type: "rating",
    options: [
      { text: "Zdecydowanie tak", value: 5 },
      { text: "Tak", value: 4 },
      { text: "Nie mam zdania", value: 3 },
      { text: "Nie", value: 2 },
      { text: "Zdecydowanie nie", value: 1 }
    ],
    category: ["Informatyka", "Automatyka i Robotyka", "Sztuczna Inteligencja", "Cyberbezpieczeństwo"]
  },
  {
    text: "Wybierz dziedziny, które Cię fascynują:",
    type: "multiple",
    options: [
      { text: "Biologia i zdrowie", category: ["Medycyna", "Biologia", "Farmacja"] },
      { text: "Prawo i społeczeństwo", category: ["Prawo", "Historia", "Socjologia"] },
      { text: "Finanse i gospodarka", category: ["Finanse", "Ekonomia", "Zarządzanie"] },
      { text: "Technologia i programowanie", category: ["Informatyka", "Sztuczna Inteligencja", "Cyberbezpieczeństwo"] }
    ]
  },
  {
    text: "Jak oceniasz swoje umiejętności analityczne?",
    type: "rating",
    options: [
      { text: "Bardzo dobre", value: 5 },
      { text: "Dobre", value: 4 },
      { text: "Nie mam zdania", value: 3 },
      { text: "Słabe", value: 2 },
      { text: "Bardzo słabe", value: 1 }
    ],
    category: ["Matematyka", "Fizyka", "Ekonomia", "Finanse"]
  },
  {
    text: "Które z poniższych zajęć brzmi dla Ciebie najciekawiej?",
    type: "single",
    options: [
      { text: "Praca w szpitalu", category: ["Medycyna", "Pielęgniarstwo", "Fizjoterapia"] },
      { text: "Pisanie artykułów", category: ["Dziennikarstwo", "Filologia", "Filozofia"] },
      { text: "Tworzenie aplikacji", category: ["Informatyka", "Sztuczna Inteligencja", "Cyberbezpieczeństwo"] },
      { text: "Projektowanie wnętrz", category: ["Sztuka i design", "Architektura", "Grafika Komputerowa"] }
    ]
  },
  {
    text: "Czy lubisz pracować z dziećmi?",
    type: "rating",
    options: [
      { text: "Zdecydowanie tak", value: 5 },
      { text: "Tak", value: 4 },
      { text: "Nie mam zdania", value: 3 },
      { text: "Nie", value: 2 },
      { text: "Zdecydowanie nie", value: 1 }
    ],
    category: ["Pedagogika", "Psychologia"]
  },
  {
    text: "Czy jesteś odporny na stres?",
    type: "rating",
    options: [
      { text: "Zdecydowanie tak", value: 5 },
      { text: "Tak", value: 4 },
      { text: "Nie mam zdania", value: 3 },
      { text: "Nie", value: 2 },
      { text: "Zdecydowanie nie", value: 1 }
    ],
    category: ["Medycyna", "Prawo", "Dziennikarstwo"]
  },
  {
    text: "Jakie zajęcia w szkole lubiłeś najbardziej?",
    type: "multiple",
    options: [
      { text: "Matematyka", category: ["Matematyka", "Informatyka", "Finanse"] },
      { text: "Biologia", category: ["Medycyna", "Biologia", "Weterynaria"] },
      { text: "Język polski", category: ["Dziennikarstwo", "Filologia", "Filozofia"] },
      { text: "Plastyka", category: ["Sztuka i design", "Grafika Komputerowa", "Architektura"] }
    ]
  },
  {
    text: "Czy lubisz rozwiązywać problemy techniczne?",
    type: "rating",
    options: [
      { text: "Zdecydowanie tak", value: 5 },
      { text: "Tak", value: 4 },
      { text: "Nie mam zdania", value: 3 },
      { text: "Nie", value: 2 },
      { text: "Zdecydowanie nie", value: 1 }
    ],
    category: ["Automatyka i Robotyka", "Energetyka", "Inżynieria Biomedyczna"]
  },
  {
    text: "Czy ważna jest dla Ciebie praca z ludźmi?",
    type: "rating",
    options: [
      { text: "Zdecydowanie tak", value: 5 },
      { text: "Tak", value: 4 },
      { text: "Nie mam zdania", value: 3 },
      { text: "Nie", value: 2 },
      { text: "Zdecydowanie nie", value: 1 }
    ],
    category: ["Zarządzanie", "Psychologia", "Socjologia"]
  },
  {
    text: "W jakim stylu życia się odnajdujesz?",
    type: "single",
    options: [
      { text: "Dynamiczny, zmieniający się", category: ["Dziennikarstwo", "Marketing", "Turystyka i Rekreacja"] },
      { text: "Ustrukturyzowany i uporządkowany", category: ["Prawo", "Finanse", "Farmacja"] },
      { text: "Twórczy i swobodny", category: ["Sztuka i design", "Grafika Komputerowa", "Architektura"] },
      { text: "Techniczny i praktyczny", category: ["Budownictwo", "Automatyka i Robotyka", "Logistyka"] }
    ]
  },
  {
    text: "Jak oceniasz swoją precyzję i dokładność?",
    type: "rating",
    options: [
      { text: "Bardzo dobrze", value: 5 },
      { text: "Dobrze", value: 4 },
      { text: "Nie mam zdania", value: 3 },
      { text: "Słabo", value: 2 },
      { text: "Bardzo słabo", value: 1 }
    ],
    category: ["Stomatologia", "Farmacja", "Inżynieria Biomedyczna"]
  },
  {
    text: "Co chciałbyś robić za 10 lat?",
    type: "single",
    options: [
      { text: "Leczyć ludzi lub zwierzęta", category: ["Medycyna", "Weterynaria", "Pielęgniarstwo"] },
      { text: "Zarządzać firmą", category: ["Zarządzanie", "Ekonomia", "Marketing"] },
      { text: "Budować nowe technologie", category: ["Informatyka", "Cyberbezpieczeństwo", "Sztuczna Inteligencja"] },
      { text: "Uczyć lub pomagać innym", category: ["Pedagogika", "Psychologia", "Socjologia"] }
    ]
  },
  {
    text: "Jak oceniasz swoje zdolności artystyczne?",
    type: "rating",
    options: [
      { text: "Bardzo dobre", value: 5 },
      { text: "Dobre", value: 4 },
      { text: "Nie mam zdania", value: 3 },
      { text: "Słabe", value: 2 },
      { text: "Bardzo słabe", value: 1 }
    ],
    category: ["Sztuka i design", "Grafika Komputerowa", "Architektura"]
  },
  {
    text: "Czy lubisz pracę wymagającą fizycznej aktywności?",
    type: "rating",
    options: [
      { text: "Zdecydowanie tak", value: 5 },
      { text: "Tak", value: 4 },
      { text: "Nie mam zdania", value: 3 },
      { text: "Nie", value: 2 },
      { text: "Zdecydowanie nie", value: 1 }
    ],
    category: ["Rolnictwo", "Fizjoterapia", "Budownictwo"]
  },
  {
    text: "Które przedmioty szkolne były Twoją piętą achillesową?",
    type: "multiple",
    options: [
      { text: "Biologia", category: ["Informatyka", "Matematyka"] },
      { text: "Matematyka", category: ["Pedagogika", "Filologia"] },
      { text: "Historia", category: ["Inżynieria Biomedyczna", "Informatyka"] },
      { text: "Język polski", category: ["Automatyka i Robotyka", "Matematyka"] }
    ]
  },
  {
    text: "Czy chciałbyś pracować z danymi i liczbami?",
    type: "rating",
    options: [
      { text: "Zdecydowanie tak", value: 5 },
      { text: "Tak", value: 4 },
      { text: "Nie mam zdania", value: 3 },
      { text: "Nie", value: 2 },
      { text: "Zdecydowanie nie", value: 1 }
    ],
    category: ["Finanse", "Ekonomia", "Matematyka"]
  },
  {
    text: "Czy lubisz uczyć się języków obcych?",
    type: "rating",
    options: [
      { text: "Zdecydowanie tak", value: 5 },
      { text: "Tak", value: 4 },
      { text: "Nie mam zdania", value: 3 },
      { text: "Nie", value: 2 },
      { text: "Zdecydowanie nie", value: 1 }
    ],
    category: ["Filologia", "Dziennikarstwo", "Turystyka i Rekreacja"]
  },
  {
    text: "Czy interesują Cię zagadnienia etyczne i filozoficzne?",
    type: "rating",
    options: [
      { text: "Zdecydowanie tak", value: 5 },
      { text: "Tak", value: 4 },
      { text: "Nie mam zdania", value: 3 },
      { text: "Nie", value: 2 },
      { text: "Zdecydowanie nie", value: 1 }
    ],
    category: ["Filozofia", "Prawo", "Psychologia"]
  },

  // Kontynuacja tablicy questions:
{
  text: "Co sprawia Ci największą frajdę w pracy zespołowej?",
  type: "single",
  options: [
    { text: "Wspólne rozwiązywanie problemów", category: ["Informatyka", "Automatyka i Robotyka", "Cyberbezpieczeństwo"] },
    { text: "Motywowanie innych", category: ["Zarządzanie", "Psychologia", "Pedagogika"] },
    { text: "Planowanie i organizacja", category: ["Zarządzanie", "Logistyka", "Marketing"] },
    { text: "Nie przepadam za pracą zespołową", category: ["Filozofia", "Matematyka"] }
  ]
},
{
  text: "Jak oceniasz swoją odporność na widok krwi?",
  type: "rating",
  options: [
      { text: "Bardzo dobrze", value: 5 },
      { text: "Dobrze", value: 4 },
      { text: "Nie mam zdania", value: 3 },
      { text: "Słabo", value: 2 },
      { text: "Bardzo słabo", value: 1 }
    ],
  category: ["Medycyna", "Stomatologia", "Weterynaria"]
},
{
  text: "Zaznacz obszary, w których chciałbyś się rozwijać:",
  type: "multiple",
  options: [
    { text: "Tworzenie kampanii reklamowych", category: ["Marketing", "Zarządzanie"] },
    { text: "Analiza finansowa", category: ["Finanse", "Ekonomia"] },
    { text: "Badania naukowe", category: ["Biologia", "Chemia", "Fizyka"] },
    { text: "Programowanie gier lub aplikacji", category: ["Informatyka", "Sztuczna Inteligencja", "Grafika Komputerowa"] }
  ]
},
{
  text: "Jak często podejmujesz decyzje w oparciu o logikę, a nie emocje?",
  type: "rating",
  options: [
      { text: "Bardzo często", value: 5 },
      { text: "Często", value: 4 },
      { text: "Nie mam zdania", value: 3 },
      { text: "Rzadko", value: 2 },
      { text: "Bardzo rzadko", value: 1 }
    ],
  category: ["Prawo", "Informatyka", "Matematyka"]
},
{
  text: "Jakie środowisko byłoby dla Ciebie najbardziej inspirujące?",
  type: "single",
  options: [
    { text: "Szpital lub laboratorium", category: ["Medycyna", "Farmacja", "Biologia"] },
    { text: "Studio graficzne", category: ["Grafika Komputerowa", "Sztuka i design"] },
    { text: "Sąd lub sala debat", category: ["Prawo", "Filozofia", "Historia"] },
    { text: "Biuro analityczne", category: ["Ekonomia", "Finanse", "Matematyka"] }
  ]
},
{
  text: "Czy lubisz obserwować i analizować ludzkie zachowania?",
  type: "rating",
  options: [
      { text: "Zdecydowanie tak", value: 5 },
      { text: "Tak", value: 4 },
      { text: "Nie mam zdania", value: 3 },
      { text: "Nie", value: 2 },
      { text: "Zdecydowanie nie", value: 1 }
    ],
  category: ["Psychologia", "Socjologia", "Pedagogika"]
},
{
  text: "Jak reagujesz na nowe, trudne wyzwania?",
  type: "single",
  options: [
    { text: "Czuję ekscytację", category: ["Informatyka", "Cyberbezpieczeństwo", "Automatyka i Robotyka"] },
    { text: "Najpierw analizuję, potem działam", category: ["Finanse", "Matematyka", "Prawo"] },
    { text: "Wolę unikać niepewności", category: ["Pedagogika", "Filologia"] },
    { text: "Zależy od sytuacji", category: [] }
  ]
},
{
  text: "Z jakimi tematami mógłbyś prowadzić bloga lub kanał na YouTube?",
  type: "multiple",
  options: [
    { text: "Zdrowie i medycyna", category: ["Medycyna", "Farmacja", "Psychologia"] },
    { text: "Technologia i programowanie", category: ["Informatyka", "Cyberbezpieczeństwo", "Sztuczna Inteligencja"] },
    { text: "Podróże i kultura", category: ["Turystyka i Rekreacja", "Filologia", "Socjologia"] },
    { text: "Sztuka i projektowanie", category: ["Grafika Komputerowa", "Sztuka i design", "Architektura"] }
  ]
},
{
  text: "Jak często myślisz o aspektach prawnych i sprawiedliwości?",
  type: "rating",
  options: [
      { text: "Bardzo często", value: 5 },
      { text: "Często", value: 4 },
      { text: "Nie mam zdania", value: 3 },
      { text: "Rzadko", value: 2 },
      { text: "Bardzo rzadko", value: 1 }
    ],
  category: ["Prawo", "Socjologia", "Filozofia"]
},
{
  text: "Która z poniższych wartości jest Ci najbliższa?",
  type: "single",
  
  options: [
    { text: "Bezpieczeństwo i stabilność", category: ["Farmacja", "Prawo", "Finanse"] },
    { text: "Innowacja i rozwój", category: ["Sztuczna Inteligencja", "Informatyka", "Inżynieria Biomedyczna"] },
    { text: "Pomoc innym", category: ["Medycyna", "Psychologia", "Pielęgniarstwo"] },
    { text: "Wolność twórcza", category: ["Sztuka i design", "Grafika Komputerowa", "Architektura"] }
  ]
},
{
  text: "Czy interesuje Cię poznawanie ludzkiego ciała?",
  type: "rating",
  options: [
      { text: "Zdecydowanie tak", value: 5 },
      { text: "Tak", value: 4 },
      { text: "Nie mam zdania", value: 3 },
      { text: "Nie", value: 2 },
      { text: "Zdecydowanie nie", value: 1 }
    ],
  category: ["Medycyna", "Fizjoterapia", "Biologia"]
},
{
  text: "W jakiej formie najchętniej wyrażasz siebie?",
  type: "single",
  options: [
    { text: "Poprzez sztukę lub design", category: ["Sztuka i design", "Grafika Komputerowa", "Architektura"] },
    { text: "Poprzez rozmowę i wsparcie", category: ["Psychologia", "Pedagogika"] },
    { text: "Poprzez tworzenie lub budowanie", category: ["Budownictwo", "Automatyka i Robotyka"] },
    { text: "Poprzez analizę i liczby", category: ["Finanse", "Matematyka"] }
  ]
},
{
  text: "Jak oceniasz swoją znajomość narzędzi cyfrowych?",
  type: "rating",
  options: [
      { text: "Bardzo dobrze", value: 5 },
      { text: "Dobrze", value: 4 },
      { text: "Nie mam zdania", value: 3 },
      { text: "Słabo", value: 2 },
      { text: "Bardzo słabo", value: 1 }
    ],
  category: ["Informatyka", "Grafika Komputerowa", "Cyberbezpieczeństwo"]
},
{
  text: "Wybierz typ problemów, które lubisz rozwiązywać:",
  type: "multiple",
  options: [
    { text: "Logiczne i matematyczne", category: ["Matematyka", "Informatyka", "Fizyka"] },
    { text: "Społeczne i emocjonalne", category: ["Psychologia", "Pedagogika", "Socjologia"] },
    { text: "Techniczne i mechaniczne", category: ["Automatyka i Robotyka", "Inżynieria Biomedyczna", "Budownictwo"] },
    { text: "Artystyczne i wizualne", category: ["Sztuka i design", "Grafika Komputerowa", "Architektura"] }
  ]
},
{
  text: "Jak dobrze radzisz sobie z presją czasu?",
  type: "rating",
  options: [
      { text: "Bardzo dobrze", value: 5 },
      { text: "Dobrze", value: 4 },
      { text: "Nie mam zdania", value: 3 },
      { text: "Słabo", value: 2 },
      { text: "Bardzo słabo", value: 1 }
    ],
  category: ["Medycyna", "Dziennikarstwo", "Prawo"]
},
{
  text: "Co najbardziej cenisz w pracy zawodowej?",
  type: "single",
  options: [
    { text: "Stabilność i przewidywalność", category: ["Farmacja", "Finanse", "Prawo"] },
    { text: "Możliwość pomagania", category: ["Medycyna", "Psychologia", "Pielęgniarstwo"] },
    { text: "Twórczość i innowacyjność", category: ["Sztuka i design", "Informatyka", "Sztuczna Inteligencja"] },
    { text: "Dynamiczne środowisko", category: ["Marketing", "Dziennikarstwo", "Turystyka i Rekreacja"] }
  ]
},
{
  text: "Czy łatwo nawiązujesz kontakt z nowymi osobami?",
  type: "rating",
  options: [
      { text: "Zdecydowanie tak", value: 5 },
      { text: "Tak", value: 4 },
      { text: "Nie mam zdania", value: 3 },
      { text: "Nie", value: 2 },
      { text: "Zdecydowanie nie", value: 1 }
    ],
  category: ["Psychologia", "Zarządzanie", "Dziennikarstwo"]
},
{
  text: "Jak często zadajesz sobie pytanie „dlaczego świat działa tak, a nie inaczej?”",
  type: "rating",
  options: [
      { text: "Bardzo często", value: 5 },
      { text: "Często", value: 4 },
      { text: "Nie mam zdania", value: 3 },
      { text: "Rzadko", value: 2 },
      { text: "Bardzo rzadko", value: 1 }
    ],
  category: ["Filozofia", "Socjologia", "Historia"]
},
{
  text: "Czy jesteś otwarty na nowe kultury i języki?",
  type: "rating",
  options: [
      { text: "Zdecydowanie tak", value: 5 },
      { text: "Tak", value: 4 },
      { text: "Nie mam zdania", value: 3 },
      { text: "Nie", value: 2 },
      { text: "Zdecydowanie nie", value: 1 }
    ],
  category: ["Filologia", "Turystyka i Rekreacja", "Dziennikarstwo"]
},



{
  text: "Czy lubisz planować logistykę wydarzeń, np. wycieczek, konferencji?",
  type: "rating",
  options: [
      { text: "Zdecydowanie tak", value: 5 },
      { text: "Tak", value: 4 },
      { text: "Nie mam zdania", value: 3 },
      { text: "Nie", value: 2 },
      { text: "Zdecydowanie nie", value: 1 }
    ],
  category: ["Logistyka", "Zarządzanie", "Turystyka i Rekreacja"]
},
{
  text: "Czy interesuje Cię praca z roślinami lub zwierzętami w środowisku naturalnym?",
  type: "rating",
  options: [
      { text: "Zdecydowanie tak", value: 5 },
      { text: "Tak", value: 4 },
      { text: "Nie mam zdania", value: 3 },
      { text: "Nie", value: 2 },
      { text: "Zdecydowanie nie", value: 1 }
    ],
  category: ["Rolnictwo", "Weterynaria", "Biologia"]
},
{
  text: "Czy fascynuje Cię wpływ reklamy na ludzi?",
  type: "rating",
  options: [
      { text: "Zdecydowanie tak", value: 5 },
      { text: "Tak", value: 4 },
      { text: "Nie mam zdania", value: 3 },
      { text: "Nie", value: 2 },
      { text: "Zdecydowanie nie", value: 1 }
    ],
  category: ["Marketing", "Psychologia", "Zarządzanie"]

},
{
  text: "Czy chciałbyś tworzyć urządzenia ułatwiające życie osobom z niepełnosprawnościami?",
  type: "rating",
  options: [
      { text: "Zdecydowanie tak", value: 5 },
      { text: "Tak", value: 4 },
      { text: "Nie mam zdania", value: 3 },
      { text: "Nie", value: 2 },
      { text: "Zdecydowanie nie", value: 1 }
    ],
  category: ["Inżynieria Biomedyczna", "Automatyka i Robotyka", "Fizjoterapia"]
},
{
  text: "Czy lubisz pracować w systemie zmianowym lub dyżurowym?",
  type: "rating",
  options: [
      { text: "Zdecydowanie tak", value: 5 },
      { text: "Tak", value: 4 },
      { text: "Nie mam zdania", value: 3 },
      { text: "Nie", value: 2 },
      { text: "Zdecydowanie nie", value: 1 }
    ],
  category: ["Medycyna", "Pielęgniarstwo", "Ratownictwo medyczne", "Logistyka"]
},
{
  text: "Czy potrafisz rozpoznać potrzeby innych i dopasować do nich rozwiązania?",
  type: "rating",
  options: [
      { text: "Zdecydowanie tak", value: 5 },
      { text: "Tak", value: 4 },
      { text: "Nie mam zdania", value: 3 },
      { text: "Nie", value: 2 },
      { text: "Zdecydowanie nie", value: 1 }
    ],
  category: ["Psychologia", "Zarządzanie", "Pedagogika"]

}
];