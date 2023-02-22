import React, { useState } from 'react'
import axiosFetch from './axiosfetch'
import { useEffect } from 'react';
import movieTrailer from 'movie-trailer';


function Row({title,fetchUrl,isNetflix,isTopTen}) {
  
  const imgsrc="https://image.tmdb.org/t/p/w500"
  const [movies,setMovies]=useState([]);
  // const [trailerUrl,setTraileurl]= useState("");
  function truncate(str,n){
    if(!str){
        return "Not Avaliable"
    }else{
        return str.length > n ? str.substr(0,n)+"...":str;
    }
}

  useEffect(() => {
    async function fetchData(){

        const fetchdata= await axiosFetch.get(fetchUrl);

        // console.log(fetchdata.data.results);
        if(isTopTen){
          setMovies(fetchdata.data.results.slice(0, 10));
        }else{
        setMovies(fetchdata.data.results);

        }

    }

    fetchData();


  }, [])
    //  console.log(movies);

    // function imgclicked(event, param){

    //   // console.log(event);
    //   // console.log(param);
    //   if(trailerUrl){
    //     setTraileurl('');
    //   }else{
    //     // console.log(e.target.value);

    //     movieTrailer(param?.title || '')
    //     .then((u)=>{
    //       const urlparam= new URLSearchParams(new URL(u).search);
    //       setTraileurl(urlparam.get('v'));
    //     })
    //     .catch((e)=> console.log(e))
        
    //   }
    // }

    
    return (

    <>
      <h2 className='text-[white] text-[1.5rem] my-2 ml-8 '>{title}</h2>
      <div className='flex items-center ml-6 '>
        <div className='w-full h-full overflow-x-scroll overflow-y-hidden whitespace-nowrap cursor-pointer
        scrollbar-hide relative mb-4'>
            {movies.map((m,i)=>(

              <div key={i}  className='w-[208px] group  ml-4 inline-block relative'>
                <img className={`w-[100%] object-contain ${!isNetflix && "h-[150px]"} group-hover:scale-110 ease-in duration-300   `} onClick={event => imgclicked(event, m)}
                src={`${imgsrc}${isNetflix ? m.poster_path:m.backdrop_path}`}
                alt={m.title}
                />

                {!isNetflix && <div className='absolute  text-[white] bottom-4 right-0 '>{`${truncate((m?.title || m?.name),15)}`}</div> }

                

                {isTopTen && <div className=' absolute  justify-center top-[35px] left-[-10px] w-full h-full hover:scale-90 ease-in duration-300 '>
                <h2 className='text-[5rem] font-extrabold text-[white] '>{i+1}</h2>
                </div>
                }
                
              </div>
            ))}

                 

        </div>

      </div>

    
    </>



  )
}

export default Row


// {!isNetflix && <p className='text-[0.8rem] text-center text-[white] absolute bottom-0'>{m.title || m?.name}</p>}

// <div className=''>
    //         <h2 className='text-[1.5rem] my-8 text-[white]'>{title}</h2>
    //         <div className="flex items-center p-[25px] overflow-y-hidden overflow-x-scroll  scrollbar-hide">

    //           {movies.map((m,i)=>(
                
                  
    //               <img key={i}  onClick={event => imgclicked(event, m)}
    //                   src={`${imgsrc}${isNetflix ? m.poster_path:m.backdrop_path}`} 
    //                   alt={m.title} className={` w-[100%] h-[150px] ease-in-out duration-300 mr-[20px] hover:scale-110 ${isNetflix && "h-[250px]"} hover:scale-110 block`}/> 
                  
                  
    //           ))}
            
              
    //         </div> 
            
        

    //       {/* {trailerUrl && <iframe className='w-full h-[300px]'
              
    //           src={`https://www.youtube.com/embed/${trailerUrl}`}
              
    //           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //           allowFullScreen
    //           title="Embedded youtube"
              
    //         />}   */}
    
    // </div>