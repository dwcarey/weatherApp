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
          dailyRainChance: [{
            hour0: fetchedData.forecast.forecastday[0].hour[0].chance_of_rain,
            hour1: fetchedData.forecast.forecastday[0].hour[1].chance_of_rain,
            hour2: fetchedData.forecast.forecastday[0].hour[2].chance_of_rain,
            hour3: fetchedData.forecast.forecastday[0].hour[3].chance_of_rain,
            hour4: fetchedData.forecast.forecastday[0].hour[4].chance_of_rain,
            hour5: fetchedData.forecast.forecastday[0].hour[5].chance_of_rain,
            hour6: fetchedData.forecast.forecastday[0].hour[6].chance_of_rain,
            hour7: fetchedData.forecast.forecastday[0].hour[7].chance_of_rain,
            hour8: fetchedData.forecast.forecastday[0].hour[8].chance_of_rain,
            hour9: fetchedData.forecast.forecastday[0].hour[9].chance_of_rain,
            hour10: fetchedData.forecast.forecastday[0].hour[10].chance_of_rain,
            hour11: fetchedData.forecast.forecastday[0].hour[11].chance_of_rain,
            hour12: fetchedData.forecast.forecastday[0].hour[12].chance_of_rain,
            hour13: fetchedData.forecast.forecastday[0].hour[13].chance_of_rain,
            hour14: fetchedData.forecast.forecastday[0].hour[14].chance_of_rain,
            hour15: fetchedData.forecast.forecastday[0].hour[15].chance_of_rain,
            hour16: fetchedData.forecast.forecastday[0].hour[16].chance_of_rain,
            hour17: fetchedData.forecast.forecastday[0].hour[17].chance_of_rain,
            hour18: fetchedData.forecast.forecastday[0].hour[18].chance_of_rain,
            hour19: fetchedData.forecast.forecastday[0].hour[19].chance_of_rain,
            hour20: fetchedData.forecast.forecastday[0].hour[20].chance_of_rain,
            hour21: fetchedData.forecast.forecastday[0].hour[21].chance_of_rain,
            hour22: fetchedData.forecast.forecastday[0].hour[22].chance_of_rain,
            hour23: fetchedData.forecast.forecastday[0].hour[23].chance_of_rain,
          }],
          dailyRainIcon: [{
            icon0: fetchedData.forecast.forecastday[0].hour[0].condition.icon,
            icon1: fetchedData.forecast.forecastday[0].hour[1].condition.icon,
            icon2: fetchedData.forecast.forecastday[0].hour[2].condition.icon,
            icon3: fetchedData.forecast.forecastday[0].hour[3].condition.icon,
            icon4: fetchedData.forecast.forecastday[0].hour[4].condition.icon,
            icon5: fetchedData.forecast.forecastday[0].hour[5].condition.icon,
            icon6: fetchedData.forecast.forecastday[0].hour[6].condition.icon,
            icon7: fetchedData.forecast.forecastday[0].hour[7].condition.icon,
            icon8: fetchedData.forecast.forecastday[0].hour[8].condition.icon,
            icon9: fetchedData.forecast.forecastday[0].hour[9].condition.icon,
            icon10: fetchedData.forecast.forecastday[0].hour[10].condition.icon,
            icon11: fetchedData.forecast.forecastday[0].hour[11].condition.icon,
            icon12: fetchedData.forecast.forecastday[0].hour[12].condition.icon,
            icon13: fetchedData.forecast.forecastday[0].hour[13].condition.icon,
            icon14: fetchedData.forecast.forecastday[0].hour[14].condition.icon,
            icon15: fetchedData.forecast.forecastday[0].hour[15].condition.icon,
            icon16: fetchedData.forecast.forecastday[0].hour[16].condition.icon,
            icon17: fetchedData.forecast.forecastday[0].hour[17].condition.icon,
            icon18: fetchedData.forecast.forecastday[0].hour[18].condition.icon,
            icon19: fetchedData.forecast.forecastday[0].hour[19].condition.icon,
            icon20: fetchedData.forecast.forecastday[0].hour[20].condition.icon,
            icon21: fetchedData.forecast.forecastday[0].hour[21].condition.icon,
            icon22: fetchedData.forecast.forecastday[0].hour[22].condition.icon,
            icon23: fetchedData.forecast.forecastday[0].hour[23].condition.icon,
          }],
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
