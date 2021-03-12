const imgArr = [];

class Image {
  constructor(id, title, description, width, height, imgName, wikiSearch, credit, creditURL) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.width = width;
    this.height = height;
    this.imgName = imgName;

    // this.pathURL = `./images/lg/${imgName}-lg.jpg`;
    // replaced with a method meant to be used with 'sm', 'md', 'lg'
    this.pathURL = (size) => `./images/${size}/${this.imgName}-${size}.webp`;

    // use the wiki search to generate a URL
    this.linkURL = `https://en.wikipedia.org/wiki/${wikiSearch}`;

    this.credit = credit;
    this.creditURL = creditURL;
  }
}

// Use the Image class and push it into an array of images, you don't have to create a function for that, I just turned 2 lines of code into 1.
const addImage = (
  id,
  title,
  description,
  width,
  height,
  imgName,
  wikiSearch,
  credit,
  creditURL
) => {
  const image = new Image(
    id,
    title,
    description,
    width,
    height,
    imgName,
    wikiSearch,
    credit,
    creditURL
  );
  imgArr.push(image);
};

// Created a function that pre-fills the width/height/credit/creditURL because they are all the same in my use case
const addImageByMarco = (id, title, description, imgName, wikiSearch) => {
  addImage(
    id,
    title,
    description,
    1920,
    1080,
    imgName,
    wikiSearch,
    'Marco Antonio',
    'https://www.pexels.com/@victorino'
  );
};

// Instead of pushing the object using a function you can also just do a
// imgArr[0] = new Image (1, 'Gala Apples',  'Gala is a clonally propagated apple cultivar with a mild and sweet flavour.', 1920, 2560, 'apples-red', 'Gala_(apple)', 'Marco Antonio', 'https://www.pexels.com/@victorino');
addImageByMarco(
  1,
  'Gala Apples',
  'Gala is a clonally propagated apple cultivar with a mild and sweet flavour.',
  'apples-red',
  'Gala_(apple)'
);

addImageByMarco(
  2,
  'Bananas',
  'A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa.',
  'bananas',
  'Banana'
);

addImageByMarco(
  3,
  'Limes',
  'A lime is a citrus fruit, which is typically round, green in color, 3–6 cm in diameter, and contains acidic juice vesicles.',
  'limes',
  'Lime_(fruit)'
);

addImageByMarco(
  4,
  'Melons',
  'A melon is any of various plants of the family Cucurbitaceae with sweet, edible, and fleshy fruit.',
  'melons',
  'Melon'
);

addImageByMarco(
  5,
  'Oranges',
  'The orange is the fruit of various citrus species in the family Rutaceae; it primarily refers to Citrus × sinensis, which is also called sweet orange.',
  'oranges',
  'Orange_(fruit)'
);

addImageByMarco(
  6,
  'Peaches',
  'The peach (Prunus persica) is a deciduous tree native to the region of Northwest China, where it was first domesticated and cultivated.',
  'peaches',
  'Peach'
);
addImageByMarco(
  7,
  'Pears',
  'Pears are fruits produced and consumed around the world, growing on a tree and harvested in late Summer into October.',
  'pears',
  'Pear'
);

addImageByMarco(
  8,
  'Plums',
  'A plum is a fruit of some species in Prunus subg. Prunus. Mature plum fruit may have a dusty-white waxy coating that gives them a glaucous appearance.',
  'plums',
  'Plum'
);

addImageByMarco(
  9,
  'Pomelos',
  'The pomelo or in scientific terms Citrus maxima or Citrus grandis, is the largest citrus fruit from the family Rutaceae and the principal ancestor of the grapefruit.',
  'pomelos',
  'Pomelo'
);

addImageByMarco(
  10,
  'Watermelons',
  'Watermelon is a flowering plant species of the Cucurbitaceae family . It is a highly cultivated fruit worldwide, with more than 1,000 varieties.',
  'watermelons',
  'Watermelon'
);

// addImage is exported in case I would like to give a user the ability to add images to the gallery
export { imgArr, addImage };
