import { useMainContext } from "../contexts/MainContext";
import "./Weather.css";

function Weather(){
    const {weather, loadingWeather, tempUnit} = useMainContext();
    return (
        <>
            <div id="WeatherDays" className="Row Center">
                {loadingWeather && <div className="Center">Loading...</div>}
                {!loadingWeather && weather.forecastday.map((f, i) => (
                    <div id="WeatherDay" className="Column" key={i}>
                        <div>{new Date(f.date).toLocaleDateString('en-EN', {weekday: 'short'})}</div>
                        <div><img src={f.day.condition.icon} width="64" height="64" ></img></div>
                        <div>{f.day.condition.text}</div>
                        {tempUnit === "C" ? <div>{f.day.avgtemp_c} &#8451;</div> : <div>{f.day.avgtemp_f} &#8457;</div> }
                    </div>
                ))}
            </div>
        </>
    );
}

export default Weather;