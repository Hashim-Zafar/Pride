type listType = { navItem: string; navLink: string };
export let navList: listType[] = [
  { navItem: "Home", navLink: "#" },
  { navItem: "About", navLink: "#about" },
  { navItem: "Features", navLink: "#features" },
  { navItem: "Pricing", navLink: "#pricing" },
];

type ArtistType = { src: string; name: string; songs: number };
export let ArtistsList: ArtistType[] = [
  { src: "src/assets/Artist1.png", name: "Luna Blaze", songs: 16 },
  { src: "src/assets/Artist1.png", name: "Aria Van Rose", songs: 26 },
  { src: "src/assets/Artist4.png", name: "Scarlet Rose", songs: 8 },
  { src: "src/assets/Artist1.png", name: "Noah West", songs: 36 },
  { src: "src/assets/Artist4.png", name: "Nova Star ", songs: 5 },
];

export let trendingCards = [
  {
    img: "src/assets/coverPage.png",
    name: "Sense",
    Band: "Mark Brand",
    Listens: "110k Listens",
  },
  {
    img: "src/assets/coverPage2.png",
    name: "Feel the Beats",
    Band: "Autora Diane",
    Listens: "120k Listens",
  },
  {
    img: "src/assets/coverPage.png",
    name: "Bastion",
    Band: "Rita Mam",
    Listens: "170k Listens",
  },
];

export let pricingList = [
  {
    access: "Individual",
    price: "349",
    accountFeatures: {
      account: 1,
      Benifit: "Cancel Anytime",
      paymentMethod: "Subscribe or one-time payment",
    },
    description:
      "Rs 0 for 1 month, then Rs 349 per month after. Offer only available if you haven’t tried Premium before. Terms apply.",
    textColor: "text-pink",
    background: "bg-pink",
  },

  {
    access: "Student",
    price: "175",
    accountFeatures: {
      account: 1,
      Benifit: "Discount for eligible students",
      paymentMethod: "Subscribe or one-time payment",
    },
    description:
      "Rs 0 for 1 month, then Rs 175 per month after. Offer reserved for students enrolled in an eligible accredited institution of higher education. Not available to users who have already tried Premium. Subject to the Spotify student discount Terms and Conditions.",
    textColor: "text-yellow-300",
    background: "bg-yellow-300",
  },

  {
    access: "Duo",
    price: "449",
    accountFeatures: {
      account: 2,
      Benifit: "Cancel anytime",
      paymentMethod: "Subscribe or one-time payment",
    },
    description: "For couples who reside at the same address. Terms apply.",
    textColor: "text-green-400",
    background: "bg-green-400",
  },
];
