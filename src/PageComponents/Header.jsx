import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import axios from 'axios';

export default function ButtonAppBar() {
  const [currentTime, setCurrentTime] = useState("");
  const [weatherData, setWeatherData] = useState({
    temp: null,
    tempMax: null,
    tempMin: null,
    humidity: null,
    description: null,
    icon: null,
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    };

    updateTime();
    const timer = setInterval(updateTime, 60000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      const apiKey = "513adddb0168bd5149e9dc0d91bac7dc";
      const cityName = "seoul";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

      try {
        const response = await axios.get(url);
        const data = response.data;
        setWeatherData({
          temp: Math.round(data.main.temp),
          tempMax: Math.round(data.main.temp_max),
          tempMin: Math.round(data.main.temp_min),
          humidity: data.main.humidity,
          description: data.weather[0].description,
          icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
        });
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="inherit"
        sx={{
          height: 100,
          display: 'flex',
          justifyContent: 'center',
          boxShadow: 'none',
         }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '100%',
            fontWeight:'bold'
          }}
        >
          <Typography
            sx={{
              fontSize: '2.5rem',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              color:'#F2F2F2'
            }}
          >
            LOGO 
          </Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              ml: 'auto',
            }}
          >
            <Box
              sx={{
                background: '#3897f2',
                borderRadius: 100,
                fontSize: '1.4rem',
                fontWeight: 'bold',
                width: '80px',
                color: '#FFFFFF',
                textAlign: 'center',
                lineHeight: '40px',
                height: '40px',
              }}
            >
              {weatherData.temp !== null ? `${weatherData.temp}℃` : "Loading..."}
            </Box>
            <Box
              sx={{
                background: '#000000',
                borderRadius: 100,
                fontSize: '1.4rem',
                fontWeight: 'bold',
                width: '120px',
                color: '#FFFFFF',
                textAlign: 'center',
                lineHeight: '40px',
                height: '40px',
              }}
            >
              {currentTime}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
