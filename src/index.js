import template from "./index.html";
import "./style.css";
import findCityLoc  from "../src/city/find-city.js";
import getWeather from "./weather/fetch-weather.js";
// console.log(getWeather())
(async () => {
    const [lat, long] = await findCityLoc("São Paulo");
    const weatherObj = await getWeather(lat, long);
    console.log(weatherObj);
})();

document.body.innerHTML = template;
