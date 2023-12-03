import { createContext, useContext, useState, useEffect} from "react"
import axios from "axios";

const MainContext = createContext();

export const MainContextProvider = ({children}) => {
    const [cities, setCities] = useState([]);
    const [city, setCity] = useState("Adana");
    const [loadingCities, setLoadingCities] = useState(true);
    const [weather, setWeather] = useState([]);
    const [loadingWeather, setLoadingWeather] = useState(true);
    const [tempUnit, setTempUnit] = useState("C");
    useEffect(() => {
        if(loadingCities){
            axios("https://turkiyeapi.dev/api/v1/provinces")
            .then((res) => setCities(res.data.data))
            .catch((e) => console.log(e))
            .finally(() => setLoadingCities(false));
        }
        if(city !== ""){
            axios(`https://api.weatherapi.com/v1/forecast.json?q=${city}&days=7&hour=12&lang=tr&alerts=no&aqi=no&key=95654aa9f469449b996160624232711`)
            .then((res) => setWeather(res.data.forecast))
            .catch((e) => console.log(e))
            .finally(() => setLoadingWeather(false));
        }
    }, [city]);

    
    
    const values = {
        cities: cities,
        city: city,
        setCity: setCity,
        setCities: setCities,
        loadingCities: loadingCities,
        weather: weather,
        setWeather: setWeather,
        loadingWeather: loadingWeather,
        tempUnit: tempUnit,
        setTempUnit: setTempUnit
    };
    return <MainContext.Provider value={values}>{children}</MainContext.Provider>
}

export const useMainContext = () => useContext(MainContext);
