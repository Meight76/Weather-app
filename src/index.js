import template from "./index.html";
import "./style.css";
import findCityLoc  from "../src/city/find-city.js";
import getWeather from "./weather/fetch-weather.js";
import locationController from "./controller/locationSearch.js";
import measureBtnListen from "./controller/temperature-metric.js";
import geoLocListen from "./controller/geoLoc.js";

document.body.innerHTML = template;
locationController();
measureBtnListen();
geoLocListen()


const measureBtn = document.querySelector("#measure-btn");
console.log(measureBtn.textContent);
