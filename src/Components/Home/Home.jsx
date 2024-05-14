import React, { useEffect, useState } from 'react'
import "./Home.scss"
import axios from 'axios'

const apiKey = "d8179699ff249e352132faff902ddb49";
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";
const upcoming = "upcoming";
const nowPlaying = "now_playing";
const popular = "popular";
const topRated = "top_rated";


const Card = ({ img }) => (
  <img className='card' src={img} alt="" />
)
const Row = ({ title, arr = [{
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToS4QUe8obNR7i022d0GoNdoGpu36mPsdgJhmdnd09zw&s'
}] }) => (
  <div className="row">
    <h1>{title}</h1>
    <div>
      {
        arr.map((item,index) => (
          <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
        ))
      }
    </div>
  </div>
)

const Home = () => {

  const [upcomingMovies,setUpcomingMovies] = useState([])
  const [nowPlayingMovies,setnowPlayingMovies] = useState([])
  const [popularMovies,setpopularMovies] = useState([])
  const [topRatedMovies,settopRatedMovies] = useState([])

  useEffect(() => {
    const fetchUpcoming = async () => {
      const {data:{results}} = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
      setUpcomingMovies(results)
      
    };
    const fetchnowPlaying = async () => {
      const {data:{results}} = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);
      setnowPlayingMovies(results)
      
    };
    const fetchpopular = async () => {
      const {data:{results}} = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
      setpopularMovies(results)
      
    };
    const fetchtopRated = async () => {
      const {data:{results}} = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);
      settopRatedMovies(results)
      
    };

    fetchUpcoming()
    fetchnowPlaying()
    fetchpopular()
    fetchtopRated()
    
  }, [])



  return (
    <section className="home">
      <div className="banner"></div>
      <Row title={'Upcoming Movies'} arr={upcomingMovies} /> 
      <Row title={'Now Playing'} arr={nowPlayingMovies} /> 
      <Row title={'Popular '} arr={popularMovies} /> 
      <Row title={'Top Rated'} arr={topRatedMovies} /> 

    </section>
  )
}

export default Home