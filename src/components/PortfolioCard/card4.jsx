import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import logo from "/images/note-taker.png"

export default function Card3() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="note-taker"
        height="140"
        image={logo}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Notetaker
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Simple Notetaking app
        </Typography>
      </CardContent>
      <CardActions>
        <Button href="https://floating-fortress-84891-ba6e7b5ee5a9.herokuapp.com/" size="small">GO TO</Button>
        <Button href="https://github.com/phipham0/challenge-11-notetaker" size="small">GitHub</Button>
      </CardActions>
    </Card>
  );
}