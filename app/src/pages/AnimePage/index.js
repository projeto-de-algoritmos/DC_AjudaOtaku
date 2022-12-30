import React,{ useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { useNavigate } from "react-router-dom";
import AnimeCard from '../../components/AnimeCard'
import api from "../../services/api";
import './style.css';

const list = [];
export default function AnimePage() {
  const [otaku, setOtaku] = useState('');
  const [animes, setAnimes] = useState([]);
  const [animeList, setAnimeList] = useState([]);
  function listAdd(animesList,otaku){
    if (otaku == ''){
      alert("nome em branco");
    }else{
      const titles = animesList.map(({ title }) => title);
      list.push({array: titles,name: otaku});
      console.log(list);
      setAnimeList(animes);
      setOtaku('');
      document.getElementById("otakuname").value=""
    }
  }
  let navigate = useNavigate(); 

  const routeChange = () =>{ 
    let path = `/results`; 
    navigate(path, {state:{list:list}});
  }
  const handleChange = (event) => {
    setOtaku(event.target.value);
  };
  useEffect(() => {
    api
      .get("/api/anime")
      .then((response) => {
        setAnimes(response.data);
        setAnimeList(response.data);})
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  if (animes.length == 0) return <div>Carregando</div>;
 
  return (
    <div className="anime">
      <header className="page-header">
        <div className="otakuName">
            <label>Seu nome:&nbsp;
                <input
                    type="text"
                    id="otakuname"
                    name="otaku"
                    onChange={handleChange}
                required/>
            </label>
          </div>
          <div className="anime-header">
                <ReactSortable list={animeList} setList={setAnimeList} className='anime-grid'>
                    {animeList && animeList.length > 0 && animeList.map((anime, index) => (
                        <AnimeCard key={index} anime={{image: anime.image, title: anime.title}} index={index + 1}/>
                    ))}
                </ReactSortable>
            </div>
        <button className="button send-button" onClick={() => listAdd(animeList,otaku)}>
                Enviar Lista
        </button>
        <button className="button results-button" onClick={routeChange}>
                Resultados
        </button>
      </header>
    </div>
  );
}
