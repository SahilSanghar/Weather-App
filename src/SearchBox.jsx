import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./SearchBox.css";
import { tr } from '@faker-js/faker';
// import { response } from 'express';

const SearchBox = ({updateInfo}) => {
    let [city, setCity] = useState("");
    const [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "6ef21a928488e4372173778c620714b1";

    let getWeatherInfo = async () => {
        try {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
        let jsonResponse = await response.json();
        // console.log(jsonResponse)

        let result = {
            city: jsonResponse.name,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        }
    
        console.log(result);
        return result;
    } catch(err) {
        throw err
    }
}
    

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try {
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo)
    } catch {
        setError(true)
    }
}

return (
<div className='search-Box'>
    <form onSubmit={handleSubmit}>
        <TextField 
            id="outlined-basic" 
            label="City" 
            variant="outlined" 
            value={city}
            onChange={handleChange}
            required/>

            <br /><br /><br /><br />
        
        <Button  
            variant="contained"
            type="submit">
                Search
        </Button>
        {error && <p style={{color: "red"}}>No such place exists!</p>}
    </form>
</div>
)
}

export default SearchBox