import findCityLoc from "../city/find-city.js";
import updateWeatherUi from "../ui/update-weater.js";
import getWeather from "../weather/fetch-weather.js";

const locInput = document.querySelector("#location-input");

locInput.addEventListener("change", async (e) => {
    const locResults = await findCityLoc(e.currentTarget.value);
    const weather = await getWeather(...locResults);
    updateWeatherUi(weather);

});
