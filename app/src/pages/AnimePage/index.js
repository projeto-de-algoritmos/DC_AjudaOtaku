import React,{ useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import AnimeCard from '../../components/AnimeCard'
import api from "../../services/api";
import './style.css';

export default function AnimePage() {
  const [animes, setAnimeList] = useState([]);

  useEffect(() => {
    api
      .get("/api/anime")
      .then((response) => setAnimeList(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div className="Anime">
      <header className="Anime-header">
        <ReactSortable list={animes} setList={setAnimeList} className='anime-grid'>
            {animes && animes.length > 0 && animes.map((anime, index) => (
              <AnimeCard key={index} anime={{image: anime.image, title: anime.title}} index={index + 1}/>
            ))}
        </ReactSortable>
      </header>
    </div>
  );
}
