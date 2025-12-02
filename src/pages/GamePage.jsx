import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function GamePage() {
  const [game, setGame] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const url = `http://127.0.0.1:8000/api/game/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGame(data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  const date = new Date(game.date);
  console.log(game);
  console.log();

  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col d-flex">
            <div className="col ">
              <div>
                <img src={game.medias?.[0].url} alt="img gioco" />
              </div>
            </div>
            <div className="col">
              <div class="card border-0">
                <div class="card-body">
                  <h4 class="card-title">{game.title}</h4>
                  <span className="badge bg-danger">{game.category?.name}</span>

                  <p class="card-text">{game.plot}</p>
                  <ul className="list-unstyled">
                    <li class="card-text">Casa Editrice: {game.editor}</li>
                    <li class="card-text">
                      Classificazione: {game.classification}
                    </li>
                    <li class="card-text">
                      Prezzo d'acquisto consigliato: {game.lirice}€
                    </li>
                    <li class="card-text">
                      Anno D'uscita: {date.getFullYear()}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
