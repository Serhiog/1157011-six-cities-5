
export const cities = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`,
];

export const offers = [
  {
    id: 0,
    isFavorite: false,
    isPremium: false,
    features: {
      type: `hotel`,
      badrooms: 1,
      adults: 2,
    },
    price: 100,
    title: `TITLE`,
    rating: 3.4,
    things: [
      `Wifi`,
      `Heating`,
      `Kitchen`,
      `Cable TV`,
      `Own bathroom`,
      `Hair-dryer`,
      `AC`,
    ],
    previewPictures: `img/apartment-small-01.jpg`,
    pictures: [
      `img/apartment-small-03.jpg`,
      `img/apartment-small-04.jpg`,
      `img/room-small.jpg`,
      `img/studio-photos.jpg`,
    ],
    description: `The delusion emphasizes intelligent common sense, although the opposite is accepted in the official language.`,
    owner: {
      id: 0,
      name: `Spider Man`,
      super: true,
      picture: `img/avatar-angelina.jpg`,
    },
    detailsMapZoom: 12,
    coordinates: [52.3909553943508, 4.85309666406198],
    mapZoom: 10,
    city: `Amsterdam`,
    cityCoordinates: [52.38333, 4.9],
  },
  {
    id: 2,
    isFavorite: true,
    isPremium: false,
    features: {
      type: `hotel`,
      badrooms: 2,
      adults: 4,
    },
    price: 200,
    title: `TITLE - 2`,
    rating: 4.5,
    things: [
      `Wifi`,
      `Heating`,
      `Kitchen`,
      `Cable TV`,
      `Own bathroom`,
      `Hair-dryer`,
      `AC`,
    ],
    previewPictures: `img/apartment-small-01.jpg`,
    pictures: [
      `img/apartment-small-03.jpg`,
      `img/apartment-small-04.jpg`,
      `img/room-small.jpg`,
      `img/studio-photos.jpg`,
    ],
    description: `The delusion emphasizes intelligent common sense, although the opposite is accepted in the official language.`,
    owner: {
      id: 1,
      name: `Iron Man`,
      super: false,
      picture: `img/avatar-angelina.jpg`,
    },
    detailsMapZoom: 12,
    coordinates: [52.3909553943508, 4.8530966640619],
    mapZoom: 10,
    city: `Amsterdam`,
    cityCoordinates: [52.38333, 4.9],
  },
  {
    id: 3,
    isFavorite: false,
    isPremium: true,
    features: {
      type: `private room`,
      badrooms: 1,
      adults: 6,
    },
    price: 300,
    title: `TITLE - 3`,
    rating: 4.9,
    things: [
      `Wifi`,
      `Heating`,
      `Kitchen`,
      `Cable TV`,
      `Own bathroom`,
      `Hair-dryer`,
      `AC`,
    ],
    previewPictures: `img/apartment-small-01.jpg`,
    pictures: [
      `img/apartment-small-03.jpg`,
      `img/apartment-small-04.jpg`,
      `img/room-small.jpg`,
      `img/studio-photos.jpg`,
    ],
    description: `The delusion emphasizes intelligent common sense, although the opposite is accepted in the official language.`,
    owner: {
      id: 3,
      name: `Billi Willi`,
      super: true,
      picture: `img/avatar-angelina.jpg`,
    },
    detailsMapZoom: 12,
    coordinates: [52.390955394351, 4.85309666406201],
    mapZoom: 10,
    city: `Amsterdam`,
    cityCoordinates: [52.38333, 4.9],
  },
  {
    id: 4,
    isFavorite: true,
    isPremium: true,
    features: {
      type: `house`,
      badrooms: 6,
      adults: 3,
    },
    price: 400,
    title: `TITLE - 4`,
    rating: 2.1,
    things: [
      `Wifi`,
      `Heating`,
      `Kitchen`,
      `Cable TV`,
      `Own bathroom`,
      `Hair-dryer`,
      `AC`,
    ],
    previewPictures: `img/apartment-small-01.jpg`,
    pictures: [
      `img/apartment-small-03.jpg`,
      `img/apartment-small-04.jpg`,
      `img/room-small.jpg`,
      `img/studio-photos.jpg`,
    ],
    description: `The delusion emphasizes intelligent common sense, although the opposite is accepted in the official language.`,
    owner: {
      id: 4,
      name: `Agent 007`,
      super: true,
      picture: `img/avatar-angelina.jpg`,
    },
    detailsMapZoom: 12,
    coordinates: [52.3909553943515, 4.85309666406196],
    mapZoom: 10,
    city: `Amsterdam`,
    cityCoordinates: [52.38333, 4.9],
  },
];

export const reviews = [
  {
    id: 1,
    picture: `img/avatar-max.jpg`,
    name: `Spider Man`,
    rating: 2,
    review: `She carefully took a crumpled, half-torn ten-dollar bill from her purse and handed it to him. He shoved a white`,
    date: `2020-05-08T14:13:56.569Z`,
    super: true,
  },
  {
    id: 2,
    picture: `img/avatar-max.jpg`,
    name: `Aqua Man`,
    rating: 5,
    review: `Be Happy! too! She carefully took a crumpled, half-torn ten-dollar bill from her purse and handed it to him. He shoved a white`,
    date: `2020-06-08T14:30:56.569Z`,
    super: true,
  },
];

export const serverOffers = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: `Amsterdam`,
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [
      `Heating`,
      `Kitchen`,
      `Cable TV`,
      `Washing machine`,
      `Coffee machine`,
      `Dishwasher`,
    ],
    host: {
      avatar_url: `img/1.png`,
      id: 3,
      is_pro: true,
      name: `Angelina`,
    },
    id: 1,
    images: [`img/1.png`, `img/2.png`],
    is_favorite: false,
    is_premium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    max_adults: 4,
    preview_image: `img/1.png`,
    price: 120,
    rating: 4.8,
    title: `Beautiful & luxurious studio at great location`,
    type: `apartment`,
  },
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: `Amsterdam`,
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [
      `Heating`,
      `Kitchen`,
      `Cable TV`,
      `Washing machine`,
      `Coffee machine`,
      `Dishwasher`,
    ],
    host: {
      avatar_url: `img/1.png`,
      id: 3,
      is_pro: true,
      name: `Angelina`,
    },
    id: 2,
    images: [`img/1.png`, `img/2.png`],
    is_favorite: false,
    is_premium: true,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    max_adults: 4,
    preview_image: `img/1.png`,
    price: 100,
    rating: 4.8,
    title: `Beautiful & luxurious studio at great location`,
    type: `apartment`,
  },
];

export const serverReviews = [
  {
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 1,
    rating: 4,
    user: {
      avatar_url: `img/1.png`,
      id: 4,
      is_pro: false,
      name: `Max`,
    },
  },
  {
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 2,
    rating: 4,
    user: {
      avatar_url: `img/1.png`,
      id: 4,
      is_pro: false,
      name: `Max`,
    },
  },
];

export const adaptedOffers = serverOffers.slice().map((offer) => offer);
export const adaptedReviews = serverReviews.slice().map((comment) => comment);

export const reviewData = {
  comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  rating: 4,
};

export const userData = {
  email: `Oliver.conner@gmail.com`,
  password: `12345678`,
};

export const authInfo = {
  avatar_url: `img/1.png`,
  email: `Oliver.conner@gmail.com`,
  id: 1,
  is_pro: false,
  name: `Oliver.conner`,
};

export const enteredInfo = {
  login: `test@mail.ru`,
  password: `qwerty12`,
};
