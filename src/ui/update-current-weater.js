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
import { capitalize, findNextHourIndex } from "../help-functions.js";
import updateBackground from "./updateBackground.js";

 export const weatherCodeInfo = {
    0: {
        icon: sunnyIcon,
        name: "clear"
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

export default function updateWeatherUi(weatherObj, cityName) {
    const current = weatherObj.current;
    const hourly = weatherObj.hourly;
    console.log(weatherObj);
    updateIcon(current["weather_code"]);
    updateCityName(cityName);
    updateTemperature(current["temperature_2m"]);
    updateFeelsLike(current["apparent_temperature"]);
    updatePressure(current["surface_pressure"]);
    updatehumidity(current["relative_humidity_2m"]);
    updateWeatherInfo(current["weather_code"]);
    updateWindSpeed(current["wind_speed_10m"]);
    updateBackground(current["is_day"]);
    generateWeatherInHours(hourly);
};

function updateIcon(weatherCode) {
    const weatherIconDiv = document.querySelector("#weather-icon");
    const index = String(weatherCode).charAt(0);
    weatherIconDiv.innerHTML = weatherCodeInfo[index].icon;
}

function updateWindSpeed(windSpeed) {
    const windSpeedPara = document.querySelector("#wind-speed");
    const system = document.querySelector("#measure-btn").value;

    windSpeedPara.textContent = "wind speed: " + windSpeed + (system === "celsius" ? " km/h" : " mph")
}

function updateCityName(name) {
    const cityNameHeader = document.querySelector("#city-name");
    cityNameHeader.textContent = capitalize(name);
}

function updateTemperature(temperature) {
    const temperatureHeader = document.querySelector("#temperature");
    const measureBtn = document.querySelector("#measure-btn");

    const system = measureBtn.value;

    temperatureHeader.textContent = "temp " + temperature + (system === "celsius" ? " ℃" : " °F");
}

function updateFeelsLike(temperature) {
    const feelsLikePara = document.querySelector("#temp-feels-like");
    const measureBtn = document.querySelector("#measure-btn");

    const system = measureBtn.value;

    feelsLikePara.textContent = "feels like " + temperature + (system === "celsius" ? " ℃" : " °F");
}

function updatePressure(pressure) {
    const pressurePara = document.querySelector("#pressure");
    pressurePara.textContent = "pressure: " + pressure + " hPa";
}

function updatehumidity(humidity) {
    const humidityPara = document.querySelector("#humidity");
    humidityPara.textContent = "humidity: " + humidity + "%";
}

function updateWeatherInfo(weatherCode) {
    const weatherInfoHeader = document.querySelector("#weather-info");
    const weatherCodeProp = String(weatherCode).charAt(0);
    weatherInfoHeader.textContent = weatherCodeInfo[weatherCodeProp].name;
}

function generateWeatherInHours(hourly) {
    try {
        const firstIndexHour = findNextHourIndex(hourly.time);
        if (firstIndexHour === -1) throw new Error("Failed to get hour");
        const hoursDiv = document.querySelector("#next-hours");
        if (hoursDiv === null) throw new Error("failded to get hours div");

        generateHourItem(hourly.time, firstIndexHour, hourly, hoursDiv);

    } catch (error) {
        console.error(error);
        return error;
    }
}

function generateHourItem(hourArr, firstHourIndex, weatherHourObj, node) {
    const system = document.querySelector("#measure-btn").value;
    for (let i = 0; i < 24; i++) {
        const index = firstHourIndex + i;
        const iconIndex = String(weatherHourObj.weather_code[index]).charAt(0);

        const item = document.createElement("div");
        const iconDiv = document.createElement("div");
        const hour = document.createElement("h2");
        const temperature = document.createElement("h3");
        const windSpeed = document.createElement("p");

        item.classList.add("hour-item");
        item.classList.add("glass");
        iconDiv.classList.add("hour-icon");
        hour.classList.add("hour-time");
        temperature.classList.add("hour-temp");
        windSpeed.classList.add("hour-wind");

        iconDiv.innerHTML = weatherCodeInfo[iconIndex].icon;
        hour.textContent = String(new Date(hourArr[index]).getHours()).padStart(2, "0") + ":00";
        temperature.textContent = weatherHourObj["temperature_2m"][index] + (system === "celsius" ? " ℃" : " °F");
        windSpeed.textContent = weatherHourObj["wind_speed_10m"][index] + (system === "celsius" ? " km/h" : "mph");

        item.appendChild(hour);
        item.appendChild(iconDiv);
        item.appendChild(temperature);
        item.appendChild(windSpeed);

        node.appendChild(item);
    }
}
