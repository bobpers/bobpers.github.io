const calendar = document.querySelector("h2#calendar");
const clock = document.querySelector("h1#clock");

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getDateTime() {
  const date = new Date();
  const year = String(date.getFullYear());
  const month = String(date.getMonth()+1).padStart(2,"0");
  const date_ = String(date.getDate()).padStart(2, "0");
  const day = days[date.getDay()];
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  calendar.innerText = `${year}-${month}-${date_} ${day}`
  clock.innerText =  `${hours}:${minutes}:${seconds}`;
}

getDateTime();
setInterval(getDateTime, 1000);
