import findCityLoc from "../city/find-city.js";
// import updateWeatherUi from "../ui/update-weater.js";
import getWeather from "../weather/fetch-weather.js";


export default () => {
    const locInput = document.querySelector("#location-input");
    locInput.addEventListener("change", async (e) => {
        const locResults = await findCityLoc(e.currentTarget.value);
        if (!locResults) return;
        const weather = await getWeather(...locResults);
        if (!weather) return;
        console.log(weather);
        // updateWeatherUi(weather);

    });
}

