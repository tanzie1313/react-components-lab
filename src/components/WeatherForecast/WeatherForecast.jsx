
import react from 'react';
import './WeatherForecast.jsx';
import WeatherIcon from "../WeatherIcon/WeatherIcon.jsx"
import WeatherData from "../WeatherData/WeatherData.jsx"

const WeatherForecast = ({day, icon, alt, conditions, time}) => {
    return (
     <div className="weather">
        <WeatherIcon icon={icon} alt={alt} />
          <WeatherData day={day} conditions={conditions} time={time} /> 
     </div>
    );
    }
    export default WeatherForecast;