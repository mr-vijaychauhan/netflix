'use client'

import Image from "next/image";
import {FaHeart} from 'react-icons/fa'
import Request from '@/app/Request'
import placeholder from '../../../assets/images/IN-en-20230710-popsignuptwoweeks-perspective_alpha_website_large.jpg'
import { useState } from "react";



const MovieCard = ({id,title,poster}) => {
const [error, setError] = useState(false);
const src= Request.imagePath + poster;
  return (
    <>
         <div className="movieCard w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] relative inline-block p-2 cursor-pointer">

            <Image className="w-full h-full" 
            src={!error ? src : placeholder}
            width={240} 
            height={164} 
            alt={title}  
            onError={() => setError(true)} />

            <div className="overlay w-full h-full absolute top-0 right-0 hover:bg-black/80 opacity-0 hover:opacity-100">
                <p className="flex items-center justify-center text-center whitespace-normal text-xs md:text-sm font-bold h-full">{title}</p>
                <p className="absolute top-4 left-4 text-gray-400"><FaHeart/></p>
            </div>
        </div>
</>
  )
}

export default MovieCard