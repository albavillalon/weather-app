import React from 'react';
import WeatherIcons from 'react-weathericons';
import {
    CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY,
} from '../../../constants/weather';
import PropTypes from 'prop-types';
import './styles.css';
const icons = {
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy"
};
const getWeatherIcon = (weatherState) => {
    const icon = icons[weatherState];
    const sizeIcon = "4x";
    if (icon)
        return <WeatherIcons name={icon} className="wicon" size={sizeIcon} />;
    else
        return <WeatherIcons name="day-sunny" className="wicon" size={sizeIcon} />;
}
const WeatherTemperature = ({ temperature, weatherState}) => (
    <div className="weatherTemperatureContainer"> 
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature">{`${temperature}`}</span>
        
        <span className="temperatureType">{`ºC`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;