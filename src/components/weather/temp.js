import React, {useEffect, useState} from 'react'
import './style.css'


const Temp = () => {

    const [searchValue, setSearchValue] = useState("moradabad");
    const [temperature, setTemperature] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    // const

    const getWeatherInfo = async() => {
        try {
            let url =  `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=dee267438fab513fee97e195987986f5`
            let res = await fetch(url);
            let data = await res.json();
            const {temp} = data.main;
            setTemperature(temp);
            setCity(data.name);
            setCountry(data.sys.country)
            console.log(data);

        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getWeatherInfo();
    }, [])

    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type="search"
                        placeholder='Search...'
                        autoFocus
                        id='search'
                        className='searchTerm'
                        value={searchValue}
                        onChange={(event)=>setSearchValue(event.target.value)} />
                    <button className='searchButton' type='button' onClick={getWeatherInfo}>Search</button>
                </div>
            </div>
            <article className='widget'>
                <div className="weatherIcon">
                    <i className={"wi wi-day-sunny"}></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temperature}&deg;</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">Sunny</div>
                        <div className="place">{city}, {country}</div>
                    </div>
                </div>
                <div className="date">{new Date().toLocaleString()}</div>
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p><i className={"wi wi-sunset"}></i></p>
                            <p className=''>
                                19:19 PM <br />
                                Sunset
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p><i className={"wi wi-humidity"}></i></p>
                            <p className=''>
                                19:19 PM <br />
                                Sunset
                            </p>
                        </div>
                    </div>
                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p><i className={"wi wi-sunset"}></i></p>
                            <p className=''>
                                19:19 PM <br />
                                Pressure
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p><i className={"wi wi-strong-wind"}></i></p>
                            <p className=''>
                                19:19 PM <br />
                                Speed
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default Temp