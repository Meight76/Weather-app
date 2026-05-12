import updateWeatherUi from "../ui/update-current-weater.js";
import getWeather from "../weather/fetch-weather.js";

export default function geoLocListen() {
    const geoLocBtn = document.querySelector("#my-location-btn");

    geoLocBtn.addEventListener("click", () => {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const weather = await getWeather(position.coords.latitude, position.coords.longitude);
                const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`)
                const coordData = await response.json();
                updateWeatherUi(weather, coordData.address.city);
            },);
    });
};
