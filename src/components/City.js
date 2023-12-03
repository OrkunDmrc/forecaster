import { useMainContext } from "../contexts/MainContext";
import "./City.css";

function City(){
    const {cities, loadingCities, setCity, tempUnit, setTempUnit} = useMainContext();
    const handle = (e) => {
        setCity(e.target.value);
    }
    return (
        <>
            <div id="CityDiv" className="Center">
                <div style={{marginBlock:5}}>
                    <label id="CityLabel" name="city">Şehir:</label>
                    {loadingCities && <span>loading...</span>}
                    {!loadingCities && <select id="CitySelect" name="city" onChange={handle}>
                        {cities.map((c) => (<option value={c.name} key={c.id}>{c.name}</option>))}
                    </select>}
                </div>
                <div style={{marginBlock:5}}>
                    <span>&#8451;</span>
                    <label class="switch" >
                        <input type="checkbox" onClick={() => setTempUnit(tempUnit === "C" ? "F" : "C")}/>
                        <span class="slider round"></span>
                    </label>
                    <span>&#8457;</span>
                </div>
                
            </div>
            
        </>
    );
}

export default City;