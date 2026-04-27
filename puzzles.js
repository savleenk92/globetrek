const PUZZLES = [
  {
    city: "Venice",
    country: "Italy",
    emoji: "🇮🇹",
    clues: [
      "I have no roads — only canals connect my 118 islands.",
      "I am home to the world's oldest international film festival.",
      "My famous Rialto Bridge has spanned my Grand Canal for 500 years.",
      "Gondolas are my iconic vessel, steered by gondoliers.",
      "I am slowly sinking and flooding more each year."
    ]
  },
  {
    city: "Kyoto",
    country: "Japan",
    emoji: "🇯🇵",
    clues: [
      "I was Japan's imperial capital for over a thousand years.",
      "I am famous for thousands of vermilion torii gates at one shrine.",
      "Geishas still walk my ancient Gion district at dusk.",
      "In spring, my streets turn pink with cherry blossoms.",
      "My name is an anagram of another famous Japanese city."
    ]
  },
  {
    city: "Marrakech",
    country: "Morocco",
    emoji: "🇲🇦",
    clues: [
      "My ancient medina is a UNESCO World Heritage Site.",
      "My main square, Jemaa el-Fnaa, fills with storytellers and snake charmers at night.",
      "I am called the Red City for the colour of my buildings.",
      "I sit at the foot of the Atlas Mountains.",
      "My souks sell spices, carpets, and handmade leather goods."
    ]
  },
  {
    city: "Rio de Janeiro",
    country: "Brazil",
    emoji: "🇧🇷",
    clues: [
      "A giant Christ statue watches over me from a mountain peak.",
      "I host the world's most famous carnival each February.",
      "Copacabana and Ipanema are my legendary beaches.",
      "Sugarloaf Mountain rises dramatically from my bay.",
      "I was Brazil's capital until 1960."
    ]
  },
  {
    city: "Istanbul",
    country: "Turkey",
    emoji: "🇹🇷",
    clues: [
      "I am the only city in the world that spans two continents.",
      "The Bosphorus strait runs through my heart.",
      "I was once called Constantinople and Byzantium.",
      "The Hagia Sophia has been a church, a mosque, and a museum.",
      "My Grand Bazaar has over 4,000 shops under one roof."
    ]
  },
  {
    city: "Petra",
    country: "Jordan",
    emoji: "🇯🇴",
    clues: [
      "I am a city carved entirely into rose-red rock.",
      "My Treasury facade was carved by the Nabataean people over 2,000 years ago.",
      "I was the capital of a vast ancient trading empire.",
      "I am accessible only through a narrow canyon called the Siq.",
      "Indiana Jones found the Holy Grail in my Treasury — in a movie."
    ]
  },
  {
    city: "Dubrovnik",
    country: "Croatia",
    emoji: "🇭🇷",
    clues: [
      "My old town is entirely surrounded by medieval walls.",
      "I am known as the Pearl of the Adriatic.",
      "Game of Thrones filmed its King's Landing scenes in my streets.",
      "A cable car lifts visitors to the mountain above me.",
      "I sit on the Dalmatian coast of the Adriatic Sea."
    ]
  },
  {
    city: "Reykjavik",
    country: "Iceland",
    emoji: "🇮🇸",
    clues: [
      "I am the world's northernmost national capital.",
      "My residents can see the Northern Lights from within the city.",
      "Geothermal energy heats nearly all my buildings.",
      "The Hallgrímskirkja church towers over my skyline like a rocket.",
      "Iceland's famous Blue Lagoon is a short drive from me."
    ]
  },
  {
    city: "Cartagena",
    country: "Colombia",
    emoji: "🇨🇴",
    clues: [
      "My old town is ringed by massive colonial-era walls.",
      "Gabriel García Márquez set many stories in my streets.",
      "I sit on Colombia's Caribbean coast.",
      "My colourful balconies drip with bougainvillea flowers.",
      "Pirates once raided my harbour for Spanish gold."
    ]
  },
  {
    city: "Santorini",
    country: "Greece",
    emoji: "🇬🇷",
    clues: [
      "My island is the rim of an ancient collapsed volcano.",
      "My white cube houses with blue domes are iconic worldwide.",
      "The village of Oia is famous for its sunset views.",
      "Some believe I inspired the legend of Atlantis.",
      "I sit in the Cyclades island group in the Aegean Sea."
    ]
  },
  {
    city: "Machu Picchu",
    country: "Peru",
    emoji: "🇵🇪",
    clues: [
      "I am an Incan citadel perched at 2,430 metres above sea level.",
      "I was built in the 15th century and abandoned during the Spanish conquest.",
      "Hiram Bingham brought me to world attention in 1911.",
      "No wheels or iron tools were used in my construction.",
      "I overlook the Urubamba River valley in the Andes."
    ]
  },
  {
    city: "Prague",
    country: "Czech Republic",
    emoji: "🇨🇿",
    clues: [
      "My medieval Old Town Square has a famous astronomical clock.",
      "I have one of the largest ancient castles in the world.",
      "Charles Bridge crosses my Vltava River lined with baroque statues.",
      "I escaped major bombing in World War II, preserving my architecture.",
      "I am known as the City of a Hundred Spires."
    ]
  },
  {
    city: "Havana",
    country: "Cuba",
    emoji: "🇨🇺",
    clues: [
      "Classic American cars from the 1950s still fill my streets.",
      "Ernest Hemingway drank mojitos at my El Floridita bar.",
      "My Malecón seawall stretches for 8 km along the ocean.",
      "I was founded by the Spanish in 1519.",
      "My streets are alive with salsa music around the clock."
    ]
  },
  {
    city: "Luang Prabang",
    country: "Laos",
    emoji: "🇱🇦",
    clues: [
      "Each morning, saffron-robed monks collect alms in my streets at dawn.",
      "I sit where the Nam Khan and Mekong rivers meet.",
      "My entire historic town is a UNESCO World Heritage Site.",
      "Kuang Si waterfall is one of my most visited natural wonders.",
      "I am a small city in landlocked Southeast Asia."
    ]
  },
  {
    city: "Fez",
    country: "Morocco",
    emoji: "🇲🇦",
    clues: [
      "My medina is the world's largest car-free urban area.",
      "My ancient tanneries dye leather in open-air stone vats.",
      "The University of al-Qarawiyyin, founded in 859 AD, is in my walls.",
      "My medina has over 9,000 narrow alleyways.",
      "I am Morocco's oldest imperial city."
    ]
  },
  {
    city: "Bruges",
    country: "Belgium",
    emoji: "🇧🇪",
    clues: [
      "I am crisscrossed by medieval canals earning me the nickname 'Venice of the North'.",
      "My famous belfry tower looms over my central market square.",
      "I am the chocolate capital of Belgium.",
      "Colin Farrell starred in a dark comedy film named after me.",
      "I sit in the Flemish region of northwest Belgium."
    ]
  },
  {
    city: "Chiang Mai",
    country: "Thailand",
    emoji: "🇹🇭",
    clues: [
      "I am surrounded by a moat and ancient walls in northern Thailand.",
      "My Yi Peng lantern festival fills the night sky with floating lights.",
      "I have over 300 Buddhist temples within my city limits.",
      "The highest mountain in Thailand is nearby.",
      "I am a gateway to trekking in the Golden Triangle region."
    ]
  },
  {
    city: "Queenstown",
    country: "New Zealand",
    emoji: "🇳🇿",
    clues: [
      "I am widely called the adventure capital of the world.",
      "Bungee jumping was commercialised near my Kawarau Bridge.",
      "I sit beside a deep glacial lake called Lake Wakatipu.",
      "The Remarkables mountain range towers behind me.",
      "Lord of the Rings was filmed extensively near me."
    ]
  },
  {
    city: "Valletta",
    country: "Malta",
    emoji: "🇲🇹",
    clues: [
      "I am the smallest national capital in the European Union.",
      "I was built by the Knights of St John in the 16th century.",
      "My entire city is a UNESCO World Heritage Site.",
      "I sit on a peninsula surrounded by two natural harbours.",
      "I am the capital of an island nation in the Mediterranean."
    ]
  },
  {
    city: "Seville",
    country: "Spain",
    emoji: "🇪🇸",
    clues: [
      "Flamenco dancing was born in my streets.",
      "My Alcázar palace has been a royal residence for over 1,000 years.",
      "Columbus departed for the Americas from my harbour.",
      "My April Fair is one of Europe's most spectacular festivals.",
      "I sit on the Guadalquivir River in Andalusia."
    ]
  },
  {
    city: "Tallinn",
    country: "Estonia",
    emoji: "🇪🇪",
    clues: [
      "My medieval old town is one of the best preserved in northern Europe.",
      "I am the birthplace of Skype.",
      "My Toompea Hill overlooks the whole city.",
      "I sit on the Gulf of Finland across from Helsinki.",
      "I am the capital of one of the smallest countries in the EU."
    ]
  },
  {
    city: "Jaipur",
    country: "India",
    emoji: "🇮🇳",
    clues: [
      "I am called the Pink City because my old town buildings are painted pink.",
      "My Hawa Mahal palace has 953 windows.",
      "I form part of India's famous Golden Triangle tourist circuit.",
      "My Amber Fort sits on a hillside just outside the city.",
      "I am the capital of Rajasthan."
    ]
  },
  {
    city: "Tbilisi",
    country: "Georgia",
    emoji: "🇬🇪",
    clues: [
      "My name comes from the Georgian word for warm springs.",
      "I have ancient sulphur bathhouses that have operated for centuries.",
      "My old town is a patchwork of balconied wooden houses.",
      "A massive Kartlis Deda statue of a woman overlooks me.",
      "I sit in the Caucasus region, between Europe and Asia."
    ]
  },
  {
    city: "Sarajevo",
    country: "Bosnia",
    emoji: "🇧🇦",
    clues: [
      "The assassination that triggered World War I happened on my streets.",
      "I am nicknamed the Jerusalem of Europe for my religious diversity.",
      "I hosted the 1984 Winter Olympics.",
      "My Baščaršija bazaar dates back to the Ottoman era.",
      "I sit in a valley surrounded by hills that were besieged for nearly four years."
    ]
  },
  {
    city: "Zanzibar City",
    country: "Tanzania",
    emoji: "🇹🇿",
    clues: [
      "My Stone Town is a UNESCO-listed labyrinth of coral stone alleyways.",
      "I am the birthplace of Freddie Mercury of Queen.",
      "My island is famous for spice plantations of cloves and nutmeg.",
      "I sit off the coast of East Africa in the Indian Ocean.",
      "Dhow boats have sailed my harbour for over a thousand years."
    ]
  },
  {
    city: "Ghent",
    country: "Belgium",
    emoji: "🇧🇪",
    clues: [
      "My medieval Gravensteen castle sits right in the city centre.",
      "I have more kilometres of canals than Bruges.",
      "The famous Ghent Altarpiece painting by Van Eyck is in my St Bavo Cathedral.",
      "My Graslei and Korenlei quaysides are lined with guild houses.",
      "I am Belgium's third largest city, often overlooked by tourists."
    ]
  },
  {
    city: "Oman",
    country: "Oman",
    emoji: "🇴🇲",
    clues: [
      "My capital Muscat sits between dramatic mountains and the Gulf of Oman.",
      "The Sultan Qaboos Grand Mosque can accommodate 20,000 worshippers.",
      "My Mutrah Souq is one of the oldest markets in the Arab world.",
      "My coastline has some of the most pristine beaches on the Arabian Peninsula.",
      "I am consistently rated the safest country in the Arab world."
    ]
  },
  {
    city: "Ljubljana",
    country: "Slovenia",
    emoji: "🇸🇮",
    clues: [
      "A dragon is my city symbol and appears on my famous bridge.",
      "My castle sits on a hill visible from everywhere in the city.",
      "I am one of Europe's smallest capital cities.",
      "My old town is largely car-free.",
      "I am the capital of a small Alpine country that borders Italy."
    ]
  },
  {
    city: "Kotor",
    country: "Montenegro",
    emoji: "🇲🇪",
    clues: [
      "I am enclosed by medieval walls climbing steep cliffs above the bay.",
      "I sit at the end of the deepest fjord in southern Europe.",
      "My cathedral contains the relics of Saint Tryphon.",
      "Wild cats roam my old town freely and are protected by locals.",
      "I sit in a small Balkan country on the Adriatic coast."
    ]
  },
  {
    city: "Medellín",
    country: "Colombia",
    emoji: "🇨🇴",
    clues: [
      "I transformed from the world's most dangerous city to a global innovation model.",
      "Outdoor escalators link my hillside comunas to the city centre.",
      "I am Colombia's second largest city and fashion capital.",
      "Fernando Botero, famous for his rotund sculptures, was born here.",
      "I sit in a valley in the Andes and enjoy spring-like weather year-round."
    ]
  },
  {
    city: "Oporto",
    country: "Portugal",
    emoji: "🇵🇹",
    clues: [
      "A famous fortified wine is named after me.",
      "My Livraria Lello bookshop inspired J.K. Rowling while she lived in Portugal.",
      "My azulejo blue tile murals decorate my train stations and churches.",
      "I sit on a gorge above the Douro River.",
      "I gave Portugal its name."
    ]
  },
  {
    city: "Cappadocia",
    country: "Turkey",
    emoji: "🇹🇷",
    clues: [
      "Hot air balloons rise over my fairy chimneys at dawn every morning.",
      "My landscape was carved by volcanic eruptions millions of years ago.",
      "People carved homes, churches, and entire underground cities into my soft rock.",
      "The Göreme Open Air Museum preserves Byzantine cave churches in my heart.",
      "I am a region, not a city — in central Anatolia."
    ]
  },
  {
    city: "Chefchaouen",
    country: "Morocco",
    emoji: "🇲🇦",
    clues: [
      "Almost every wall and staircase in my old medina is painted blue.",
      "I sit in the Rif Mountains of northern Morocco.",
      "My name means 'look at the peaks' in Berber.",
      "I was founded in 1471 as a fortress to fight Portuguese invasions.",
      "I am one of the most photographed cities in Africa."
    ]
  },
  {
    city: "Baku",
    country: "Azerbaijan",
    emoji: "🇦🇿",
    clues: [
      "Three flame-shaped towers dominate my modern skyline.",
      "I hosted the Formula 1 Grand Prix on a street circuit through my old city.",
      "My walled old city, Icherisheher, is a UNESCO World Heritage Site.",
      "I sit on the Caspian Sea, the world's largest landlocked body of water.",
      "I am the capital of a country that lies at the crossroads of Europe and Asia."
    ]
  },
  {
    city: "Nairobi",
    country: "Kenya",
    emoji: "🇰🇪",
    clues: [
      "I am the only capital city in the world with a national park inside it.",
      "Giraffes wander through my suburbs at the Giraffe Centre.",
      "I am the tech startup hub of Africa, nicknamed Silicon Savannah.",
      "Karen Blixen wrote Out of Africa about her farm near my outskirts.",
      "I am the capital and largest city of Kenya."
    ]
  },
  {
    city: "Hoi An",
    country: "Vietnam",
    emoji: "🇻🇳",
    clues: [
      "My old town glows with hundreds of colourful silk lanterns at night.",
      "I was a major Southeast Asian trading port from the 15th to 19th century.",
      "My Japanese Covered Bridge is my most iconic landmark.",
      "Tailors in my streets can copy any garment in 24 hours.",
      "I sit on the Thu Bon River in central Vietnam."
    ]
  },
  {
    city: "Valletta",
    country: "Malta",
    emoji: "🇲🇹",
    clues: [
      "I am the smallest capital city in the EU by area.",
      "Every street in my old city runs on a grid — unusual for such an old city.",
      "I was named after Jean Parisot de Valette who defended it from the Ottomans.",
      "My Grand Harbour is one of the finest natural harbours in the Mediterranean.",
      "I am a Baroque city built in a single campaign of construction."
    ]
  },
  {
    city: "Galápagos Islands",
    country: "Ecuador",
    emoji: "🇪🇨",
    clues: [
      "Charles Darwin visited me in 1835 and developed his theory of evolution here.",
      "My animals — including giant tortoises and marine iguanas — have no fear of humans.",
      "I sit 1,000 km off the coast of South America in the Pacific.",
      "Blue-footed boobies are among my most beloved birds.",
      "I am an archipelago of volcanic islands straddling the equator."
    ]
  },
  {
    city: "Sapa",
    country: "Vietnam",
    emoji: "🇻🇳",
    clues: [
      "My terraced rice fields cascade down mountain slopes in green and gold.",
      "I sit near Vietnam's highest peak, Fansipan.",
      "Hmong, Dao, and Tay ethnic groups have farmed my hillsides for centuries.",
      "I am a highland town in the far northwest of Vietnam.",
      "Morning mist rolls through my valleys almost every day of the year."
    ]
  },
  {
    city: "Mostar",
    country: "Bosnia",
    emoji: "🇧🇦",
    clues: [
      "My Old Bridge, Stari Most, was rebuilt in 2004 after being destroyed in war.",
      "Brave local divers jump 21 metres from my bridge into the Neretva River.",
      "My name comes from the bridge-keepers who once guarded the crossing.",
      "My old bazaar, Kujundžiluk, is paved with cobblestones and sells copperware.",
      "I sit in southern Bosnia near the Croatian border."
    ]
  },
  {
    city: "Antananarivo",
    country: "Madagascar",
    emoji: "🇲🇬",
    clues: [
      "I am the capital of the fourth largest island in the world.",
      "My name means City of a Thousand in the Malagasy language.",
      "Rice paddies line the valleys beneath my hilltop city.",
      "Lemurs are found only on my island and nowhere else on Earth.",
      "I sit on a high plateau in the centre of the island."
    ]
  },
  {
    city: "Banff",
    country: "Canada",
    emoji: "🇨🇦",
    clues: [
      "I am Canada's oldest national park, founded in 1885.",
      "Lake Louise, with its turquoise glacial water, is near me.",
      "Elk and bears roam through my town streets.",
      "I sit high in the Rocky Mountains of Alberta.",
      "The Icefields Parkway, one of the world's most scenic drives, starts near me."
    ]
  },
  {
    city: "Cusco",
    country: "Peru",
    emoji: "🇵🇪",
    clues: [
      "I was the capital of the Inca Empire.",
      "My streets are built over Inca stone foundations.",
      "I sit at 3,400 metres above sea level.",
      "The Inca Trail leads from me to Machu Picchu.",
      "I am in the Andes mountains of southern Peru."
    ]
  },
  {
    city: "Bergen",
    country: "Norway",
    emoji: "🇳🇴",
    clues: [
      "I am surrounded by seven mountains and have a funicular to the top of one.",
      "My Bryggen wharf with colourful wooden warehouses is UNESCO-listed.",
      "I am the wettest city in Europe, receiving rain over 200 days a year.",
      "I am the gateway to Norway's Western Fjords.",
      "Edvard Grieg, the composer, was born here."
    ]
  },
  {
    city: "Riga",
    country: "Latvia",
    emoji: "🇱🇻",
    clues: [
      "I have the largest collection of Art Nouveau architecture in the world.",
      "My Central Market is housed in five former Zeppelin hangars.",
      "I sit at the mouth of the Daugava River on the Baltic Sea.",
      "I am the largest city in the Baltic states.",
      "My old town is a UNESCO World Heritage Site."
    ]
  },
  {
    city: "Windhoek",
    country: "Namibia",
    emoji: "🇳🇦",
    clues: [
      "I am one of the cleanest capital cities in Africa.",
      "German colonial-era buildings mix with modern architecture in my streets.",
      "I sit at 1,700 metres above sea level on a plateau.",
      "The Namib Desert — the world's oldest — begins just outside my city.",
      "I am the capital of a vast, sparsely populated country in southern Africa."
    ]
  },
  {
    city: "Valparaíso",
    country: "Chile",
    emoji: "🇨🇱",
    clues: [
      "My hillsides are covered in colourful street art and Victorian houses.",
      "Ancient funicular lifts, called ascensores, connect my hills to the port.",
      "Pablo Neruda had one of his beloved homes in my streets.",
      "I served as the main port for ships rounding Cape Horn before the Panama Canal.",
      "I sit on a bay on the Pacific coast of Chile."
    ]
  },
  {
    city: "Luxor",
    country: "Egypt",
    emoji: "🇪🇬",
    clues: [
      "I am built on the ruins of ancient Thebes, capital of the New Kingdom pharaohs.",
      "The Valley of the Kings, where Tutankhamun was found, is near me.",
      "The Temple of Karnak is one of the largest religious complexes ever built.",
      "Feluccas — traditional sailboats — drift along the Nile past my temples.",
      "I am often called the world's greatest open-air museum."
    ]
  },
  {
    city: "Konya",
    country: "Turkey",
    emoji: "🇹🇷",
    clues: [
      "The whirling dervishes of the Sufi order were founded here.",
      "The tomb of Rumi, the 13th-century poet, is my most visited site.",
      "I am one of the oldest continuously inhabited cities in the world.",
      "I sit on the Anatolian Plateau in south-central Turkey.",
      "My Mevlana Museum hosts millions of pilgrims each year."
    ]
  },
  {
    city: "Podgorica",
    country: "Montenegro",
    emoji: "🇲🇪",
    clues: [
      "I am the capital of the second newest country in Europe.",
      "Two rivers — the Morača and Ribnica — meet at my historic centre.",
      "I was heavily bombed in World War II and rebuilt as a modern city.",
      "I sit in a basin surrounded by mountains.",
      "My country became independent from Serbia only in 2006."
    ]
  },
  {
    city: "Yangon",
    country: "Myanmar",
    emoji: "🇲🇲",
    clues: [
      "The Shwedagon Pagoda, plated in gold, dominates my skyline.",
      "I was the capital of Burma under British colonial rule.",
      "My downtown grid retains one of the largest collections of colonial buildings in Asia.",
      "I sit at the junction of the Yangon and Bago rivers.",
      "My country was also called Burma and is in Southeast Asia."
    ]
  },
  {
    city: "Lhasa",
    country: "Tibet",
    emoji: "🇨🇳",
    clues: [
      "The Potala Palace, once home to the Dalai Lama, towers above me.",
      "I sit at 3,650 metres, one of the highest cities in the world.",
      "I am the spiritual heart of Tibetan Buddhism.",
      "Pilgrims circle the Jokhang Temple in prostration for days.",
      "I am called the Forbidden City of the mountains and sit on the Tibetan Plateau."
    ]
  },
  {
    city: "Bamako",
    country: "Mali",
    emoji: "🇲🇱",
    clues: [
      "I am the capital of one of Africa's largest countries by area.",
      "The Niger River runs through my heart.",
      "My Grand Marché is one of West Africa's biggest markets.",
      "I am one of the fastest growing cities in Africa.",
      "I am the musical capital of West Africa, famed for blues-influenced griot music."
    ]
  },
  {
    city: "Yerevan",
    country: "Armenia",
    emoji: "🇦🇲",
    clues: [
      "I am one of the oldest continuously inhabited cities in the world.",
      "Mount Ararat — now in Turkey — looms over my skyline from across the border.",
      "My buildings are made from pink volcanic tuff stone.",
      "The Cascade stairway connects my lower and upper city with art installations.",
      "I am the capital of the world's first Christian nation."
    ]
  },
  {
    city: "Nassau",
    country: "Bahamas",
    emoji: "🇧🇸",
    clues: [
      "I am one of the closest foreign capitals to the United States.",
      "Pirates like Blackbeard made my harbour their base in the 1700s.",
      "My Atlantis Resort is one of the most visited resort complexes in the world.",
      "The waters around me are among the most transparent blue in the world.",
      "I am the capital of an archipelago of over 700 islands in the Caribbean."
    ]
  },
  {
    city: "Montevideo",
    country: "Uruguay",
    emoji: "🇺🇾",
    clues: [
      "I am consistently rated the most liveable city in Latin America.",
      "My Mercado del Puerto is a cathedral of grills serving Uruguayan beef.",
      "I sit on the Rio de la Plata, the widest river mouth in the world.",
      "My Ciudad Vieja old town has a European colonial feel.",
      "I am the capital of the smallest country in South America."
    ]
  },
  {
    city: "Akureyri",
    country: "Iceland",
    emoji: "🇮🇸",
    clues: [
      "I am Iceland's second largest city, though I have fewer than 20,000 people.",
      "My traffic lights have heart-shaped lights instead of circles.",
      "I sit at the head of Eyjafjörður, Iceland's longest fjord.",
      "I am the gateway to Iceland's Diamond Circle in the north.",
      "Midnight sun shines over me for weeks in summer."
    ]
  }
];

function getTodaysPuzzle() {
  const epoch = new Date('2025-01-01');
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const dayNum = Math.floor((today - epoch) / 86400000);
  return PUZZLES[dayNum % PUZZLES.length];
}
