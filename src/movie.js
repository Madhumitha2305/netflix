import {useEffect, useState} from "react";
function Movie() {
    const[movieList,setMovieList]=useState([])
    const getMovie=()=>{
        fetch("https://api.themoviedb.org/3/movie/550?api_key=8d8fb774cb59ef4c30fa3b5f6ceacbb5")
        .then(res => res.json)
        .then(json => setMovieList(json.results))
    }
    useEffect(()=>{getMovie()},[])

}

export default Movie