import template from "./index.html";
import "./style.css";
import findCityLoc  from "../src/city/find-city.js";
import getWeather from "./weather/fetch-weather.js";
import locationController from "./controller/location.js";

document.body.innerHTML = template;
locationController();
