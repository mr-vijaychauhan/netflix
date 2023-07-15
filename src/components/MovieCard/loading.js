import {FaHeart} from 'react-icons/fa'

const loading = () => {
  return (
    <>
         <div className="movieCard w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] relative inline-block p-2 cursor-pointer">


            <div className="w-full h-full bg-red-700">fdfsdfsdfsdfsdf</div>

            <div className="overlay w-full h-full absolute top-0 right-0 hover:bg-black/80 opacity-0 hover:opacity-100">
                <p className="flex items-center justify-center whitespace-normal text-xs md:text-sm font-bold h-full">Title Here</p>
                <p className="absolute top-4 left-4 text-gray-400"><FaHeart/></p>
            </div>
        </div>
</>
  )
}

export default loading