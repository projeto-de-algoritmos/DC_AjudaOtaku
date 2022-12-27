import React,{ useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { useNavigate } from "react-router-dom";
import AnimeCard from '../../components/AnimeCard'
import api from "../../services/api";
import './style.css';



function consoleCall(lista){
  console.log(lista);

}

export default function AnimePage() {
  const [animes, setAnimeList] = useState([]);
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/results`; 
    navigate(path);
  }
  
  useEffect(() => {
    api
      .get("/api/anime")
      .then((response) => setAnimeList(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

 
  return (
    <div className="anime">
      <header className="page-header">
      <div className="anime-header">
        <ReactSortable list={animes} setList={setAnimeList} className='anime-grid'>
            {animes && animes.length > 0 && animes.map((anime, index) => (
              <AnimeCard key={index} anime={{image: anime.image, title: anime.title}} index={index + 1}/>
            ))}
        </ReactSortable>
        </div>
        <button className="button send-button" onClick={() => consoleCall(animes)}>
                Enviar Lista
        </button>
        <button className="button results-button" onClick={routeChange}>
                Resultados
        </button>
      </header>
    </div>
  );
}
