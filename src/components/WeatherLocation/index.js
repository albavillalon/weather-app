import React, { Component } from 'react';
import transformWeather from '../../services/transformWeather';
import { api_weather } from '../../constants/api_url';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import { SUN } from './../../constants/weather';

const data = {
    temperature: 6,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
}

class WeatherLocation extends Component {
    constructor() {
        super();
        this.state = {
            city: 'Buenos Aires',
            data
        }
    }
    

    handleUpdateClick = () => {
        fetch(api_weather).then ( resolve => {
            return resolve.json();
        }).then( data => {
            const newWeather = transformWeather(data);
            this.setState({
                data: newWeather
            });
        })
    }
    render () {
        const { city, data } = this.state;
        return(
            <div className="weatherLocationContainer">
                <Location city={city} />
                <WeatherData 
                    data={data}
                />
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}
    


export default WeatherLocation;