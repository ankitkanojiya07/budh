export type HeritageSite = {
    name: string;
    description: string;
    historicalSignificance: string;
    location: string;
    type: 'temple' | 'monument' | 'cave' | 'stupa' | 'monastery' | 'ruins' | 'site';
    period: string;
    unescoStatus?: 'World Heritage Site' | 'Tentative List' | 'None';
};

export type HeritageMapping = Record<string, HeritageSite[]>;

export const HERITAGE_BY_STATE: HeritageMapping = {
  "Rajasthan": [
    {
      name: "Bhimsagar Ruins",
      description: "Ruins of an ancient Buddhist site, believed to be a significant monastic settlement with stupas and relics.",
      historicalSignificance: "Site of ancient Buddhist settlements and artifacts, providing evidence of Buddhism's spread in Rajasthan.",
      location: "Baran district",
      type: "ruins",
      period: "2nd century BCE - 5th century CE",
    },
    {
      name: "Kolvi Rock Caves",
      description: "A group of rock-cut Buddhist caves, including viharas and stupas, carved into laterite hills.",
      historicalSignificance: "Largest group of Buddhist caves in Rajasthan, reflecting the region's importance as a Buddhist center during the early centuries CE.",
      location: "Kolvi, Jhalawar district",
      type: "cave",
      period: "5th-7th century CE",
    }
  ],
  "Gujarat": [
    {
      name: "Junagadh",
      description: "Ancient city with Buddhist caves, stupas, and inscriptions, including the famous Uparkot caves and Ashokan edicts.",
      historicalSignificance: "A major center of Buddhist activity in western India, with evidence of monastic life and royal patronage.",
      location: "Junagadh district",
      type: "cave",
      period: "3rd century BCE - 4th century CE",
    },
    {
      name: "Vadnagar",
      description: "Ancient city with significant Buddhist heritage, home to several stupas and monasteries.",
      historicalSignificance: "Important center of Buddhist learning and culture in ancient India.",
      location: "Mehsana district",
      type: "site",
      period: "2nd century BCE - 7th century CE",
    },
    {
      name: "Devni Mori",
      description: "Archaeological site with ancient Buddhist stupas and relic caskets, including a stupa believed to have housed Buddha's relics.",
      historicalSignificance: "Key site for understanding the spread of Buddhism in western India; yielded relics and inscriptions.",
      location: "Sabarkantha district",
      type: "stupa",
      period: "3rd-4th century CE",
    },
    {
      name: "Talaja",
      description: "Site of ancient Buddhist rock-cut caves, including chaityas and viharas carved into a hill.",
      historicalSignificance: "Represents the spread of Buddhist monastic architecture in the Saurashtra region.",
      location: "Bhavnagar district",
      type: "cave",
      period: "2nd century BCE - 2nd century CE",
    }
  ],
  "Andhra Pradesh": [
    {
      name: "Amaravati Stupa",
      description: "Ancient city with a rich Buddhist heritage, known for its stupas and sculptures.",
      historicalSignificance: "Major center of Buddhist art and culture during the Satavahana period.",
      location: "Amaravati, Guntur district",
      type: "site",
      period: "2nd century BCE - 3rd century CE",
      unescoStatus: "Tentative List"
    },
    {
      name: "Udaigiri",
      description: "Ancient Buddhist monastic complex with stupas, monasteries, and sculptures.",
      historicalSignificance: "Important center of Buddhist learning and culture in ancient India.",
      location: "Nagarjunakonda, Guntur district",
      type: "ruins",
      period: "3rd-7th century CE"
    }
  ],
  "Uttar Pradesh": [
    {
      name: "Kapilavastu",
      description: "Ancient city where Prince Siddhartha (Buddha) spent his early years before renouncing worldly life.",
      historicalSignificance: "Birthplace of Buddha's early life and the site where he made the decision to seek enlightenment.",
      location: "Piprahwa, Siddharthnagar district",
      type: "site",
      period: "6th century BCE",
      unescoStatus: "Tentative List"
    },
    {
      name: "Kaushambi",
      description: "Ancient city where Buddha delivered several important discourses and established a large Buddhist community.",
      historicalSignificance: "One of the six great cities during Buddha's time, mentioned frequently in Buddhist texts.",
      location: "Kosam, near Prayagraj",
      type: "site",
      period: "6th century BCE"
    },
    {
      name: "Mathura",
      description: "Ancient city with significant Buddhist heritage, home to numerous Buddhist monasteries and art.",
      historicalSignificance: "Major center of Buddhist art and culture during the Kushan period.",
      location: "Mathura district",
      type: "site",
      period: "1st-3rd century CE"
    },
    {
      name: "Varanasi",
      description: "Sacred city where Buddha delivered his first sermon at Sarnath, marking the beginning of Buddhism.",
      historicalSignificance: "Site of Buddha's first teaching (Dhammacakkappavattana Sutta) and the establishment of the Sangha.",
      location: "Sarnath, Varanasi district",
      type: "site",
      period: "6th century BCE",
      unescoStatus: "World Heritage Site"
    }
  ],
  "Bihar": [
    {
      name: "Mahabodhi Temple",
      description: "Sacred temple marking the exact spot where Buddha attained enlightenment under the Bodhi tree.",
      historicalSignificance: "Most sacred site in Buddhism, where Siddhartha Gautama became the Buddha.",
      location: "Bodh Gaya, Gaya district",
      type: "temple",
      period: "3rd century BCE",
      unescoStatus: "World Heritage Site"
    },
    {
      name: "Bodh Gaya",
      description: "Complete sacred complex including the Mahabodhi Temple, Bodhi tree, and various monasteries.",
      historicalSignificance: "Epicenter of Buddhism, the most important pilgrimage site for Buddhists worldwide.",
      location: "Bodh Gaya, Gaya district",
      type: "site",
      period: "6th century BCE onwards",
      unescoStatus: "World Heritage Site"
    },
    {
      name: "Nalanda",
      description: "Ancient university and monastic complex that was the world's first residential university.",
      historicalSignificance: "Greatest center of Buddhist learning for 800 years, attracted scholars from across Asia.",
      location: "Nalanda district",
      type: "ruins",
      period: "5th-12th century CE",
      unescoStatus: "World Heritage Site"
    },
    {
      name: "Rajgir",
      description: "Ancient capital where Buddha spent several rainy seasons and delivered important teachings.",
      historicalSignificance: "Frequently mentioned in Buddhist texts, site of many important discourses.",
      location: "Rajgir, Nalanda district",
      type: "site",
      period: "6th century BCE onwards"
    },
    {
      name: "Vaishali",
      description: "Ancient city where Buddha delivered his last sermon and announced his impending death.",
      historicalSignificance: "Site of Buddha's last teaching and the second Buddhist council.",
      location: "Vaishali district",
      type: "site",
      period: "6th century BCE"
    }
  ],
  "Maharashtra": [
    {
      name: "Ajanta Caves",
      description: "Spectacular rock-cut cave complex with elaborate Buddhist paintings and sculptures.",
      historicalSignificance: "Masterpiece of Buddhist art and architecture, UNESCO World Heritage Site.",
      location: "Ajanta, Aurangabad district",
      type: "cave",
      period: "2nd century BCE - 6th century CE",
      unescoStatus: "World Heritage Site"
    },
    {
      name: "Ellora Caves",
      description: "Complex of rock-cut caves representing Buddhist, Hindu, and Jain traditions.",
      historicalSignificance: "Showcases religious harmony and architectural excellence of ancient India.",
      location: "Ellora, Aurangabad district",
      type: "cave",
      period: "6th-11th century CE",
      unescoStatus: "World Heritage Site"
    },
    {
      name: "Kanheri Caves",
      description: "Ancient Buddhist cave complex with over 100 caves and numerous inscriptions.",
      historicalSignificance: "Major center of Buddhist learning and meditation in ancient Maharashtra.",
      location: "Sanjay Gandhi National Park, Mumbai",
      type: "cave",
      period: "1st century BCE - 10th century CE"
    }
  ],
  "Madhya Pradesh": [
    {
      name: "Sanchi Stupa",
      description: "Ancient Buddhist complex featuring the Great Stupa and numerous other structures.",
      historicalSignificance: "One of the oldest and most important Buddhist monuments in India.",
      location: "Sanchi, Raisen district",
      type: "stupa",
      period: "3rd century BCE onwards",
      unescoStatus: "World Heritage Site"
    }
  ],
  "Himachal Pradesh": [
    {
      name: "McLeodganj",
      description: "Tibetan settlement with Buddhist monasteries and cultural institutions.",
      historicalSignificance: "Center of Tibetan Buddhism in exile and cultural preservation.",
      location: "McLeodganj, Kangra district",
      type: "monastery",
      period: "20th century CE onwards"
    }
  ],
  "Sikkim": [
    {
      name: "Phodong Monastery",
      description: "Ancient Buddhist monastery with rich cultural heritage and traditional architecture.",
      historicalSignificance: "Important center of Tibetan Buddhism in Sikkim.",
      location: "Phodong, North Sikkim",
      type: "monastery",
      period: "18th century CE onwards"
    }
  ],
  "Arunachal Pradesh": [
    {
      name: "Tawang",
      description: "Sacred valley with the largest Buddhist monastery in India outside of Tibet.",
      historicalSignificance: "Major center of Tibetan Buddhism and cultural heritage.",
      location: "Tawang district",
      type: "monastery",
      period: "17th century CE onwards"
    },
    {
        name: "Bomdila",
        description: "Town with significant Buddhist heritage, home to several monasteries and stupas.",
        historicalSignificance: "Important center of Buddhist culture in Arunachal Pradesh.",
        location: "Bomdila, West Kameng district",
        type: "monastery",
        period: "18th century CE onwards"
    }
  ],
  "Odisha": [
    {
      name: "Ratnagiri",
      description: "Ancient Buddhist monastic complex with stupas, monasteries, and sculptures.",
      historicalSignificance: "Major center of Vajrayana Buddhism during the Pala period.",
      location: "Ratnagiri, Jajpur district",
      type: "ruins",
      period: "6th-12th century CE"
    },
    {
      name: "Dhauli Hills",
      description: "Sacred hills with Buddhist monuments and the famous rock edicts of Emperor Ashoka.",
      historicalSignificance: "Site where Ashoka embraced Buddhism after the Kalinga war.",
      location: "Dhauli, Khordha district",
      type: "monument",
      period: "3rd century BCE"
    }
  ]
};
