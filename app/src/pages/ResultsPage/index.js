import React,{ useEffect ,useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import api from "../../services/api";
import './style.css';


export default function ResultsPage() {
  const location = useLocation();
  const [list] = useState(location.state.list);

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    navigate(-1);
  }

  const [response, setResponse] = useState([]);
  useEffect(() => {
    api
      .post("/api/inversions", {data: list})
      .then((response) => setResponse(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  if (!list || response.length == 0){
    return (
      <div className="responses-header">
            <div>Erro, tente novamente</div>
            <button className="button back-button" onClick={routeChange}> Voltar </button>
      </div>
    );
  }

  return (
    <div className="responses-header">
      <h1 className="ranking-text">Inversões</h1>
      {response.data && response.data.length > 0 && response.data.map((person, index) => (
              <div className="person-card" key={index}>
                  <div className="person-content">
                      <h1 className="person-text">{person.name + ' teve ' + person.inversions + ' inversões'}</h1>
                  </div>
              </div>
          ))}
          <h1 className="ranking-text">Ranking</h1>
            {response.ranking && response.ranking.length > 0 && response.ranking.map((anime, index) => (
              <div className="responses-card" key={index}>
                  <div className="responses-content">
                      <h1 className="responses-position">{index+1 + 'º'}&nbsp;</h1>
                      <h1 className="responses-title">&nbsp;{anime}</h1>
                  </div>
              </div>
          ))}
          
          <button className="button back-button" onClick={routeChange}> Voltar </button>
    </div>
  );
}
  