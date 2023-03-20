import React, { useState } from "react";
import axiosFetch from "./axiosfetch";
import { useEffect } from "react";
// import Movies from './Comonents/Movies';
import { Link } from "react-router-dom";

// import movieTrailer from 'movie-trailer';

function Row({ title, fetchUrl, isNetflix, isTopTen, mediatype }) {
  const imgsrc = "https://image.tmdb.org/t/p/w500";
  const [movies, setMovies] = useState([]);

  function truncate(str, n) {
    if (!str) {
      return "Not Avaliable";
    } else {
      return str.length > n ? str.substr(0, n) + "..." : str;
    }
  }

  useEffect(() => {
    async function fetchData() {
      const fetchdata = await axiosFetch.get(fetchUrl);

      //  console.log(fetchdata.data.results.filter(
      //   (e)=> e.backdrop_path != null
      //  ));
      const filtereddata = fetchdata.data.results.filter(
        (e) => e.backdrop_path != null
      );
      if (isTopTen) {
        setMovies(filtereddata.slice(0, 10));
      } else {
        setMovies(filtereddata);
      }
    }

    fetchData();
  }, [fetchUrl]);

  function leftArrow(e) {
    const slide = e.target.nextSibling;
    // console.log(e.target.nextSibling);
    slide.scrollLeft += 220;
  }
  function rightArrow(e) {
    const slide = e.target.previousSibling;
    // console.log(e.target.previousSibling);
    // console.log(e.target.parentElement);
    slide.scrollLeft -= 220;
  }

  return (
    <>
      <h2 className="text-[white] text-[1.5rem] my-2 ml-8 ">{title}</h2>
      <div className="flex items-center mx-6 gap-4 ">
        {/* <p onClick={event =>leftArrow(event) } className='text-white cursor-pointer hidden md:block' >a</p> */}

        <i
          onClick={(event) => leftArrow(event)}
          className="fa-solid fa-chevron-left text-white cursor-pointer hidden md:block"
        ></i>

        <div
          className="w-full h-full overflow-x-scroll overflow-y-hidden whitespace-nowrap cursor-pointer
        scrollbar-hide relative "
        >
          {movies.map((m, i) => (
            <div
              key={m.id}
              className="w-[208px] group  ml-4 inline-block relative"
            >
              <Link
                to={`/${mediatype}/${m?.title || m?.name}`}
                state={{ mtype: `${mediatype}`, data: m }}
              >
                <img
                  className={`w-[100%] object-contain ${
                    !isNetflix && "h-[150px]"
                  } group-hover:scale-110 ease-in duration-300   `}
                  src={`${imgsrc}${
                    isNetflix ? m.poster_path : m.backdrop_path
                  }`}
                  alt={m.title}
                />

                {!isNetflix && (
                  <div className="absolute  text-[white] bottom-4 right-0 ">{`${truncate(
                    m?.title || m?.name,
                    15
                  )}`}</div>
                )}

                {isTopTen && (
                  <div className=" absolute  justify-center top-[35px] left-[-10px]hover:scale-90 ease-in duration-300 ">
                    <h2 className="text-[5rem] font-extrabold text-[white]  ">
                      {i + 1}
                    </h2>
                  </div>
                )}
              </Link>

              {!isNetflix && (
                <div className="absolute  text-[white] bottom-4 right-0 ">{`${truncate(
                  m?.title || m?.name,
                  15
                )}`}</div>
              )}

              {isTopTen && (
                <div className=" absolute  justify-center top-[35px] left-[-10px]hover:scale-90 ease-in duration-300 ">
                  <h2 className="text-[5rem] font-extrabold text-[white]  ">
                    {i + 1}
                  </h2>
                </div>
              )}
            </div>
          ))}
        </div>

        <i
          onClick={(event) => rightArrow(event)}
          className="fa-solid fa-chevron-right cursor-pointer text-white hidden md:block"
        ></i>
      </div>
    </>
  );
}

export default Row;

{
  /* <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-white  cursor-pointer">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg> */
}

// <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-white  cursor-pointer">
//   <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
// </svg>

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

{
  /* showPopUp && <div onClick={popupclicked} className='w-[100%] h-[100%] z-50 fixed top-0 left-0 backdrop-blur-sm transition-all duration-150 ease-in-out
                flex justify-center items-center  '>
                  
                  <Movies movieName={moviedata}/>

                  


                    {/* this div for movies details */
}
