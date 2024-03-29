import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [darkNav, setDarkNav] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  async function searchApiCall(searchvalue) {
    const searchData = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=e3ac0b161ed609f338ee40d5c30ed768&&query=${searchvalue}`
    );

    let dataArray = searchData.data.results;
    if (searchData.data.results.length == 0) {
      setSearchValue("Not Found......");
      // console.log("notfound");
    } else if (searchData.data.results[0].media_type == "tv") {
      let filterresult = dataArray.filter((m) => m.backdrop_path != null);
      let result = filterresult[0];

      // let result = searchData.data.results[0];

      // console.log(result);
      let path = `tv/${result?.name || result?.original_name}`;
      let stateobj = { mtype: "tv", data: result };
      navigate(`${path}`, { state: stateobj });

      // console.log("It is a tv serise");
    } else if (searchData.data.results[0].media_type == "movie") {
      let filterresult = dataArray.filter((m) => m.backdrop_path != null);
      let result = filterresult[0];
      // let result = searchData.data.results[0];
      // console.log(result);
      let path = `movie/${result?.name || result?.original_title}`;
      let stateobj = { mtype: "movie", data: result };
      navigate(`${path}`, { state: stateobj });
      // console.log("It is a Movie");
    } else {
      setSearchValue("Not Found.....");

      // console.log("notfound");
    }
  }

  function handleSubmitSearch() {
    if (searchValue == "") {
      setSearchValue("Please enter Value");
    } else {
      let searchedField = searchValue;
      setSearchValue("");
      // console.log(searchedField);
      searchApiCall(searchedField);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setDarkNav(true);
      } else {
        setDarkNav(false);
      }
    });

    return () => {
      // window.removeEventListener('scroll');
    };
  }, []);

  return (
    <div
      className={` px-8 py-4 fixed top-0 w-[100%] h-[60px] text-[white]  ${
        darkNav ? "bg-[#111]" : "bg-transparent"
      } z-10 flex flex-col md:flex-row justify-between items-center ease-in-out duration-300 `}
    >
      <div className="flex gap-4 md:gap-8 justify-center items-center">
        <p>
          <Link to="/">
            <img
              className="w-16 md:w-28 md:object-contain "
              src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
              alt="netflix logo"
            />
          </Link>
        </p>

        <p className="text-[0.8rem] md:text-[1.2rem] ml-4">
          <Link to="/movie">Movies</Link>
        </p>
        <p className="">
          <Link to="/tv">Tv</Link>
        </p>
      </div>

      {/* <a className='' href="https://github.com/apj19/Netflix-Clone" target="_blank">
                <svg className="w-[1.5rem] md:w-[2rem] hover:fill-[#38bdf8] fill-[white] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"/></svg>


        </a> */}
      <div className="flex mt-4 md:mt-0 gap-2 justify-center ">
        <input
          type="text"
          className="border rounded-md bg-transparent  text-red-500"
          placeholder="Search...."
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);

            // console.log(searchValue);
          }}
        />
        <button
          onClick={handleSubmitSearch}
          className="rounded-md bg-red-600 px-2 py-1 text-base font-semibold leading-7 text-white hover:bg-red-500"
        >
          <i className="fa-solid fa-magnifying-glass text-white "></i>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
