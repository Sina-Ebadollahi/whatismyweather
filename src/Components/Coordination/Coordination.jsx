
import './Coordination.css'


export default function Coordination({data, city}) {
    return (
        <div className="coordination-div">
            <div>
                <h1>Coordination</h1>
            <h3>lon : {data.coord.lon}</h3>
            <h3>lat : {data.coord.lat}</h3>
            </div>
            <div>
                <h1>Wind</h1>
                <h3>speed : {data.wind.speed}</h3>
                <h3>degree : {data.wind.deg}</h3>
            </div>
        </div>
    )
}
