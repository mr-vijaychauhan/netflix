import Link from 'next/link'
import {MdSend} from 'react-icons/md'
import {BsFacebook,BsTwitter,BsLinkedin,BsInstagram, BsDot} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="footer bg-black w-full h-[350px]">
      <div className="flex flex-col lg:flex-row items-center justify-between p-10 w-full my-2 border-t border-red-600">
        <div className='flex items-center justify-center text-center '><Link href={'/netflix'} ><h1 className="text-3xl lg:text-5xl font-medium text-red-500">NETFLIX</h1></Link></div>
        <div className='flex justify-between items-baseline w-full lg:w-[40%]'>
            <div className='my-4 flex-1 '>
              <h1 className='text-xl md:text-2xl font-medium'>Quick Links</h1>
              <ul className='text-gray-400 m-2'>
                <li className='text-md py-1 px-1 hover:text-red-600 transition-all cursor-pointer'>Home</li>
                <li className='text-md py-1 px-1 hover:text-red-600 transition-all cursor-pointer'>Sign Up</li>
                <li className='text-md py-1 px-1 hover:text-red-600 transition-all cursor-pointer'>Login</li>
                <li className='text-md py-1 px-1 hover:text-red-600 transition-all cursor-pointer'>Movies</li>
                <li className='text-md py-1 px-1 hover:text-red-600 transition-all cursor-pointer'>Tv Shows</li>
              </ul>
            </div>
            <div className='flex-1'>
              <h1 className='text-xl md:text-2xl font-medium'>Pages</h1>
              <ul className='text-gray-400 m-2'>
                <li className='text-md py-1 px-1 hover:text-red-600 transition-all cursor-pointer'>Home</li>
                <li className='text-md py-1 px-1 hover:text-red-600 transition-all cursor-pointer'>Contact Us</li>
                <li className='text-md py-1 px-1 hover:text-red-600 transition-all cursor-pointer'>About Us</li>
                <li className='text-md py-1 px-1 hover:text-red-600 transition-all cursor-pointer'>Privacy Policy</li>
                <li className='text-md py-1 px-1 hover:text-red-600 transition-all cursor-pointer'>FAQ</li>
                <li className='text-md py-1 px-1 hover:text-red-600 transition-all cursor-pointer'>Pricing</li>
              </ul>
            </div>
            <div>
              <h1 className='text-xl md:text-2xl font-medium'>Categories</h1>
              <ul className='text-gray-400 m-2'>
                <li className='text-md py-1 px-1 hover:text-red-600 transition-all cursor-pointer'>Action</li>
                <li className='text-md py-1 px-1 hover:text-red-600 transition-all cursor-pointer'>Horror</li>
                <li className='text-md py-1 px-1 hover:text-red-600 transition-all cursor-pointer'>Comedy</li>
                <li className='text-md py-1 px-1 hover:text-red-600 transition-all cursor-pointer'>Sci-Fi</li>
                <li className='text-md py-1 px-1 hover:text-red-600 transition-all cursor-pointer'>Documentry</li>
              </ul>
            </div>
        </div>
        <div className=''>
          <h1 className='text-white'>Subscribe for Newsletter</h1>
          <div className='flex flex-col items-center justify-center'>
            <div className='flex my-2'>
              <input type="text" className='px-3' name="" id="" placeholder='Email Address' />
              <button className='ml-1 p-3 bg-red-600 rounded hover:bg-white hover:text-black transition-all'><MdSend/></button>
            </div>
            <div className='flex my-6 gap-4 items-center justify-center'>
              <a href=""><BsFacebook className='text-blue-500' size={30}/></a>
              <a href=""><BsTwitter className='text-blue-600' size={30}/></a>
              <a href=""><BsInstagram className='text-red-500' size={30}/></a>
              <a href=""><BsLinkedin className='text-blue-900' size={30}/></a>
            </div>
          </div>
        
        </div>
      </div>
      <div className='copyright w-full h-24 flex justify-center items-center my-2'>
            <p className='text-sm text-gray-600 flex'>@Copyright 2023 <BsDot size={20} /> All right reserved- Netflix</p>
      </div>
    </div>
  )
}

export default Footer