var apikey="?api_key=91ef54aca48c7cf0c5428181ac0909b9"
var apiBase="https://api.themoviedb.org/3"
const netflixData={
    netflixOriginials:"https://api.themoviedb.org/3/trending/movie/day?api_key=91ef54aca48c7cf0c5428181ac0909b9",
    topRated:apiBase+"/movie/top_rated"+apikey,
    actionMovies:apiBase+"/discover/movie"+apikey+"&with_genres=28",
    comdeyMovies:apiBase+"/discover/movie"+apikey+"&with_genres=35",
    horrorMovies:apiBase+"/discover/movie"+apikey+"&with_genres=27",
    romanceMovies:apiBase+"/discover/movie"+apikey+"&with_genres=10749",
    documentries:"https://api.themoviedb.org/3/discover/movie?api_key=91ef54aca48c7cf0c5428181ac0909b9&with_genres=99"
}


const links=[apiBase+"/movie/top_rated"+apikey,
      apiBase+"/discover/movie"+apikey+"&with_genres=28",
      apiBase+"/discover/movie"+apikey+"&with_genres=35",
      apiBase+"/discover/movie"+apikey+"&with_genres=27",
      apiBase+"/discover/movie"+apikey+"&with_genres=10749",
 "https://api.themoviedb.org/3/discover/movie?api_key=91ef54aca48c7cf0c5428181ac0909b9&with_genres=99"]

const data={firstrowLink:netflixData.netflixOriginials,links}
export default data;