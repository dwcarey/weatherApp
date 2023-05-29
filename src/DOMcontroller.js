import { logWeather } from '.';
import sunnyBG from './pexels-andre-moura-6105553.jpg';
import lightCloud from './pexels-engin-akyurt-1571730.jpg';
import darkCloud from './pexels-eberhard-grossgasteiger-1743392.jpg';
import rainImage from './pexels-nur-andi-ravsanjani-gusma-1915182.jpg';
import snowImage from './pexels-burak-the-weekender-1978126.jpg';
import lightningImage from './pexels-allan-carvalho-15580056.jpg';
import clearNight from './pexels-jovydas-pinkevicius-3319535.jpg';

function firstPageLoad() {
  const content = document.getElementById('content');

  // temperature container
  const tempContainer = document.createElement('div');
  tempContainer.id = 'tempContainer';

  const tempTextContainer = document.createElement('div');
  tempTextContainer.id = 'tempTextContainer';

  const temperatureText = document.createElement('h1');
  temperatureText.id = 'temperatureText';

  const tempMinText = document.createElement('h5');
  tempMinText.id = 'tempMinText';

  const tempMaxText = document.createElement('h5');
  tempMaxText.id = 'tempMaxText';

  const conditionIcon = document.createElement('img');
  conditionIcon.id = 'conditionIcon';

  const conditionText = document.createElement('p');
  conditionText.id = 'conditionText';


  tempTextContainer.appendChild(temperatureText);
  tempTextContainer.appendChild(tempMinText);
  tempTextContainer.appendChild(tempMaxText);
  tempContainer.appendChild(tempTextContainer);

  const iconConditionContainer = document.createElement('div');
  iconConditionContainer.id = 'iconConditionContainer';

  iconConditionContainer.appendChild(conditionIcon);
  iconConditionContainer.appendChild(conditionText);

  tempContainer.appendChild(iconConditionContainer);

  // search container
  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.maxLength = 20;
  searchInput.id = 'searchInput';

  const searchButton = document.createElement('button');
  searchButton.type = 'button';
  searchButton.textContent = 'Search';
  searchButton.id = 'searchButton';

  searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      const searchQuery = document.getElementById('searchInput').value;
      if (searchQuery !== '') {
        logWeather(searchQuery);
        searchInput.value = '';
      }
    } else {
      // do nothing
    }
  });

  searchButton.addEventListener('click', (e) => {
    const searchQuery = document.getElementById('searchInput').value;
    logWeather(searchQuery);
    searchInput.value = '';
  });

  const searchContainer = document.createElement('div');
  searchContainer.id = 'searchContainer';
  searchContainer.appendChild(searchInput);
  searchContainer.appendChild(searchButton);
  content.appendChild(searchContainer);


  // day/cloud/UV section
  const skyInfoContainer = document.createElement('div');
  skyInfoContainer.id = 'skyInfoContainer';

   const cloudPercent = document.createElement('p');
  cloudPercent.id = 'cloudPercent';

  const UVIndex = document.createElement('p');
  UVIndex.id = 'UVIndex';


  skyInfoContainer.appendChild(cloudPercent);
  skyInfoContainer.appendChild(UVIndex);


  // location and time section
  const locationContainer = document.createElement('div');
  locationContainer.id = 'locationContainer';
  const locationName = document.createElement('h2');
  locationName.id = 'locationName';

  const countryName = document.createElement('h3');
  countryName.id = 'countryName';

  const regionName = document.createElement('h4');
  regionName.id = 'regionName';

  const regionTime = document.createElement('h4');
  regionTime.id = 'regionTime';

  locationContainer.appendChild(locationName);
  locationContainer.appendChild(countryName);
  locationContainer.appendChild(regionName);
  locationContainer.appendChild(regionTime);

  content.appendChild(locationContainer);
  content.appendChild(tempContainer);
  content.appendChild(skyInfoContainer);
  // rain and humidity
  const rainContainer = document.createElement('div');
  rainContainer.id = 'rainContainer';
  const rainMM = document.createElement('p');
  rainMM.id = 'rainMM';
  const humidityPercent = document.createElement('p');
  humidityPercent.id = 'humidityPercent';

  rainContainer.appendChild(rainMM);
  rainContainer.appendChild(humidityPercent);

  content.appendChild(rainContainer);


  //forecast container and contents

  const forecastContainer = document.createElement('div');
  forecastContainer.id = 'forecastContainer';
  forecastContainer.classList.add('forecastContainer');

  for (let i = 0; i < 7; i += 1) {
    const forecastDayContainer = document.createElement('div');
    forecastDayContainer.id = `forecastDayContainer-${i}`;
    forecastDayContainer.classList.add('forecastDayContainer');

    const forecastDayName = document.createElement('h5');
    forecastDayName.id = `forecastDayName-${i}`;

    const forecastDayIcon = document.createElement('img');
    forecastDayIcon.id = `forecastDayIcon-${i}`;
    forecastDayIcon.classList.add('forecastDayIcon');

    const forecastDayMinTemp = document.createElement('p');
    forecastDayMinTemp.id = `forecastDayMinTemp-${i}`;

    const forecastDayMaxTemp = document.createElement('p');
    forecastDayMaxTemp.id = `forecastDayMaxTemp-${i}`;

    forecastDayContainer.appendChild(forecastDayName);
    forecastDayContainer.appendChild(forecastDayIcon);
    forecastDayContainer.appendChild(forecastDayMinTemp);
    forecastDayContainer.appendChild(forecastDayMaxTemp);
    forecastContainer.appendChild(forecastDayContainer);
  }
  content.appendChild(forecastContainer);
}

function populateDOM(weatherData) {
  // temperature container
  console.log(weatherData);
  const temperatureText = document.getElementById('temperatureText');
  temperatureText.textContent = `${weatherData[0].locationTempCelsius}\u00B0C`;

  const conditionIcon = document.getElementById('conditionIcon');
  const iconUrl = `https:${weatherData[0].locationConditionIcon}`;
  conditionIcon.src = iconUrl;
  const conditionText = document.getElementById('conditionText');
  conditionText.textContent = `${weatherData[0].locationConditionText}`;

  const cloudPercent = document.getElementById('cloudPercent');
  cloudPercent.textContent = `Cloud: ${weatherData[0].locationCloudPercent}` + '%';

  const UVIndex = document.getElementById('UVIndex');
  UVIndex.textContent = `UV Index ${weatherData[0].locationUVIndex}`;


  const tempMinText = document.getElementById('tempMinText');
  tempMinText.textContent = `Min: ${weatherData[0].forecastData[0].day0.minTempC}\u00B0`

  const tempMaxText = document.getElementById('tempMaxText');
  tempMaxText.textContent = `Max: ${weatherData[0].forecastData[0].day0.maxTempC}\u00B0`

  // location and time section
  const locationName = document.getElementById('locationName');
  locationName.textContent = `${weatherData[0].locationName}`;
  const countryName = document.getElementById('countryName');
  countryName.textContent = `${weatherData[0].locationCountry}`;
  const regionName = document.getElementById('regionName');
  regionName.textContent = `${weatherData[0].locationRegion}`;
  const regionTime = document.getElementById('regionTime');

  const year = `${weatherData[0].locationTime.split('-')[0]}`;
  const month = `${weatherData[0].locationTime.split('-')[1]}`;
  const day = `${weatherData[0].locationTime.split('-')[2].split(' ')[0]}`;
  const time = `${weatherData[0].locationTime.split('-')[2].split(' ')[1]}`;

  regionTime.textContent = `${time} ${day}/${month}/${year}`;

  // rain and humidity
  const rainMM = document.getElementById('rainMM');
  rainMM.textContent = `Rain (mm): ${weatherData[0].locationRainMM}`;
  const humidityPercent = document.getElementById('humidityPercent');
  humidityPercent.textContent = `Humidity: ${weatherData[0].locationHumidityPercent}` + '%';

  // background determination

  switch (weatherData[0].locationConditionCode) {
    case '1000':

      if (weatherData[0].locationIsDay === '1') {
        document.body.style.backgroundImage = `url(${sunnyBG})`;
        break;
      } else {
        document.body.style.backgroundImage = `url(${clearNight})`;
      }
      break;

    case '1003':
    case '1006':
      document.body.style.backgroundImage = `url(${lightCloud})`;
      break;

    case '1009':
    case '1030':
    case '1135':
    case '1147':
      document.body.style.backgroundImage = `url(${darkCloud})`;
      break;

    case '1063':
    case '1150':
    case '1153':
    case '1168':
    case '1180':
    case '1183':
    case '1186':
    case '1189':
    case '1192':
    case '1195':
    case '1198':
    case '1240':
    case '1243':
    case '1246':
      document.body.style.backgroundImage = `url(${rainImage})`;
      break;

    case '1066':
    case '1069':
    case '1072':
    case '1114':
    case '1117':
    case '1171':
    case '1201':
    case '1204':
    case '1207':
    case '1210':
    case '1213':
    case '1216':
    case '1219':
    case '1222':
    case '1225':
    case '1237':
    case '1249':
    case '1252':
    case '1255':
    case '1258':
    case '1261':
    case '1264':
      document.body.style.backgroundImage = `url(${snowImage})`;
      break;

    case '1087':
    case '1273':
    case '1276':
    case '1279':
    case '1282':
      document.body.style.backgroundImage = `url(${lightningImage})`;
      break;

    default:
      // Code to execute if none of the conditions match
      break;
  }

  //populate forecast container

  for (let i = 1; i <= 7; i += 1) {
  // Selecting the outputs of each container using template literals
  const selectedDayName = document.getElementById(`forecastDayName-${i - 1}`);
  const selectedDayIcon = document.getElementById(`forecastDayIcon-${i - 1}`);
  const selectedDayMinTemp = document.getElementById(`forecastDayMinTemp-${i - 1}`);
  const selectedDayMaxTemp = document.getElementById(`forecastDayMaxTemp-${i - 1}`);
  const forecastDay = `day${i}`;
  const date = new Date(weatherData[0].forecastData[0][forecastDay].date).toString().split(' ')[0];
  const icon = `https:${weatherData[0].forecastData[0][forecastDay].icon}`;
  const minTempC = weatherData[0].forecastData[0][forecastDay].minTempC;
  const maxTempC = weatherData[0].forecastData[0][forecastDay].maxTempC;

  selectedDayName.textContent = `${date}`;
  selectedDayIcon.src = icon;    
  selectedDayMinTemp.textContent = `${minTempC}\u00B0`;
  selectedDayMaxTemp.textContent = `${maxTempC}\u00B0`;


}
}

export { firstPageLoad, populateDOM };


/*
    console.log(weather[0].forecastData.day0.date);
    const date = new Date(weather[0].forecastData.day0.date);
    let day = date.toString().split(' ')[0];
    console.log(`${date}`);
    console.log(`${day}`);
*/
