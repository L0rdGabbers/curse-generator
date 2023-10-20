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