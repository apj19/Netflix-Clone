import React, { useState }  from 'react';
import axios from 'axios';
import { useEffect } from 'react';

function Movies({movieName}) {
    // console.log(movieName);
    const [moviedata,setMovieData]=useState({});

    useEffect(() => {
      
        async function fetchMovieData(movie){

            const fetchdata= await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=d3d1dede&t=${movie}`);
            
           if(fetchdata.status==200){
            // console.log(fetchdata.data.Title);
            setMovieData(fetchdata.data);
            
           }else{
            console.log("Service not Available");
           }

        }

        fetchMovieData(movieName);
        // console.log(moviedata);

    }, [])
    
  return (
    <div className=' border rounded px-8 py-8 text-[white] bg-slate-600 backdrop-blur-none '>
        
        <div className='grid grid-cols-2 '>

        <div >
            <img className='h-40' src={`${moviedata.Poster}`} alt="Not Found"  />

        </div>

        <div className='flex flex-col justify-center items-center'>
            <p className='text-[1.5rem] uppercase'>{moviedata.Title}</p>
            <div className='flex justify-center items-center gap-2'>
            <svg className='w-4 h-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
            <p>{moviedata.imdbRating}</p>
            </div>

            <div className='flex justify-center items-center gap-2'>
                <p>{moviedata.Year}</p>
                <p>{moviedata.Runtime}</p>
            </div>
            
        </div>

        </div>
        
        <div>
            <p>Plot:</p>
            <p className='text-[0.8rem] w-[100px]'>{moviedata.Plot}</p>
        </div>
        <div>
            <p>Cast:</p>
            <p className='text-[0.8rem]'>{moviedata.Actors}</p>
        </div>

    </div>
  )
}

export default Movies