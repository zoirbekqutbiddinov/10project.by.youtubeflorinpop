const form = document.getElementById("form"),
  input = document.getElementById("input"),
  main = document.getElementById("main");
const apiKey = "132309cbe1cf078fba6ed0a2fa7b39cc";
const url = (location) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

async function getWeatherByLocation(location) {
  const res = await fetch(url(location));
  const respData = await res.json();
  console.log(respData);
  addWeatherToPage(respData);
}

function KtoC(K) {
  return Math.floor(K - 273);
}

function addWeatherToPage(data) {
  const temp = KtoC(data.main.temp);
  const weather = document.createElement("div");
  weather.classList.add("weather");
  weather.innerHTML = `
    <h2>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
    ${temp}°C
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"></h2>
    <small>${data.weather[0].main}</small> 
     
    `;
  search.value = "";
  main.innerHTML = "";
  main.appendChild(weather);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = search.value;
  if (city) {
    getWeatherByLocation(city);
  }
});
