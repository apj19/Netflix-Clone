import React from 'react';
// import requests from '../request'
import Banner from '../Banner'
import Row from '../Row'
import {requestsMovies,requestsTv} from '../request';

function Home() {
  return (
    <>
         <Banner fetchUrl={requestsMovies.fetchTrending} />

        <Row title={"NETFLIX ORIGINALS"} fetchUrl={requestsTv.fetchNetflixOriginals} isNetflix={true} mediatype={"tv"}
        />
        <Row title={"TOP 10 MOVIES"} fetchUrl={requestsMovies.fetchTopTen} isTopTen={true}
        mediatype={"movie"} />
        

        <Row title={"TRENDING NOW"} fetchUrl={requestsMovies.fetchTrending} mediatype={"movie"} />
        <Row title={"TOP 10 TV"} fetchUrl={requestsTv.fetchTopTen} isTopTen={true}
        mediatype={"tv"} />

        <Row title={"SCIENCE FICTION"} fetchUrl={requestsMovies.fetchScifi} mediatype={"movie"} />

        <Row title={"TOP RATED"} fetchUrl={requestsMovies.fetchTopRated} mediatype={"movie"} />
        <Row title={"ACTION"} fetchUrl={requestsMovies.fetchActionMovies} mediatype={"movie"}/>
        <Row title={"COMEDY"} fetchUrl={requestsMovies.fetchComedyMovies} mediatype={"movie"} />
        <Row title={"HORROR"} fetchUrl={requestsMovies.fetchHorrorMovies} mediatype={"movie"} />
        <Row title={"ROMANCE"} fetchUrl={requestsTv.fetchRomanceMovies} mediatype={"tv"} />
        
        <Row title={"ANIME"} fetchUrl={requestsMovies.fetchAnime}  mediatype={"movie"}/>
    </>
  )
}

export default Home