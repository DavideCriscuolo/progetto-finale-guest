import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function GamePage() {
  const [game, setGame] = useState([]);
  const [load, setLoad] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const url = `http://127.0.0.1:8000/api/game/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLoad(false);

        setGame(data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  const date = new Date(game.date);

  console.log(game.plattforms);

  return (
    <main>
      {load ? (
        <div class="d-flex justify-content-center align-items-center my-5">
          <div
            class="spinner-border text-success spinner-border-sm"
            role="status"
          ></div>
        </div>
      ) : (
        <div className="container my-5">
          <div className="row">
            <div className="col d-flex">
              <div className="col ">
                <div>
                  <img
                    src={game.medias?.[0].url}
                    className="img-fluid rounded"
                    alt="img gioco"
                  />
                </div>
              </div>
              <div className="col">
                <div class="card border-0">
                  <div class="card-body text-black">
                    <h4 class="card-title">{game.title}</h4>
                    <span className="badge bg-danger">
                      {game.category?.name}
                    </span>
                    {game.plattforms?.map((plat) => {
                      return (
                        <span className="badge bg-success">{plat.name}</span>
                      );
                    })}
                    <p class="card-text">{game.plot}</p>
                    <ul className="list-unstyled">
                      <li class="card-text">Casa Editrice: {game.editor}</li>
                      <li class="card-text">
                        Classificazione: {game.classification}
                      </li>
                      <li class="card-text">
                        Prezzo d'acquisto consigliato: {game.price}€
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
      )}
    </main>
  );
}
