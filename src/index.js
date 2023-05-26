import './style.css';
import { getCurrentWeatherData } from './getWeatherData';

const weather = await getCurrentWeatherData('perth');
console.log(weather);
