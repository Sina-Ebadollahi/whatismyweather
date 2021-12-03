



export default function Humidity({data, city}) {

    return (
        <div className="humidity-div">
            <h2>weather status : {data.weather[0].description}</h2>
            <h2>Humidiy : {data.main.humidity}</h2>
            <h3>Pressure : {data.main.pressure}</h3>
            
        </div>
    )
}
