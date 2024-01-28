import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import logo from "/images/Vibeify.png"

export default function Card2() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="vibeify"
        height="140"
        image={logo}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Vibeify
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Project that allows music from Spotify to be suggested from an image.
        </Typography>
      </CardContent>
      <CardActions>
        <Button href='https://nataniel-c.github.io/vibeify/' size="small">GO TO</Button>
        <Button href='https://github.com/nataniel-c/vibeify' size="small">GitHub</Button>
      </CardActions>
    </Card>
  );
}