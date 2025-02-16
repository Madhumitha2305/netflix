import React from 'react';
import './App.css';
import Movie from './movie'
import Row from "./Row.js";
import requests from "./requests.js";
import Banner from "./Banner.js";
import Nav from "./Nav.js";
import './Nav.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row 
      title="NETFLIX ORIGINALS" 
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow={true}
      />

      <Row title="Trending Now"fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated"fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies"fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies"fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies"fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies"fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries"fetchUrl={requests.fetchDocumentaries}/>
      <Movie/>
    </div>
  );
}

export default App;
