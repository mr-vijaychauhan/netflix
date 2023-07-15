// const key ='5f0b2e3e71a6b80fe6c2ceb1c8d9c5af'

const key=process.env.TMDB_API_KEY;

//https://api.themoviedb.org/3/movie/now_playing?api_key=5f0b2e3e71a6b80fe6c2ceb1c8d9c5af&language=en-US&page=1
//https://api.themoviedb.org/3/search/movie?api_key=5f0b2e3e71a6b80fe6c2ceb1c8d9c5af&language=en-US&query=action&page=1&include_adult=false

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
    requestTvShows: `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`,
    imagePath: 'https://image.tmdb.org/t/p/original'
  };

  export default requests