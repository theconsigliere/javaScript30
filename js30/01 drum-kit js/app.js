//PLAY SOUND

function playSound(event) {
  // selects the specific keycode audio clip when the right key is pressed
  const audio = document.querySelector(`audio[data-key='${event.keyCode}']`);
  const key = document.querySelector(`.key[data-key='${event.keyCode}']`);

  if (!audio) return; //stop the function from running

  audio.currentTime = 0; // rewinds audio to the start

  // plays audio clip
  audio.play();

  key.classList.add("playing");
}

//EXECUTION

window.addEventListener("keydown", playSound);

// REMOVE TRANSITION

function removeTransition(event) {
  if (event.propertyName !== "transform") return; //skip it if it's not a transform

  console.log(this); //points to .key as event listener has been called against it

  this.classList.remove("playing");
}

//EXECUTION

// listen for when the transitionends on the key
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
