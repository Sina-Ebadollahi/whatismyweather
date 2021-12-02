
// hooks
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router'
import UseFetchGET from '../../Hooks/UseFetchGET';
// style
import './Detail.css'


export default function Detail() {
    const { city } = useParams();
    console.log(city);
    const { data, error, waiting} = UseFetchGET(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3ddbbe7ffc125518df10531e0a02e5d2`)
    console.log(data);
    const [backgroundImg, setBackgroundImg] = useState(null); 
    useEffect(() => {
        if(data){
            switch(data.weather[0].main){
                case 'Clouds': setBackgroundImg('../../Assets/DisplayPage/cloudy.jpg')
                break;
                case 'Sunny' : setBackgroundImg('../../Assets/DisplayPage/sunny.jpg');
                break;
                case 'Snowy' : setBackgroundImg('../../Assets/DisplayPage/snowy.jpg');
                break;
                case 'Rainy' : setBackgroundImg('../../Assets/DisplayPage/rainy.jpg');
                break;
                default:
                    setBackgroundImg(null);
            }
        }
    },[data])
    console.log(backgroundImg);
    return (
        <div style={{backgroundImage: `url(${backgroundImg})`}}>
            {data && <h1>{data.weather[0].main}</h1>}
        </div>
    )
}
