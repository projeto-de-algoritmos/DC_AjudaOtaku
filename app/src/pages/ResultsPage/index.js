import React from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import './style.css';


export default function ResultsPage() {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/`; 
      navigate(path);
    }
    
    const animes = [{"title":"Genjitsu Shugi Yuusha no Oukoku Saikenki","image":"https://cdn.myanimelist.net/images/anime/1297/118764.jpg"},
               {"title":"Tensai Ouji no Akaji Kokka Saisei Jutsu","image":"https://cdn.myanimelist.net/images/anime/1263/119511.jpg"},
               {"title":"Show By Rock!!","image":"https://cdn.myanimelist.net/images/anime/7/73674.jpg"},
               {"title":"Kemono Friends","image":"https://cdn.myanimelist.net/images/anime/2/83518.jpg"},
               {"title":"Soul Eater","image":"https://cdn.myanimelist.net/images/anime/9/7804.jpg"},
               {"title":"Tegamibachi","image":"https://cdn.myanimelist.net/images/anime/9/71808.jpg"},
               {"title":"Sword Art Online","image":"https://cdn.myanimelist.net/images/anime/11/39717.jpg"},
               {"title":"Overlord","image":"https://cdn.myanimelist.net/images/anime/7/88019.jpg"},
               {"title":"gdgd Fairies","image":"https://cdn.myanimelist.net/images/anime/8/34963.jpg"},
               {"title":"Devidol!","image":"https://cdn.myanimelist.net/images/anime/1094/93923.jpg"},
               {"title":"Tensei shitara Slime Datta Ken","image":"https://cdn.myanimelist.net/images/anime/1694/93337.jpg"}]
    return (
      <div className="results-header">
             {animes && animes.length > 0 && animes.map((anime, index) => (
                <div className="results-card">
                    <div className="results-content">
                        <h1 className="results-position">{index + 'º'}</h1>
                        <h1 className="results-title">{anime.title}</h1>
                    </div>
               </div>
            ))}
            <button className="button back-button" onClick={routeChange}> Voltar </button>
      </div>
    );
  }
  