import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

export default function GamePage() {
  const [game, setGame] = useState(null);
  const [load, setLoad] = useState(true);
  const [related, setRelated] = useState([]);
  const [relatedLoad, setRelatedLoad] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    const url = `http://127.0.0.1:8000/api/game/${id}`;
    const urlRelated = `http://127.0.0.1:8000/api/games/${id}/related`;

    Promise.all([
      fetch(url).then((r) => r.json()),
      fetch(urlRelated).then((r) => r.json()),
    ])
      .then(([gameRes, relatedRes]) => {
        setGame(gameRes.data);
        setRelated(relatedRes.data || []);
        setLoad(false);
        setRelatedLoad(false);
      })
      .catch((err) => {
        console.error(err);
        setLoad(false);
        setRelatedLoad(false);
      });
  }, [id]);

  const date = game?.date ? new Date(game.date) : null;

  return (
    <main>
      {load ? (
        <div className="d-flex justify-content-center align-items-center my-5">
          <div
            className="spinner-border text-success spinner-border-sm"
            role="status"
          ></div>
        </div>
      ) : game ? (
        <div>
          <div className="jumboGame position-relative overflow-hidden">
            {game.medias?.[0]?.url ? (
              <img
                className="w-100 h-100 object-fit-cover"
                src={game.medias[0].url}
                alt={game.title || "Game cover"}
              />
            ) : (
              <div className="bg-secondary w-100 h-100" />
            )}

            <div className="overlay" />
          </div>
          <div className="container my-5">
            <div className="containerDesc row row-cols-1 row-cols-lg-2">
              <div className="col">
                <h1 className="display-5 fw-bold">{game.title}</h1>
                <p className="fs-4">{game.plot}</p>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body text-black">
                    <div className="d-flex flex-wrap gap-2">
                      {game.category?.name && (
                        <span className="badge bg-danger">
                          {game.category.name}
                        </span>
                      )}
                      {game.plattforms?.map((plat) => (
                        <span
                          key={plat.id || plat.name}
                          className="badge bg-success"
                        >
                          {plat.name}
                        </span>
                      ))}
                    </div>
                    <ul className="list-unstyled">
                      <li className="card-text">
                        Casa Editrice: {game.editor}
                      </li>
                      <li className="card-text">
                        Classificazione: {game.classification}
                      </li>
                      <li className="card-text">
                        Prezzo d'acquisto consigliato: {game.price}€
                      </li>
                      {date && (
                        <li className="card-text">
                          Anno D'uscita: {date.getFullYear()}
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container my-5">
            <h3 className="my-3">Giochi correlati</h3>
            {relatedLoad ? (
              <div className="d-flex justify-content-center my-3">
                <div
                  className="spinner-border text-success"
                  role="status"
                ></div>
              </div>
            ) : related && related.length ? (
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                {related.map((g) => (
                  <Card key={g.id} game={g} />
                ))}
              </div>
            ) : (
              <p>Nessun gioco correlato trovato.</p>
            )}
          </div>
        </div>
      ) : (
        <div className="container my-5">
          <p>Gioco non trovato.</p>
        </div>
      )}
    </main>
  );
}
