import Link from 'next/link'
import {FaSortDown} from 'react-icons/fa'
import Request from '@/app/Request'

async function getAllMoviesGenres() {
  const res = await fetch(Request.requestMoviesGenres,
    {
      cache: "no-cache"
    })
  const results = res.json();
  return results
}

async function getAllTvShowGenres() {
  const res = await fetch(Request.requestTvShowsGenres,
    {
      cache: "no-cache"
    })
  const results = res.json();
  return results
}

const Navbar = async () => {

  
  const moviegenres = await getAllMoviesGenres(); 
  const tvgenres = await getAllTvShowGenres(); 

  const moviesAllGenres=moviegenres.genres;
  const tvAllGenres=tvgenres.genres;

  return (
    <div
      className="w-full flex items-center justify-between p-4 z-[100] absolute"
      name="navbar"
    >
      
      <Link href={'/'} ><h1 className="text-4xl font-medium text-red-500">NETFLIX</h1></Link>
      <div className=''>
        <ul className='relative hidden lg:flex  items-center justify-center gap-4'>
          <li className='hover:bg-red-700 hover:rounded-3xl hover:text-white hover:px-3 hover:py-2 transition-all'>Home</li>
          <li className='group '><a href="#" className='flex justify-center items-baseline hover:bg-red-700 hover:rounded-3xl hover:text-white hover:px-3 hover:py-2 transition-all'>Movies <span><FaSortDown/></span> </a>
          <div className="hidden group-hover:block transition-all absolute left-0">
              <div className='w-[600px] h-[200px] border-red-300 bg-black/90 shadow-sm shadow-red-700'>
              <ul className="text-white grid grid-cols-4 gap-1 p-4 w-full">
              {
                moviesAllGenres.map(({id,name,index})=>(
                  <li key={index} className=''>{name}</li>
                ))
              }   
                </ul>
              </div>
              </div>
          </li>
          <li className='group '><a href="#" className='flex justify-center items-baseline hover:bg-red-700 hover:rounded-3xl hover:text-white hover:px-3 hover:py-2 transition-all'>Tv Shows <span><FaSortDown/></span> </a>
          <div className="hidden group-hover:block transition-all absolute left-0">
              <div className='w-[600px] h-[200px] border-red-300 bg-black/90 shadow-sm shadow-red-700'>
              <ul className="text-white grid grid-cols-4 gap-1 p-4 w-full">
              {
                tvAllGenres.map(({id,name,index})=>(
                  <li key={index} className=''>{name}</li>
                ))
              }   
                </ul>
              </div>
              </div>
          </li>
          {/* <li className='hover:bg-red-700 hover:rounded-3xl hover:text-white hover:px-3 hover:py-2 transition-all'>Tv Shows</li> */}
        </ul>
      </div>
      <div>
        <Link href={'/login'} ><button className="mr-2 hover:text-red-600 hover:font-bold">Sign In</button></Link>
        <Link href={'/signup'} ><button className="bg-red-600 rounded px-4 py-2 hover:bg-red-700 transition-all">Sign Up</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
