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
