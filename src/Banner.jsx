import React, { useState } from 'react'
import axiosFetch from './axiosfetch'
import { useEffect } from 'react';


function Banner({fetchUrl}) {

    const imgsrc="https://image.tmdb.org/t/p/original";
     
    // movie as  
    // 
    const [movie,setMovie]=useState(["https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"]);

    


    useEffect(() => {

        async function fetchData(){
            const apidata= await axiosFetch.get(fetchUrl);

            const randomNumber= Math.floor(Math.random()*19);
            // console.log(apidata.data.results[randomNumber]);
            setMovie(apidata.data.results[randomNumber]);
            // return apidata;
        }

        fetchData();
      
    }, []);

    // console.log(movie.id);
    // console.log(`${imgsrc}${movie}`);

    function truncate(str,n){
        if(!str){
            return "Not Avaliable"
        }else{
            return str.length > n ? str.substr(0,n)+"...":str;
        }
    }

    
 
 
    return (
    <div  className={` mb-8 w-[100%]  bg-center bg-cover h-[550px] pt-[50px]  object-contain  flex flex-col justify-center items-start text-[white] relative`} 
    style={{backgroundImage: `url(
        ${imgsrc}${movie?.backdrop_path || movie?.poster_path})`}}>
        
        <h1 className=' z-10 pl-16 uppercase text-[2.5rem] '>{movie?.title || movie?.name || movie?.original_name}</h1>

        <div className='pl-16 z-10 '>
            <button className='p-2 mr-8 hover:border   '>Play</button>
            <button className='p-2 mr-8  hover:border  '>My List</button>
        </div>

        <p className=' pl-16 z-[10] max-w-[360px] text-[0.8rem]'>{`${truncate(movie.overview,250)}...`}</p>

        <div className='w-full h-full absolute top-0 bg-gradient-to-r from-[#111]'>
        
        </div>
        


    
    </div>
    
  )
}

export default Banner