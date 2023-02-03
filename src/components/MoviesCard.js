import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import { favoriteContext } from '../App';

// id={movie.id}
// poster={movie.poster_path}
// title ={movie.title}
// releaseDate={movie.release_date}
// voteAverag={movie.vote_averag}
const styles = {
        cardContent: {
          position: "absolute",
          top:0,
          left:0,
          opacity:0,
          backgroundColor:"#000000b8",
          color:"white",
          height:"100%",
          "&:hover":{
            opacity:1,
            
          }
        },
        cardActionArea:{
            position:"relative",
            height:"500"
        }
      }

export default function MoviesCard({movie}){
    
  const {favourites, setFavourites} = React.useContext(favoriteContext);
  const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};
  const saveToLocalStorage = (items) => {
		localStorage.setItem('favourites-movie', JSON.stringify(items));
	};
  return (
    <Card sx={{ maxWidth:300 ,borderRadius:5 }}>
      <CardActionArea sx={styles.cardActionArea}>
        <CardMedia
          component="img"
          height="500"
          image={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
          alt={movie.title + " image"}
         
        />
         
        <CardContent sx={styles.cardContent} >
          <Typography gutterBottom variant="h5" component="div" >
            {movie.title}
          </Typography>
          <hr />
          <Typography variant="body2" >
            {movie.overview}
          </Typography>
          <Button  sx={{color:"blue", m:"25%"}} onClick={()=>addFavouriteMovie(movie)} >
            add to Favorite
          </Button>
        </CardContent>
        
       
      </CardActionArea>
    </Card>
  );
}