import { Box, Grid } from '@mui/material';
import React, { useContext, useEffect} from 'react'
import {favoriteContext} from "../App"
import FavouritesMoviesCard from '../components/FavouritesMoviesCard';

const Favorite = () => {
  const {favourites, setFavourites}= useContext(favoriteContext)

  useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('favourites-movie')
		);

		if (movieFavourites) {
			setFavourites(movieFavourites);
		}
	}, [setFavourites]);
 
  return (
    <div>
    { 
    <Box sx={{ flexGrow: 1 ,ml:2  }}>
    <Grid container spacing={{ xs: 0, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {favourites.map(movie => (
        <Grid xs={4} sm={4} md={4} key={movie.id}sx={{mb:5}}>
          <FavouritesMoviesCard key={movie.id} movie={movie} />
        </Grid>
      ))}
    </Grid>
  </Box>}
  
  </div>
  )
}

export default Favorite
