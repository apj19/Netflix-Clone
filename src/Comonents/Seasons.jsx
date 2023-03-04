import React, { useState , useEffect} from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function Seasons({mid}) {
  const imgsrc="https://image.tmdb.org/t/p/original";
  const tvname=useParams();
  // console.log(tvname.id);
  

    const getNumberofSeasonsUrl=`https://api.themoviedb.org/3/tv/${mid}?api_key=e3ac0b161ed609f338ee40d5c30ed768`;
    const [seasons,setSeasons]= useState([]);
    useEffect(() => {
        async function fetchData(){
  
            const fetchdata= await axios.get(getNumberofSeasonsUrl);
            // setCasts(fetchdata.data.cast.slice(0, 10));
            setSeasons(fetchdata.data.seasons.filter((e)=> e.air_date !=null  ))
            //  console.log(fetchdata.data.seasons.filter((e)=> e.air_date !=null  ));
        }
    
        fetchData();
        
      }, [getNumberofSeasonsUrl]);

  return (
    <div className='text-[white]'>
        <h2 className=' text-[1.5rem] my-2 ml-10 '>Seasons</h2>
        <div className='flex items-center ml-6 '>
        <div className='ml-10  w-full  h-full overflow-x-scroll overflow-y-hidden whitespace-nowrap cursor-pointer
        scrollbar-hide relative '>
            {seasons.map((m,i)=>(

               <div key={i}  className='w-[150px] group  ml-4 inline-block relative'>
              <Link to={`/tv/${tvname.id}/${mid}/season/${m?.season_number}`} > 
              <img className={`mb-2 object-cover group-hover:scale-110 ease-in duration-300 h-52  `} 
              src={`${imgsrc}${ m?.poster_path}`}
              alt={m?.name}
              />
              </Link> 
              <p className='text-[0.8rem] '>{m?.name}</p>
              



              
            </div>
              
            ))}

                 

        </div>
        </div>
        
    </div>
  )
}

export default Seasons