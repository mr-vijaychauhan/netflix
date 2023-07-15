"use client"

import { useRef } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, rowID,movies }) => {

  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 700;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 700;
    }
  };

  const movieInfo = movies.results;

/*   const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  
  const slideRight = () => {
    slider.scrollLeft = slider.scrollLeft + 500;
  }; */


  return (
    <>
      <h1 className="text-white font-bold md:text-xl p-4">{title} </h1>
      <div className="relative flex items-center group">
    
        <MdChevronLeft
          className="bg-white rounded-full text-black absolute left-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
          onClick={slideLeft}
        />
        <div
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth no-scrollbar relative touch-auto transition-all"
          id={"slider" + rowID}
          ref={sliderRef}
          // style={{ scrollBehavior: "smooth", overflowScrolling: "touch" }}
        >
          {movieInfo.map(({ id, original_title, name,backdrop_path }) => (
            <MovieCard key={id} id={id} title={original_title?original_title:name} poster={backdrop_path} />
          ))}
        </div>
        <MdChevronRight
          className="bg-white rounded-full text-black absolute right-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
          onClick={slideRight}
        />
      </div>
    </>
  );
};

export default Row;
