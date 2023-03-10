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
            // console.log("inside season details");
            // console.log(fetchdata.data.episodes);
        }
    
        fetchData();
        
      }, [seasonDetailsUrl]);
  return (
    <div className='px-16 gap-8 pt-16 text-white' >
        <div className='flex flex-col md:flex-row gap-8 '>
        <img className='object-cover h-80' src={`${imgsrc}${seasons?.poster_path}`}alt="Poster"  />
        <div className='flex flex-col justify-center'>
        <p className=' md:text-[2rem] text-red-500 tracking-widest'>{para.name}</p>
        <p>Season : {seasons.season_number}</p>
        {/* <p>No of Epsiodes : {seasons.episodes.length}</p> */}
        </div>

            
        </div>
            
            <div  className='flex flex-col justify-center items-start gap-8'>
                {/* <p className='text-[0.8rem] md:text-[1rem] tracking-wide'>{seasons?.episodes.length}</p> */}
                <div className='flex flex-col gap-4 mt-12'>
                {seasons.episodes?.map((m,i)=>(
                    <div key={i}  className='flex flex-col md:flex-row gap-4 '>
                    <img className='object-contain w-52 ' src={`${imgsrc}${ m?.still_path}`}alt=""  />
                    <div>
                        <p className='text-red-500 text-[1.3rem]'>{`${i+1}. ${m?.name}`}</p>
                        {m.runtime && <p className='text-[0.8rem]'>{` ${m?.runtime ? m.runtime:0} min`}</p>}

                        <p className='text-[0.8rem]'>{m?.overview}</p>


                    </div>

                    </div>
                ))}
                </div>
                
            </div>
        </div>
  )
}

export default SeasonDetails