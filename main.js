// KF Panda Search

// HTML Variables
let charNameEl = document.getElementById("char-name");
let charQuoteEl = document.getElementById("char-quote");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let name = document.getElementById("char-in").value.toLowerCase();

  // If Sttatement - Test the Input
  if (name === "po" || name === "dragon warrior" || name === "kung fu panda") {
    charNameEl.innerHTML = "Po";
    charQuoteEl.innerHTML = "Buddy, I am the Dragon Warrior!";

    document.getElementById("chare-img").src = "img/po.png";
  } else if (name === "tigress" || name === "master tigress") {
    charNameEl.innerHTML = "Tigress";
    charQuoteEl.innerHTML = "That was hardcore!";
    document.getElementById("char-img").src = "img/tigress.png";
  } else if (name === "mantis") {
    charNameEl.innerHTML = "Mantis";
    charQuoteEl.innerHTML = "Fear the Bug!";
    document.getElementById("char-img").src = "img/mantis.png";
  } else if (name === "monkey") {
    charNameEl.innerHTML = "Monkey";
    charQuoteEl.innerHTML = "We should hang out!";
    document.getElementById("char-img").src = "img/monkey.png";
  } else if (name === "viper") {
    charNameEl.innerHTML = "Viper";
    charQuoteEl.innerHTML = "I don't need to bite to fight!";
    document.getElementById("char-img").src = "img/viper.png";
  } else if (name === "crane") {
    charNameEl.innerHTML = "Crane";
    charQuoteEl.innerHTML = "Wings of Justice!";
    document.getElementById("char-img").src = "img/crane.png";
  } else if (name === "boss wolf" || name === "wolf boss") {
    charNameEl.innerHTML = "Boss-Wolf";
    charQuoteEl.innerHTML = "Chew on that, tubby!";
    document.getElementById("char-img").src = "img/boss-wolf.png";
  } else if (name === "croc") {
    charNameEl.innerHTML = "Croc";
    charQuoteEl.innerHTML = "Vengeance is served!";
    document.getElementById("char-img").src = "img/croc.png";
  } else if (name === "kai") {
    charNameEl.innerHTML = "Kai";
    charQuoteEl.innerHTML =
      "I fought by his side. I loved him like a brother. And he... betrayed me. Well, now I will destroy everything he has created!";
    document.getElementById("char-img").src = "img/kai.png";
  } else if (name === "mr ping" || name === "mr-ping" || name === "ping") {
    charNameEl.innerHTML = "Mr.Ping";
    charQuoteEl.innerHTML =
      "To make something special, you just have to believe it's special.";
    document.getElementById("char-img").src = "img/mr-ping.png";
  } else if (name === "oogway" || name === "master oogway") {
    charNameEl.innerHTML = "Master Oogway";
    charQuoteEl.innerHTML =
      "I think they will all lose until they find a battle worth fighting.";
    document.getElementById("char-img").src = "img/oogway.png";
  } else if (name === "shen") {
    charNameEl.innerHTML = "Shen";
    charQuoteEl.innerHTML =
      "Search the farthest villages. Find more metal! China will be mine...";
    document.getElementById("char-img").src = "img/shen.png";
  } else if (name === "shifu") {
    charNameEl.innerHTML = "Shen";
    charQuoteEl.innerHTML =
      "You know the hardest part of this? The hardest part... is cleaning up afterwards. [chuckles]";
    document.getElementById("char-img").src = "img/shifu.png";
  } else if (name === "sooth sayer") {
    charNameEl.innerHTML = "Sooth Sayer";
    charQuoteEl.innerHTML =
      " Even with his poor eyesight, he can see the truth. Why is it that you cannot?";
    document.getElementById("char-img").src = "img/soothsayer.png";
  } else if (name === "storming ox" || name === "ox") {
    charNameEl.innerHTML = "Storming Ox";
    charQuoteEl.innerHTML = "You insolent fool!";
    document.getElementById("char-img").src = "img/storimg-ox.png";
  } else if (name === "tai lung") {
    charNameEl.innerHTML = "Tai Lung";
    charQuoteEl.innerHTML =
      "I'm glad Shifu sent you. I was beginning to think I'd been forgotten. Fly back there and tell them... the real Dragon Warrior is coming home.";
    document.getElementById("char-img").src = "img/tai-lung.png";
  } else {
    charNameEl.innerHTML = "?????";
    charQuoteEl.innerHTML = "--------";
    document.getElementById("char-img").src = "img/question-mark.png";
  }
}

document.getElementById("theme-btn").addEventListener("click", changeTheme);

function changeTheme() {
  let themeIn = document.getElementById("theme-in").value;

  let r = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
  let g = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
  let b = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
  let a = Math.floor(Math.random() * (1 - 0.2 + 1)) + 0.2;

  if (themeIn === "black" || themeIn === "dark") {
    document.getElementById("body").style.backgroundColor =
      "rgba(0, 0, 0, 0.7)";
    document.getElementById("body").style.color = "white";
  } else if (themeIn === "white" || themeIn === "light") {
    document.getElementById("body").style.backgroundColor =
      "rgba(255, 255, 255, 0.7)";
    document.getElementById("body").style.color = "black";
  } else if (themeIn === "random") {
    document.getElementById(
      "body"
    ).style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a}) `;
  }
}
