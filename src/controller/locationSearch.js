import findCityLoc from "../city/find-city.js";
import { capitalize } from "../help-functions.js";
import updateCurrentWeatherUi from "../ui/update-current-weater.js";
import getWeather from "../weather/fetch-weather.js";


export default () => {
    const locInput = document.querySelector("#location-input");
    locInput.addEventListener("change", async (e) => {
        const cityName = capitalize(e.currentTarget.value);
        const locResults = await findCityLoc(cityName);
        if (!locResults) return;
        const weather = await getWeather(...locResults);
        if (!weather) return;
        console.log(weather);
        updateCurrentWeatherUi(weather, cityName);
    });
}

