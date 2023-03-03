import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import Cast from './Cast';
import Details from './Details';
import geners from './generelist';
import Row from '../Row';

function MovieDetails() {
    const imgsrc="https://image.tmdb.org/t/p/original";
    const {id}=useParams();
    const obj= useLocation();
    const mediatype=obj.state.mtype;
    const details=obj.state.data;
    const recommandationsUrl=`/${mediatype}/${details.id}/similar?api_key=e3ac0b161ed609f338ee40d5c30ed768`;

    // console.log(obj.state);
    // function getgeners(id){
    //     return geners.find((e)=> e.id == id);
    // }
  return (
    // <div className=' text-white'>
    // {/* <p>{obj.state.id}</p>
    // <p>{obj.state.title}</p> */}
    // {/* Banner */}
    // <div className={` mb-8 w-[100%]  bg-center bg-cover h-[450px] pt-[50px]  object-cover  flex flex-col justify-center items-start  text-[white] relative`} 
    //     style={{backgroundImage: `url(
    //     ${imgsrc}${details?.backdrop_path || details?.poster_path})`}}>
    //         <div className='w-full h-full absolute top-0 bg-gradient-to-t from-[#111]'>
        
    //         </div>

    // </div>
    // <div className='px-16 flex gap-8' >
    //         <img className='object-cover h-96' src={`${imgsrc}${details?.poster_path || details?.backdrop_path}`}alt="Poster"  />

    //         <div  className='flex flex-col justify-center items-start gap-8'>
    //             <p className=' md:text-[2rem] text-red-500 tracking-widest'>{details?.title || details?.name}</p>
    //             <p className='text-[0.8rem] md:text-[1rem] tracking-wide'>{details?.overview}</p>
    //             <div className='flex gap-2'>
    //             {details.genre_ids?.map((g)=>(
    //                 <button className='p-2 bg-slate-700 rounded' disabled="disabled">
    //                     {getgeners(g)?.name}</button>
    //             ))}
    //             </div>
                
    //         </div>
    //     </div>
    // <p>{mediatype}</p>
    // <p>{details.id}</p>

    // </div>
    <>
    <Details details={details}/>
    <Cast mtype={mediatype} mid={details.id}/>
    <Row title={"Recommandations"} fetchUrl={recommandationsUrl} 
        mediatype={"movie"}  />
    

    
    

    </>
  )
}

export default MovieDetails