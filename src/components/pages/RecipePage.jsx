import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { grey } from '@mui/material/colors';

export default function RecipePage({recipe}) {
  console.log(recipe);
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
          image={recipe.image}
          alt="green iguana"
        />
        <CardContent sx={{
          backgroundColor: grey[200],
        }}
        >
          <Typography gutterBottom variant="h5" component="div">
          {recipe.recipename}

          </Typography>
          <Typography variant="body2" color="text.secondary">
          {`${recipe.description} \n Время готовки: ${recipe.time}`}
          </Typography>
          <br />
          <Typography variant="body2" color="text.secondary">
          {`Время готовки: ${recipe.time}`}
          </Typography>
          <br />
          <Typography variant="body2" color="text.secondary">
         <ul>{`Ингредиенты: ${recipe?.dataValues?.Ingredients?.map(ing=>(
          <li>{ing.ingredientname}</li>
         ))}`}</ul> 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          backgroundColor: grey[200],
        }}
      >
        <Button size="small" color="primary">
          {/* <FavoriteBorderIcon /> */}
        </Button>
      </CardActions>
    </Card>
  );
}

