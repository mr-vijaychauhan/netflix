

import Image from "next/image"
import { MdPlayArrow } from "react-icons/md";
import Request from '@/app/Request'


const truncateString = (str,num) =>{
    if(str.length>num){
        return str.slice(0,num) + '...';
    }else{
        return str;
    }
}


async function getPopular() {
    const res = await fetch(Request.requestPopular)
    const results = res.json();
    return results
  }

const Hero = async () => {

    const getPopulars = await getPopular(); 
    const movies = getPopulars.results;
    const movie= movies[Math.floor(Math.random() * movies.length)];


  return (
    <div className="container w-full h-[550px]" name="hero">
        <div className="row w-full h-full">
            <div className="overlay absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
            <Image src={Request.imagePath+movie.backdrop_path} className="w-full h-full object-cover" alt={movie.original_title} width={1000} height={550}/>
            <div className="content absolute w-full top-[20%] p-4 md:p-8">
                <h1 className="text-white text-3xl md:text-5xl font-bold">{movie.original_title}</h1>
                <div className="flex buttons my-4">
                        <button className="flex items-center justify-center border bg-white text-black px-4 py-2 font-medium mr-2 border-gray-300">Play
                        <MdPlayArrow />
                        </button>
                
                    <button className="border border-gray-300 px-4 py-2 hover:bg-red-600 hover:border-gray-500">Watch Later</button>
                
                </div>
                <p className="text-gray-400 text-sm">Release Date : {movie.release_date}</p>
                <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 text-sm">
                  {truncateString(movie.overview,100)}
                </p>
            </div>
          
        </div>
    </div>
  )
}

export default Hero