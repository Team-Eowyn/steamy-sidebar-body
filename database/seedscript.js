const faker = require("faker");
const models = require("./models.js");

const { Game } = models;
// const { Related } = models;

const mContent = [
  "Alcohol Reference",
  "Blood",
  "Cartoon Violence",
  "Crude Humor",
  "Fantasy Violence",
  "Language",
  "Mature Humor",
  "Partial Nudity",
  "Sexual Content",
  "Sexual Violence",
  "Strong Language",
  "Strong Sexual Content",
  "Tobacco Reference",
  "Use of Drugs",
  "Violence",
  "Animated Blood",
  "Blood and Gore",
  "Comic Mischief",
  "Drug Reference",
  "Intense Violence",
  "Lyrics",
  "Nudity",
  "Real Gambling",
  "Sexual Themes",
  "Simulated Gambling",
  "Strong Lyrics",
  "Suggestive Themes",
  "Use of Alcohol",
  "Use of Tobacco",
  "Violent References",
];
const languages = [
  "English",
  "French",
  "German",
  "SpanishSpain",
  "Japanese",
  "Korean",
  "Russian",
  "SimplifiedChinese",
  "SpanishLatinAmerica",
  "TraditionalChinese",
];
const gameOS = ["Windows 10", "Mac OSX", "Linux"];
const proc = ["Core i5-7500", "Core i5-7600", "Core i5-7700", "Core i5-7800"];
const mem = ["2GB RAM", "4GB RAM", "8GB RAM", "12GB RAM", "16GB RAM"];
const gphx = [
  "GTX 1060 / RX 580 - 6GB VRAM",
  "GTX 1050 / RX 570 - 4GB VRAM",
  "GTX 1040 / RX 560 - 2GB VRAM",
];
const genres = [
  "Action",
  "Action-adventure",
  "Role-playing",
  "Simulation",
  "Strategy",
  "Puzzle",
  "Idea",
];
const reviewRatings = [
  "Overwhelmingly Positive",
  "Very Positive",
  "Positive",
  "Mostly Positive",
  "Mixed",
  "Mostly Negative",
  "Negative",
  "Very Negative",
  "Overwhelmingly Negative",
];
const achieves = [];
for (let j = 0; j < 25; j += 1) {
  achieves.push(faker.image.image());
}

const allTags = [
  "Masterpiece",
  "Action",
  "VR",
  "Adventure",
  "Female Protagonist",
  "Story Rich",
  "Atmospheric",
  "Singleplayer",
  "FPS",
  "Horror",
  "Sci-fi",
  "First-Person",
  "Shooter",
  "Aliens",
  "Beautiful",
  "Zombies",
  "Futuristic",
  "Great Soundtrack",
  "Psychological Horror",
  "Memes",
];

const xTags = [];
for (let p = 0; p < Math.floor(Math.random() * 10); p += 1) {
  xTags.push(allTags[Math.floor(Math.random() * allTags.length)]);
}

const saveInfo = () => {
  // creation of 100 instances
  for (let i = 0; i < 100; i += 1) {
    // setting random generation
    const xLanguages = {};
    for (let k = 0; k < languages.length; k += 1) {
      xLanguages[languages[k]] = [
        !Math.round(Math.random()),
        !Math.round(Math.random()),
        !Math.round(Math.random()),
      ];
    }

    const xMContent = [];
    for (let l = 0; l < Math.floor(Math.random() * 10); l += 1) {
      xMContent.push(mContent[Math.floor(Math.random() * mContent.length)]);
    }

    const xGenres = [];
    for (let m = 0; m < Math.floor(Math.random() * 3 + 1); m += 1) {
      xGenres.push(genres[Math.floor(Math.random() * genres.length)]);
    }

    const xAchieves = [];
    for (let n = 0; n < Math.floor(Math.random() * 10 + 5); n += 1) {
      xAchieves.push(achieves[Math.floor(Math.random() * achieves.length)]);
    }

    const xOs = [];
    for (let o = 0; o < Math.floor(Math.random() * 10); o += 1) {
      xOs.push(gameOS[Math.floor(Math.random() * gameOS.length)]);
    }

    const example = new Game({
      proxyId: i,
      name: faker.commerce.productName(),
      url: faker.internet.url(),
      mainbody: {
        description: faker.lorem.paragraphs(),
        images: [faker.image.image(), faker.image.image()],
        maturecontent: {
          description: [...new Set(xMContent)],
        },
        sysrequirement: {
          os: [...new Set(xOs)],
          processor: proc[Math.floor(Math.random() * proc.length)],
          memory: mem[Math.floor(Math.random() * mem.length)],
          graphics: gphx[Math.floor(Math.random() * gphx.length)],
        },
      },
      sidebar: {
        description: {
          player: [faker.lorem.word(), faker.image.image()],
          achievements: [faker.lorem.word(), faker.image.image()],
          captions: [faker.lorem.word(), faker.image.image()],
          workshop: [faker.lorem.word(), faker.image.image()],
          editor: [faker.lorem.word(), faker.image.image()],
        },
        vrsupport: {
          headset: [
            faker.lorem.word(),
            faker.image.image(),
            faker.lorem.word(),
            faker.image.image(),
            faker.lorem.word(),
            faker.image.image(),
            faker.lorem.word(),
            faker.image.image(),
          ],
          input: [faker.lorem.word(), faker.image.image()],
          playarea: [
            faker.lorem.word(),
            faker.image.image(),
            faker.lorem.word(),
            faker.image.image(),
            faker.lorem.word(),
            faker.image.image(),
          ],
        },
        languages: xLanguages,
        achievements: [...new Set(xAchieves)],
        metacritic: Math.floor(Math.random() * 101),
        minidescription: {
          genre: [...new Set(xGenres)],
          developer: faker.company.companyName(),
          publisher: faker.company.companyName(),
          franchise: faker.company.companyName(),
          releasedate: faker.date.past(),
        },
      },
      relatedContent: [
        {
          name: faker.commerce.productName(),
          thumbnail: faker.image.image(),
          price: faker.commerce.price(),
          hoverinfo: {
            releasedate: faker.date.past(),
            gif: faker.image.image(),
            reviews:
              reviewRatings[Math.floor(Math.random() * reviewRatings.length)],
            totalReviews: Math.floor(Math.random() * 1001),
            tag: [...new Set(xTags)],
          },
        },
        {
          name: faker.commerce.productName(),
          thumbnail: faker.image.image(),
          price: faker.commerce.price(),
          hoverinfo: {
            releasedate: faker.date.past(),
            gif: faker.image.image(),
            reviews:
              reviewRatings[Math.floor(Math.random() * reviewRatings.length)],
            totalReviews: Math.floor(Math.random() * 1001),
            tag: [...new Set(xTags)],
          },
        },
        {
          name: faker.commerce.productName(),
          thumbnail: faker.image.image(),
          price: faker.commerce.price(),
          hoverinfo: {
            releasedate: faker.date.past(),
            gif: faker.image.image(),
            reviews:
              reviewRatings[Math.floor(Math.random() * reviewRatings.length)],
            totalReviews: Math.floor(Math.random() * 1001),
            tag: [...new Set(xTags)],
          },
        },
        {
          name: faker.commerce.productName(),
          thumbnail: faker.image.image(),
          price: faker.commerce.price(),
          hoverinfo: {
            releasedate: faker.date.past(),
            gif: faker.image.image(),
            reviews:
              reviewRatings[Math.floor(Math.random() * reviewRatings.length)],
            totalReviews: Math.floor(Math.random() * 1001),
            tag: [...new Set(xTags)],
          },
        },
        {
          name: faker.commerce.productName(),
          thumbnail: faker.image.image(),
          price: faker.commerce.price(),
          hoverinfo: {
            releasedate: faker.date.past(),
            gif: faker.image.image(),
            reviews:
              reviewRatings[Math.floor(Math.random() * reviewRatings.length)],
            totalReviews: Math.floor(Math.random() * 1001),
            tag: [...new Set(xTags)],
          },
        },
      ],
    });
    example.save((err) => {
      if (err) {
        return console.log(err);
      }
      return console.log("successfully generated game info");
    });
  }
};

const create237 = () => {
  const xLanguages = {};
  for (let k = 0; k < languages.length; k += 1) {
    xLanguages[languages[k]] = [
      !Math.round(Math.random()),
      !Math.round(Math.random()),
      !Math.round(Math.random()),
    ];
  }

  const xMContent = [];
  for (let l = 0; l < Math.floor(Math.random() * 10); l += 1) {
    xMContent.push(mContent[Math.floor(Math.random() * mContent.length)]);
  }

  const xGenres = [];
  for (let m = 0; m < Math.floor(Math.random() * 3 + 1); m += 1) {
    xGenres.push(genres[Math.floor(Math.random() * genres.length)]);
  }

  const xAchieves = [];
  for (let n = 0; n < Math.floor(Math.random() * 10 + 5); n += 1) {
    xAchieves.push(achieves[Math.floor(Math.random() * achieves.length)]);
  }

  const xOs = [];
  for (let o = 0; o < Math.floor(Math.random() * 10); o += 1) {
    xOs.push(gameOS[Math.floor(Math.random() * gameOS.length)]);
  }

  const example = new Game({
    proxyId: 237,
    name: "Half-Life: Alyx",
    url: faker.internet.url(),
    mainbody: {
      description:
        "Half-Life: Alyx is Valve’s VR return to the Half-Life series. It’s the story of an impossible fight against a vicious alien race known as the Combine, set between the events of Half-Life and Half-Life 2. Playing as Alyx Vance, you are humanity’s only chance for survival. The Combine’s control of the planet since the Black Mesa incident has only strengthened as they corral the remaining population in cities. Among them are some of Earth’s greatest scientists: you and your father, Dr. Eli Vance. As founders of a fledgling resistance, you’ve continued your clandestine scientific activity—performing critical research, and building invaluable tools for the few humans brave enough to defy the Combine. Every day, you learn more about your enemy, and every day you work toward finding a weakness.",
      images: [
        "https://steamcdn-a.akamaihd.net/steam/apps/546560/ss_d61365e93f20ceb5a94a1e5b2811cf504cbfa303.600x338.jpg?t=1588704198",
        "https://steamcdn-a.akamaihd.net/steam/apps/546560/ss_70fce3236bf252d3814f793744f648cbe35164e4.600x338.jpg?t=1588704198",
      ],
      maturecontent: {
        description: ["Cartoon Violence", "Crude Humor", "Fantasy Violence"],
      },
      sysrequirement: {
        os: ["Windows 10", "Mac OSX", "Linux"],
        processor: proc[Math.floor(Math.random() * proc.length)],
        memory: mem[Math.floor(Math.random() * mem.length)],
        graphics: gphx[Math.floor(Math.random() * gphx.length)],
      },
    },
    sidebar: {
      description: {
        player: ["Single-Player", faker.image.image()],
        achievements: ["Steam Achievements", faker.image.image()],
        captions: ["Captions available", faker.image.image()],
        workshop: ["Steam Workshop", faker.image.image()],
        editor: ["Includes level editor", faker.image.image()],
      },
      vrsupport: {
        headset: [
          "Valve Index",
          faker.image.image(),
          "HTC Vive",
          faker.image.image(),
          "Oculus Rift",
          faker.image.image(),
          "Windows Mixed Reality",
          faker.image.image(),
        ],
        input: ["Tracked Motion Controllers", faker.image.image()],
        playarea: [
          "Seated",
          faker.image.image(),
          "Standing",
          faker.image.image(),
          "Room-Scale",
          faker.image.image(),
        ],
      },
      languages: xLanguages,
      achievements: [
        "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/546560/a918e823edc8871d515da7b713684002e3af8350.jpg",
        "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/546560/47635ded5309b8cf36f4b145f8dc8208bc79680b.jpg",
        "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/546560/192c3160e2d469457341437662f0ca2c6ae423d4.jpg",
      ],
      metacritic: 99,
      minidescription: {
        genre: ["Action", "Action-adventure", "Role-playing"],
        developer: "Valve",
        publisher: "Valve",
        franchise: "Half-life",
        releasedate: faker.date.past(),
      },
    },
    relatedContent: [
      {
        name: "Half-Life",
        thumbnail:
          "https://steamcdn-a.akamaihd.net/steam/apps/70/capsule_184x69.jpg?t=1587058406",
        price: "9.99",
        hoverinfo: {
          releasedate: faker.date.past(),
          gif:
            "https://steamcdn-a.akamaihd.net/steam/apps/70/header.jpg?t=1587058406",
          reviews:
            reviewRatings[Math.floor(Math.random() * reviewRatings.length)],
          totalReviews: Math.floor(Math.random() * 1001),
          tag: ["Aliens", "Beautiful"],
        },
      },
      {
        name: "Half-Life 2",
        thumbnail:
          "https://steamcdn-a.akamaihd.net/steam/apps/220/capsule_184x69.jpg?t=1587513163",
        price: "9.99",
        hoverinfo: {
          releasedate: faker.date.past(),
          gif:
            "https://steamcdn-a.akamaihd.net/steam/apps/220/header.jpg?t=1587513163",
          reviews:
            reviewRatings[Math.floor(Math.random() * reviewRatings.length)],
          totalReviews: Math.floor(Math.random() * 1001),
          tag: ["First-Person", "Shooter"],
        },
      },
      {
        name: "Half-Life 2: Episode Two",
        thumbnail:
          "https://steamcdn-a.akamaihd.net/steam/apps/420/capsule_184x69.jpg?t=1579629041",
        price: "7.99",
        hoverinfo: {
          releasedate: faker.date.past(),
          gif:
            "https://steamcdn-a.akamaihd.net/steam/apps/420/header.jpg?t=1579629041",
          reviews:
            reviewRatings[Math.floor(Math.random() * reviewRatings.length)],
          totalReviews: Math.floor(Math.random() * 1001),
          tag: ["Singleplayer", "FPS"],
        },
      },
      {
        name: "Half-Life: Source",
        thumbnail:
          "https://steamcdn-a.akamaihd.net/steam/apps/280/capsule_184x69.jpg?t=1579630049",
        price: "9.99",
        hoverinfo: {
          releasedate: faker.date.past(),
          gif:
            "https://steamcdn-a.akamaihd.net/steam/apps/70/header.jpg?t=1587058406",
          reviews:
            reviewRatings[Math.floor(Math.random() * reviewRatings.length)],
          totalReviews: Math.floor(Math.random() * 1001),
          tag: ["Female Protagonist", "Story Rich"],
        },
      },
      {
        name: "Half-Life: Opposing Force",
        thumbnail:
          "https://steamcdn-a.akamaihd.net/steam/apps/50/capsule_184x69.jpg?t=1579628243",
        price: "4.99",
        hoverinfo: {
          releasedate: faker.date.past(),
          gif:
            "https://steamcdn-a.akamaihd.net/steam/apps/50/header.jpg?t=1579628243",
          reviews:
            reviewRatings[Math.floor(Math.random() * reviewRatings.length)],
          totalReviews: Math.floor(Math.random() * 1001),
          tag: ["First-Person", "Shooter"],
        },
      },
    ],
  });
  example.save((err) => {
    if (err) {
      return console.log(err);
    }
    return console.log("successfully generated 237");
  });
};

saveInfo();
create237();
