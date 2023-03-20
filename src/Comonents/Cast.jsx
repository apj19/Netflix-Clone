import React, { useState, useEffect } from "react";
import axios from "axios";

function Cast({ mtype, mid }) {
  const [casts, setCasts] = useState([]);
  const imgsrc = "https://image.tmdb.org/t/p/original";

  const getcastUrl = `https://api.themoviedb.org/3/${mtype}/${mid}/credits?api_key=e3ac0b161ed609f338ee40d5c30ed768`;
  const imgnotfound = "/wwemzKWzjKYJFfCeiB57q3r4Bcm.png";
  function truncate(str, n) {
    if (!str) {
      return "Not Avaliable";
    } else {
      return str.length > n ? str.substr(0, n) + "..." : str;
    }
  }

  useEffect(() => {
    async function fetchData() {
      const fetchdata = await axios.get(getcastUrl);
      setCasts(fetchdata.data.cast.slice(0, 10));
      // console.log(fetchdata.data.cast.slice(0, 5));
    }

    fetchData();
  }, [getcastUrl]);

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
    <div className="text-[white]">
      <h2 className=" text-[1.5rem] my-2 ml-10 ">Cast</h2>
      <div className="flex items-center mx-6 gap-2 ">
        <i
          onClick={(event) => leftArrow(event)}
          className="fa-solid fa-chevron-left text-white cursor-pointer hidden md:block"
        ></i>
        <div
          className="ml-6  w-full  h-full overflow-x-scroll overflow-y-hidden whitespace-nowrap cursor-pointer
        scrollbar-hide relative "
        >
          {casts.map((m, i) => (
            <div
              key={m.id}
              className="w-[150px] group  ml-4 inline-block relative"
            >
              <img
                className={`mb-2 object-cover group-hover:scale-110 ease-in duration-300 h-48  `}
                src={`${imgsrc}${
                  m?.profile_path ? m?.profile_path : imgnotfound
                }`}
                alt={m?.name}
              />
              <p className="text-[0.8rem] ">{truncate(m?.character, 15)}</p>
              <p className="text-[0.7rem]">{truncate(m?.name, 15)}</p>
            </div>
          ))}
        </div>
        <i
          onClick={(event) => rightArrow(event)}
          className="fa-solid fa-chevron-right cursor-pointer text-white hidden md:block"
        ></i>
      </div>
      {/* <p>{mid}</p> */}
    </div>
  );
}

export default Cast;
