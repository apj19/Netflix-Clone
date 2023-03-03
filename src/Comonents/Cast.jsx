import React, { useState , useEffect} from 'react';
import axiosFetch from '../axiosfetch'

function Cast() {

    const [casts,setCasts]=useState([]);

    const getcastUrl= `movie/640146/credits?api_key=e3ac0b161ed609f338ee40d5c30ed768`

    // useEffect(() => {
    //     async function fetchData(){

    //         const fetchdata= await axiosFetch.get(fetchUrl);
    
    
    //     }
    
    //     fetchData();
      
    // }, [])
    
    

  return (
    <>
        <h2 className='text-[white] text-[1.5rem] my-2 ml-8 '>Cast</h2>
    </>
  )
}

export default Cast