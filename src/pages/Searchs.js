
import {  Box, Grid, Input } from '@mui/material';
import React, { useEffect, useState } from 'react'
//import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import SearchMvCard from '../components/SearchMvCard';



const Searchs = () => {
  const [searched, setSearched] = useState("search")
  const [page] = useState(1)// setPage
  const [searchMovie, setSearchMovie] = useState([])
  //const [setIsError]= useState(false) 
  
  const requestSearch=(value)=>{
    setSearched(value)
  }
  
  const cancelSearch = () => {
    setSearched("")
    requestSearch(searched)
  }
  useEffect(()=>{
    function getBaseUrl(){
      return `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searched}&page=${page}&include_adult=false`}

    async function moviesData() {
      try {
        const { data } = await axios.get(getBaseUrl())
        setSearchMovie(data.results)
        console.log("pages:", data.total_pages, ' :V')
        console.log(data.results)
       
      } catch (error) {
        console.log(error)
        //setIsError(true)
        
      } 
    }
      moviesData()
  },[page, searched])
  return (
  <Box sx={{ display: 'flex' ,flexDirection:"column"  }}>
    <Input
      size="md" 
      value={searched}
      onChange={(searchVal) => setSearched(searchVal.target.value)}
      onCancelSearch={() => cancelSearch()}
      sx={{mb:{md:6,sm:0},mr:{md:15,sm:0}}}
      />

      <Grid container spacing={{ xs: 0, md: 7 }} columns={{ xs: 4, sm: 8, md: 8}}> {searchMovie.map(movie => (
        <Grid ml={{xs:0 ,sm:0,md:10}} xs={4} sm={4} md={3} key={movie.id}sx={{mb:5 ,background: 'linear-gradient(45deg, #003a70 20%, #FF8E53 90%)',borderRadius:3,  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)', marginTop:4}}> 
          <SearchMvCard key={movie.id} movie={movie} />
        </Grid>
         
      ))}
      </Grid>
     
    </Box>
  )
}

export default Searchs
