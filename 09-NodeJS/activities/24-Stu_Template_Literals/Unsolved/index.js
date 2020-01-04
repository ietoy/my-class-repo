const music = {
  // code here
  retro: "Lake Street Dive",
  indie: "Hippo Campus",
  country: "Casey Musgraves",
  jazz: "Snarky Puppy",
  classical: "Gustav Baller"
};

// write code between the <p> tags to output the data from the music object above
const songSnippet = `My favorite retro band is ${music.retro}. My favorite indie band is ${music.indie}. My favorite country artist is ${music.country}. My favorite jazz group is ${music.jazz}. My favorite classical composer is ${music.classical}.

`;

// console.log(songSnippet);

const element = document.getElementById("music");
element.innerHTML = songSnippet;
