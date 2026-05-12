import sunnyIcon from "../imgs/weather-icons-master/svg/wi-day-sunny.svg";
import mainlyClear from "../imgs/weather-icons-master/svg/wi-day-sunny-overcast.svg";
import partlyCloudy from "../imgs/weather-icons-master/svg/wi-day-cloudy.svg";
import cloudy from "../imgs/weather-icons-master/svg/wi-cloudy.svg";
import dayFog from "../imgs/weather-icons-master/svg/wi-fog.svg";
import drizzle from "../imgs/weather-icons-master/svg/wi-rain-mix.svg";
import rain from "../imgs/weather-icons-master/svg/wi-rain.svg";
import snow from "../imgs/weather-icons-master/svg/wi-snow.svg";
import showers from "../imgs/weather-icons-master/svg/wi-showers.svg";
import thunderstorm from "../imgs/weather-icons-master/svg/wi-storm-showers.svg";
import { capitalize } from "../help-functions.js";

 export const weatherCodeInfo = {
    0: {
        icon: sunnyIcon,
        name: "Sunny"
    },
    1: {
        icon: mainlyClear,
        name: "manly clear"
    },
    2: {
        icon: partlyCloudy,
        name: "partly cloudy"
    },
    3: {
        icon: cloudy,
        name: "cloudy"
    },
    4: {
        icon: dayFog,
        name: "fog"
    },
    5: {
        icon: drizzle,
        name: "drizzle"
    },
    6: {
        icon: rain,
        name: "rain"
    },
    7: {
        icon: snow,
        name: "snow"
    },
    8: {
        icon: showers,
        name: "shower"
    },
    9: {
        icon: thunderstorm,
        name: "storm"
    }
};

export default function updateCurrentWeatherUi(weatherObj, cityName) {
    const current = weatherObj.current;
    updateIcon(current["weather_code"]);
    updateCityName(cityName);
    updateTemperature(current["temperature_2m"]);
    updateFeelsLike(current["apparent_temperature"]);
    updatePressure(current["surface_pressure"]);
    updatehumidity(current["relative_humidity_2m"]);
    updateWeatherInfo(current["weather_code"]);
    updateWindSpeed(current["wind_speed_10m"]);
};

function updateIcon(weatherCode) {
    const weatherIconDiv = document.querySelector("#weather-icon");
    const index = String(weatherCode).charAt(0);
    weatherIconDiv.innerHTML = weatherCodeInfo[index].icon;
}

function updateWindSpeed(windSpeed) {
    const windSpeedPara = document.querySelector("#wind-speed");
    const system = document.querySelector("#measure-btn").value;

    windSpeedPara.textContent = windSpeed + (system === "celsius" ? " km/h" : " mph")
}

function updateCityName(name) {
    const cityNameHeader = document.querySelector("#city-name");
    cityNameHeader.textContent = capitalize(name);
}

function updateTemperature(temperature) {
    const temperatureHeader = document.querySelector("#temperature");
    const measureBtn = document.querySelector("#measure-btn");

    const system = measureBtn.value;

    temperatureHeader.textContent = temperature + (system === "celsius" ? "C" : "F");
}

function updateFeelsLike(temperature) {
    const feelsLikePara = document.querySelector("#temp-feels-like");
    const measureBtn = document.querySelector("#measure-btn");

    const system = measureBtn.value;

    feelsLikePara.textContent = temperature + (system === "celsius" ? "C" : "F");
}

function updatePressure(pressure) {
    const pressurePara = document.querySelector("#pressure");
    pressurePara.textContent = pressure;
}

function updatehumidity(humidity) {
    const humidityPara = document.querySelector("#humidity");
    humidityPara.textContent = humidity + "%";
}

function updateWeatherInfo(weatherCode) {
    const weatherInfoHeader = document.querySelector("#weather-info");
    const weatherCodeProp = String(weatherCode).charAt(0);
    weatherInfoHeader.textContent = weatherCodeInfo[weatherCodeProp].name;
}
