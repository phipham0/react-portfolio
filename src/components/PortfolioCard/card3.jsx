import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import logo from "/images/fighting.jpeg"

export default function Card3() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="game"
        height="140"
        image={logo}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          StrongHorns
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Fighting game I made with some teammates
        </Typography>
      </CardContent>
      <CardActions>
        <Button href="https://jurxage.itch.io/strong-horns" size="small">GO TO</Button>
        <Button href="https://github.com/Juxboop/StrongHorns" size="small">GitHub</Button>
      </CardActions>
    </Card>
  );
}