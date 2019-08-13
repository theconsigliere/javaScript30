/* Get our elements */
const selectors = {
  player: document.querySelector(".player"),
  video: document.querySelector(".viewer"),
  progress: document.querySelector(".progress"),
  progressBar: document.querySelector(".progress__filled"),
  toggle: document.querySelector(".toggle"),
  skipButtons: document.querySelectorAll("[data-skip]"),
  ranges: document.querySelectorAll(".player__slider")
};

/* Build out functions */

// play function

function togglePlay() {
  //   if (selectors.video.paused) {
  //     selectors.video.play();
  //   } else {
  //     selectors.video.pause();
  //   }

  const method = selectors.video.paused ? "play" : "pause";
  selectors.video[method]();
}

// update pause and play button
function updateButton() {
  const icon = this.paused ? ">" : "||";
  selectors.toggle.textContent = icon;
}

//skip feature

function skip() {
  selectors.video.currentTime += parseFloat(this.dataset.skip);
}

// fast forward speed play
function handleRangeUpdate() {
  selectors.video[this.name] = this.value;
}

// shows the progress of the video
function handleProgress() {
  const percent =
    (selectors.video.currentTime / selectors.video.duration) * 100;
  selectors.progressBar.style.flexBasis = `${percent}%`;
}
// scrub function

function scrub(event) {
  const scrubTime =
    (event.offsetX / selectors.progress.offsetWidth) * selectors.video.duration;
  selectors.video.currentTime = scrubTime;
}

/* Hook up the event listeners */
selectors.video.addEventListener("click", togglePlay);
selectors.video.addEventListener("play", updateButton);
selectors.video.addEventListener("pause", updateButton);
selectors.video.addEventListener("timeupdate", handleProgress);

selectors.toggle.addEventListener("click", togglePlay);
selectors.skipButtons.forEach(button => button.addEventListener("click", skip));
selectors.ranges.forEach(range =>
  range.addEventListener("change", handleRangeUpdate)
);

// how to add a scrub feature

let mousedown = false;
selectors.progress.addEventListener("click", scrub);
selectors.progress.addEventListener(
  "mousemove",
  event => mousedown && scrub(event)
);
selectors.progress.addEventListener("mousedown", () => (mousedown = true));
selectors.progress.addEventListener("mouseup", () => (mousedown = false));
