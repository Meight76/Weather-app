export default async function getWeather(latitude, longitude) {
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation_probability,wind_speed_10m,uv_index,weather_code&models=best_match,ecmwf_ifs&current=weather_code,is_day,surface_pressure,precipitation,temperature_2m,relative_humidity_2m,apparent_temperature&timezone=auto`)
        if (!response.ok) throw new Error("Couldn't get weather");
        const data = await response.json();
        return data;
    } catch (e) {
        console.error(e);
    }
}
