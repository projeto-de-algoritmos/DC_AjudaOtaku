import './style.css';
import AnimeCard from '../../components/AnimeCard'
import api from "../../services/api";
import { useEffect, useState } from "react";

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
      {animes && animes.length > 0 && animes.map((anime) => (
        <AnimeCard anime={{image: anime.image, title: anime.title}}/>
      ))}
      </header>
    </div>
  );
}
