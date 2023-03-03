import React from 'react';
import requests from '../request'
import Banner from '../Banner'
import Row from '../Row'

function Home() {
  return (
    <>
         <Banner fetchUrl={requests.fetchNetflixOriginals} />

        <Row title={"NETFLIX ORIGINALS"} fetchUrl={requests.fetchNetflixOriginals} isNetflix={true}
        />
        <Row title={"TOP 10 MOVIES"} fetchUrl={requests.fetchTopTen} isTopTen={true} />
        <Row title={"TRENDING NOW"} fetchUrl={requests.fetchTrending} />
        <Row title={"TOP RATED"} fetchUrl={requests.fetchTopRated} />
        <Row title={"ACTION"} fetchUrl={requests.fetchActionMovies} />
        <Row title={"COMEDY"} fetchUrl={requests.fetchComedyMovies} />
        <Row title={"HORROR"} fetchUrl={requests.fetchHorrorMovies} />
        <Row title={"ROMANCE"} fetchUrl={requests.fetchRomanceMovies} />
        {/* <Row title={"DOCUMENTRIES"} fetchUrl={requests.fetchDocumentries} /> */}
        <Row title={"ANIME"} fetchUrl={requests.fetchAnime} />
        <Row title={"SCIENCE FICTION"} fetchUrl={requests.fetchScifi} />
    </>
  )
}

export default Home