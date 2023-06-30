const now = new Date();

let daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let dayOfWeek = daysOfWeek[now.getDay()];
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let currentDay = document.getElementById("current-day");
currentDay.textContent = `${dayOfWeek} ${hours}:${minutes}`;

function showCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city");

  let resultDiv = document.querySelector("#result");
  console.log(resultDiv, cityInput.value);
  resultDiv.innerHTML = `${cityInput.value}`;

  let apiKey = "aef8a7d433d4c06a4445055ab1a0fa12";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}

let form1 = document.querySelector("#search-input");
form1.addEventListener("submit", showCity);

/*Testing innerHTML change. It works
let resultDiv = document.querySelector("#result");
resultDiv.innerHTML = "Largo, MD";*/

function showTemp(response) {
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  let tempElement = document.querySelector("#temp");
  /*tempElement.innerHTML = `${temperature}\u00B0`;*/
  tempElement.innerHTML = `${temperature}&degC`;
}

