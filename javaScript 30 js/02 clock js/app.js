//Clock
const secondHand = document.querySelector(".second-hand ");
const minuteHand = document.querySelector(".min-hand ");
const hourHand = document.querySelector(".hour-hand ");

const degrees = time => (time / 60) * 360 + 90;
const setDate = () => {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = degrees(seconds);
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minDegrees = degrees(mins);
  minuteHand.style.transform = `rotate(${minDegrees}deg)`;

  const hours = now.getHours();
  const hourDegrees = degrees(hours);
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  // console.log(seconds);
};

setInterval(setDate, 1000);
