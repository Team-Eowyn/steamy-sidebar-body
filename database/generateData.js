const fs = require('fs');
const faker = require('faker');

const mContent = [
  'Alcohol Reference',
  'Blood',
  'Cartoon Violence',
  'Crude Humor',
  'Fantasy Violence',
  'Language',
  'Mature Humor',
  'Partial Nudity',
  'Sexual Content',
  'Sexual Violence',
  'Strong Language',
  'Strong Sexual Content',
  'Tobacco Reference',
  'Use of Drugs',
  'Violence',
  'Animated Blood',
  'Blood and Gore',
  'Comic Mischief',
  'Drug Reference',
  'Intense Violence',
  'Lyrics',
  'Nudity',
  'Real Gambling',
  'Sexual Themes',
  'Simulated Gambling',
  'Strong Lyrics',
  'Suggestive Themes',
  'Use of Alcohol',
  'Use of Tobacco',
  'Violent References',
];
const languages = [
  'English',
  'French',
  'German',
  'SpanishSpain',
  'Japanese',
  'Korean',
  'Russian',
  'SimplifiedChinese',
  'SpanishLatinAmerica',
  'TraditionalChinese',
];
const gameOS = ['Windows 10', 'Mac OSX', 'Linux'];
const proc = ['Core i5-7500', 'Core i5-7600', 'Core i5-7700', 'Core i5-7800'];
const mem = ['2GB RAM', '4GB RAM', '8GB RAM', '12GB RAM', '16GB RAM'];
const gphx = [
  'GTX 1060 / RX 580 - 6GB VRAM',
  'GTX 1050 / RX 570 - 4GB VRAM',
  'GTX 1040 / RX 560 - 2GB VRAM',
];
const genres = [
  'Action',
  'Action-adventure',
  'Role-playing',
  'Simulation',
  'Strategy',
  'Puzzle',
  'Idea',
];
const reviewRatings = [
  'Overwhelmingly Positive',
  'Very Positive',
  'Positive',
  'Mostly Positive',
  'Mixed',
  'Mostly Negative',
  'Negative',
  'Very Negative',
  'Overwhelmingly Negative',
];
const achieves = [];
for (let j = 0; j < 25; j += 1) {
  achieves.push(faker.image.image());
}

const allTags = [
  'Masterpiece',
  'Action',
  'VR',
  'Adventure',
  'Female Protagonist',
  'Story Rich',
  'Atmospheric',
  'Singleplayer',
  'FPS',
  'Horror',
  'Sci-fi',
  'First-Person',
  'Shooter',
  'Aliens',
  'Beautiful',
  'Zombies',
  'Futuristic',
  'Great Soundtrack',
  'Psychological Horror',
  'Memes',
];

const xTags = [];
for (let p = 0; p < Math.floor(Math.random() * 8); p += 1) {
  xTags.push(allTags[Math.floor(Math.random() * allTags.length)]);
}

const writeUsers = fs.createWriteStream('data.csv');

writeUsers.write('id|name|url|mainbody|sidebar|related\n', 'utf8');

const generateTenMillion = (writer, encoding, callback) => {
  let i = 10000000;
  let counter = 0;
  const write = () => {
    let ok = true;
    do {
      i -= 1;
      counter += 1;
      const xLanguages = {};
      for (let k = 0; k < languages.length; k += 1) {
        xLanguages[languages[k]] = [
          !Math.round(Math.random()),
          !Math.round(Math.random()),
          !Math.round(Math.random()),
        ];
      }

      const xMContent = [];
      for (let l = 0; l < Math.floor(Math.random() * 5); l += 1) {
        xMContent.push(mContent[Math.floor(Math.random() * mContent.length)]);
      }

      const xGenres = [];
      for (let m = 0; m < Math.floor(Math.random() * 3 + 1); m += 1) {
        xGenres.push(genres[Math.floor(Math.random() * genres.length)]);
      }

      const xAchieves = [];
      for (let n = 0; n < Math.floor(Math.random() * 4 + 5); n += 1) {
        xAchieves.push(achieves[Math.floor(Math.random() * achieves.length)]);
      }

      const xOs = [];
      for (let o = 0; o < Math.floor(Math.random() * 4); o += 1) {
        xOs.push(gameOS[Math.floor(Math.random() * gameOS.length)]);
      }

      const id = counter;
      const name = faker.commerce.productName();
      const url = faker.internet.url();
      const mainbody = JSON.stringify({
        description: faker.lorem.sentences(),
        images: [faker.image.image(), faker.image.image()],
        maturecontent: [
          {
            description: [...new Set(xMContent)],
          },
        ],
        sysrequirement: {
          os: [...new Set(xOs)],
          processor: proc[Math.floor(Math.random() * proc.length)],
          memory: mem[Math.floor(Math.random() * mem.length)],
          graphics: gphx[Math.floor(Math.random() * gphx.length)],
        },
      });
      const sidebar = JSON.stringify({
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
      });
      const related = JSON.stringify([
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
      ]);

      const data = `${id}|${name}|${url}|${mainbody}|${sidebar}|${related}\n`;

      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  };
  write();
};

generateTenMillion(writeUsers, 'utf-8', () => {
  writeUsers.end();
});
