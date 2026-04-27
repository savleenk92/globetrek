const QUESTIONS = [
  // Geography - Capitals
  { q: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Brisbane"], answer: 2, category: "capitals", difficulty: 1 },
  { q: "What is the capital of Canada?", options: ["Toronto", "Vancouver", "Montreal", "Ottawa"], answer: 3, category: "capitals", difficulty: 1 },
  { q: "What is the capital of Brazil?", options: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"], answer: 2, category: "capitals", difficulty: 2 },
  { q: "What is the capital of South Africa?", options: ["Cape Town", "Johannesburg", "Pretoria", "Durban"], answer: 2, category: "capitals", difficulty: 2 },
  { q: "What is the capital of New Zealand?", options: ["Auckland", "Wellington", "Christchurch", "Dunedin"], answer: 1, category: "capitals", difficulty: 2 },
  { q: "What is the capital of Argentina?", options: ["Córdoba", "Rosario", "Buenos Aires", "Mendoza"], answer: 2, category: "capitals", difficulty: 1 },
  { q: "What is the capital of Egypt?", options: ["Alexandria", "Cairo", "Luxor", "Giza"], answer: 1, category: "capitals", difficulty: 1 },
  { q: "What is the capital of Norway?", options: ["Bergen", "Stavanger", "Oslo", "Trondheim"], answer: 2, category: "capitals", difficulty: 1 },
  { q: "What is the capital of Indonesia?", options: ["Bali", "Surabaya", "Bandung", "Jakarta"], answer: 3, category: "capitals", difficulty: 1 },
  { q: "What is the capital of Pakistan?", options: ["Karachi", "Lahore", "Islamabad", "Peshawar"], answer: 2, category: "capitals", difficulty: 2 },
  { q: "What is the capital of Kazakhstan?", options: ["Almaty", "Astana", "Shymkent", "Karaganda"], answer: 1, category: "capitals", difficulty: 3 },
  { q: "What is the capital of Myanmar?", options: ["Yangon", "Mandalay", "Naypyidaw", "Bagan"], answer: 2, category: "capitals", difficulty: 3 },

  // Landmarks
  { q: "In which country is the Angkor Wat temple complex?", options: ["Thailand", "Vietnam", "Laos", "Cambodia"], answer: 3, category: "landmarks", difficulty: 1 },
  { q: "The Colosseum is located in which city?", options: ["Florence", "Venice", "Rome", "Naples"], answer: 2, category: "landmarks", difficulty: 1 },
  { q: "In which country is Machu Picchu?", options: ["Bolivia", "Ecuador", "Colombia", "Peru"], answer: 3, category: "landmarks", difficulty: 1 },
  { q: "The Alhambra palace is in which Spanish city?", options: ["Seville", "Barcelona", "Granada", "Valencia"], answer: 2, category: "landmarks", difficulty: 2 },
  { q: "On which island is the Acropolis of Athens?", options: ["Crete", "Rhodes", "Santorini", "None — it's on the mainland"], answer: 3, category: "landmarks", difficulty: 2 },
  { q: "Which country has the most UNESCO World Heritage Sites?", options: ["China", "Italy", "France", "Spain"], answer: 0, category: "landmarks", difficulty: 3 },
  { q: "The Sagrada Família basilica is in which city?", options: ["Madrid", "Barcelona", "Lisbon", "Bilbao"], answer: 1, category: "landmarks", difficulty: 1 },
  { q: "Where is the Taj Mahal located?", options: ["Delhi", "Mumbai", "Jaipur", "Agra"], answer: 3, category: "landmarks", difficulty: 1 },
  { q: "In which country is the Petra archaeological site?", options: ["Israel", "Jordan", "Egypt", "Saudi Arabia"], answer: 1, category: "landmarks", difficulty: 1 },
  { q: "The Burj Khalifa is in which city?", options: ["Riyadh", "Doha", "Dubai", "Abu Dhabi"], answer: 2, category: "landmarks", difficulty: 1 },
  { q: "In which city is the Anne Frank House museum?", options: ["Berlin", "Brussels", "Amsterdam", "Copenhagen"], answer: 2, category: "landmarks", difficulty: 1 },
  { q: "The Moai statues are on which island?", options: ["Tahiti", "Easter Island", "Fiji", "Bora Bora"], answer: 1, category: "landmarks", difficulty: 2 },

  // Geography - Physical
  { q: "What is the longest river in the world?", options: ["Amazon", "Yangtze", "Mississippi", "Nile"], answer: 3, category: "geography", difficulty: 1 },
  { q: "What is the smallest country in the world?", options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"], answer: 1, category: "geography", difficulty: 1 },
  { q: "Which ocean is the largest?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: 2, category: "geography", difficulty: 1 },
  { q: "What is the highest mountain in Africa?", options: ["Mount Kenya", "Mount Kilimanjaro", "Rwenzori", "Ras Dashen"], answer: 1, category: "geography", difficulty: 2 },
  { q: "Which country has the most natural lakes in the world?", options: ["Russia", "Canada", "Finland", "USA"], answer: 1, category: "geography", difficulty: 2 },
  { q: "What is the driest desert in the world?", options: ["Sahara", "Gobi", "Atacama", "Arabian"], answer: 2, category: "geography", difficulty: 2 },
  { q: "Which country is entirely surrounded by South Africa?", options: ["Swaziland", "Zimbabwe", "Lesotho", "Botswana"], answer: 2, category: "geography", difficulty: 2 },
  { q: "What is the deepest lake in the world?", options: ["Lake Superior", "Caspian Sea", "Lake Victoria", "Lake Baikal"], answer: 3, category: "geography", difficulty: 2 },
  { q: "Which continent has no countries?", options: ["Antarctica", "All continents have countries", "Arctic", "Oceania"], answer: 0, category: "geography", difficulty: 2 },
  { q: "How many countries share a border with China?", options: ["10", "12", "14", "16"], answer: 2, category: "geography", difficulty: 3 },
  { q: "Which is the largest country in Africa by area?", options: ["Democratic Republic of Congo", "Sudan", "Algeria", "Libya"], answer: 2, category: "geography", difficulty: 2 },
  { q: "What is the world's largest hot desert?", options: ["Arabian", "Gobi", "Sahara", "Kalahari"], answer: 2, category: "geography", difficulty: 1 },

  // Travel & Culture
  { q: "In which country would you eat 'poutine'?", options: ["France", "Belgium", "Canada", "USA"], answer: 2, category: "culture", difficulty: 1 },
  { q: "Which country invented champagne?", options: ["Italy", "Spain", "France", "Germany"], answer: 2, category: "culture", difficulty: 1 },
  { q: "What is the currency of Japan?", options: ["Yuan", "Won", "Yen", "Ringgit"], answer: 2, category: "culture", difficulty: 1 },
  { q: "Flamenco dancing originated in which country?", options: ["Argentina", "Mexico", "Portugal", "Spain"], answer: 3, category: "culture", difficulty: 1 },
  { q: "Which country is the world's largest producer of coffee?", options: ["Colombia", "Vietnam", "Ethiopia", "Brazil"], answer: 3, category: "culture", difficulty: 2 },
  { q: "In Thailand, what colour represents mourning?", options: ["Black", "White", "Purple", "Red"], answer: 1, category: "culture", difficulty: 3 },
  { q: "Which country gave the USA the Statue of Liberty?", options: ["Britain", "Italy", "France", "Spain"], answer: 2, category: "culture", difficulty: 1 },
  { q: "Sushi originated in which country?", options: ["China", "Korea", "Japan", "Vietnam"], answer: 2, category: "culture", difficulty: 1 },
  { q: "The tango dance originated in which city?", options: ["Buenos Aires", "Montevideo", "Rio de Janeiro", "Santiago"], answer: 0, category: "culture", difficulty: 2 },
  { q: "Which country is home to the Maori people?", options: ["Australia", "New Zealand", "Fiji", "Samoa"], answer: 1, category: "culture", difficulty: 1 },
  { q: "In which country is Oktoberfest traditionally celebrated?", options: ["Austria", "Switzerland", "Germany", "Denmark"], answer: 2, category: "culture", difficulty: 1 },
  { q: "What is the most visited country in the world?", options: ["USA", "Spain", "France", "China"], answer: 2, category: "culture", difficulty: 2 },

  // Flags & Symbols
  { q: "Which country's flag features a maple leaf?", options: ["Australia", "New Zealand", "Canada", "USA"], answer: 2, category: "flags", difficulty: 1 },
  { q: "Which country has a dragon on its flag?", options: ["China", "Bhutan", "Vietnam", "South Korea"], answer: 1, category: "flags", difficulty: 2 },
  { q: "The flag of Japan is a red circle on which background?", options: ["Blue", "White", "Yellow", "Green"], answer: 1, category: "flags", difficulty: 1 },
  { q: "Which country's flag is the only non-rectangular national flag?", options: ["Bhutan", "Nepal", "Sri Lanka", "Maldives"], answer: 1, category: "flags", difficulty: 2 },
  { q: "Which country has a flag with a cedar tree?", options: ["Jordan", "Lebanon", "Syria", "Iraq"], answer: 1, category: "flags", difficulty: 2 },
  { q: "How many stars are on the Australian flag?", options: ["4", "5", "6", "7"], answer: 2, category: "flags", difficulty: 3 },
  { q: "Which country has a green flag with no other colours?", options: ["Saudi Arabia", "Libya", "Pakistan", "Iran"], answer: 1, category: "flags", difficulty: 2 },
  { q: "The Union Jack features flags of which three nations?", options: ["England, Wales, Scotland", "England, Scotland, Ireland", "England, Ireland, Wales", "Scotland, Ireland, Wales"], answer: 1, category: "flags", difficulty: 2 },

  // Airlines & Transport
  { q: "Which country's airline is called Garuda?", options: ["Malaysia", "Thailand", "Indonesia", "Philippines"], answer: 2, category: "transport", difficulty: 2 },
  { q: "What is the busiest airport in the world by passenger traffic?", options: ["Dubai", "Beijing", "Atlanta", "London Heathrow"], answer: 2, category: "transport", difficulty: 2 },
  { q: "The Trans-Siberian Railway connects Moscow to which city?", options: ["Beijing", "Vladivostok", "Ulaanbaatar", "Almaty"], answer: 1, category: "transport", difficulty: 2 },
  { q: "Which country has the most airports?", options: ["China", "Russia", "Brazil", "USA"], answer: 3, category: "transport", difficulty: 3 },
  { q: "The Eurostar train connects London to which city?", options: ["Amsterdam", "Brussels", "Paris", "Both Paris and Brussels"], answer: 3, category: "transport", difficulty: 2 },

  // Islands & Oceans
  { q: "Which is the largest island in the world?", options: ["Borneo", "Greenland", "Madagascar", "New Guinea"], answer: 1, category: "geography", difficulty: 1 },
  { q: "The Maldives is in which ocean?", options: ["Atlantic", "Pacific", "Indian", "Arctic"], answer: 2, category: "geography", difficulty: 1 },
  { q: "Which island country is the closest to the North Pole?", options: ["Iceland", "Greenland", "Svalbard", "Jan Mayen"], answer: 1, category: "geography", difficulty: 2 },
  { q: "How many islands make up the Philippines?", options: ["Over 3,000", "Over 5,000", "Over 7,000", "Over 10,000"], answer: 2, category: "geography", difficulty: 2 },
  { q: "The Canary Islands belong to which country?", options: ["Portugal", "Morocco", "Spain", "France"], answer: 2, category: "geography", difficulty: 1 },

  // Historical Geography
  { q: "Constantinople is now known by what name?", options: ["Ankara", "Istanbul", "Izmir", "Bursa"], answer: 1, category: "history", difficulty: 1 },
  { q: "Which country was formerly known as Persia?", options: ["Iraq", "Turkey", "Iran", "Afghanistan"], answer: 2, category: "history", difficulty: 1 },
  { q: "Rhodesia is now known as which country?", options: ["Zambia", "Zimbabwe", "Mozambique", "Malawi"], answer: 1, category: "history", difficulty: 2 },
  { q: "Which city was divided by a wall from 1961 to 1989?", options: ["Vienna", "Berlin", "Warsaw", "Prague"], answer: 1, category: "history", difficulty: 1 },
  { q: "Ceylon is the former name of which island nation?", options: ["Maldives", "Indonesia", "Sri Lanka", "Mauritius"], answer: 2, category: "history", difficulty: 1 },
  { q: "Which African country was formerly known as Abyssinia?", options: ["Sudan", "Somalia", "Eritrea", "Ethiopia"], answer: 3, category: "history", difficulty: 2 },

  // World Records & Extremes
  { q: "Which is the coldest continent on Earth?", options: ["Arctic", "Antarctica", "Siberia", "Greenland"], answer: 1, category: "extremes", difficulty: 1 },
  { q: "What is the highest capital city in the world?", options: ["Quito", "Kathmandu", "La Paz", "Bogotá"], answer: 2, category: "extremes", difficulty: 2 },
  { q: "Which country has the longest coastline?", options: ["Russia", "Norway", "Australia", "Canada"], answer: 3, category: "extremes", difficulty: 2 },
  { q: "Which is the least densely populated country in the world?", options: ["Australia", "Mongolia", "Greenland", "Iceland"], answer: 1, category: "extremes", difficulty: 3 },
  { q: "Which city has the most skyscrapers in the world?", options: ["Dubai", "Shanghai", "New York", "Hong Kong"], answer: 3, category: "extremes", difficulty: 2 },
  { q: "Which waterfall has the highest uninterrupted drop?", options: ["Victoria Falls", "Niagara Falls", "Angel Falls", "Iguazú Falls"], answer: 2, category: "extremes", difficulty: 2 },

  // Food & Travel
  { q: "Paella is a traditional dish from which country?", options: ["Mexico", "Italy", "Portugal", "Spain"], answer: 3, category: "food", difficulty: 1 },
  { q: "In which country did pizza originate?", options: ["Greece", "Italy", "Turkey", "Spain"], answer: 1, category: "food", difficulty: 1 },
  { q: "Kimchi is a traditional food from which country?", options: ["Japan", "China", "Korea", "Vietnam"], answer: 2, category: "food", difficulty: 1 },
  { q: "Which country produces the most wine in the world?", options: ["France", "Italy", "Spain", "USA"], answer: 1, category: "food", difficulty: 2 },
  { q: "Rendang, a spicy meat dish, comes from which country?", options: ["Thailand", "Malaysia", "Indonesia", "Philippines"], answer: 2, category: "food", difficulty: 2 },
  { q: "Which country is the largest producer of chocolate?", options: ["Switzerland", "Belgium", "Ghana", "Ivory Coast"], answer: 3, category: "food", difficulty: 3 },
  { q: "Baklava is a pastry associated with which cuisine?", options: ["Greek and Turkish", "Persian only", "Arabic only", "Lebanese only"], answer: 0, category: "food", difficulty: 2 },

  // Language & Countries
  { q: "Portuguese is the official language of how many countries?", options: ["5", "7", "9", "11"], answer: 2, category: "language", difficulty: 3 },
  { q: "Which country has the most official languages?", options: ["Switzerland", "Canada", "South Africa", "India"], answer: 2, category: "language", difficulty: 2 },
  { q: "In how many continents is French spoken as an official language?", options: ["3", "4", "5", "6"], answer: 2, category: "language", difficulty: 3 },
  { q: "Swahili is most widely spoken in which region?", options: ["West Africa", "North Africa", "East Africa", "Southern Africa"], answer: 2, category: "language", difficulty: 2 },
  { q: "Which language has the most native speakers in the world?", options: ["English", "Hindi", "Mandarin Chinese", "Spanish"], answer: 2, category: "language", difficulty: 1 },

  // Time Zones & Clocks
  { q: "How many time zones does Russia span?", options: ["7", "9", "11", "13"], answer: 2, category: "timezones", difficulty: 2 },
  { q: "Which country spans the most time zones?", options: ["Russia", "USA", "France", "China"], answer: 2, category: "timezones", difficulty: 3 },
  { q: "When it is noon in London, what time is it in New York in summer?", options: ["6 AM", "7 AM", "8 AM", "9 AM"], answer: 1, category: "timezones", difficulty: 2 },

  // Misc Travel
  { q: "Which airline has the longest non-stop commercial flight?", options: ["Emirates", "Qantas", "Singapore Airlines", "Qatar Airways"], answer: 2, category: "transport", difficulty: 3 },
  { q: "The Schengen Area allows visa-free travel between how many countries?", options: ["22", "24", "26", "28"], answer: 2, category: "travel", difficulty: 3 },
  { q: "Which country requires travellers to pay a 'departure tax' by buying a stamp?", options: ["Argentina", "Bolivia", "Brazil", "Peru"], answer: 0, category: "travel", difficulty: 3 },
  { q: "What colour is a standard international passport?", options: ["It can be any colour — no standard exists", "Blue", "Red", "Green"], answer: 0, category: "travel", difficulty: 2 },
  { q: "Where is the world's highest navigable lake?", options: ["Bolivia/Peru — Lake Titicaca", "Tibet — Namtso", "India — Dal Lake", "Nepal — Phewa Lake"], answer: 0, category: "geography", difficulty: 2 },
];

function getDailyQuestions(puzzleSeed) {
  // Deterministic shuffle based on the day
  const epoch = new Date('2025-01-01');
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const dayNum = Math.floor((today - epoch) / 86400000);
  
  const shuffled = [...QUESTIONS];
  // Seeded shuffle
  let seed = dayNum * 7 + 13;
  for (let i = shuffled.length - 1; i > 0; i--) {
    seed = (seed * 1664525 + 1013904223) & 0xffffffff;
    const j = Math.abs(seed) % (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, 5);
}
