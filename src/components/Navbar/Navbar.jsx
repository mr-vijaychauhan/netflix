import Link from 'next/link'
import {FaSortDown} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div
      className="w-full flex items-center justify-between p-4 z-[100] absolute"
      name="navbar"
    >
      
      <Link href={'/'} ><h1 className="text-4xl font-medium text-red-500">NETFLIX</h1></Link>
      <div>
        <ul className='hidden lg:flex  items-center justify-center gap-4'>
          <li className='hover:bg-red-700 hover:rounded-3xl hover:text-white hover:px-3 hover:py-2 transition-all'>Home</li>
          <li className='relative'><a href="#" className='flex justify-center items-baseline hover:bg-red-700 hover:rounded-3xl hover:text-white hover:px-3 hover:py-2 transition-all relative'>Movies <span><FaSortDown/></span> </a>
          <div className="hidden transition-all absolute left-3 ">
              <div className='w-full h-[240px] border-red-300 bg-red-400'>
              <ul className="text-white">
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  
                </ul>
              </div>
                
              </div>
          </li>
          <li className='hover:bg-red-700 hover:rounded-3xl hover:text-white hover:px-3 hover:py-2 transition-all'>Tv Shows</li>
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
