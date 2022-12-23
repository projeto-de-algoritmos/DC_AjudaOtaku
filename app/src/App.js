import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";
const API_URL =  process.env.API_URL|| 'http://localhost:3001';

function App() {
  const [animes, setAnimeList] = useState([]);
  const fetchData = () => {
    return axios.get(API_URL + '/api/anime')
          .then((response) => setAnimeList(response.data));
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <div className="App">
      <header className="App-header">
      {animes && animes.length > 0 && animes.map((anime) => (
        <div className="anime-card">
          <div className="anime-content">
            <img className="anime-image" 
                 src = {anime.image}
                 alt = {anime.title}
                 />
            <h1 className="anime-title">{anime.title}</h1>
          </div>
        </div>
      ))}
      </header>
    </div>
  );
}

export default App;
