export default async function findCityLoc(city) {
    try {
        const response = await fetch("https://geocoding-api.open-meteo.com/v1/search?name=" + city);
        if (!response.ok) throw new Error("Couldn't find city");
        const data = await response.json()
        if (!data.results?.[0]) throw new Error("Couldn't find proper data");

        console.log(data);
        return [data.results[0].latitude, data.results[0].longitude];
    } catch (e) {
        console.error(e);
    }
}
