import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import logo from "/images/quiz.png"

export default function Card6() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="quiz"
        height="140"
        image={logo}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Code Quiz
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Simple quiz that ask multiple questions and tallies up a score
        </Typography>
      </CardContent>
      <CardActions>
        <Button href="https://phipham0.github.io/challenge-4-code-quiz/" size="small">GO TO</Button>
        <Button href="https://github.com/phipham0/challenge-4-code-quiz" size="small">GitHub</Button>
      </CardActions>
    </Card>
  );
}