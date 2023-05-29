function processWeatherData(fetchedData) {
  if (fetchedData.error) {
    const error = fetchedData.error.message;
    alert(`${error}`);
  }
  if (!fetchedData.error) {
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
      locationConditionCode: `${fetchedData.current.condition.code}`,
      locationCloudPercent: `${fetchedData.current.cloud}`,
      locationRainMM: `${fetchedData.current.precip_mm}`,
      locationUVIndex: `${fetchedData.current.uv}`,
      forecastData: [{
        day0: {
          date: fetchedData.forecast.forecastday[0].date,
          icon: fetchedData.forecast.forecastday[0].day.condition.icon,
          minTempC: fetchedData.forecast.forecastday[0].day.mintemp_c,
          maxTempC: fetchedData.forecast.forecastday[0].day.maxtemp_c,
        },
        day1: {
          date: fetchedData.forecast.forecastday[1].date,
          icon: fetchedData.forecast.forecastday[1].day.condition.icon,
          minTempC: fetchedData.forecast.forecastday[1].day.mintemp_c,
          maxTempC: fetchedData.forecast.forecastday[1].day.maxtemp_c,
        },
        day2: {
          date: fetchedData.forecast.forecastday[2].date,
          icon: fetchedData.forecast.forecastday[2].day.condition.icon,
          minTempC: fetchedData.forecast.forecastday[2].day.mintemp_c,
          maxTempC: fetchedData.forecast.forecastday[2].day.maxtemp_c,
        },
        day3: {
          date: fetchedData.forecast.forecastday[3].date,
          icon: fetchedData.forecast.forecastday[3].day.condition.icon,
          minTempC: fetchedData.forecast.forecastday[3].day.mintemp_c,
          maxTempC: fetchedData.forecast.forecastday[3].day.maxtemp_c,
        },
        day4: {
          date: fetchedData.forecast.forecastday[4].date,
          icon: fetchedData.forecast.forecastday[4].day.condition.icon,
          minTempC: fetchedData.forecast.forecastday[4].day.mintemp_c,
          maxTempC: fetchedData.forecast.forecastday[4].day.maxtemp_c,
        },
        day5: {
          date: fetchedData.forecast.forecastday[5].date,
          icon: fetchedData.forecast.forecastday[5].day.condition.icon,
          minTempC: fetchedData.forecast.forecastday[5].day.mintemp_c,
          maxTempC: fetchedData.forecast.forecastday[5].day.maxtemp_c,
        },
        day6: {
          date: fetchedData.forecast.forecastday[6].date,
          icon: fetchedData.forecast.forecastday[6].day.condition.icon,
          minTempC: fetchedData.forecast.forecastday[6].day.mintemp_c,
          maxTempC: fetchedData.forecast.forecastday[6].day.maxtemp_c,
        },
        day7: {
          date: fetchedData.forecast.forecastday[7].date,
          icon: fetchedData.forecast.forecastday[7].day.condition.icon,
          minTempC: fetchedData.forecast.forecastday[7].day.mintemp_c,
          maxTempC: fetchedData.forecast.forecastday[7].day.maxtemp_c,
        },
      }],
    }];
    return weatherDataJS;
  }
}

async function getCurrentWeatherData(searchQuery) {
  const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=13b63145a5424e57bac133002232605&q=${searchQuery}&days=8&aqi=no&alerts=no`, { mode: 'cors' });
  const responseData = await response.json();
  console.log(responseData);
  const weatherData = processWeatherData(responseData);
  return weatherData;
}

export { getCurrentWeatherData };
