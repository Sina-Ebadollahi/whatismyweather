
// hooks
import { useEffect, useState } from 'react';
import { useParams } from 'react-router'
import UseFetchGET from '../../Hooks/UseFetchGET';
// style
import './Detail.css'

// Auth key
import key from '../../Assets/key';
// components
import Humidity from '../../Components/Humidity/Humidity';
import Coordination from '../../Components/Coordination/Coordination';
export default function Detail() {
    const { city } = useParams();
    console.log(city);
    const { data, error, waiting} = UseFetchGET(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
    console.log(data);
    const [backgroundImg, setBackgroundImg] = useState(null); 
    useEffect(() => {
        if(data){
            switch(data.weather[0].main){
                case 'Clouds': setBackgroundImg('Clouds')
                break;
                case 'Clear' : setBackgroundImg('Clear');
                break;
                case 'Snowy' : setBackgroundImg('Snowy');
                break;
                case 'Rainy' : setBackgroundImg('Rainy');
                break;
                default:
                    setBackgroundImg(null);
            }
        }
    },[data])
    console.log(backgroundImg);
    return (
        <div className={`detail-container ${backgroundImg}`}>
            {data &&
            <div className="layout-container">
                <div className="div-cityName">
                    <h1>{city}</h1>
                </div>
                <div className="div-props">
                <Humidity data={data} city={city}/>
                <Coordination data={data} city={city}/>
                </div>
                
            </div>

            }
        </div>
    )
}
