// Get the elements for the clock hands
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function setClock() {
  // Get the current time
  const now = new Date();
const seconds = now.getSeconds();
const mins = now.getMinutes();
const hour = now.getHours();
const hourDegrees = (30*hour + mins/2)%360;
const minsDegrees = 6*mins;
const secondsDegrees = 6*seconds;
  // // Calculate the position of the hour hand
  // const hours = now.getHours() % 12; // Convert to 12-hour format
  // const hoursDegrees = ((hours / 12) * 360) + 90; // Convert to degrees

  // // Calculate the position of the minute hand
  // const minutes = now.getMinutes();
  // const minutesDegrees = ((minutes /60) * 360) + 90;
	

  // // Calculate the position of the second hand
  // const seconds = now.getSeconds();
  // const secondsDegrees = ((seconds / 60) * 360) + 90;

  // Set the rotation of the clock hands
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minsDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

// Call the setClock function every second to update the clock hands
setInterval(setClock, 1000);