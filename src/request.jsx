const API_KEY="e3ac0b161ed609f338ee40d5c30ed768";


const requests={
   fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
   fetchNetflixOriginals: `/discover/movie?api_key=${API_KEY}&with_network=213&region=US`, 
   fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`, 
   fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`, 
   fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,  
   fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,  
   fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,  
   fetchDocumentries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,  

}

export default requests;