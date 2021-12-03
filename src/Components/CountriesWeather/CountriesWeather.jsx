


// style
import './CountriesWeather.css'


//hooks
import UseFetchGET from '../../Hooks/UseFetchGET'
import { useEffect, useState } from 'react'
import UseTheme from '../../Hooks/UseTheme'
import { useNavigate } from 'react-router';

// Auth key
import key from '../../Assets/key';
export default function CountriesWeather({city}) {
    const { theme } = UseTheme();
    const nav = useNavigate();
    const [cityData,setCityData] = useState()
    const {data, error, waiting} = UseFetchGET(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
    useEffect(() => {
        setCityData(data)
    },[data])
    

    function kelvinToCelcius(deg){
        return Math.floor(deg - 273.15);
    }
    function handleClick(){
        nav(`/detail/${city}`)
    }
    return (
        <div onClick={handleClick} className={`weatherCards ${theme === 'dark' ? 'dark' : ''}`}>
            {error && <h1>{error.message}</h1>}
            {waiting && <h1>Loading The Data...</h1>}
            {cityData && 
            <div>
                <h1 style={{textAlign:'start'}}>{cityData.name}</h1>
                <h3>Temp(cel) : {kelvinToCelcius(cityData.main.temp)}</h3>
                <h3>Humidity : {cityData.visibility}</h3>
            </div>}

        </div>
    )
}
