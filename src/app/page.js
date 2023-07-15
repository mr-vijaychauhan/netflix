import Footer from '@/components/Footer/Footer'
import Hero from '@/components/Hero/Hero'
import Navbar from '@/components/Navbar/Navbar'
import Row from '@/components/Row/Row'
import Request from '@/app/Request'

async function getPopular() {
  const res = await fetch(Request.requestPopular,
    {
      cache: "no-cache"
    })
  const results = res.json();
  return results
}

async function getUpcoming() {
  const res = await fetch(Request.requestUpcoming,
    {
      cache: "no-cache"
    })
  const results = res.json();
  return results
}

async function getTrending() {
  const res = await fetch(Request.requestTrending,
    {
      cache: "no-cache"
    })
  const results = res.json();
  return results
}

async function getTopRated() {
  const res = await fetch(Request.requestTopRated,
    {
      cache: "no-cache"
    })
  const results = res.json();
  return results
}

async function getHorror() {
  const res = await fetch(Request.requestHorror,
    {
      cache: "no-cache"
    })
  const results = res.json();
  return results
}

async function getTvShows() {
  const res = await fetch(Request.requestTvShows,
    {
      cache: "no-cache"
    })
  const results = res.json();
  return results
}

const page = async () => {
  
  const populars = await getPopular(); 
  const upcoming = await getUpcoming(); 
  const trending = await getTrending(); 
  const topRated = await getTopRated(); 
  const horror = await getHorror(); 
  const tvshows = await getTvShows(); 

  return (
    <div>
      <Navbar />
      <Hero />
      <Row rowID="1" title="Upcoming"  movies={upcoming}/>
      <Row rowID="2" title="Popular" movies={populars}/>
      <Row rowID="3" title="Trending" movies={trending}/>
      <Row rowID="4" title="Top Rated" movies={topRated}/>
      <Row rowID="5" title="Tv Shows" movies={tvshows}/>
      <Footer/>
    </div>
  )
}

export default page

export async function generateMetadata(){
  return{
    title: 'Homepage - Netflix'
  }
}