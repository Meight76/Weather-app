import { awaitingWeather, errorAwaitingWeather, removeAwaitingWeather } from "../ui/help-ui.js";

export default async function getWeather(latitude, longitude) {
    try {
        let response;
        const measureBtn = document.querySelector("#measure-btn");
        const system = measureBtn.value;
        awaitingWeather();

        if (system === "celsius") {
            response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weather_code,apparent_temperature,wind_speed_10m&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,surface_pressure,wind_speed_10m`);
        } else {
            response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}.41&hourly=temperature_2m,weather_code,apparent_temperature,wind_speed_10m&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,surface_pressure,wind_speed_10m&wind_speed_unit=mph&temperature_unit=fahrenheit`);
        }
        if (!response.ok) throw new Error("Couldn't get weather");
        const data = await response.json();
        removeAwaitingWeather();
        return data;
    } catch (e) {
        console.error(e);
        errorAwaitingWeather();
    }
}
