import axios from "axios";
 
const TMDB_BEARER_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8";
 
export const getSimilarMovieApi = async (id: string) => {
  try {
    const TMDB_API_URL = `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`;
 
    const response = await axios.get(TMDB_API_URL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: TMDB_BEARER_TOKEN,
      },
    });    return response.data;
  } catch (error) {
    console.error("Error fetching similar movies:", error);
    return { results: [] }; // "results", not "result" – based on TMDB API shape
  }
};

// import axios from "axios";
 
// export const getSimilarMovieApi = async (id:string) => {
//     const result = await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,
//         {
//             headers: {
//             "Content-Type" : "application/json",
//             Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8"
//         },
//         })
//     console.log(result.data)
//     return result?.data
// }