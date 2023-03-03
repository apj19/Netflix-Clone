import React from 'react'
import Banner from '../Banner'
import {requestsMovies} from '../request'
import Row from '../Row'


function Movie() {

  // console.log(requestsMovies.fetchTrending);
  return (
    <>
    <Banner fetchUrl={requestsMovies.fetchTrending} />
    <Row title={"TOP 10 MOVIES"} fetchUrl={requestsMovies.fetchTopTen} isTopTen={true}
        mediatype={"movie"} />
    <Row title={"TRENDING NOW"} fetchUrl={requestsMovies.fetchTrending} mediatype={"movie"} />
    <Row title={"ANIME"} fetchUrl={requestsMovies.fetchAnime}  mediatype={"movie"}/>
    <Row title={"SCIENCE FICTION"} fetchUrl={requestsMovies.fetchScifi} mediatype={"movie"} />
    <Row title={"COMEDY"} fetchUrl={requestsMovies.fetchComedyMovies} mediatype={"movie"} />
    
    </>
  )
}

export default Movie