import React,{useState,useEffect} from 'react';
import "./index.css"
import data from "./movieData.js"
import Header from "./Header"
import ReactPlayer from 'react-player'
import movieTrailer from "movie-trailer";
import Aos from "aos"
import axios from "axios"
import "aos/dist/aos.css"



function App() {

  
  const [netflixOriginals,netflixOriginalsChanger]=useState([])
  const [url,urlChanger]=useState("")
  const [netflixObj,netflixObjChanger]=useState([])
  const [videoPos,videoPosChanger]=useState("")
  const [showHide,showHideChanger]=useState("none")
  const [loading,loadingChanger]=useState("")
  const img="https://image.tmdb.org/t/p/w500"
 
  const urlfunc=(prop)=>{
    
    videoPosChanger(window.scrollY)
    showHideChanger("block")
    movieTrailer(prop).then(url=>{urlChanger(url);loadingChanger("")}).catch(error=>{loadingChanger("noTrailerFound ")})
    
  }
  

useEffect(()=>{
 
  
   //animations

  Aos.init();

 
 
  axios.all(data.links.map((link)=>axios.get(link)))
  .then(axios.spread((...response)=>{
    response.forEach((res)=>{
  var temp=(res.data.results.map((ar)=>
  {      
    if(ar.backdrop_path && ar.original_title)
       {
        
        return  ( 
          <img key={ar.id}  onClick={(e)=>{urlfunc(e.target.alt)}}
         alt={ar.original_title}
         id={"restImagesOfRow"} src  ={img+ar.backdrop_path} ></img> )
         
       }   
         return ""
  }));
       
       netflixObjChanger(val=>[temp,...val])
       
    })
}))



fetch(data.firstrowLink).then(val=>val.json()).then(value=>
    {


      netflixOriginalsChanger(
        value.results.map((ar)=>
        {
        return  (
        <img key={ar.id} alt={ar.title}
        onClick={(e)=>{urlfunc(e.target.alt)}}
        id={"netflixOriginialsimages"} src  ={img+ar.poster_path} ></img>
        )
        })
      )


    })
    
    
},[])



  return (
  <div className="App">
    <Header/>

  <h2 id={"title"}>Trending</h2>
  <div data-aos="zoom-in" className="restRows">  {netflixOriginals} </div>
  

  <h2 id={"title"}>top Rated</h2>
  <div  className="restRows">          {netflixObj[5]}        </div>
  

  <h2 id={"title"}>action Movies</h2>
  <div className="restRows">           {netflixObj[4]}       </div>
  

  <h2 id={"title"}>comedy   Movies</h2>
  <div className="restRows">           {netflixObj[3]}       </div>
  

  <h2 id={"title"}>horror  Movies</h2>
  <div className="restRows">           {netflixObj[2]}       </div>
  

  <h2 id={"title"}>romanctic  Movies</h2>
  <div className="restRows">           {netflixObj[1]}      </div>
  

  <h2 id={"title"}>documentries</h2>
  <div   className="restRows">          {netflixObj[0]}       </div>
  
  

  <div id="vid" style={{top:videoPos,display:showHide}}>
   
    { loading?loading:<ReactPlayer height={window.innerWidth>600?"40vw":400}
    width={window.innerWidth>600?"70vw":"98%"} 
    id="player"  url={url} />} 

    <p style={{backgroundColor:"transparent"}}>
      
    <button id="vidbutton"
    onClick={()=>{showHideChanger("none");urlChanger("");loadingChanger("loading ")}} >
    CLOSE
     </button></p>

  </div>

 
  </div>
  );
}

export default  App
