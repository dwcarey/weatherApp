import { logWeather } from '.';

function firstPageLoad() {
  const content = document.getElementById('content');

  // temperature container
  const tempContainer = document.createElement('div');
  tempContainer.id = 'tempContainer';

  const temperatureText = document.createElement('h1');
  temperatureText.id = 'temperatureText';

  const conditionIcon = document.createElement('img');
  conditionIcon.id = 'conditionIcon';

  const conditionText = document.createElement('p');
  conditionText.id = 'conditionText';

  tempContainer.appendChild(temperatureText);
  
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
  content.appendChild(tempContainer);

  // day/cloud/UV section
  const skyInfoContainer = document.createElement('div');
  skyInfoContainer.id = 'skyInfoContainer';

  const isDay = document.createElement('p');
  isDay.id = 'isDay';

  const cloudPercent = document.createElement('p');
  cloudPercent.id = 'cloudPercent';

  const UVIndex = document.createElement('p');
  UVIndex.id = 'UVIndex';

  skyInfoContainer.appendChild(isDay);
  skyInfoContainer.appendChild(cloudPercent);
  skyInfoContainer.appendChild(UVIndex);
  content.appendChild(skyInfoContainer);

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

  // day/cloud/UV section
  const isDay = document.getElementById('isDay');
  if (weatherData[0].locationIsDay === '0') {
    isDay.textContent = 'Night';
  }
  if (weatherData[0].locationIsDay === '1') {
    isDay.textContent = 'Day';
  }
  const cloudPercent = document.getElementById('cloudPercent');
  cloudPercent.textContent = `Cloud: ${weatherData[0].locationCloudPercent}` + '%';

  const UVIndex = document.getElementById('UVIndex');
  UVIndex.textContent = `UV Index ${weatherData[0].locationUVIndex}`;

  // location and time section
  const locationName = document.getElementById('locationName');
  locationName.textContent = `${weatherData[0].locationName}`;
  const countryName = document.getElementById('countryName');
  countryName.textContent = `${weatherData[0].locationCountry}`;
  const regionName = document.getElementById('regionName');
  regionName.textContent = `${weatherData[0].locationRegion}`;
  const regionTime = document.getElementById('regionTime');
  regionTime.textContent = `${weatherData[0].locationTime}`;

  // rain and humidity
  const rainMM = document.getElementById('rainMM');
  rainMM.textContent = `Rain (mm): ${weatherData[0].locationRainMM}`;
  const humidityPercent = document.getElementById('humidityPercent');
  humidityPercent.textContent = `Humidity: ${weatherData[0].locationHumidityPercent}`;
}

export { firstPageLoad, populateDOM };
