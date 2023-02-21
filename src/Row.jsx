import React, { useState } from 'react'
import axiosFetch from './axiosfetch'
import { useEffect } from 'react';
import movieTrailer from 'movie-trailer';


function Row({title,fetchUrl,isNetflix}) {
  
  const imgsrc="https://image.tmdb.org/t/p/original"
  const [movies,setMovies]=useState([]);
  const [trailerUrl,setTraileurl]= useState("");


  useEffect(() => {
    async function fetchData(){

        const fetchdata= await axiosFetch.get(fetchUrl);

        // console.log(fetchdata.data.results);
        setMovies(fetchdata.data.results);

    }

    fetchData();


  }, [])
    //  console.log(movies);

    function imgclicked(event, param){

      // console.log(event);
      // console.log(param);
      if(trailerUrl){
        setTraileurl('');
      }else{
        // console.log(e.target.value);

        movieTrailer(param?.title || '')
        .then((u)=>{
          const urlparam= new URLSearchParams(new URL(u).search);
          setTraileurl(urlparam.get('v'));
        })
        .catch((e)=> console.log(e))
        
      }
    }

    
    return (

    <div className='flex flex-col ml-[20px] text-[white] '>
        <h2 className='text-[1.5rem]'>{title}</h2>
        <div className="flex overflow-y-hidden overflow-x-scroll p-[20px] scrollbar-hide ">
        {movies.map((m,i)=>{
              return <img key={i}  onClick={event => imgclicked(event, m)}
              src={`${imgsrc}${isNetflix ? m.poster_path:m.backdrop_path}`} 
            alt={m.title} className={`object-contain w-[100%] max-h-[100px] ease-in-out duration-300 mr-[20px] hover:scale-110 ${isNetflix && "max-h-[250px]"}`}/>
        })}

        </div> 
        
        

          {trailerUrl && <iframe className='w-full h-[300px]'
              
              src={`https://www.youtube.com/embed/${trailerUrl}`}
              
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
              
            />}  

            
    
    
    </div>
  )
}

export default Row