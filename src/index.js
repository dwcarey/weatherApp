import './style.css';
import { getCurrentWeatherData } from './getWeatherData';
import { firstPageLoad } from './DOMcontroller';
import { populateDOM } from './DOMcontroller';

firstPageLoad();

async function logWeather(searchTerm) {
    const weather = await getCurrentWeatherData(searchTerm);
    populateDOM(weather);
}

logWeather('perth');


export { logWeather };