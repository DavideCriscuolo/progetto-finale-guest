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
    <main className="min-vh-100">
      {load ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "400px" }}
        >
          <div className="text-center">
            <div
              className="spinner-border text-success mb-3"
              role="status"
              style={{ width: "3rem", height: "3rem" }}
            >
              <span className="visually-hidden">Caricamento...</span>
            </div>
            <p className="text-light opacity-75">Caricamento del gioco...</p>
          </div>
        </div>
      ) : game ? (
        <div>
          {/* Hero Section con immagine */}
          <div
            className="jumboGame position-relative overflow-hidden"
            style={{ height: "500px" }}
          >
            {game.medias?.[0]?.url ? (
              <img
                className="w-100 h-100 object-fit-cover"
                src={game.medias[0].url}
                alt={game.title || "Game cover"}
              />
            ) : (
              <div
                className="w-100 h-100 d-flex align-items-center justify-content-center"
                style={{
                  background:
                    "linear-gradient(135deg, #1a1d24 0%, #0c0e12 100%)",
                }}
              >
                <i className="bi bi-controller display-1 text-white opacity-25"></i>
              </div>
            )}
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(12,14,18,0.3) 0%, rgba(12,14,18,0.9) 100%)",
              }}
            />

            {/* Titolo sovrapposto */}
            <div className="position-absolute bottom-0 start-0 w-100 p-4 p-md-5">
              <div className="container">
                <h1 className="display-3 fw-bold text-white mb-3 text-shadow">
                  {game.title}
                </h1>
                <div className="d-flex flex-wrap gap-2 mb-3">
                  {game.category?.name && (
                    <span className="badge bg-danger fs-6 px-3 py-2">
                      {game.category.name}
                    </span>
                  )}
                  {game.plattforms?.map((plat) => (
                    <span
                      key={plat.id || plat.name}
                      className="badge bg-success fs-6 px-3 py-2"
                    >
                      {plat.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contenuto principale */}
          <div className="container my-5">
            <div className="row g-4">
              {/* Descrizione */}
              <div className="col-lg-8">
                <div
                  className="card border-0 shadow-sm h-100"
                  style={{ backgroundColor: "#1a1d24" }}
                >
                  <div className="card-body p-4">
                    <h2 className="h4 fw-bold mb-3 text-success">
                      <i className="bi bi-book me-2"></i>Trama
                    </h2>
                    <p className="fs-5 text-light opacity-75 lh-lg">
                      {game.plot || "Nessuna trama disponibile."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Informazioni dettagliate */}
              <div className="col-lg-4">
                <div
                  className="card border-0 shadow-sm"
                  style={{ backgroundColor: "#1a1d24" }}
                >
                  <div className="card-header bg-success text-white py-3 border-0">
                    <h3 className="h5 mb-0 fw-bold">
                      <i className="bi bi-info-circle me-2"></i>Dettagli
                    </h3>
                  </div>
                  <div className="card-body p-4">
                    <ul className="list-unstyled mb-0">
                      <li
                        className="mb-3 pb-3"
                        style={{
                          borderBottom: "1px solid rgba(255,255,255,0.1)",
                        }}
                      >
                        <small className="text-light opacity-50 d-block mb-1">
                          Casa Editrice
                        </small>
                        <span className="fw-semibold text-light">
                          {game.editor || "N/D"}
                        </span>
                      </li>
                      <li
                        className="mb-3 pb-3"
                        style={{
                          borderBottom: "1px solid rgba(255,255,255,0.1)",
                        }}
                      >
                        <small className="text-light opacity-50 d-block mb-1">
                          Classificazione
                        </small>
                        <span className="fw-semibold text-light">
                          {game.classification || "N/D"}
                        </span>
                      </li>
                      <li
                        className="mb-3 pb-3"
                        style={{
                          borderBottom: "1px solid rgba(255,255,255,0.1)",
                        }}
                      >
                        <small className="text-light opacity-50 d-block mb-1">
                          Prezzo consigliato
                        </small>
                        <span className="fw-semibold text-success fs-5">
                          {game.price}€
                        </span>
                      </li>
                      {date && (
                        <li>
                          <small className="text-light opacity-50 d-block mb-1">
                            Anno d'uscita
                          </small>
                          <span className="fw-semibold text-light">
                            {date.getFullYear()}
                          </span>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Giochi correlati */}
          <div
            className="py-5"
            style={{ backgroundColor: "rgba(26,29,36,0.5)" }}
          >
            <div className="container">
              <div className="d-flex align-items-center mb-4">
                <div
                  className="bg-success"
                  style={{ width: "4px", height: "32px", marginRight: "12px" }}
                ></div>
                <h2 className="h3 fw-bold mb-0 text-light">Giochi correlati</h2>
              </div>

              {relatedLoad ? (
                <div className="d-flex justify-content-center py-5">
                  <div className="text-center">
                    <div
                      className="spinner-border text-success mb-2"
                      role="status"
                    >
                      <span className="visually-hidden">Caricamento...</span>
                    </div>
                    <p className="text-light opacity-75 small">
                      Caricamento giochi correlati...
                    </p>
                  </div>
                </div>
              ) : related && related.length ? (
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                  {related.map((g) => (
                    <Card key={g.id} game={g} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-5">
                  <i className="bi bi-inbox display-1 text-light opacity-25 mb-3"></i>
                  <p className="text-light opacity-75">
                    Nessun gioco correlato trovato.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="container my-5">
          <div className="text-center py-5">
            <i className="bi bi-exclamation-triangle display-1 text-warning mb-3"></i>
            <h2 className="h4 mb-2 text-light">Gioco non trovato</h2>
            <p className="text-light opacity-75">
              Il gioco che stai cercando non è disponibile.
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        .text-shadow {
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
        }
      `}</style>
    </main>
  );
}
