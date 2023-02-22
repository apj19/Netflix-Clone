import { useState } from 'react'
import Row from './Row'
import './App.css'
import requests from './request'
import Banner from './Banner'
import Navbar from './Navbar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="  min-w-[375px] max-w-[1440px] bg-[#111] ">
      {/* nav */}
      <Navbar/>

      {/* {banner} */}

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
       <Row title={"DOCUMENTRIES"} fetchUrl={requests.fetchDocumentries} />



    </div>
  )
}

export default App
