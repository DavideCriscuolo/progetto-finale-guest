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
        <div className="d-flex justify-content-center align-items-center my-5">
          <div
            className="spinner-border text-success spinner-border-sm"
            role="status"
          ></div>
        </div>
      ) : (
        <div>
          <div className="jumboGame position-relative overflow-hidden">
            {game.medias?.[0]?.url ? (
              <img
                className="w-100 h-100 object-fit-cover"
                src={game.medias[0].url}
                alt=""
              />
            ) : (
              <div className="bg-secondary w-100 h-100" />
            )}

            <div className="overlay " />
          </div>

          <div className="p-4">
            <h1 className="display-5 fw-bold">{game.title}</h1>
            <p className="col-md-8 fs-4">{game.plot}</p>
            <span className="badge bg-danger">{game.category?.name}</span>
            {game.plattforms?.map((plat) => {
              return <span className="badge bg-success">{plat.name}</span>;
            })}
            <ul className="list-unstyled">
              <li className="card-text">Casa Editrice: {game.editor}</li>
              <li className="card-text">
                Classificazione: {game.classification}
              </li>
              <li class="card-text">
                Prezzo d'acquisto consigliato: {game.price}€
              </li>
              <li class="card-text">Anno D'uscita: {date.getFullYear()}</li>
            </ul>
          </div>
        </div>
      )}
    </main>
  );
}
