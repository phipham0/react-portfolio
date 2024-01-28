import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import logo from "/images/weather.png"

export default function Card5() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="weather"
        height="140"
        image={logo}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Weather Forecast
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Weather Forecast app that predicts the weather for a selected city
        </Typography>
      </CardContent>
      <CardActions>
        <Button href="https://phipham0.github.io/challenge-6-weather-dashboard/" size="small">GO TO</Button>
        <Button href="https://github.com/phipham0/challenge-6-weather-dashboard" size="small">GitHub</Button>
      </CardActions>
    </Card>
  );
}