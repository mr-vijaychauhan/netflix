const key=process.env.TMDB_API_KEY;

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
    requestTvShows: `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`,
    requestMoviesGenres :`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}`,
    requestTvShowsGenres :`https://api.themoviedb.org/3/genre/tv/list?api_key=${key}`,
    imagePath: 'https://image.tmdb.org/t/p/original',
    imagePath_w500: 'https://image.tmdb.org/t/p/w500'
  };

  export default requests