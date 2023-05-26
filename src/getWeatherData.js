function processWeatherData(fetchedData) {
  const weatherDataJS = [{
    locationName: `${fetchedData.location.name}`,
    locationRegion: `${fetchedData.location.region}`,
    locationCountry: `${fetchedData.location.country}`,
    locationTime: `${fetchedData.location.localtime}`,
    locationTempCelsius: `${fetchedData.current.temp_c}`,
    locationTempFarenheit: `${fetchedData.current.temp_f}`,
    locationHumidityPercent: `${fetchedData.current.humidity}`,
    locationIsDay: `${fetchedData.current.is_day}`,
    locationConditionText: `${fetchedData.current.condition.text}`,
    locationConditionIcon: `${fetchedData.current.condition.icon}`,
    locationCloudPercent: `${fetchedData.current.cloud}`,
    locationRainMM: `${fetchedData.current.precip_mm}`,
    locationUVIndex: `${fetchedData.current.uv}`,
  }];
  return weatherDataJS;
}
async function getCurrentWeatherData(searchQuery) {
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=13b63145a5424e57bac133002232605&q=${searchQuery}`, { mode: 'cors' });
  const responseData = await response.json();
  const weatherData = processWeatherData(responseData);
  return weatherData;
}

export { getCurrentWeatherData };
