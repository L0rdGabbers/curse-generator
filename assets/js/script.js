const FIRST_PHRASE = document.getElementById("firstResult");
const SECOND_PHRASE = document.getElementById("secondResult");
const THIRD_PHRASE = document.getElementById("thirdResult");

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
  "Be drenched in",
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
  // "a mountain of Beetlejuice's poop!",
  // "buckets of Beetlejuice spittle!",
  // "a lake of boiling Beetle'JUICE! (whatever that is, use your imagination)",
  // "rotten corpses for a million and one years! ...that is such a long time",
  // "your shadow takes on a mischievous life of its own.",
  // "your favorite costume wig becomes possessed and turns into a sentient Medusa headpiece.",
  // "Jack-o'-lanterns spontaneously burst into spooky ghost flames.",
  // "your bathroom mirror always reveals your inner ghostly self.",
  // "Halloween decorations come to life, staging their own monster parade.",
  // "house only accessible through secret doorways to unexpected places.",
  // "candy bowl filled with candy corn that multiplies when you look away.",
  // "footsteps in the dark always sound like eerie tap dancing.",
  // "house is haunted by invisible sandworms.",
  // "candy wrappers scream when you try to open them.",
  // "refrigerator is forever stocked with expired ghostly leftovers.",
  // "alarm clock plays 'Day-O' song every morning.",
  // "house filled with mirrors that only reflect your worst fears.",
  // "candy bowl dispenses live snakes instead of treats.",
  // "yard decorations turn into a zombie dance party at midnight.",
  // "Halloween party guests become invisible and play pranks on each other.",
  // "beetlejuice movie plays on loop for a week.",
  // "kitchen utensils take on a life of their own, performing a spooky symphony.",
  // "front door becomes a portal to the Netherworld for mischievous spirits.",
  // "candy apples turn into mini crystal balls that reveal your future.",
  // "Halloween masks reveal your true face to the world.",

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
  
  if (checkName()) {
    const notPhussy = document.getElementById("phussy");  
    
// Function to display head spinner when finalButton is clicked for a set amount of time

const headspinDiv = document.getElementById('headspin');
const curseAndBeetlejuiceDiv = document.getElementById('curse-and-beetlejuice');


 //Click event listener for displayinging the head spinner

// document.addEventListener('click', function (event) {
//   if (event.target.getElementById("finalButton")){
//     genSpin();
//   }
// });

    genSpin();

    genHex();
  }

});

function showCurseAndBeetlejuice() {

  const headspinDiv = document.getElementById('headspin');
  const curseAndBeetlejuiceDiv = document.getElementById('curse-and-beetlejuice');

  curseAndBeetlejuiceDiv.style.display = 'block';
  headspinDiv.style.display = 'none';
};

function genSpin() {
  const notPhussy = document.getElementById("phussy");
  const headspinDiv = document.getElementById('headspin'); 
 
  notPhussy.style.display = "none";
  headspinDiv.style.display = 'block';

  const timeoutDelay = 2000; // delay in ms
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

//** VIDEO OPEN IN POP-UP */
function openVideo(videoId, videoLabel) {
    var iframe = document.getElementById("video");
    iframe.src = "https://www.youtube.com/embed/" + videoId;
    document.getElementById("popup").style.display = "block";
}
    // Set the label for the video
    document.getElementById("video-label").textContent = videoLabel;




// // Function to display head spinner when finalButton is clicked for a set amount of time

// const headspinDiv = document.getElementById('headspin');
// const curseAndBeetlejuiceDiv = document.getElementById('curse-and-beetlejuice');

// function showCurseAndBeetlejuice() {
//   curseAndBeetlejuiceDiv.style.display = 'block';
//   headspinDiv.style.display = 'none';

//   const timeoutDelay = 2000; // delay in ms
//   setTimeout(showCurseAndBeetlejuice, timeoutDelay);
// };

// function genSpin() {
//   headspinDiv.style.display = 'block';
//   };

//  //Click event listener for displayinging the head spinner

// document.addEventListener('click', function (event) {
//   if (event.target.getElementById("finalButton")){
//     genSpin();
//   }
// });
