import React from 'react';
import Banner from '../Banner';
import {requestsTv} from '../request';
import Row from '../Row'

function Tv() {
    // console.log(requestsTv.fetchTrending);
  return (
    <>
        <Banner fetchUrl={requestsTv.fetchTrending} />
        <Row title={"NETFLIX ORIGINALS"} fetchUrl={requestsTv.fetchNetflixOriginals} isNetflix={true} mediatype={"tv"}
        />
        <Row title={"TOP 10 TV"} fetchUrl={requestsTv.fetchTopTen} isTopTen={true}
        mediatype={"tv"} />
    <Row title={"TRENDING NOW"} fetchUrl={requestsTv.fetchTrending} mediatype={"tv"} />
    <Row title={"ANIME"} fetchUrl={requestsTv.fetchAnime}  mediatype={"tv"}/>
    <Row title={"SCIENCE FICTION"} fetchUrl={requestsTv.fetchScifi} mediatype={"tv"} />
    <Row title={"COMEDY"} fetchUrl={requestsTv.fetchComedyMovies} mediatype={"tv"} />
    </>
  )
}

export default Tv