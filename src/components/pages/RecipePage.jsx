import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { grey } from '@mui/material/colors';

export default function Foodpage() {
  return (
    <Card sx={{
      maxWidth: 1000,
      margin: 'auto', // Это выравнивает по центру горизонтально
      marginTop: '100px',
    }}
    >
      <CardActionArea
        sx={{
          backgroundColor: grey[200],
        }}
      >
        <CardMedia
          component="img"
          height="300"
          image="burger.jpeg"
          alt="green iguana"
        />
        <CardContent sx={{
          backgroundColor: grey[200],
        }}
        >
          <Typography gutterBottom variant="h5" component="div">
          Бургер, время приготовления:1:30

          </Typography>
          <Typography variant="body2" color="text.secondary">
            Очень вкусно Очень вкусно Очень вкусно Очень вкусно Очень вкусно 
            Очень вкусно Очень вкусно Очень вкусно
          </Typography>
          <br />
          <Typography variant="body2" color="text.secondary">
            Ингридиенты
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          backgroundColor: grey[200],
        }}
      >
        <Button size="small" color="primary">
          <FavoriteBorderIcon />
        </Button>
      </CardActions>
    </Card>
  );
}

