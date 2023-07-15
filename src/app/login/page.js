import Navbar from "@/components/Navbar/Navbar"
import Image from "next/image"
import Link from 'next/link'
import Banner from '../../../assets/images/IN-en-20230710-popsignuptwoweeks-perspective_alpha_website_large.jpg'


const page = () => {
  return (
    <>
     <Navbar />
     <div className="w-full h-screen">
        <Image className="hidden sm:block absolute w-full h-full object-cover" src={Banner}  alt="Login"/>
        <div className="main-overlay w-full h-screen bg-black/60 fixed top-0 left-0"></div>
        <div className="login-form-section fixed w-full px-4 py-24 z-50">
            <div className="form-bg max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
                <div className="main-form max-w-[320px] mx-auto py-16">
                    <h1 className="text-3xl font-bold">Login</h1>
                    <form action="" className="w-full flex flex-col py-4">
                        <input className="p-3 my-2 bg-gray-700 rounded" type="email"  placeholder="Email address" />
                        <input className="p-3 my-2 bg-gray-700 rounded" type="password"  placeholder="Password" />
                        <button className="bg-red-600  text-white  py-2 my-2 rounded font-bold">Login</button>
                    </form>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                        <p className="flex item-center">
                            <input className="mr-1" type="checkbox" name="" id="" /> Remember me
                        </p>
                        <p>Need Help?</p>
                    </div>
                    <p className="py-8 text-red-600"><span className="text-gray-600 text-sm">New to Netflix?</span> <Link href={'/signup'} >Sign Up</Link></p>
                
                </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default page

export async function generateMetadata(){
    return{
      title: 'Login - Netflix'
    }
  }