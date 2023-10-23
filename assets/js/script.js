const FIRST_PHRASE = document.getElementById("firstResult");
const SECOND_PHRASE = document.getElementById("secondResult");
const THIRD_PHRASE = document.getElementById("thirdResult");
// JavaScript to dynamically update the copyright year
const currentYear = new Date().getFullYear();
document.getElementById('copyrightYear').textContent = currentYear;

// **** ELEMENT DISABLE CODE ****
const NAME_ELEMENT = document.getElementById("name");

let phraseListOne = [
  "Shall forever",
  "Is cursed to",
  "Will always",
  "Is fated to",
  "Shall eternally",
  "Is destined to",
  "Will persistently",
  "Shall be bound to",
  "Is condemned to",
  "Will forever",
];
let phraseListTwo = [
  "Be covered in",
  "Suffer under",
  "Endure",
  "Wade through",
  "Experience",
  "Face",
  "Confront",
  "Bear",
  "Endure the torment of",
];
let phraseListThree = [
  "a mountain of Beetlejuice's poop!",
  "buckets of Beetlejuice spittle!",
  "a lake of boiling Beetle'JUICE! (whatever that is, use your imagination)",
  "rotten corpses for a million and one years! ...that is such a long time",
  "A mountain of candy corn",
  "Buckets of ghostly treats",
  "A lake of witches' brew",
  "Rotten pumpkins for a thousand Halloweens",
  "Eerie whispers in the moonlight",
  "Spectral footsteps in the dark",
  "An endless night of spooktacular puns",
  "Cauldrons bubbling with enchanted brews",
  "Ghosts and goblins at the doorstep",
  "Skeletons dancing to the monster mash",
  "candy someone else sucked and spat out",
  "screaming halloween masks",
  "creepy crawlies",
  "tapdancing spiders",
  "invisible sandworms",
  "friends and family dancing to the Banana Boat song on loop"
];

let phraseListIndexMap = [phraseListOne, phraseListTwo, phraseListThree];
let phraseElementIndexMap = [FIRST_PHRASE, SECOND_PHRASE, THIRD_PHRASE];
let generateCurse = function (e) {
  if (!checkName()) {
    return;
  }

  let buttonIndex = parseInt(e.target.dataset.index) - 1;
  generateText(buttonIndex);

  // **** ELEMENT DISABLE CODE ****
  CURSE_BUTTONS.forEach((button) => (button.classList.add("disabled")));

  if (buttonIndex != 2) {
    CURSE_BUTTONS[buttonIndex + 1].classList.remove("disabled");
    } else {
      buttonFinal.classList.remove("disabled");
    }
};

// **** GENERATE RANDOM PHRASE FROM ARRAYS CODE ****
const CURSE_BUTTONS = Array.from(document.getElementsByClassName("curse-button"));
CURSE_BUTTONS.forEach((button) => button.addEventListener("click", generateCurse)
);

let generateText = function (index) {
  let phraseList = phraseListIndexMap[index];
  let phrase = phraseList[Math.floor(Math.random() * phraseList.length)];

  let phraseElement = phraseElementIndexMap[index];
  phraseElement.innerHTML = phrase;
};

// **** ELEMENT DISABLE CODE ****
NAME_ELEMENT.addEventListener("focusout", () =>
  CURSE_BUTTONS[0].classList.remove("disabled")
);

// **** GENERATE FULL HEX CODE ****

const buttonFinal = document.getElementById("finalButton");
buttonFinal.addEventListener("click", (e) => {
  if (checkName() && checkButtons()) {
// Function to display head spinner when finalButton is clicked for a set amount of time
    genSpin();
    genHex();
  }
});


function showCurseAndBeetlejuice() {

  const headspinDiv = document.getElementById('headspin');
  const jumpingFooter = document.getElementById("foot");
  const curseAndBeetlejuiceDiv = document.getElementById('curse-and-beetlejuice');

  jumpingFooter.style.display = "block";
  curseAndBeetlejuiceDiv.style.display = 'block';
  headspinDiv.style.display = 'none';
};

function genSpin() {
  const notPhussy = document.getElementById("phussy");
  const jumpingFooter = document.getElementById("foot");
  const headspinDiv = document.getElementById('headspin'); 
 
  jumpingFooter.style.display = "none";
  notPhussy.style.display = "none";
  headspinDiv.style.display = 'block';

  const timeoutDelay = 3000; // delay in ms
  setTimeout(showCurseAndBeetlejuice, timeoutDelay);
};

// **** ENSURE USER INPUTS TEXT TO START HEX CODE ****
function checkName() {
  if (document.getElementById("name").value !== "") {
    document.getElementById("name").placeholder = ""
    return true;
  } else {
    document.getElementById("name").placeholder = "I require a name!!!"
    return false;
}}

// **** ENSURE USER HAS PRESSED ALL BUTTONS **** //
function checkButtons() {
  if ((document.getElementById("firstResult").innerHTML == ``) || (
    document.getElementById("secondResult").innerHTML == ``) || (
    document.getElementById("thirdResult").innerHTML == ``)) {
      document.getElementById("finalButton").innerHTML = `<b id="fullPhrase" class="fw-bold fs-3">You've missed some buttons!</b>`
      return false;
  } else {
      document.getElementById("finalButton").innerHTML = `<b id="fullPhrase" class="fw-bold fs-3">Click Here - It's showtime!!</b>`
      return true;
  }
}

// **** BACK TO TOP AND RELOAD PAGE CODE ****
const refreshPage = document.getElementById("refresh");
refreshPage.addEventListener("click", (e) => {
  document.location.reload();
});

function genHex() {
  let finalPhrase = document.getElementById("finalResult");
  let name = document.getElementById("name").value;
  phrase = `${FIRST_PHRASE.innerHTML} ${SECOND_PHRASE.innerHTML} ${THIRD_PHRASE.innerHTML}`;
  finalPhrase.innerHTML = name + " " + phrase.toLowerCase() + "!";
}

// Function for playing scary sounds
function playSound() {
    const sound = new Audio(''); //Insert path to audio file here
    sound.play();
}
//Click event listener for certain classes to play scary sound, target class can be changed.
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('scary-sound')) {
      playSound();
    }
  });