import React, { useState , useEffect} from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function SeasonDetails() {
    const para= useParams();
    // console.log(para);
  const imgsrc="https://image.tmdb.org/t/p/original";
    const seasonDetailsUrl=`https://api.themoviedb.org/3/tv/${para.id}/season/${para.num}?api_key=e3ac0b161ed609f338ee40d5c30ed768`;

    const [seasons,setSeasons]= useState([]);
    
    useEffect(() => {
        async function fetchData(){
  
            const fetchdata= await axios.get(seasonDetailsUrl);
            // setCasts(fetchdata.data.cast.slice(0, 10));
            setSeasons(fetchdata.data);
            console.log(fetchdata.data.episodes);
        }
    
        fetchData();
        
      }, [seasonDetailsUrl]);
  return (
    <div className='px-16 gap-8 pt-16 text-white' >
        <div className='flex '>
        <img className='object-cover h-96' src={`${imgsrc}${seasons?.poster_path}`}alt="Poster"  />
        <p className=' md:text-[2rem] text-red-500 tracking-widest'>placeholder</p>

            
        </div>
            
            <div  className='flex flex-col justify-center items-start gap-8'>
                {/* <p className='text-[0.8rem] md:text-[1rem] tracking-wide'>{seasons?.episodes.length}</p> */}
                <div className='flex flex-col gap-2 mt-12'>
                {seasons.episodes?.map((m,i)=>(
                    <div className='flex '>
                    <img key={i} className='object-contain w-52 ' src={`${imgsrc}${ m?.still_path}`}alt=""  />
                    <p className='text-[0.8rem]'>{m?.overview}</p>

                    </div>
                ))}
                </div>
                
            </div>
        </div>
  )
}

export default SeasonDetails