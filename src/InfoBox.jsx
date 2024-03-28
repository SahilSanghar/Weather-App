import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import './InfoBox.css'

const InfoBox = ({info}) => {

    const INIT_URL = "https://th.bing.com/th/id/OIP.TCuAlA7gEQqtmknj4tTpoQHaDc?rs=1&pid=ImgDetMain"
    const COLD = "https://getwallpapers.com/wallpaper/full/c/5/3/1173359-gorgerous-cold-weather-wallpaper-2560x1600-windows.jpg"
    const HOT = "https://th.bing.com/th/id/R.ebadc44231bd8bd99735cd115014615b?rik=Wk96mFZAv%2bQGoA&riu=http%3a%2f%2fi.huffpost.com%2fgen%2f1080582%2fimages%2fo-DC-WEATHER-HEAT-facebook.jpg&ehk=SjzbU%2fnxCDGUeuvusKispiYXkMUF%2bK0xIIaYDOhaZcU%3d&risl=&pid=ImgRaw&r=0"
    const RAIN = "https://th.bing.com/th/id/R.6b97ac7cd281af25f65c3c88f620fe82?rik=rQWRf34roiL6aw&pid=ImgRaw&r=0"

    const coldImageUrl = COLD.toString();
    const hotImageUrl = HOT.toString();
    const rainImageUrl = RAIN.toString();

return (
    <div className='info-box'>
        <div className="card_info">
        <Card sx={{ maxWidth: 345 }}>
    <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 
            ? rainImageUrl
            : info.temp > 15
            ? hotImageUrl 
            : coldImageUrl}
        title="green iguana"
    />
    <CardContent>
        <Typography gutterBottom variant="h5" component="span">
            {info.city} {info.humidity > 80 
                ? <ThunderstormIcon/>
                : info.temp > 15
                ? <WbSunnyIcon /> 
                : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary">
                Temperature: {info.temp}&deg;C <br /><br />
                Humidity: {info.humidity} <br /><br />
                Min Temp: {info.tempMin}&deg;C <br /><br />
                Max Temp: {info.tempMax}&deg;C <br /><br />
                The weather can be described as <i>{info.weather} 
                <br /> and feels like {info.feelslike}&deg;C</i>
        </Typography>
    </CardContent>
    </Card>
    </div>
    </div>
)
}

export default InfoBox