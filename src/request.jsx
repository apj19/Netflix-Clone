const API_KEY="e3ac0b161ed609f338ee40d5c30ed768";


 const requestsMovies={
   fetchTrending: `/trending/movie/week?api_key=${API_KEY}&language=en-US`,
   fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`, 
   fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`, 
   fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`, 
   fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,  
   fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,  
   fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,  
   fetchDocumentries: `/discover/movie?api_key=${API_KEY}&with_genres=99`, 
   fetchTopTen:`/movie/popular?api_key=${API_KEY}`,
   fetchAnime: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
   fetchScifi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
}

 const requestsTv={
   fetchTrending: `/trending/tv/week?api_key=${API_KEY}`,
   fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`, 
   fetchTopRated: `/tv/top_rated?api_key=${API_KEY}&language=en-US`, 
   fetchActionMovies: `/discover/tv?api_key=${API_KEY}&with_genres=28`, 
   fetchComedyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=35`,  
   fetchHorrorMovies: `/discover/tv?api_key=${API_KEY}&with_genres=27`,  
   fetchRomanceMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,  
   fetchDocumentries: `/discover/tv?api_key=${API_KEY}&with_genres=99`, 
   fetchTopTen:`/tv/popular?api_key=${API_KEY}`,
   fetchAnime: `/discover/tv?api_key=${API_KEY}&with_genres=16`,
   fetchScifi: `/discover/tv?api_key=${API_KEY}&with_genres=10765`,
}

export {  requestsMovies, requestsTv }

