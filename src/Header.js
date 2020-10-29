import React,{useState,useEffect} from "react"


var Header=()=>{
var [random,randomChanger]=useState(0)
var [arr,arrayChanger]=useState([])
var [title,titleChanger]=useState([])
var img="https://image.tmdb.org/t/p/original"
var link="https://api.themoviedb.org/3/trending/all/day?api_key=91ef54aca48c7cf0c5428181ac0909b9"

useEffect(()=>{
    fetch(link).then(val=>val.json()).then(value=>
        {
            arrayChanger(value.results.map((val)=>
            {
                titleChanger((prev)=>[...prev,val.title?val.title:val.original_name]);
                return<img src={img+val.backdrop_path} alt={val.title?val.title:val.original_name} id={"headerImg"}></img>}
            ))
                
        });
        randomChanger(Math.floor(Math.random()*18))       
    // eslint-disable-next-line react-hooks/exhaustive-deps                        
},[])


    return(
    <div className="headerContainer"><h3  className="headerTitle">{title[random]}</h3>{arr[random]}
    <div className={"blur"}>f</div></div>
    )
}
export default Header