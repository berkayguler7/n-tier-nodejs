async function getWeather() {
    let weather = await fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=Izmir`);
    weather = await weather.json();
    return weather;
}

export default { getWeather };