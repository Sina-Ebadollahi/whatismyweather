// style
import './Home.css'

// components
import CountriesWeather from '../../Components/CountriesWeather/CountriesWeather'
//assets
import { iranCities } from '../../Assets/data'
// transition
import Fade from 'react-reveal/Fade'
// hooks
import UseTheme from '../../Hooks/UseTheme'
export default function Home() {
    const { theme } = UseTheme();
    return (
        <div className={`Home-page ${theme === 'dark' ? 'dark' : ''}`}>
            <Fade bottom>
                <div className="city-container">
                    <CountriesWeather city={iranCities[0]}/>
                    <CountriesWeather city={iranCities[1]}/>
                    <CountriesWeather city={iranCities[2]}/>
                    <CountriesWeather city={iranCities[3]}/>
                    <CountriesWeather city={iranCities[4]}/>
                    <CountriesWeather city={iranCities[5]}/>
                    <CountriesWeather city={iranCities[6]}/>
                    <CountriesWeather city={iranCities[7]}/>
                </div>
            </Fade>
        </div>
    )
}
